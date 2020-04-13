<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content logInDiv">
          <div class="modal-body">
            <h4 class="mt-3">歡迎回到UCC.</h4>
            <h5>登入帳號開始享受UCC吧</h5>
            <div class="input-group input-group-sm logInDivPading mb-3 mt-4">
              <input
                type="text"
                :class="{inputError : inputIsError}"
                class="form-control textLetterSpacing"
                placeholder="輸入您的 E-mail 信箱"
                aria-describedby="inputGroup-sizing-sm"
                v-model="email"
              />
            </div>
            <div class="input-group input-group-sm logInDivPading mt-4">
              <input
                type="password"
                :class="{inputError : inputIsError}"
                class="form-control textLetterSpacing"
                placeholder="輸入您的密碼"
                aria-describedby="inputGroup-sizing-sm"
                v-model="password"
              />
            </div>
            <div class="alertDiv mb-3">{{alertDiv.alertText}}</div>
            <el-button type="primary" round :loading="onLoading===isLoading" @click="login">登入</el-button>
            <h6 class="mb-3 mt-4">其他登入方式</h6>
            <div class="logInWay">
              <a
                href="http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect"
              >
                <button type="button" class="btn btn-outline-secondary mb-2 btnWidth">Google登入</button>
              </a>
              <br />
              <a
                href="http://localhost:8080/oauth2/authorize/facebook?redirect_uri=http://localhost:3000/oauth2/redirect"
              >
                <button type="button" class="btn btn-outline-secondary mb-3 btnWidth">Facebook登入</button>
              </a>
            </div>
            <h6 class="mt-3">
              沒有帳號嗎?
              <span>
                <a href="#" data-toggle="modal" data-target="#register">註冊</a>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signin } from "@/api/auth";
import { mapActions } from "vuex";
import jquery from "jquery";

export default {
  data() {
    return {
      dialogVisible: false,
      onLoading: "true",
      isLoading: "false",
      email: "",
      password: "",
      token: {
        tokenType: "",
        accessToken: ""
      },
      alertDiv: {
        alertText: ""
      },
      inputIsError: false
    };
  },

  methods: {
    closeModal() {
      jquery("#Login").modal("toggle");
    },

    login() {
      this.isLoading = "true";
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
          this.isLoading = "false";
          if ((this.email === "") & (this.password === "")) {
            this.inputIsError = true;
            this.alertDiv.alertText = "抱歉，信箱帳號及密碼必須輸入。";
          } else {
            this.alertDiv.alertText =
              "抱歉，您輸入帳密有誤，請重新確認帳號密碼。";
          }
        });
    },

    ...mapActions({
      storeToken: "auth/login"
    })
  },

  name: "LogIn"
};
</script>

<style scoped>
.logInDiv {
  height: 500px;
  background-image: url(../assets/signInBackground/login.jpg);
  background-size: cover;
}

.logInDivPading {
  position: relative;
  margin: auto;
  width: 350px;
}

.textLetterSpacing {
  letter-spacing: 1px;
}

.centerPadding {
  position: relative;
  margin: auto;
  text-align: center;
  width: 300px;
}

.logInWay button {
  position: relative;
  width: 220px;
  margin: auto;
  margin-bottom: 5px;
}

.btnWidth {
  width: 200px;
}

.alertDiv {
  position: relative;
  font-size: 10px;
  color: red;
  font-weight: bold;
  left: 80px;
}

.inputError {
  background-color: #ffc4c4;
}
</style>