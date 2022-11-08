const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
/**
 * @type {import('@vuepress/types').Theme<import('@vuepress/types').DefaultThemeConfig>}
 */
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // resolve algolia
  const isAlgoliaSearch = (
    themeConfig.algolia
    || Object
      .keys(siteConfig.locales && themeConfig.locales || {})
      .some(base => themeConfig.locales[base].algolia)
  )

  const enableSmoothScroll = themeConfig.smoothScroll === true

  return {
    alias() {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    },

    plugins: [
      ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'DANGER',
          '/zh/': '警告'
        }
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }],
      ['smooth-scroll', enableSmoothScroll]
    ],
    chainWebpack(config, isServer) {
      // 一个🌰:对svg的优雅处理
      // config.module
      //   .rule("svgIcon")
      //   .test(/\.svg$/)
      //   .include.add(resolve("./icon"))
      //   .end()
      //   .use("svg-sprite-loader")
      //   .loader("svg-sprite-loader")
      //   .tap(options => {
      //     options = {
      //       symbolId: "icon-[name]"
      //     };
      //     return options;
      //   });
      config.module
        .rule('svg')
        .exclude.add(resolve('./icons'))
        .end()
      config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(resolve('./icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
    }
  }
}
