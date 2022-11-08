import { filterPosts, timeSort } from '../util/filterData.js'
export default {
    computed: {
        $filterPosts() { // 过滤非文章页和首页的文章数据
            return filterPosts(this.$site.pages)
        },
        $timeSort() {
            return timeSort(this.$filterPosts)
        }
    },
    methods: {
        // 日期格式化(只获取年月日)
        dateFormat(date, sym = '-') {
            if (!(date instanceof Date)) {
                date = new Date(date)
            }
            return date.getUTCFullYear() + sym + this.zero(date.getUTCMonth() + 1) + sym + this.zero(date.getUTCDate())
        },
        // 小于10补0
        zero(d) {
            return d.toString().padStart(2, '0')
        }
    }
}
