module.exports = {
    //配置自动打开浏览器及端口号 
    devServer: {
        open: true,
        port: 8878,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // 配置打包
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static'
}