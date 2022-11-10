<template>
  <div id="main_layout" class="main_layout_sup">
    <v-banner></v-banner>
    <home-list></home-list>
    <themeMode></themeMode>
    <div class="bottom"></div>
  </div>
</template>
<script>
import vBanner from "@theme/components/banner";
import homeList from "@theme/components/homeList";
import themeMode from "@theme/components/themeMode";
export default {
  name: "",
  components: {
    vBanner,
    homeList,
    themeMode,
  },
  data() {
    return {
      chilentPopUp: null,
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    setTimeout(() => {
      document
        .getElementById("main_layout")
        .classList.remove("main_layout_sup");
    }, 800);
  },
};
</script>
<style lang='scss' >
#main_layout {
  height: 100vh;
  overflow-y: scroll;
  // proximity:接近的时候滚动 mandatory:滚动结束后，滚动停止点一定会强制停在我们指定的地方
  scroll-snap-type: block mandatory;
  scroll-behavior: smooth;
  background: var(--background-color);
  .bottom {
    scroll-snap-align: start;
  }
}
.main_layout_sup {
  overflow: hidden;
  overflow-y: hidden !important;
}
svg {
  fill: currentColor;
}
path {
  fill: unset;
}
// .title_before
</style>