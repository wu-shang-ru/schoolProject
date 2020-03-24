<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-lg"></div>
        <div class="col-lg-6 registerPage">
          <h4>歡迎註冊UCC帳號</h4>
          <div class="input-group input-group-sm logInDivPading mt-4 inputBorder">
            <input
              type="text"
              id="userEmail"
              class="form-control textLetterSpacing"
              placeholder="輸入您的 E-mail 信箱"
              aria-describedby="inputGroup-sizing-sm"
              v-model="userEmail"
            />
          </div>
          <div class="input-group input-group-sm logInDivPading mb-3 mt-5 inputBorder">
            <input
              type="password"
              id="userPassword"
              class="form-control textLetterSpacing"
              placeholder="輸入您欲設定的密碼"
              aria-describedby="inputGroup-sizing-sm"
              v-model="userPassword"
            />
          </div>
          <div class="input-group input-group-sm logInDivPading mb-3 mt-4 inputBorder">
            <input
              type="password"
              id="reUserPassword"
              class="form-control textLetterSpacing"
              placeholder="請重複輸入您設定的密碼"
              aria-describedby="inputGroup-sizing-sm"
              v-model="reUserPassword"
            />
          </div>
          <div class="notice">請使用英文字母及阿拉伯數字和部分特殊符號</div>
          <div class="registerBtn">
            <button type="button" class="btn btn-link mt-4">註冊</button>
          </div>
        </div>
        <div class="col-lg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      userEmail: "",
      userPassword: "",
      reUserPassword: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
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
.logInDivPading {
  position: relative;
  margin: auto;
  width: 350px;
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
</style>
