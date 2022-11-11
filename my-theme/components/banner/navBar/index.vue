<template>
  <div id="nav_bar">
    <div class="nav_icon" @click="clickList">
      <svg-icon symbol="list"></svg-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props:["clickList"],
  components: {
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
#nav_bar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 50px;
  height: 100px;
  width: calc(100% - 100px);
  z-index: 999;
  color: #fff;
  font-size: 30px;
  .nav_icon {
    cursor: pointer;
  }
}
</style>