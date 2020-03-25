<template>
  <div class="HomePage">
    <Navbar></Navbar>
    <Menubar></Menubar>
    <nav-header></nav-header>
    <ContentList></ContentList>
    <router-link to="/store">到 Store 測試頁</router-link>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import ContentList from "@/components/ContentList";
import Navbar from "@/components/Navbar";
import Menubar from "@/components/Menubar";


export default {
  name: "HomePage",
  components: {
    NavHeader,
    ContentList,
    Navbar,
    Menubar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
