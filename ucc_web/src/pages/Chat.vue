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
      <div class="chatArea">chatArea</div>
      <div class="friendList">
        <div class="conversationList">
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">對話內容，對話過長會出事</small>
          </div>
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">I Love U js</small>
          </div>
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">I Love U js</small>
          </div>
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">I Love U js</small>
          </div>
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">I Love U js</small>
          </div>
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">I Love U js</small>
          </div>
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">I Love U js</small>
          </div>
          <div class="conversation">
            <img
              src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
              alt="avatar"
            />
            <div class="conversation-name">Roger Wu</div>
            <small class="conversation-content">I Love U js</small>
          </div>
        </div>
      </div>
      <div class="inputArea">
        <div class="inputArea-container">
          <label style="margin-bottom:-3px;margin-right:1rem;">
            <input type="file" style="display:none;" />
            <font-awesome-icon icon="paperclip" size="lg" style="color:#fff;" />
          </label>
          <el-input v-model="input2" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="searchFriend">
        <el-input placeholder="搜尋朋友" prefix-icon="el-icon-search" v-model="input1" clearable></el-input>
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
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  margin-top: 20px;
  margin-left: 20%;
  box-sizing: border-box;
  padding: 0;
}
.msg-header {
  background-image: linear-gradient(135deg, #f57852 0%, rgb(255, 150, 80) 100%);
  grid-column: 1/4;
  height: 10vh;
  grid-row: 1/2;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: white 1px solid;
}
.chatArea {
  background-color: #fec163;
  grid-column: 1/3;
  grid-row: 2/8;
}
.friendList {
  grid-row: 2/8;
  overflow-y: hidden;
  max-height: 60vh;
}
.friendList:hover {
  overflow-y: scroll;
}
.inputArea {
  background-image: linear-gradient(180deg, #fec163 10%, #e77a58 100%);
  grid-row: 8/9;
  grid-column: 1/3;
  border-bottom-left-radius: 10px;
  border-right: #fff 1px solid;
  border-top: white 1px solid;
}
.searchFriend {
  background-image: linear-gradient(180deg, #fec163 10%, #e77a58 100%);
  grid-row: 8/9;
  padding: 0 1rem 0 1rem;
  display: grid;
  align-items: center;
  border-bottom-right-radius: 10px;
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
  justify-content: flex-start;
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
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 1rem 0 1rem;
}
.inputArea-container label {
  transition: all 0.3s ease;
  cursor: pointer;
}
.inputArea-container label:hover {
  transform: scale(1.3, 1.3);
}
.conversation {
  padding: 10px;
  background-color: #ff6348;
  /* background-image: linear-gradient(135deg, #ff9d6c 10%, #bb4e75 100%); */
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: white 1px solid;
  color: white;
  transition: all 0.3s ease;
}
.conversation:hover {
  background: rgb(245, 168, 116);
}
.conversation img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
.conversation-name {
  align-self: flex-start;
  margin: 5px 0 0 5px;
  font-weight: bold;
}
.conversation-content {
  margin: 10px 0 0 -73px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ddd;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: #bbb;
}
/* ::-webkit-scrollbar:hover {
  display: contents;
} */
</style>
