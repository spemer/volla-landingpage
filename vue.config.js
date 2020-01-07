module.exports = {
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    }
  },

  devServer: {
    port: 5814
  },

  publicPath: "/dist",

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
    loaderOptions: {
      sass: {
        data: '\n                @import "@/style/style.scss";\n              '
      }
    },
    extract: false
  }
};
