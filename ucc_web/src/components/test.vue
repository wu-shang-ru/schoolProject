<template>
  <div class="Chat">
    <Navbar></Navbar>
    <Menubar></Menubar>
    <div class="container">
      <div id="chatPersonInfo"></div>
      <div id="chatContainer">
        <div id="chatContent"></div>
        <div id="chatInputArea">
          <el-input
            id="chatInputBox"
            placeholder="请输入内容"
            v-model="input"
            clearable
            resize="horizontal"
          ></el-input>
        </div>
      </div>
      <div id="friendArea">
        <div id="searchFriend"></div>
        <div id="friendList"></div>
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
.Chat {
  height: 100%;
  overflow: hidden;
}
.container {
  position: relative;
  margin: 20px 0 -81px 220px;
  min-height: 100vh;
  padding: 2vh;
  background-color: lightcoral;
}
#chatPersonInfo {
  height: 12vh;
  width: 100%;
  background-color: lightseagreen;
}
#chatContainer {
  float: left;
  width: 68%;
  height: 72vh;
  margin-top: 2vh;
  background-color: mediumpurple;
}
#friendArea {
  float: left;
  width: 30.5%;
  height: 72vh;
  background-color: olive;
  margin-top: 2vh;
  margin-left: 2vh;
}
#chatContent {
  position: relative;
  height: 90%;
  width: 100%;
  background-color: orange;
}
#chatInputArea {
  position: relative;
  height: 12%;
  width: 100%;
  background-color: orchid;
}
#searchFriend {
  position: relative;
  height: 10%;
  width: 100%;
  background-color: pink;
}
#friendList {
  position: relative;
  height: 90%;
  width: 100%;
  background-color: purple;
}
#chatInputBox {
  width: 60%;
}
</style>
