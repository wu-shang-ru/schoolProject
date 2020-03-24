<template>
  <div class="UserInfo">
    <h1>UserInfo</h1>
    <h3>user profile img:</h3>
    <p><img :src="userInfo.imgUrl"></p>
    <h3>user name:</h3>
    <p>{{ userInfo.userName }}</p>
    <h3>ID:</h3>
    <p>{{ userInfo.userId }}</p>
    <h3>email:</h3>
    <p>{{ userInfo.email }}</p>
    <h3>登入來源:</h3>
    <p>{{ userInfo.provider }}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: "Info",
  data() {
    return {
    };
  },

  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo',
    })
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
