module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   proxy: {
  //     '/api': {
  //       target: 'http://140.118.122.149:8000',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '/api': ''
  //       }
  //     }
  //   }
  // }
}
