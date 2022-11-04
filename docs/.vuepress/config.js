const path = require('path')
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, "../../my-theme"),
    themeConfig: {
        sidebar: [ //侧边栏
            '/',
            '/page-a',
        ],
        nav: [ //导航栏
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}