module.exports = {
  siteMetadata: {
    siteUrl: 'https://gatsby-tachyons-interui.netlify.com',
    title: 'Ajmal Afif\'s personal website 👨🏻‍💻'
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     custom: {
    //       families: ['Inter UI', 'Inter UI Medium'],
    //       urls: ['./css/font-face.css']
    //     }
    //   }
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: false,
          coast: true,
          favicons: true,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'css',
        path: `${__dirname}/src/css/`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/static/*': [
            'Cache-Control: public, max-age=16070400'
          ]
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ajmalafif',
        short_name: 'ajmalafif',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#05f',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
