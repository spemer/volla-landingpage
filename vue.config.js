const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

require("es6-promise").polyfill();

module.exports = {
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    },
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/seller/",
          "/sellerform/",
          "/sellerform-app/",
          "/submit/",
          "/submit-app/",
          "/notices/",
          "/event_landing/"
        ],
        renderer: new PuppeteerRenderer()
      })
    ]
  },

  chainWebpack: config => {
    config.module.rules.delete("eslint");
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true
      });
  },

  devServer: {
    port: 5814
  },

  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `
                @import '@/style/style.scss';
              `
      }
    }
  }
};
