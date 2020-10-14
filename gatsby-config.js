module.exports = {
    siteMetadata: {
        title: `ParserBase`,
      },
      plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        { 
          resolve: `gatsby-plugin-purgecss`,
          options: {
            tailwind: true
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `markdown-pages`,
            path: `${__dirname}/src/md-pages`,
          },
        },
        `gatsby-transformer-remark`
      ]
}