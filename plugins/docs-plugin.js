const docsPluginExports = require("@docusaurus/plugin-content-docs");
const {docuHash} = require("@docusaurus/utils");


const docsPlugin = docsPluginExports.default;

async function docsPluginEnhanced(context, options) {

    const docsPluginInstance = await docsPlugin(context, options);

    return {
        ...docsPluginInstance,
        async contentLoaded({content, actions}) {
            const {addRoute, createData} = actions;
            const {loadedVersions} = content;
            const [current] = loadedVersions;
            const {docs} = current;

            const questionsPath = await createData(
                "questions.json",
                JSON.stringify(docs.map((docMetadata) => docMetadata.frontMatter))
            );

            return docsPluginInstance.contentLoaded({content, actions}).then(() => {
                addRoute({
                    path: "/data-science-kiosk/triage",
                    exact: true,
                    component: '@site/src/components/docs/triage.tsx',
                    modules: {
                        questions: questionsPath
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