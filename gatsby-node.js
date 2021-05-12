const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const  postTemplate = path.resolve('./src/templates/post.js');
  const res = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            body {
              raw
            }
            title
          }
        }
      }
    }
  `);

  res.data.allContentfulPost.edges.forEach((edge) => {
    createPage({
      component: postTemplate,
      path: `post`,
      context: {
        title: edge.node.title,
      },
    });
  });
};