module.exports = (eleventyConfig) => {

    //Add assets
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/scrollSpy.js");
    eleventyConfig.addWatchTarget("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets"); //takes everything in 'assets'
    eleventyConfig.addPassthroughCopy("./src/admin")
    eleventyConfig.ignores.add("public/about/**")


    return { dir: { input: "src", output: "public" } };
}