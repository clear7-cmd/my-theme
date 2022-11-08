const path = require('path')
console.log(process.env.NODE_ENV, 11111111111111);
module.exports = {
    base: process.env.NODE_ENV === 'development' ? "/" : "./",
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, "../../my-theme"),
}