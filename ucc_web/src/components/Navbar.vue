<template>
  <div class="Menubar-new">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
<<<<<<< HEAD
        <img class="logo" src="../../member/Eric/img/UCC Classic.jpg" />
        <span id="fl">
          <h3>University Club Center</h3>
        </span>
      </el-menu-item>
      <el-menu-item>
        <el-input v-model="search" @focus="searchOnfocus" @blur="searchOnblur" clearable>
=======
        <router-link to="/">
          <h3 style="margin-top:10px">University Clue Center</h3>
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <el-input placeholder="請輸入內容" v-model="search">
>>>>>>> 6dff7ba4bf2a35790f834ac3b776e777c7b57e1f
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
          <el-menu-item class="rightBtn" index="5-1" href="#">選項1</el-menu-item>
          <el-menu-item class="rightBtn" index="5-2" href="#">選項2</el-menu-item>
          <el-menu-item class="rightBtn" index="5-3" href="#">選項3</el-menu-item>
        </el-submenu>

        <!-- 登入狀態改變時會有不同的項目出現 -->
        <!-- 未登入 -->
        <el-menu-item
          index="6"
          href="#"
          class="rightBtn"
          data-toggle="modal"
          data-target="#Login"
          v-if="loginState === false"
        >
          <i class="el-icon-user-solid" style="color:#A9A9A9"></i>
        </el-menu-item>
        <!-- 已登入 -->
        <el-submenu index="6" href="#" class="rightBtn" v-if="loginState === true">
          <template slot="title" class="rightBtn">
            <i class="el-icon-user-solid" style="color:#A9A9A9"></i>
          </template>
          <router-link to="/user/info">
            <el-menu-item class="rightBtn" index="6-1" href="#">個人資料</el-menu-item>
          </router-link>
          <el-menu-item class="rightBtn" index="6-2" href="#">發佈新活動</el-menu-item>
          <el-menu-item class="rightBtn" index="6-3" @click.native="logout">登出</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>  
<script>
import { mapActions } from "vuex";
import { authenticated } from "@/utils/AuthStore";

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
      activeIndex2: "1",
      loginState: ""
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    ...mapActions({
      logout: "auth/logout"
    })
  },

  mounted() {
    if (authenticated()) {
      this.loginState = true;
    } else {
      this.loginState = false;
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
.logo {
  height: 40px;
  width: 70px;
  margin: 0 13px 5px 0;
}
#fl {
  margin-top: 10px;
  float: right;
}
@media screen and (max-width: 895px) {
  .rightBtnGroup {
    width: 100%;
  }
}
</style>