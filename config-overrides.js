const { compose, injectBabelPlugin } = require('react-app-rewired');
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest
} = require('react-app-rewire-typescript-babel-preset');
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

function rewireJsxControlStatements(config, env, styledComponentsPluginOptions = {}) {
  return injectBabelPlugin(['module:jsx-control-statements', styledComponentsPluginOptions], config);
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
  jest: function(config) {
    return rewireTypescriptJest(config);
  }
};
