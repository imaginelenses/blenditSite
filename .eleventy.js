module.exports  = (config) => {

    config.setBrowserSyncConfig({
        files: './public/css'
    })

    config.addShortcode('year', () => `${new Date().getFullYear()}`)

    config.addPassthroughCopy('./src/assets')
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