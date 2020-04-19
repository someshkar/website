module.exports = {
  siteMetadata: {
    title: `Somesh Kar`,
    description: `Somesh Kar's personal website.`,
    author: `@someshkar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Somesh Kar`,
        short_name: `someshkar`,
        start_url: `/`,
        background_color: `#29263E`,
        theme_color: `#29263E`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `600`],
          },
          {
            family: `Lato`,
            variants: [`400`, `600`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-163877550-1',
        head: true,
        pageTransitionDelay: 5,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
