module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/school-vf/" : "/",
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
      args[0].title = "School App";
      return args;
    });
  }
};
