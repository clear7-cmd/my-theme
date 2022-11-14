import { compareDate } from './toolFun'
/**
 * 过滤非文章页
 * @param {Array} posts 所有文章数据
 */
export const filterPosts = (posts) => {
    let newPosts = posts.filter(item => {
        const { frontmatter: { pageComponent, article, isHome } } = item
        return !(pageComponent || article === false || isHome === true)
    });
    return newPosts
}
/**
 * 按置顶和时间排序
 * @param {Array} posts 文章页数据
 */
export const timeSort = (posts) => {
    posts.sort((prev, next) => {
        const prevSticky = prev.frontmatter.sticky
        const nextSticky = next.frontmatter.sticky
        if (prevSticky && nextSticky) {
            return prevSticky == nextSticky ? compareDate(prev, next) : (prevSticky - nextSticky)
        } else if (prevSticky && !nextSticky) {
            return -1
        } else if (!prevSticky && nextSticky) {
            return 1
        }
        return compareDate(prev, next)
    })
    return posts
}
/**
 * 按置顶和时间排序
 * @param {Array} posts 文章页数据
 */
export const catalogueSort = (posts) => {
    let catalogue = {}
    posts.forEach((item, index) => {
        if (!catalogue[item.frontmatter.categories]) {
            catalogue[item.frontmatter.categories] = 1

        } else {
            catalogue[item.frontmatter.categories]++
        }
    })
    return catalogue
}
