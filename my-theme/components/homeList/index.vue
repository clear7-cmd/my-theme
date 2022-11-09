<template>
  <div id="home_list">
    <div class="home_content">
      <v-sidebar></v-sidebar>
      <v-pageList></v-pageList>
    </div>
  </div>
</template>
<script>
import vPageList from "./pageList";
import vSidebar from "./Sidebar";
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
  mounted() {},
};
</script>
<style lang='scss' >
#home_list {
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  font-size: 18px;
  .home_content {
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