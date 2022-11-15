<template>
  <div class="side_btn">
    <div id="themeMode" @click="selectMode(currentMode)">
      <svg-icon :symbol="modeOptions[currentMode]"></svg-icon>
    </div>
    <transition name="up">
      <div class="go_top" v-show="upBtnShow" @click="upEvent">
        <svg-icon symbol="up"></svg-icon>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: ["setModeState"],
  data() {
    return {
      modeOptions: {
        dark: "yueliang",
        light: "ai250",
      },
      currentMode: "dark",
      applyMode: null,
      upBtnShow: false,
    };
  },
  computed: {},
  methods: {
    selectMode(mode) {
      this.currentMode = mode == "light" ? "dark" : "light";
      this.applyMode(this.currentMode);
      this.setModeState(this.currentMode);
    },
    upEvent() {
      document.getElementById("main_layout").scrollTop = 0;
    },
  },
  created() {},
  mounted() {
    import("./applyMode")
      .then((module) => {
        let mode = localStorage.getItem("mode");
        this.currentMode = mode ? mode : "dark";
        this.applyMode = module.default;
        this.applyMode(this.currentMode);
        this.setModeState(this.currentMode);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(document.getElementById("main_layout"));
    document.getElementById("main_layout").onscroll = (e) => {
      if (e.target.scrollTop >= 600) {
        this.upBtnShow = true;
      } else {
        this.upBtnShow = false;
      }
    };
  },
};
</script>
<style lang='scss'>
.side_btn {
  position: fixed;
  z-index: 999;
  bottom: 30px;
  right: 80px;
  font-size: 30px;
  div {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    background: var(--btn-color);
    transition: all 0.3s;
    color: var(--box-color);
    &:hover {
      background: var(--btn-color-hover);
    }
  }
  .go_top {
    font-size: 18px;
    position: absolute;
    top: -40px;
    left: 0;
  }
}
.up-enter,
.up-enter-to {
  -webkit-animation: roll-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: roll-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.up-leave,
.up-leave-to {
  -webkit-animation: roll-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: roll-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
</style>