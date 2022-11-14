import { filterPosts, timeSort } from '../util/filterData.js'
import Vue from "vue"
export default {
    computed: {
        $filterPosts() { // 过滤非文章页和首页的文章数据
            return filterPosts(this.$site.pages)
        },
        $timeSort() { //时间排序
            return timeSort(this.$filterPosts)
        },

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
    },
    mounted() {
        import('vue-typed-js').then(module => {
            Vue.use(module.default);
            this.dynamicComponent = module.default
        }).catch(err => {
            console.log(err);
        });
        import('@theme/directives/lazy').then(module => {
            Vue.directive("lazy", module.default)
            this.dynamicLazy = true
        }).catch(err => {
            console.log(err);
        });
        
    },
    data() {
        return {
            dynamicComponent: null,
            dynamicLazy:null
        }
    }
}
