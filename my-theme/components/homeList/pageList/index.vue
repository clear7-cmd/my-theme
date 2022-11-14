<template>
  <div id="pageList">
    <div v-for="item in $timeSort" class="page_item" :key="item.key">
      <div class="img_box">
        <img
          v-if="dynamicLazy"
          v-lazy="
            $withBase(
              item.frontmatter.titleImg ? item.frontmatter.titleImg : '/404.jpg'
            )
          "
          alt=""
          :default-src="$withBase('/loading.gif')"
        />
      </div>
      <div class="page_context">
        <div class="page_title">
          {{ item.title }}
        </div>
        <div class="page_time">
          <span v-if="item.frontmatter.sticky" class="sticky">
            <svg-icon symbol="sticky"></svg-icon>置顶 | </span
          >
          <span v-if="item.frontmatter.time"
            >{{ dateFormat(item.frontmatter.time)
            }}{{ item.frontmatter.demo ? " | " : "" }}
          </span>
          <span v-if="item.frontmatter.demo">demo </span>
        </div>
        <div class="page_subTile" v-html="item.excerpt"></div>
      </div>

      <!-- {{ item.title }} -->
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.$timeSort);
  },
};
</script>
<style lang='scss' >
#pageList {
  flex: 1;
  padding: 0 10px;
  margin-left: 10px;
  .page_item {
    background: var(--box-color);
    border-radius: 15px;
    box-shadow: var(--box-shadow);
    transition: all 0.3s;
    margin: 10px 10px 30px 10px;
    height: 250px;
    transition: all 0.3s;
    overflow: hidden;
    display: flex;
    &:hover {
      box-shadow: var(--box-shadow-hover);
      img {
        transform: scale(1.1);
      }
    }
    .img_box {
      width: 350px;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s;
      }
    }
    .page_context {
      padding: 20px 30px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-content: center;
      flex: 1;
      .page_title {
        font-size: 28px;
        color: var(--text-color);
        width: 100%;
        cursor: pointer;
        transition: all .3s;
        &:hover{
          color: #49b1f5;
        }
      }
      .page_time {
        font-size: 14px;
        font-weight: 600;
        margin: 10px 0;
        color: var(--text-color-sub);
        .sticky {
          color: #ff7242;
        }
      }
      .page_subTile {
        width: 100%;
      }
    }
    p {
      margin: 0 !important;
      padding: 0 !important;
      font-size: 14px;
      color: var(--text-color-sub);
    }
  }
}
</style>