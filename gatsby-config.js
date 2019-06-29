module.exports = {
    siteMetadata: {
        title: `Oisk`,
        description: `Dynamic Searcher for Apps`,
        author: `@jjlmoya`,
    },
    plugins: [
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
                name: `Oisk`,
                short_name: `Oisk`,
                start_url: `/`,
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                icon: "src/images/logo.jpg"

            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
