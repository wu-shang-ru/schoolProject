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
      <el-menu-item index="1">
        <img class="logo" src="../../member/Eric/img/UCC Classic.jpg" />
        <span id="fl">
          <h3 id="uccFont">University Club Center</h3>
        </span>
      </el-menu-item>
      <el-menu-item>
        <el-input v-model="search" @focus="searchOnfocus" @blur="searchOnblur" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-menu-item>

      <div class="rightBtnGroup">
        <el-menu-item index="4" href="#" class="rightBtn">
          <i class="el-icon-chat-line-square" size="medium"></i>
          <span class="navFont">Chat</span>
        </el-menu-item>

        <el-submenu index="5" href="#" class="rightBtn" id="friendBtn">
          <template slot="title">
            <font-awesome-icon
              icon="user-friends"
              size="lg"
              style="margin-right:8px;color:#A9A9A9;"
            />
            <span style="color:#fff;font-size:16px;">Friends</span>
          </template>
          <el-menu-item class="rightBtn" index="5-1" href="#">Friends1</el-menu-item>
          <el-menu-item class="rightBtn" index="5-2" href="#">Friends2</el-menu-item>
          <el-menu-item class="rightBtn" index="5-3" href="#">Friends3</el-menu-item>
        </el-submenu>
        <el-menu-item index="6" href="#" class="rightBtn" data-toggle="modal" data-target="#Login">
          <i class="el-icon-user-solid"></i>
          <span class="navFont">User</span>
        </el-menu-item>
      </div>
    </el-menu>
    <label for="check">
      <font-awesome-icon class="checkBtn" icon="bars" size="lg" style="color:#A9A9A9" />
    </label>

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
.logo {
  height: 40px;
  width: 70px;
  margin: 0 13px 5px 0;
}
#fl {
  margin-top: 10px;
  float: right;
}
#friendBtn {
  width: 80px;
}
#check {
  display: none;
}
.checkBtn {
  display: none;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 40px;
}
.navFont {
  display: none;
}
@media screen and (max-width: 910px) {
  .rightBtnGroup {
    position: fixed;
    width: 20%;
    height: 168px;
    top: 60px;
    flex-direction: column;
    right: 0;
    text-align: center;
    background-color: rgb(255, 180, 94);
    right: -20%;
    transition: all 0.3s ease;
  }
  .rightBtn {
    display: block;
    font-size: 16px;
    color: white;
  }
  .checkBtn {
    display: block;
  }
  .navFont {
    display: inline;
  }
  #check:checked ~ .rightBtnGroup {
    right: 0;
  }
  #friendBtn {
    width: 100%;
  }
}
</style>