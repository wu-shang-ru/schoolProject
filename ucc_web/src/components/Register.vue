<template>
  <div class="register">
    <div
      class="modal fade"
      id="register"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content registerDiv">
          <div class="modal-body">
            <h4>歡迎註冊UCC帳號</h4>
            <div class="input-group input-group-sm registerDivPading mt-4 inputBorder">
              <input
                type="text"
                id="userName"
                class="form-control textLetterSpacing"
                placeholder="輸入您的稱謂"
                aria-describedby="inputGroup-sizing-sm"
                v-model="userName"
              />
            </div>
            <div class="input-group input-group-sm registerDivPading mt-4 inputBorder">
              <input
                type="text"
                id="userEmail"
                class="form-control textLetterSpacing"
                placeholder="輸入您的 E-mail 信箱"
                aria-describedby="inputGroup-sizing-sm"
                v-model="userEmail"
              />
            </div>
            <div class="input-group input-group-sm registerDivPading mb-3 mt-5 inputBorder">
              <input
                type="password"
                id="userPassword"
                class="form-control textLetterSpacing"
                placeholder="輸入您欲設定的密碼"
                aria-describedby="inputGroup-sizing-sm"
                v-model="userPassword"
              />
            </div>
            <div class="input-group input-group-sm registerDivPading mb-3 mt-4 inputBorder">
              <input
                type="password"
                id="reUserPassword"
                class="form-control textLetterSpacing"
                placeholder="請重複輸入您設定的密碼"
                aria-describedby="inputGroup-sizing-sm"
                v-model="reUserPassword"
              />
            </div>
            <div class="alertDiv mb-3">{{alertText}}</div>
            <div class="notice">請使用英文字母及阿拉伯數字和部分特殊符號</div>
            <div class="registerBtn">
              <el-button type="primary" round :loading="isClick===true" @click="register">註冊</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signup } from "@/api/auth";
export default {
  name: "register",

  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: "",
      reUserPassword: "",
      isClick: false,
      alertText: ""
    };
  },

  methods: {
    signup,

    correctPassword() {
      this.isClick = true;
      let userInfo = {
        name: this.userName,
        email: this.userEmail,
        password: this.userPassword
      };
      this.signup(userInfo)
        .then(resp => {
          alert("註冊成功!");
          console.log(resp.data);
          location.reload();
        })
        .catch(err => {
          console.log(err);
        });
      this.isClick = false;
    },

    errPassword() {
      this.alertText = "密碼不一致，請再次確認。";
    },

    register() {
      if (this.userPassword === this.reUserPassword) {
        this.correctPassword();
      } else {
        this.errPassword();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.registerDiv {
  height: 500px;
  background-image: url(../assets/signInBackground/login.jpg);
  background-size: cover;
}

.registerDivPading {
  position: relative;
  margin: auto;
  width: 350px;
}

h4 {
  margin-top: 30px;
  margin-bottom: 50px;
}

.registerPage {
  position: relative;
  height: 460px;
  box-shadow: 0 0 10px #000000;
  padding-top: 60px;
  background-image: url(../assets/signInBackground/login.jpg);
  background-size: cover;
}

.inputBorder {
  border: 1px #747474 solid;
}

.notice {
  position: relative;
  font-size: 10px;
  left: 80px;
}

.registerBtn {
  margin-top: 25px;
}

.alertDiv {
  position: relative;
  font-size: 10px;
  color: red;
  font-weight: bold;
  left: 80px;
}
</style>
