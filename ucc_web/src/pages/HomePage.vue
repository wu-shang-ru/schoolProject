<template>
  <div class="HomePage">
    <Navbar></Navbar>
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
import Banner from "@/components/Banner";

export default {
  name: "HomePage",
  components: {
    ContentList,
    Navbar,
    Banner
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
