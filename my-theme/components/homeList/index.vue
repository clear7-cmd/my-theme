<template>
  <div id="home_list"></div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {

  },
};
</script>
<style lang='scss' >
#home_list {
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  font-size: 18px;
  background: var(--background-color) ;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>