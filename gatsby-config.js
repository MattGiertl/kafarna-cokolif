module.exports = {
  siteMetadata: {
    title: `Kafárna Cokolif`,
    description: `Web Kafárny Cokolif. Navštivte nás!`,
    author: `@MattGiertl`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "9477884181.1677ed0.7a5053053c0a4336a99281b2223e4fcd",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kafárna Cokolif`,
        short_name: `Cokolif`,
        description: "Web Kafárny Cokolif. Navštivte nás!",
        lang: "cz",
        start_url: `/`,
        icon: "static/logo.jpg",
        background_color: `#FFF`,
        theme_color: `#000`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
