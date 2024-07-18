module.exports = {
  serve: {
    proxy: {
      '/api': {
        target: 'http://localhost:65534',
        changeOrigin: true
      },
      '/xxx': {
        target: 'http://localhost:65534',
        changeOrigin: true
      }
    }
  }
}