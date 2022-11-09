<template>
  <div id="pageList">
    <div v-for="item in $timeSort" class="page_item" :key="item.key">
      <div class="img_box">
        <img
          :src="
            $withBase(
              item.frontmatter.titleImg ? item.frontmatter.titleImg : '/404.jpg'
            )
          "
          alt=""
        />
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
  },
};
</script>
<style lang='scss' scoped>
#pageList {
  flex: 1;
  padding: 0 10px;
  margin-left: 10px;
  .page_item {
    background: var(--background-color);
    border-radius: 15px;
    // box-shadow: 0 3px 8px 3px rgba(0, 0, 0, 0.15);
    box-shadow: var(--box-shadow);
    transition: all 0.3s;
    margin: 10px;
    height: 250px;
    transition: all 0.3s;
    overflow: hidden;
    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
    .img_box {
    }
  }
}
</style>