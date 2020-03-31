<template>
  <div class="Menubar-new">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <h3 style="margin-top:10px">University Club Center</h3>
      </el-menu-item>
      <el-menu-item>
        <el-input v-model="search" @focus="searchOnfocus" @blur="searchOnblur">
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
          <el-menu-item class="rightBtn" index="5-1" href="#">Friends1</el-menu-item>
          <el-menu-item class="rightBtn" index="5-2" href="#">Friends2</el-menu-item>
          <el-menu-item class="rightBtn" index="5-3" href="#">Friends3</el-menu-item>
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

import { signin } from "@/api/auth";
import { mapActions, mapGetters } from "vuex";
import jquery from "jquery";

export default {
  name: "Menubar",
  data() {
    return {
      input: "",
      activeIndex: "1",
      activeIndex2: "1",
      email: "",
      password: "",
      token: {
        tokenType: "",
        accessToken: ""
      },
      search: "搜尋社團/活動"
    };
  },
  components: {
    Login
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    closeModal() {
      jquery("#Login").modal("toggle");
    },

    login() {
      var userInfo = {
        email: this.email,
        password: this.password
      };
      var jsonData = userInfo;
      signin(jsonData)
        .then(resp => {
          this.token.tokenType = resp.data.tokenType;
          this.token.accessToken = resp.data.accessToken;
          const token = this.token;
          this.storeToken(token);
          this.closeModal();
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err.message);
          alert("抱歉，您輸入帳密有誤喔!");
        });
    },

    ...mapActions({
      storeToken: "auth/login"
    }),

    clickfunction() {
      var x = document.getElementById("bar-links");
      if (x.style.display == "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
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
    }
  },
  computed: {
    ...mapGetters({
      userInfo: "auth/userInfo"
    })
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