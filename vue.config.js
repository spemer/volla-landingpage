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
          "/event_landing/",
          "/tos/ceo_privacy/",
          "/tos/ceo_service/",
          "/tos/user_privacy/",
          "/tos/user_service/"
        ],
        renderer: new PuppeteerRenderer(),
        minify: {
          caseSensitive: true,
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          decodeEntities: true,
          minifyCSS: true,
          keepClosingSlash: true,
          sortAttributes: true,
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ]
  },

  devServer: {
    port: 5814
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
