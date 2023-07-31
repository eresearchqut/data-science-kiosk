const docsPluginExports = require("@docusaurus/plugin-content-docs");
const docsPlugin = docsPluginExports.default;

const themes = require("./themes.json");
const dataTypes = require("./data-types.json");
const questionTypes = require("./question-types.json");

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

            const themesPath = await createData(
                "themes.json",
                JSON.stringify(themes)
            );

            const dataTypesPath = await createData(
                "dataTypes.json",
                JSON.stringify(dataTypes)
            );

            const questionTypesPath = await createData(
                "questionTypes.json",
                JSON.stringify(questionTypes)
            );

            return docsPluginInstance.contentLoaded({content, actions}).then(() => {
                addRoute({
                    path: "/data-science-kiosk/kiosk",
                    exact: true,
                    component: '@site/src/components/docs/kiosk.tsx',
                    modules: {
                        docMetadata: docMetadataPath,
                        dataTypes: dataTypesPath,
                        questionTypes: questionTypesPath,
                        themes: themesPath
                    }
                });
            });
        }
    };

}

module.exports = {
    ...docsPluginExports,
    default: docsPluginEnhanced
};