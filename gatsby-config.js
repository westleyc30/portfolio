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
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId:
          '253cc770ca1796c55f7d521052c631e159a49f3f3ec415d5a66335e798ef97c0',
        accessToken: 'muj2c5twartd',
      },
    },
  ],
}
