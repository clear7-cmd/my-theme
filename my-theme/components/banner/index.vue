<template>
  <div ref="banner" :class="['banner', popUpShow ? 'banner_dynamic' : '']">
    <transition name="list">
      <nav-bar :clickList="clickList" v-show="!popUpShow"></nav-bar>
    </transition>
    <transition name="pop">
      <pop-up v-show="popUpShow" :clickList="clickList"></pop-up>
    </transition>
    <div ref="parallax" id="parallax">
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
    </div>
    <div class="banner_title">
      {{ dateFormat($page.frontmatter.time, "\/") || "" }}
      <h1>
        {{ $page.frontmatter.title || "" }}
      </h1>
    </div>
  </div>
</template>

<script>
import navBar from "./navBar";
import popUp from "./popUp";
import parallax from "parallax-js";
export default {
  name: "Layout",
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
    //io 为 IntersectionObserver对象 - 由IntersectionObserver()构造器创建
    const io = new IntersectionObserver((entries) => {
      //entries 为 IntersectionObserverEntry对像数组
      console.log(entries[0].isIntersecting);
    }); //不传options参数
    io.observe(this.$refs.banner);
  },
  methods: {
    clickList() {
      console.log(this.popUpShow);
      this.popUpShow = !this.popUpShow;
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
  .banner_title {
    position: absolute;
    top: 50%;
    left: 10%;
    color: #ccc;
    margin-top: -50px;
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
@-webkit-keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
}
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
</style>
