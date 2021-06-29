module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // devServer: {
  //   port: 2021, // 设置端口号
  //   host: 'localhost', // ip
  //   disableHostCheck: true, // 是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查
  //   hotOnly: false, // 热更新
  //   https: false, // https:{type:Boolean}配置前缀
  //   open: false, // 配置自动启动浏览器
  //   proxy: null // 设置代理
  // }
  productionSourceMap: false
}
