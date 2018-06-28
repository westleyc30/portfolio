// require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Westley Cho',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Montserrat\: 300, 400, 400i, 700, 700i`,
          `Libre Baskerville\: 400, 400i, 700`,
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `muj2c5twartd`,
        accessToken: `f309bf41a58b0df97aeda0e8eb3d151289c595595f17208e8b0ca03b4cb08a0e`,
      },
    },
  ],
}
