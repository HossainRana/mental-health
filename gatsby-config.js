/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {

    title: 'MindShaper',
    author: 'Nexkraft Limited'
  },

  plugins: [
    `gatsby-plugin-modal-routing`,
        {
          resolve: 'gatsby-plugin-modal-routing',
          options: {
            // A selector to set react-modal's app root to, default is `#___gatsby`
            // See http://reactcommunity.org/react-modal/accessibility/#app-element
            appElement: '#___gatsby',

            // Object of props that will be passed to the react-modal container
            // See http://reactcommunity.org/react-modal/#usage
            modalProps: { },
          }
        },

        //This plugin exists only once but can consume an array of endpoints
        {
          resolve: 'gatsby-source-rest-api',
          options: {
            endpoints: [
              'https://jsonplaceholder.typicode.com/posts',
              'https://jsonplaceholder.typicode.com/users',
              'https://jsonplaceholder.typicode.com/photos',
            ],
          },
        },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: 'dddd D MMMM YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
         // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-modal-routing`,
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve : 'gatsby-transformer-remark',
      options : {
        plugins : [
          'gatsby-remark-relative-images',
          {
            resolve : 'gatsby-remark-images',
            
              options : {
                maxWidth: 750,
                LinkImagesToOriginal: false,
              }            
          }
        ]
      }
    }
  ]
}
