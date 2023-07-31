import * as YAML from 'yaml';
import {writeFileSync} from 'fs';

// Requiring the module
import reader from 'xlsx'
import {camelCase, compact, kebabCase, mapKeys, uniq, values} from "lodash";
import filter from "lodash/filter";


const pad = (n: number, width: number) => {
    let padded = n + '';
    return padded.length >= width ? n :
        new Array(width - padded.length + 1).join('0') + n;
}

const reduceColumns = (frontMatter: object,  prefix: string, normalise: boolean = true): string[] => (filter(frontMatter, (value, key) => key.startsWith(prefix)) as string[]).map((value) => normalise ? kebabCase(value) : value.trim());

const generateDocs = (fileName: string, outputDir: string, prefix: string) => {
    const file = reader.readFile(fileName);
    const json = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[0]], {})

    const mapped = json.map((record: Object) => mapKeys(record, (_value, key, value) => camelCase(key)))



    mapped.forEach((mappedJson, index) => {

        const {
            application,
            text,
            categoricalOrdinal, continuousCount,
            imageOrVideo,
            timeSeriesLongitudinal,
            spatioTemporal,
            dataQuestionType: questionType,
            question: title,
            description,
            ...rest
        } = mappedJson;
        const dataTypes = compact([
            text ? 'text' : undefined,
            categoricalOrdinal ? 'categorical-ordinal' : undefined,
            imageOrVideo ? 'image-or-video' : undefined,
            timeSeriesLongitudinal ? 'time-series-longitudinal' : undefined,
            spatioTemporal ? 'spatio-temporal' : undefined,
        ]);

        const dataExpertises = reduceColumns(rest, 'dataExpertise');
        const dataMethods = reduceColumns(rest, 'dataMethod');
        const themes = reduceColumns(rest, 'theme');
        const taskSolvers = reduceColumns(rest, 'taskSolver');
        const experts = reduceColumns(rest, 'expert', false);
        const references = reduceColumns(rest, 'reference', false);

        const frontMatter = {
            title,
            description,
            application,
            dataTypes,
            questionType,
            dataExpertises,
            dataMethods,
            themes,
            taskSolvers,
            experts,
            references
        }
        writeFileSync(`${outputDir}/${prefix}-${pad(index + 1, 3)}.md`, `---\nid: ${prefix}-${pad(index + 1, 3)}\n${YAML.stringify(frontMatter)}---`);
    })
}

generateDocs(`${__dirname}/problem-list.xlsx`, `${__dirname}/../../docs/questions`, 'question')






