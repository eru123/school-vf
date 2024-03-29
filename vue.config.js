module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "School Natin";
      return args;
    });
  }
};
