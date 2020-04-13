<template>
  <div class="HomePage">
    <Navbar></Navbar>
    <menubar></menubar>
    <Banner></Banner>
    <ContentList></ContentList>
    <Login></Login>
    <register></register>
    <router-link to="/store">到 Store 測試頁</router-link>
  </div>
</template>

<script>
import ContentList from "@/components/ContentList";
import Navbar from "@/components/Navbar";
import Menubar from "@/components/Menubar";
import Banner from "@/components/Banner";
import Login from "@/components/Login";
import register from "@/components/Register";

export default {
  name: "HomePage",
  components: {
    ContentList,
    Navbar,
    Menubar,
    Banner,
    Login,
    register
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
