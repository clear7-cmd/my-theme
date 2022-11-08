<template>
  <div id="themeMode" @click="selectMode(currentMode)">
    <svg-icon :symbol="modeOptions[currentMode]"></svg-icon>
  </div>
</template>
<script>
import applyMode from "./applyMode";
export default {
  name: "",
  components: {},
  data() {
    return {
      modeOptions: {
        dark: "ai250",
        light: "yueliang",
      },
      currentMode: "dark",
    };
  },
  computed: {},
  methods: {
    selectMode(mode) {
      this.currentMode = mode == "light" ? "dark" : "light";
      applyMode(this.currentMode);
      return;
      if (mode !== this.currentMode) {
        // localStorage.setItem("mode", mode);
      }
    },
  },
  created() {},
  mounted() {
    applyMode("dark");
    console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  },
};
</script>
<style lang='scss' scoped>
#themeMode {
  position: fixed;
  bottom: 30px;
  right: 80px;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
  }
}
</style>