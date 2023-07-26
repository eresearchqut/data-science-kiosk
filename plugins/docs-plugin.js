const docsPluginExports = require("@docusaurus/plugin-content-docs");
const {docuHash} = require("@docusaurus/utils");


const docsPlugin = docsPluginExports.default;

async function docsPluginEnhanced(context, options) {

    const docsPluginInstance = await docsPlugin(context, options);

    return {
        ...docsPluginInstance,
        async contentLoaded({content, actions}) {
            const {addRoute} = actions;
            const {loadedVersions} = content;
            const [current] = loadedVersions;
            const {docs} = current;
            await addRoute({
                path: "/triage",
                exact: true,
                component: "@site/src/components/Triage",
                modules: {
                    docs: docs.map((doc) => ({
                        content: {
                            __import: true,
                            // The markdown file for the blog post will be loaded by webpack
                            path: doc.source,
                            query: {
                                truncated: true,
                            },
                        },
                    }))
                }
            });
            return docsPluginInstance.contentLoaded({content, actions});
        }
    };

}

module.exports = {
    ...docsPluginExports,
    default: docsPluginEnhanced
};