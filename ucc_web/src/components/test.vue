<template>
  <div class="Menubar-new">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <h3 style="margin-top:10px">University Clue Center</h3>
      </el-menu-item>
      <el-menu-item>
        <el-input placeholder="請輸入內容" v-model="search">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>

      <div class="rightBtnGroup">
        <el-menu-item index="4" href="#" class="rightBtn">
          <i class="el-icon-chat-line-square" size="medium"></i>
        </el-menu-item>

        <el-submenu index="5" href="#" class="rightBtn">
          <template slot="title" class="rightBtn">
            <font-awesome-icon icon="user-friends" size="lg" style="color:#A9A9A9" />
          </template>
          <el-menu-item class="rightBtn" index="5-1" href="#">选项1</el-menu-item>
          <el-menu-item class="rightBtn" index="5-2" href="#">选项2</el-menu-item>
          <el-menu-item class="rightBtn" index="5-3" href="#">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="6" href="#" class="rightBtn" data-toggle="modal" data-target="#Login">
          <i class="el-icon-user-solid" style="color:#A9A9A9"></i>
        </el-menu-item>
      </div>
    </el-menu>
    <Login></Login>
  </div>
</template>  
<script>
import Login from "@/components/Login";

export default {
  name: "Navbar",

  data() {
    return {
      email: "",
      password: "",
      token: {
        tokenType: "",
        accessToken: ""
      },
      search: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },

  components: {
    Login
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightBtnGroup {
  display: flex;
  justify-content: flex-end;
}
.Icon {
  border: 0px;
}
</style>