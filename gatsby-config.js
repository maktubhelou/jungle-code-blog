const siteMetadata = {
    title: `Jungle Code`,
    description: `A blog about my coding journey at the Mouth of the Mekong.`
}

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
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