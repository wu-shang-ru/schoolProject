<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      setUserInfo: "user/setUserInfo"
    })
  },

  created() {
    this.setUserInfo();
  },

  name: "App"
};
</script>

<style>
#app {
  font-family: Malgun Gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
