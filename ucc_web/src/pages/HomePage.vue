<template>
  <div class="HomePage">
    <navbar></navbar>
    <menubar></menubar>
    <!-- <nav-header></nav-header> -->
    <banner></banner>
    <ContentList></ContentList>
    <router-link to="/store">到 Store 測試頁</router-link>
  </div>
</template>

<script>
// import NavHeader from "@/components/NavHeader";
import ContentList from "@/components/ContentList";
import Navbar from "@/components/Navbar";
import Menubar from "@/components/Menubar";
import Banner from "@/components/Banner";

export default {
  name: "HomePage",
  components: {
    // NavHeader,
    ContentList,
    Navbar,
    Menubar,
    Banner
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
