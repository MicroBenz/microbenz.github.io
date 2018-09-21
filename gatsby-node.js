/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html') {
    return actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /lazysizes/,
            loader: 'null-loader',
          }
        ]
      }
    });
  }
};
