module.exports = {
  siteMetadata: {
  title: `The Test Site`,
},
  plugins: [
    {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `src`,
    path: `${__dirname}/src/`,
  },
},
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
