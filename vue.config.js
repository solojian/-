module.exports = {
    devServer: {
        prot: '8080',
        proxy: {
            '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
            }
          }
    }
}