<template>
  <div style="width: 100vw; height: 100vh; overflow: hidden">
    <div ref="parallax" id="isdemo">
      <div id="my_parallax_demo" class="layer" data-depth=".5">
        <img src="../assets/welcome-cover.jpg" alt="" />
      </div>

      <!-- <li class="layer" data-depth=".2">1</li>
    <li class="layer" data-depth=".3">2</li>
    <li class="layer" data-depth=".4">3</li> -->
    </div>
  </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";
import parallax from "../util/parallax.js";
// import parallax from "parallax-js";
export default {
  name: "Layout",

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
  },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
    var parallaxInstance = new parallax(this.$refs.parallax, {
      relativeInput: false,
    });
    console.log(this.$page);
    console.log(this.$site);
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>
<style  scoped>
#isdemo {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
#my_parallax_demo {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
#my_parallax_demo img {
  position: absolute;
  width: 1920px;
  height: 1080px;
  left: 0;
  top: 0px;
  display: block;
  transform: scale(1.1);
}
</style>
