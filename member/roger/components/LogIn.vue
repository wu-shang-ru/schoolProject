<template>
  <div class="LogIn">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#Login"
    >Launch demo modal</button>

    <!-- Modal -->
    <div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content logInDiv">
          <div class="modal-body">
            <h4>歡迎回到UCC.</h4>
            <h5>登入帳號開始享受UCC吧</h5>
            <div class="input-group input-group-sm logInDivPading mb-3 mt-4 inputBorder">
              <input
                type="text"
                class="form-control textLetterSpacing"
                placeholder="輸入您的帳號"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div class="input-group input-group-sm logInDivPading mb-3 mt-4 inputBorder">
              <input
                type="password"
                class="form-control textLetterSpacing"
                placeholder="輸入您的密碼"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div class="centerPadding mb-3">
              <button type="button" class="btn btn-link" id="dataConfirm">登入</button>
            </div>
            <h6 class="mb-3">其他登入方式</h6>
            <div class="logInWay">
              <button type="button" class="btn btn-outline-secondary mb-2 btnWidth">Google登入</button>
              <br />
              <button type="button" class="btn btn-outline-secondary mb-2 btnWidth">Facebook登入</button>
              <br />
              <button type="button" class="btn btn-outline-secondary btnWidth">E-mail 登入</button>
            </div>
            <h6 class="mt-3">
              沒有帳號嗎?
              <span>
                <a href="#">註冊</a>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logInDiv {
  height: 500px;
  background-image: url(../assets/login.jpg);
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
</style>
