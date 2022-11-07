

// 获取时间的时间戳
export const getTimeNum = (post) => {
    console.log(post);
    let dateStr = post.frontmatter.time || post.lastUpdated || new Date()
    let date = new Date(dateStr)
    if (date == "Invalid Date" && dateStr) { // 修复new Date()在Safari下出现Invalid Date的问题
        date = new Date(dateStr.replace(/-/g, '/'))
    }
    return date.getTime()
}
// 比对时间
export const compareDate = (prev, next) => {
    return getTimeNum(prev) - getTimeNum(next)
}