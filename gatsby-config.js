require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: `institutindonesia`,
        owner: `institutindonesia`,
        description: ` Asah Skillmu, Raih Masa Depanmu Bersama Kami, Segera belajar tentang ENGLISH dan TECHNOLOGY untuk mendapat skill baru.`,
        siteUrl: `https://www.institutindonesia.com`,
        social: {
            twitter: `institutindonesia`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `institut indonesia`,
                short_name: `institut indonesia`,
                start_url: `/`,
                background_color: `#EAE8DC`,
                theme_color: `#BE2623`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                cache_busting_mode: 'none',
                crossOrigin: `use-credentials`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `lpz83h7rrwuk`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-notion-api`,
            options: {
                token: `secret_YCo6m15yMIuNbWeJBgcCqe2T5ro9bHtv7jEIpGrlS2j`,
                databaseId: `9b9cfec5a6d54941b495952cd2ef73f5`,
                propsToFrontmatter: true,
                lowerTitleLevel: true,
            },
        },
        'gatsby-plugin-remove-serviceworker',
        'gatsby-plugin-next-seo',
        `gatsby-plugin-netlify-redirect`,
        // `gatsby-plugin-preact`,
        {
            resolve: 'gatsby-plugin-brotli',
            options: {
                extensions: ['css', 'html', 'js', 'svg', 'json']
            }
        },
        {
            resolve: `gatsby-plugin-portal`,
            options: {
                key: 'portal',
                id: 'portal',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `menus`,
                path: `${__dirname}/src/images/menu`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },

        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-31P2MT5JP8", // Google Analytics / GA
                    "UA-241086925-1",
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                // gtagConfig: {
                //     optimize_id: "OPT_CONTAINER_ID",
                //     anonymize_ip: true,
                //     cookie_expires: 0,
                // },
                // This object is used for configuration specific to this plugin
                // pluginConfig: {
                //     // Puts tracking script in the head instead of the body
                //     head: false,
                //     // Setting this parameter is also optional
                //     respectDNT: true,
                //     // Avoids sending pageview hits from custom paths
                //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
                //     // Defaults to https://www.googletagmanager.com
                //     origin: "YOUR_SELF_HOSTED_ORIGIN",
                // },
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                    // include: /svg/,
                    // include: /images/,
                },
            },
        },
        //  'gatsby-plugin-optimize-svgs',
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        'gatsby-plugin-dark-mode',
        // {
        //     resolve: 'gatsby-plugin-mailchimp',
        //     options: {
        //         endpoint: 'https://muhzulzidan.us8.list-manage.com/subscribe/post?u=bd4720ee2c2e158659ad9a349&amp;id=ec322945ba',
        //         timeout: 3500,
        //     },
        // },
        {
            resolve: 'gatsby-plugin-minify-html',
            options: {
                debug: true,
            }
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    "/*": [
                        "Cache-Control : no-cache",
                    ],
                }, // option to add more headers. `Link` headers are transformed by the below criteria
                allPageHeaders: [
                    "Cache-Control : no-cache"
                ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
                mergeSecurityHeaders: true, // boolean to turn off the default security headers
                mergeCachingHeaders: true, // boolean to turn off the default caching headers
                transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
                generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected: true,
                develop: true,
                ignore: ['/markdown.css', "/popUp.css", '/sound.css', 'prismjs/', 'docsearch.js/', "/scrollbar.scss", "/react-select.scss", "/search.scss", "reactjs-popup/"],
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Lato`,
                    `Inter\:400,700,800,900`
                ],
                display: 'swap'
            }
        },
    ]
}