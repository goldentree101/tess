module.exports = (eleventyConfig) => {

    //Add assets / styles / javascript / netlify admin.
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/scrollSpy.js");
    eleventyConfig.addPassthroughCopy("./src/favicon.ico");
    eleventyConfig.addPassthroughCopy("./src/menuCollapse.js");
    eleventyConfig.addWatchTarget("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");
    
    return { dir: { input: "src", output: "public" } };
}