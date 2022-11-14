<template>
  <div id="home_list">
    <div class="home_content">
      <v-sidebar></v-sidebar>
      <v-pageList></v-pageList>
    </div>
    <div id="home_back"></div>
  </div>
</template>
<script>
import vPageList from "./pageList";
import vSidebar from "./Sidebar";
// import particles from "particles.js";
import particlesJson from "./particles.json";
export default {
  name: "",
  components: {
    vPageList,
    vSidebar,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    import("particles")
      .then((module) => {
        // Vue.use(module.default);
        module.default("home_back", particlesJson, function () {
          console.log("callback - particles.js config loaded");
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // particlesJS("home_back", particlesJson, function () {
    //   console.log("callback - particles.js config loaded");
    // });
  },
};
</script>
<style lang='scss' >
#home_list {
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  #home_back {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
  }
  .home_content {
    position: relative;
    z-index: 999;
    display: flex;
    width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    margin-top: 30px;
    // background: #ccc;
    overflow: hidden;
  }
}
</style>