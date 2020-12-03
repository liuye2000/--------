module.exports = {
    publicPath: "./",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': 'http://127.0.0.1:8081/'
                }
            }
        }
    }
}