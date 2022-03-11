const CracoLessPlugin = require('craco-less');

module.exports = {
  devServer: {
      devMiddleware: {
          writeToDisk: true,
      },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#5e17eb' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};