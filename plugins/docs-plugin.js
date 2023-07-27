const docsPluginExports = require("@docusaurus/plugin-content-docs");
const docsPlugin = docsPluginExports.default;

const dataTypes = [
    {
        "id": "categorical_ordinal",
        "label": "Categorical or ordinal data",
        "definition": "data that can be grouped into categories, with or without a set order",
        "examples": "win-loss, fast-slow, injured, non-injured."
    },
    {
        "id": "continuous_count",
        "label": "Continuous or count data",
        "definition": "data that can take any value (continuous) or countable (count)",
        "examples": "lap time, score and player’s height"
    },
    {
        "id": "time-series_longitudinal",
        "label": "Time series or longitudinal data",
        "definition": "a series of data points indexed (or listed or graphed) in time order ",
        "examples": "In-game tracking data, Player statistics over time."
    },
    {
        "id": "spatio-temporal",
        "label": "Spatio-temporal data ",
        "definition": "data that includes both spatial and temporal information, such as the location and time of an event",
        "examples": "Player tracking data (GPS), ball tracking data"
    }
]

async function docsPluginEnhanced(context, options) {

    const docsPluginInstance = await docsPlugin(context, options);

    return {
        ...docsPluginInstance,
        async contentLoaded({content, actions}) {
            const {addRoute, createData} = actions;
            const {loadedVersions} = content;
            const [current] = loadedVersions;
            const {docs} = current;

            const docMetadataPath = await createData(
                "docMetadata.json",
                JSON.stringify(docs.filter((doc) => doc.sourceDirName === 'questions'))
            );

            const dataTypesPath = await createData(
                "dataTypes.json",
                JSON.stringify(dataTypes)
            );

            return docsPluginInstance.contentLoaded({content, actions}).then(() => {
                addRoute({
                    path: "/data-science-kiosk/triage",
                    exact: true,
                    component: '@site/src/components/docs/triage.tsx',
                    modules: {
                        docMetadata: docMetadataPath,
                        dataTypes: dataTypesPath
                    }
                });
            })
        }
    };

}

module.exports = {
    ...docsPluginExports,
    default: docsPluginEnhanced
};