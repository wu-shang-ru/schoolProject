<template>
  <div class="Chat">
    <Navbar></Navbar>
    <Menubar></Menubar>
    <div class="container">
      <div class="msg-header">
        <div class="msg-header-container">
          <a href="https://google.com">
            <img
              id="avatar"
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
              alt="Avatar"
            />
            <label for="avatar">Johnny Wang</label>
          </a>
        </div>
      </div>
      <div class="chatArea">
        chatArea
        <div class="inputArea">
          <div class="inputArea-container">
            <font-awesome-icon icon="paperclip" size="lg" style="color:#fff;margin-right:1rem;" />
            <el-input v-model="input2" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
      <div class="friendList">
        <div class="conversation">sodifjosidjf</div>
        <div class="searchFriend">
          <el-input placeholder="搜尋朋友" prefix-icon="el-icon-search" v-model="input1" clearable></el-input>
        </div>
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
      input1: "",
      input2: ""
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
  margin-left: 20%;
  box-sizing: border-box;
}
.msg-header {
  background-color: rgb(255, 148, 60);
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
.friendList {
  background-color: #ccc;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
}
.inputArea {
  background-color: #aaa;
  grid-row: 8/9;
}
.searchFriend {
  background-color: #bbb;
  grid-row: 8/9;
  padding: 0 1rem 0 1rem;
  display: grid;
  align-items: center;
  grid-area: .searchFriend;
}
.searchFriend el-input {
  border-radius: 30px;
}
.msg-header-container img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: -10px 20px 0 20px;
  cursor: pointer;
}
.msg-header-container {
  display: flex;
  justify-content: start;
  align-items: center;
  line-height: 10vh;
}
.msg-header-container label {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
}
.msg-header-container label:hover {
  text-decoration: underline;
}
.inputArea-container {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  padding: 0 1rem 0 1rem;
}
.conversation {
  padding: 20px;
  background-color: #fff;
}
</style>
