<template>
  <div id="main_layout">
    <v-banner></v-banner>
    <home-list></home-list>
  </div>
</template>
<script>
import vBanner from "@theme/components/banner";
import homeList from "@theme/components/homeList";
export default {
  name: "",
  components: {
    vBanner,
    homeList,
  },
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
#main_layout {
  height: 100vh;
  overflow-y: scroll;
  // proximity:接近的时候滚动 mandatory:滚动结束后，滚动停止点一定会强制停在我们指定的地方
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  .box {
    width: 100%;
    height: 200vh;
    scroll-snap-align: start;
  }
}
</style>