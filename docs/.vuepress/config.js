const path = require('path')
module.exports = {
    base: process.env.NODE_ENV === 'development' ? "/" : "./",
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, "../../my-theme"),
}