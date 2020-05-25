module.exports = {
  siteMetadata: {
    title: "Kafárna Cokolif",
    defaultTitle: "Kafárna Cokolif",
    description:
      "Jsme nejbarevnější kavárna v centru Olomouce, kde každý den začíná vydatnou snídaní, šálkem kvalitní výběrové kávy z nejlepších pražíren a sladkými dobrotami!",
    defaultDescription:
      "Jsme nejbarevnější kavárna v centru Olomouce, kde každý den začíná vydatnou snídaní, šálkem kvalitní výběrové kávy z nejlepších pražíren a sladkými dobrotami!",
    url: "https://www.cokolif.cz", // No trailing slash allowed!
    image: "/images/cokolif_cafarna_3.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-115190914-4",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menu`,
        path: `${__dirname}/src/data/menu`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mainPage`,
        path: `${__dirname}/src/data/mainPage.md`,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "9477884181.1677ed0.7a5053053c0a4336a99281b2223e4fcd",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
