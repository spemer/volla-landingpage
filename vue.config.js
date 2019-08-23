// const path = require("path");
// const PrerenderSPAPlugin = require("prerender-spa-plugin");
// const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    }

    // plugins: [
    //   new PrerenderSPAPlugin({
    //     staticDir: path.join(__dirname, "dist"),
    //     routes: [
    //       "/",
    //       "/benefits/",
    //       "/sellerform/",
    //       "/sellerform-app/",
    //       "/submit/",
    //       "/submit-app/",
    //       "/notices/",
    //       "/event_landing/"
    //     ],
    //     renderer: new PuppeteerRenderer(),
    //     minify: {
    //       caseSensitive: true,
    //       collapseBooleanAttributes: true,
    //       collapseWhitespace: true,
    //       collapseInlineTagWhitespace: true,
    //       decodeEntities: true,
    //       minifyCSS: true,
    //       keepClosingSlash: true,
    //       sortAttributes: true,
    //       removeComments: true,
    //       removeScriptTypeAttributes: true,
    //       removeStyleLinkTypeAttributes: true
    //     }
    //   })
    // ]
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
