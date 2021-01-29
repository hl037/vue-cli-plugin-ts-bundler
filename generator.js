const path = require('path');

module.exports = (api, options) => {
  // Adds vue as externals
  if (options.addExternals) {
    api.postProcessFiles(files => {
      const vueConfigPath = api.resolve('vue.config.js');
      const vueConfig = files['vue.config.js'] ? require(vueConfigPath) : {};

      vueConfig.configureWebpack = vueConfig.configureWebpack || {};
      vueConfig.configureWebpack.externals = {
        ...(vueConfig.configureWebpack.externals || {}),
        ...{
          vue: 'vue',
          'vue-property-decorator': 'vue-property-decorator'
        }
      };

      files['vue.config.js'] = api.genJSConfig(vueConfig)
    });
  }

  debugger
  // Build command
  let buildCommand = 'vue-cli-service build';

  if (options.buildAsLib || options.mode === 'awesome') {
    buildCommand += ' --target lib';
    buildCommand += ` --name ${options.name}`;
    buildCommand += options.main ? options.main : ' src/main.ts';
  }

  // Bundle command
  let bundleDtsCommand = 'vue-cli-service bundle-dts';
  if (options.name) {
    bundleDtsCommand += ` --name ${options.name}`;
  }
  if (options.main) {
    bundleDtsCommand += ` --main ${options.main}`;
  }
  if (options.removeSource) {
    bundleDtsCommand += ' --removeSource';
  }
  if (options.createIndex) {
    bundleDtsCommand += ' --createIndex';
  }

  // Extend package.json
  api.extendPackage({
    scripts: {
      'build': buildCommand,
      'bundleDts': bundleDtsCommand,
    },
    typings: path.join(options.outputPath, options.name + '.d.ts')
  });
}
