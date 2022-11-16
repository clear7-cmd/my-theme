<template>
  <div
    id="main_layout"
    class="main_layout_sup"
    :style="{
      'scroll-snap-type': $page.frontmatter.isHome ? 'block mandatory' : 'none',
    }"
  >
    <v-banner
      :currentMode="currentMode"
      v-if="$page.frontmatter.isHome"
    ></v-banner>
    <home-list :currentMode="currentMode"></home-list>
    <!-- <Pages v-else></Pages> -->
    <themeMode :setModeState="setModeState"></themeMode>
    <!-- <div class="bottom"></div> -->
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
      currentMode: null,
    };
  },
  computed: {},
  methods: {
    setModeState(mode) {
      this.currentMode = mode;
    },
  },
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
@import url("../styles/animation.scss");
#main_layout {
  height: 100vh;
  overflow-y: auto;
  // proximity:接近的时候滚动 mandatory:滚动结束后，滚动停止点一定会强制停在我们指定的地方
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