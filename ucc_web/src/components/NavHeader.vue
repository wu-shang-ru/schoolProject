<template>
  <div class="Header">
    <router-link to="/">Home</router-link>
    <router-link to="/userInfo">User Info</router-link>
    <a href @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
