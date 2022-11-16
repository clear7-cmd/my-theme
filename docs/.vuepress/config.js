const path = require('path')
module.exports = {
    // base: process.env.NODE_ENV === 'development' ? "/" : "./",
    base: process.env.NODE_ENV === 'development' ? '/' : '/my-theme/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, "../../my-theme"),
    routerBase: process.env.NODE_ENV === 'development' ? '/' : '/my-theme/',
    themeConfig: {
        user: {
            portrait: "/portrait.png",
            nickname: "。",
            brief: "一个vuepress的主题",
            github: "https://github.com/clear7-cmd/my-theme",
        },
        sidebar:'auto',
        activeHeaderLinks:true,

    },
    markdown: {
        lineNumbers: true, //是否在每个代码块显示行号
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },
}