<template>
  <div id="popUp">
    <div class="pop_up_icon" @click="clickList">
      <svg-icon symbol="delete"></svg-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["clickList"],
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
#popUp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  backdrop-filter: saturate(140%) blur(10px);
  .pop_up_icon {
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
}
</style>