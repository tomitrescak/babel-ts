const { compose, injectBabelPlugin } = require('react-app-rewired');
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest
} = require('react-app-rewire-typescript-babel-with-apollo-preset');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireStyledComponents = require('react-app-rewire-styled-components');

// // DASHBOARD

// const DashboardPlugin = require('webpack-dashboard/plugin');
// function rewireLoaderPlugin(config, env, definePluginOptions = {}) {
//   // Add the define plugin to the list of plugins
//   config.plugins = (config.plugins || []).concat([new DashboardPlugin()]);
//   return config;
// }

// JSX CONTROLS

function rewireJsxControlStatements(config, env, options = {}) {
  return injectBabelPlugin(['module:jsx-control-statements', options], config);
}

function rewireJestBabel(config, env = {}) {
  config.transform['\\.(gql|graphql)$'] = 'jest-transform-graphql';
  return config;
}

module.exports = {
  webpack: function(config, env) {
    const rewires = compose(
      //      rewireLoaderPlugin,
      rewireTypescript,
      rewireReactHotLoader,
      rewireJsxControlStatements,
      rewireStyledComponents
    );

    return rewires(config, env);
  },
  jest: function(config, env) {
    const rewires = compose(
      rewireTypescriptJest
      //rewireJestBabel
    );

    config = rewires(config, env);

    require('fs').writeFileSync('config.json', JSON.stringify(config, null, 2));

    return config;
  }
};
