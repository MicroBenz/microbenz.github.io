module.exports = {
  siteMetadata: {
    title: 'MicroBenz',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Catamaran:300,400,500,600,700'
        ]
      }
    },
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: 'MicroBenz',
      },
    },
  ],
};
