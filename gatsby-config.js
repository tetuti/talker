require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `ÖVA ORD`,
        description: `Öva ord som ett proffs`,
        author: `@tetuti`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ÖVA ORD`,
                short_name: `öo`,
                start_url: `/`,
                background_color: `#87ceeb`,
                theme_color: `#87ceeb`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.SPACE_ID,
                accessToken: process.env.PREVIEW_TOKEN,
                host: `preview.contentful.com`
            },
        },
    ],
}
