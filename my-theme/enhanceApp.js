import posts from "@theme/mixin/posts.js"
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
    Vue.mixin(posts)
    Vue.prototype.$eventBus = new Vue()
    const icons = require.context('./icons', false, /\.svg$/)
    const importAll = r => {
        r.keys().map(r)
    }
    importAll(icons)
    Vue.component('svg-icon', {
        functional: true,
        props: {
            symbol: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: ''
            }
        },
        render: function (h, { data, props, children }) {
            return h(
                'svg',
                {
                    ...data,
                    class: [
                        'svg-icon',
                        `svg-icon-${props.className}`
                    ],
                    style: {
                        width: '1em',
                        height: '1em',
                        'vertical-align': '-0.15em',
                        fill: 'currentColor',
                        overflow: 'hidden',
                    },
                    attrs: { 'aria-hidden': true, }
                },
                [
                    h('use', {
                        attrs: {
                            'xlink:href': `#icon-${props.symbol}`
                        }
                    })
                ]
            )
        }
    })
}