<template>
  <div class="Navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-nav class="nav-menu">
        <b-nav-item id="bar-links">
          <a href="#">menu content</a>
          <a href="#">menu content</a>
          <a href="#">menu content</a>
        </b-nav-item>
        <b-nav-item class="icon" @click="clickfunction()">
          <font-awesome-icon icon="bars" size="lg" />
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-brand href="#">Student Club for UCC</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>-->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Search Bar -->
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              id="search_box"
              v-model="search"
              :value="search"
              @focus="searchOnfocus"
              @blur="searchOnblur"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 mr-5" type="submit">
              <font-awesome-icon icon="search" size="lg" />
            </b-button>
          </b-nav-form>

          <!-- Chat Button -->
          <b-nav-item class="nav-item mr-2" href="#">
            <font-awesome-icon icon="comment" size="lg" />
            <span class="nav-font">Chat</span>
          </b-nav-item>
          <!-- friend-list DropDown -->
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <font-awesome-icon icon="user-friends" size="lg" />
              <span class="nav-font">Friends</span>
            </template>
            <b-dropdown-item href="#">##</b-dropdown-item>
            <b-dropdown-item href="#">##</b-dropdown-item>
            <b-dropdown-item href="#">##</b-dropdown-item>
            <b-dropdown-item href="#">##</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- UserLogin Button -->
          <b-nav-item class="nav-item mr-2" href="#" data-toggle="modal" data-target="#Login">
            <font-awesome-icon icon="user-circle" size="lg" />
            <span class="nav-font">Login</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login";

import { signin } from "@/api/auth";
import { mapActions, mapGetters } from "vuex";
import jquery from "jquery";

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
      search: "Search"
    };
  },

  components: {
    Login
  },

  methods: {
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
      if (this.search === "Search") {
        this.search = "";
      }
    },

    searchOnblur() {
      if (this.search === "") {
        this.search = "Search";
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
.Navbar {
  position: relative;
  width: 100%;
}
#bar-links {
  display: none;
}
.nav-menu {
  margin-right: 5px;
}
.nav-menu a {
  display: block;
}
.nav-menu a.icon {
  display: block;
  color: white;
}
</style>