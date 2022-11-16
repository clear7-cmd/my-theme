<template>
  <div ref="banner" :class="['banner', popUpShow ? 'banner_dynamic' : '']">
    <transition name="list">
      <nav-bar :clickList="clickList" v-show="!popUpShow"></nav-bar>
    </transition>
    <transition name="pop">
      <pop-up v-show="popUpShow" :clickList="clickList"></pop-up>
    </transition>
    <div ref="parallax" v-show="currentMode == 'dark'" id="parallax">
      <div id="my_parallax_demo" class="layer" data-depth=".5">
        <img src="../../assets/welcome-cover.jpg" alt="" />
      </div>
      <svg
        viewBox="0 0 2880 1620"
        height="100%"
        preserveAspectRatio="xMaxYMax slice"
        style="position: absolute; top: 0; left: 0px"
      >
        <!-- points:设置的位置;opacity:透明度 -->
        <polygon
          points="2000,1620 0,1620 0,0 600,0 "
          opacity="0.7"
          style="fill: rgb(46, 118, 165)"
        />
      </svg>
      <div class="banner_title">
        {{ dateFormat($page.frontmatter.time, "\/") || "" }}
        <h1>
          {{ $page.frontmatter.title || "" }}
        </h1>
      </div>
    </div>
    <div id="videoPlay" v-show="currentMode == 'light'">
      <video
        :src="$withBase('./ocean/ocean.mp4')"
        :poster="$withBase('./ocean/ocean.png')"
        autoplay
        loop
        muted
      ></video>
      <div class="video_overlay"></div>
      <div class="light_mode_title">
        <div class="title">vuepress</div>
        <ClientOnly v-if="dynamicComponent">
          <vue-typed-js
            :strings="['awesome', 'brilliant']"
            :typeSpeed="200"
            :backSpeed="50"
            :backDelay="1000"
            :loop="true"
          >
            <div class="subTitle"><span class="typing"></span></div>
          </vue-typed-js>
        </ClientOnly>
      </div>
    </div>
    <div class="down" @click="scrollView">
      <svg-icon symbol="down"></svg-icon>
    </div>
  </div>
</template>

<script>
import navBar from "./navBar";
import popUp from "./popUp";
import parallax from "parallax-js";
export default {
  name: "Layout",
  props:['currentMode'],
  components: {
    navBar,
    popUp,
  },
  data() {
    return {
      popUpShow: false,
    };
  },
  watch: {
    popUpShow(value) {
      if (value) {
        document.getElementById("main_layout").classList.add("main_layout_sup");
        // document.querySelector(".banner").classList.add("banner_dynamic");
      } else {
        document
          .getElementById("main_layout")
          .classList.remove("main_layout_sup");
        // document.querySelector(".banner").classList.remove("banner_dynamic");
      }
    },
  },
  mounted() {
    var parallaxInstance = new parallax(this.$refs.parallax, {
      relativeInput: false,
    });
  },
  methods: {
    clickList() {
      console.log(this.popUpShow);
      this.popUpShow = !this.popUpShow;
    },
    scrollView() {
      document.getElementById("main_layout").scrollTop =
        this.$refs.banner.offsetHeight;
    },
  },
};
</script>
<style lang='scss'>
.banner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: end;
  position: relative;
  user-select: none;
  -webkit-animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;
  #parallax {
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    .banner_title {
      position: absolute !important;
      top: 50% !important;
      left: 10% !important;
      color: #ccc;
      margin-top: -50px;
    }
  }
  #videoPlay {
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    video {
      width: 100%;
      height: 100%;
      transform: scale(1.3);
    }
    .video_overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(178, 191, 204, 0.4);
    }
    .light_mode_title {
      color: #fff;
      position: absolute;
      width: 100%;
      height: 200px;
      top: calc(50% - 100px);
      text-align: center;
      .title {
        font-size: 2.85em;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .subTitle {
        font-size: 1.85em;
        margin: 0 auto;
      }
    }
  }
  #my_parallax_demo {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      width: 1920px;
      height: 1080px;
      left: 0;
      top: 0px;
      display: block;
      transform: scale(1.1);
    }
  }
  .down {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 5%;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    animation: is_down 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) alternate
      infinite;
  }
}
.banner_dynamic {
  width: 100vw;
}
.list-enter,
.list-enter-to {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.list-leave,
.list-leave-to {
  -webkit-animation: slide-out-top 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-top 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.pop-enter {
  opacity: 0;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;
}
.pop-enter-to {
  opacity: 1;
  transition: 0.3s ease-in-out;
  transition-delay: 0.1s;
}
</style>
