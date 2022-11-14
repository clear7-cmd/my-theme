<template>
  <div id="sidebar">
    <div class="userInfo div_box"></div>
    <div class="catalogue div_box"></div>
    <div class="newest div_box"></div>
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
  mounted() {},
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
    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
  }
  .userInfo {
    min-height: 400px;
  }
  .catalogue {
    min-height: 350px;
  }
  .newest {
    min-height: 350px;
  }
}
</style>