module.exports = {
  siteMetadata: {
    title: "Testing task for AMZscout",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "3j4XNjXOqfKHBIxyXeOju0sj5gGvJp4p-8Ui3XiX0NU",
        spaceId: "h497fy3p9gu4",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
