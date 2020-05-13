<template>
  <div class="Menubar-new">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <input type="checkbox" id="check" />
      <el-menu-item index="1" class="uccItem">
        <Menubar class="menubar"></Menubar>
        <router-link to="/">
          <img class="logo" src="../../member/Eric/img/UCC Classic.jpg" />
          <span id="fl">
            <h3>University Club Center</h3>
          </span>
        </router-link>
      </el-menu-item>
      <el-menu-item id="inputArea">
        <el-input v-model="search" @focus="searchOnfocus" @blur="searchOnblur" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>

      <div class="rightBtnGroup">
        <router-link to="/chat" style="text-decoration:none;">
          <el-menu-item index="4" class="rightBtn">
            <i class="el-icon-chat-line-square" size="medium"></i>
            <span class="navFont">Chat</span>
          </el-menu-item>
        </router-link>

        <el-submenu index="5" href="#" class="rightBtn" id="followersBtn">
          <template slot="title">
            <font-awesome-icon
              icon="user-friends"
              size="lg"
              style="color:#A9A9A9;margin-right:8px;"
            />
            <span id="followers" style="font-size:16px;">Followers</span>
          </template>
          <el-menu-item class="rightBtn" index="5-1" href="#" id="dropDownBtn">追蹤者</el-menu-item>
          <el-menu-item class="rightBtn" index="5-2" href="#" id="dropDownBtn">追蹤中的社團</el-menu-item>
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
          <span class="navFont">Login</span>
        </el-menu-item>
        <!-- 已登入 -->
        <el-submenu index="6" href="#" class="rightBtn" v-if="loginState === true">
          <template slot="title" class="rightBtn">
            <i class="el-icon-user-solid" style="color:#A9A9A9"></i>
            <span class="navFont">User</span>
          </template>
          <router-link to="/user/info" style="text-decoration:none;">
            <el-menu-item class="rightBtn" index="6-1" href="#">個人資料</el-menu-item>
          </router-link>
          <el-menu-item class="rightBtn" index="6-2" href="#" id="dropDownBtn">發佈新活動</el-menu-item>
          <el-menu-item class="rightBtn" index="6-3" @click.native="logout" id="dropDownBtn">登出</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <label for="check" @click="animation">
      <div :class="toggleIsFalse ? 'toggle' : 'burger'">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </label>
    <Login></Login>
    <register></register>
  </div>
</template>  
<script>
import { mapActions } from "vuex";
import { authenticated } from "@/utils/AuthStore";
import Login from "@/components/Login";
import register from "@/components/Register";
import Menubar from "@/components/Menubar";

export default {
  name: "Navbar",

  data() {
    return {
      toggleIsFalse: false,
      email: "",
      password: "",
      search: "搜尋社團/活動",
      token: {
        tokenType: "",
        accessToken: ""
      },
      activeIndex: "1",
      activeIndex2: "1",
      loginState: ""
    };
  },

  components: {
    Login,
    register,
    Menubar
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // search的使用者友善
    searchOnfocus() {
      if (this.search === "搜尋社團/活動") {
        this.search = "";
      }
    },
    searchOnblur() {
      if (this.search === "") {
        this.search = "搜尋社團/活動";
      }
    },
    animation() {
      if (this.toggleIsFalse === false) {
        this.toggleIsFalse = true;
      } else {
        this.toggleIsFalse = false;
      }
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
  margin: 0 13px 5px 70px;
}
.menubar {
  width: 50px;
}
#fl {
  margin-top: 10px;
  float: right;
}
#followersBtn {
  width: 80px;
}
#followers {
  color: white;
  display: none;
}
#check {
  display: none;
}
.burger {
  display: none;
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 20px;
}
.toggle {
  display: none;
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 20px;
}
.navFont {
  display: none;
}
#dropDownBtn:hover {
  background-color: #fff5e4;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: orange;
  margin: 5px;
  transition: all 0.2s ease-in;
}
.toggle div {
  transition: all 0.2s ease-in;
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
  width: 25px;
  height: 3px;
  background-color: orange;
  margin: 5px;
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(0px, 0px);
  width: 25px;
  height: 3px;
  background-color: orange;
  margin: 5px;
}
@media screen and (max-width: 980px) {
  .rightBtnGroup {
    position: fixed;
    width: 200px;
    height: 168px;
    top: 60px;
    flex-direction: column;
    right: 0;
    text-align: center;
    background-color: rgb(255, 180, 94);
    right: -200px;
    transition: all 0.3s ease;
  }
  .rightBtn {
    display: block;
    font-size: 16px;
    color: white;
    text-decoration: none;
  }
  .rightBtn:hover {
    color: black;
  }
  .burger {
    display: block;
  }
  .toggle {
    display: block;
  }
  .navFont {
    display: inline;
  }
  #check:checked ~ .rightBtnGroup {
    right: 0;
  }
  #followers:hover {
    color: #000;
  }
  #followers {
    display: inline;
  }
  #followersBtn {
    width: 100%;
  }
  font-awesome-icon {
    color: white;
  }
}
@media screen and (max-width: 837px) {
  #inputArea {
    position: fixed;
    top: 60px;
    left: 0;
    width: 250px;
  }
}
@media screen and (max-width: 555px) {
  .burger {
    position: fixed;
    top: 80px;
    right: 10px;
  }
  .toggle {
    position: fixed;
    top: 80px;
    right: 10px;
  }
  .rightBtnGroup {
    top: 120px;
    width: 180px;
  }
}
@media screen and (max-width: 480px) {
  #fl h3 {
    font-size: 1.5rem;
    margin-top: 5px;
  }
  .logo {
    height: 30px;
    width: 55px;
    margin-left: 50px;
  }
  .uccItem {
    padding: 0;
  }
}
</style>