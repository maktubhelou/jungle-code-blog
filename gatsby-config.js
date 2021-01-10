const siteMetadata = {
    title: `Jungle Code`,
    description: `A blog about my coding journey at the Mouth of the Mekong.`,
    authorBio: `Coder, runner, life enthusiast. I'm usually up to something new and challenging. Born and raised in a small island town, I moved into the big city (okay not really so big, at 18 and haven't looked back). I've lived in North America, spent a stint in Brazil, and since then have lived the better part of my adult life in Asia, where I first worked as a poll dancer - kidding, an English Teacher - before moving my way into a Management Career, which I ended rather abruptly 3 years ago to pursue a life-long interest and passion for building stuff by making computers switch ones and zeros off and on.`,
    image: `/default-site-image.jpg`,
    siteUrl: `https://jungle-code-blog.netlify.app`,
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static`,
                name: `images`,
            },
        },
    ],
};