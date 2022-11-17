<template>
  <div id="pagesDetails">
    <div class="info">
      <div class="time">
        <svg-icon symbol="time"></svg-icon>
        {{ dateFormat($page.frontmatter.time) }}
      </div>
      <div class="category">
        <svg-icon symbol="catalogue"></svg-icon>
        {{ $page.frontmatter.categories }}
      </div>
    </div>
    <div class="details_title">
      {{ $page.title }}
    </div>
    <Content />
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
    console.log(this.$page);
  },
};
</script>
<style lang='scss' scoped>
#pagesDetails {
  flex: 1;
  padding: 20px;
  margin: 10px 20px;
  color: var(--text-color);
  background: var(--box-color);
  border-radius: 15px;
  box-shadow: var(--box-shadow);
  .info {
    font-size: 14px;
    display: flex;
    justify-content: end;
    color: var(--text-color-sub);
    .category {
      margin-left: 20px;
      margin-top: -2px;
      svg {
        font-size: 12px;
      }
    }
  }
  .details_title {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
  }
  .content__default {
   max-width: 800px;
   margin: 0 auto;
  }
}
</style>