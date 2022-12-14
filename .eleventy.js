module.exports  = (config) => {

    config.addGlobalData("downloadLink", "https://github.com/imaginelenses/blendit/releases/download/v0-1-1-alpha/blendit.zip");

    config.setBrowserSyncConfig({
        files: './public/css'
    })

    config.addShortcode('year', () => `${new Date().getFullYear()}`)

    config.addPassthroughCopy('./src/assets')
    
    config.addPassthroughCopy('./src/CNAME')

    config.addPassthroughCopy('./src/js')
    config.addWatchTarget('./src/js')


    return {
        dir: {
            input: 'src',
            output: 'public'
        },
        templateFormats: ['html', 'md', 'njk'],
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    }
}