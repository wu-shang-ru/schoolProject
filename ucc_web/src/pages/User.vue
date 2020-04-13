<template>
  <div class="user">
    <Navbar></Navbar>
    <menubar></menubar>
    <router-view />
  </div>
</template>

<script>
import { authenticated } from "@/utils/AuthStore";
import Navbar from "@/components/Navbar";
import Menubar from "@/components/Menubar";

export default {
  name: "User",

  data() {
    return {};
  },

  components: {
    Navbar,
    Menubar
  },

  beforeRouteEnter(to, from, next) {
    if (authenticated()) {
      next();
    } else {
      next("/");
    }
  }
};
</script>

<style scoped>
.user {
  background-color: #eeeeee;
  height: 100vh;
}
</style>