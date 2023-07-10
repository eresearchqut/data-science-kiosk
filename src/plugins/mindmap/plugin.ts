module.exports = async function myPlugin(context, options) {
    return {
        name: "mindmap-plugin",
        async loadContent() {
            console.log("Hello World plugin wow!");
        },
        async contentLoaded({content, actions}) {
            console.log(content);
        },
    };
};