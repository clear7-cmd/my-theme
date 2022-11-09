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
    background: var(--background-color);
    border-radius: 10px;
    // box-shadow: 0 3px 5px 3px rgba(0, 0, 0, 0.15);
    box-shadow: var(--box-shadow);
    transition: all 0.3s;
    margin: 10px;
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