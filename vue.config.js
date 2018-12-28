// vue.config.js
module.exports = {
    baseUrl: '/',
    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/test': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }, // 配置多个代理
    }
}