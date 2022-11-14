<template>
  <div id="themeMode" @click="selectMode(currentMode)">
    <svg-icon :symbol="modeOptions[currentMode]" className="theme"></svg-icon>
  </div>
</template>
<script>
// import applyMode from "./applyMode";
export default {
  name: "",
  components: {},
  data() {
    return {
      modeOptions: {
        dark: "yueliang",
        light: "ai250",
      },
      currentMode: "dark",
      applyMode: null,
    };
  },
  computed: {},
  methods: {
    selectMode(mode) {
      this.currentMode = mode == "light" ? "dark" : "light";
      this.applyMode(this.currentMode);
      this.$eventBus.$emit("selectMode", this.currentMode);
      return;
    },
  },
  created() {},
  mounted() {
    import("./applyMode")
      .then((module) => {
        console.log(module.default);
        this.applyMode = module.default;
        this.applyMode("dark");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang='scss'>
#themeMode {
  position: fixed;
  bottom: 30px;
  right: 80px;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 999;
  background: rgba($color: rgb(112, 111, 111), $alpha: 0.6);
  &:hover {
    background: rgba($color: rgb(111, 111, 112), $alpha: 0.9);
  }
  .svg-icon-theme {
    color: var(--text-color);
  }
}
</style>