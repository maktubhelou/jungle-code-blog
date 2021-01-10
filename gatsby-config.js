const siteMetadata = {
    title: `Jungle Code`,
    description: `A blog about my coding journey at the Mouth of the Mekong.`,
    image: './default-site-image.jpg',
    siteUrl: 'https://junglecode.blog',
    siteLanguage: `en-GB`,
    siteLocale: `en-gb`,
    twitterUsername: `@maktubhelou`,
    authorName: `Mark Evans`
}

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
            ],
            plugin: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
            ],
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`,
            },
        },
    ],
};