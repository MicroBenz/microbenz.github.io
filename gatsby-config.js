module.exports = {
  siteMetadata: {
    title: 'MicroBenz',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: 'MicroBenz',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
};
