<template>
  <div class="banner">
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
import parallax from "parallax-js";
export default {
  name: "Layout",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    var parallaxInstance = new parallax(this.$refs.parallax, {
      relativeInput: false,
    });
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
.banner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: end;
  position: relative;
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
</style>
