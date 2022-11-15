<template>
  <div id="sidebar">
    <div class="userInfo div_box">
      <div class="portrait">
        <img :src="$withBase($site.themeConfig.user.portrait)" alt="" />
      </div>
      <div class="nickname">
        {{ $withBase($site.themeConfig.user.nickname) }}
      </div>
      <div class="brief">
        {{ $withBase($site.themeConfig.user.brief) }}
      </div>
      <div class="card_info">
        <div @click="setPageList($timeSort)">
          文章 <span>{{ $filterPosts.length }}</span>
        </div>
        <div>
          分类 <span>{{ $catalogueSort.catalogue.length }}</span>
        </div>
      </div>
      <a :href="$site.themeConfig.user.github">
        <div class="github_href">
          <svg-icon symbol="github"></svg-icon>
          主题GitHub
        </div>
      </a>
    </div>
    <div class="catalogue div_box">
      <div class="title">
        <svg-icon symbol="catalogue"></svg-icon>
        &nbsp;分类
      </div>
      <div class="content_list">
        <div
          class="content_item"
          v-for="(item, index) in $catalogueSort.catalogue"
          :key="index"
          @click="setPageList($catalogueSort.num[item])"
        >
          {{ item }} <span>{{ $catalogueSort.num[item].length }}</span>
        </div>
      </div>
    </div>
    <div class="newest div_box"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: ["setPageList"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.$site.themeConfig.user);
  },
};
</script>
<style lang='scss' scoped>
#sidebar {
  width: 270px;
  .div_box {
    background: var(--box-color);
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    transition: all 0.3s;
    margin: 10px 10px 20px 10px;
    padding: 20px 15px;
    color: var(--text-color);
    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
  }
  .userInfo {
    min-height: 320px;
    overflow: hidden;
    text-align: center;
    .portrait {
      margin-top: 10px;
      img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto;
      }
    }
    .nickname {
      margin: 15px 0;
    }
    .brief {
      font-size: 14px;
      color: var(--text-color-sub);
    }
    .card_info {
      display: flex;
      margin: 20px 0;
      font-size: 14px;
      justify-content: space-evenly;
      div {
        color: var(--text-color);
        cursor: pointer;
      }
      span {
        display: block;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .github_href {
      margin: 0 auto;
      width: 90%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: var(--text-color);
      background: var(--btn-color);
      transition: all 0.3s;
      &:hover {
        background: var(--btn-color-hover);
      }
    }
  }
  .catalogue {
    min-height: 200px;
    color: var(--text-color);
    font-size: 16px;
    .content_list {
      margin-top: 10px;
      .content_item {
        display: flex;
        padding: 5px 10px;
        font-size: 14px;
        cursor: pointer;
        justify-content: space-between;
        transition: all 0.3s;
        &:hover {
          background: var(--text-color-hover);
          padding: 5px 15px;
        }
      }
    }
  }
  .newest {
    min-height: 300px;
  }
}
</style>