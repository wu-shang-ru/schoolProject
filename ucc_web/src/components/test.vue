<template>
  <div class="Chat">
    <Navbar></Navbar>
    <Menubar></Menubar>
    <div class="container">
      <div class="msg-header">msg-header</div>
      <div class="chatArea">
        chatArea
        <div class="inputArea">inputArea</div>
      </div>
      <div class="searchFriend">
        searchFriend
        <div class="friendList">friendList</div>
      </div>
    </div>
  </div>
</template>

<script>
import Menubar from "@/components/Menubar";
import Navbar from "@/components/Navbar";
export default {
  data() {
    return {
      input: ""
    };
  },
  name: "Chat",
  components: {
    Navbar,
    Menubar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
}
.msg-header {
  background-color: #ddd;
  grid-column: 1/4;
  height: 10vh;
}
.chatArea {
  background-color: #eee;
  grid-column: 1/3;
  height: 70vh;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
}
.searchFriend {
  background-color: #ccc;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
}
.inputArea {
  background-color: #aaa;
  grid-row: 8/9;
}
.friendList {
  background-color: #bbb;
  grid-row: 2/9;
}
</style>
