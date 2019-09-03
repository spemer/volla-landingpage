module.exports = {
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    },

    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
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
