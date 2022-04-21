const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  devServer: {
    allowedHosts: 'all',
    server: 'http',
    port: 9091,
    host: 'localhost',
    proxy: {},
  },
  chainWebpack: (config) => {
    config.module.rule('vue').uses.delete('cache-loader');
    config.module.rule('js').uses.delete('cache-loader');
    config.module.rule('jsx').uses.delete('cache-loader');
    config.module.rule('ts').uses.delete('cache-loader');
    config.module.rule('tsx').uses.delete('cache-loader');

    config.module.rule('yaml').test('/.ya?ml$/').use('i18n').loader('js-yaml-loader');
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader');
  },
});
