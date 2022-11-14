const path = require('path')
module.exports = {
    // base: process.env.NODE_ENV === 'development' ? "/" : "./",
    base: process.env.NODE_ENV === 'development' ? '/' : '/my-theme/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, "../../my-theme"),
    routerBase:process.env.NODE_ENV === 'development' ? '/' : '/my-theme/'
}