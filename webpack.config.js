const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const plugin = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
module.exports = {
  ...plugin,
  output: {
    ...plugin.output,
    scriptType: 'text/javascript'
  }
}
