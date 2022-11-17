<template>
  <div id="home_list">
    <div
      class="backImg"
      :style="{ opacity: currentMode == 'dark' ? '0.15' : '0.4' }"
    >
      <img :src="$withBase('/back.jpg')" alt="" />
    </div>
    <div class="home_content">
      <v-sidebar :setPageList="setPageList"></v-sidebar>
      <Pages v-if="!$page.frontmatter.isHome"></Pages>
      <v-pageList :pageList="pageList" v-else></v-pageList>
    </div>
    <div id="home_back"></div>
  </div>
</template>
<script>
import vPageList from "./pageList";
import vSidebar from "./Sidebar";
import Pages from "@theme/components/pages";
import particlesJson from "./particles.json";
export default {
  name: "",
  props: ["currentMode"],
  components: {
    vPageList,
    vSidebar,
    Pages,
  },
  data() {
    return {
      pageList: [],
    };
  },
  computed: {},
  methods: {
    setPageList(list) {
      this.pageList = list;
      if (this.$page.frontmatter.isHome) return;
      this.$router.push("/");
      setTimeout(() => {
        document.getElementById("home_list").scrollIntoView();
      }, 100);
    },
  },
  mounted() {
    this.pageList = this.$timeSort;
    // import("particles.js")
    //   .then((module) => {
    //     console.log(particlesJson);
    //     particlesJS("home_back", particlesJson, function () {
    //       console.log("callback - particles.js config loaded");
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
  display: table;
  // overflow: hidden;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  .backImg {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
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
  }
}
</style>