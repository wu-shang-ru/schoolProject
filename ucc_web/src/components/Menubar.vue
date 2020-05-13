<template>
  <div class="Menubar">
    <input type="checkbox" id="checkForMenu" />

    <label for="checkForMenu" @click="animation">
      <div :class="toggleIsFalse ? 'toggle' : 'burger'">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </label>
    <ul class="menu">
      <li class="menuItem">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            width="50px"
            height="50px"
            style="border-radius:50%;"
          />
        </a>
        <span slot="title">社團名稱</span>
      </li>
      <li class="menuItem">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            width="50px"
            height="50px"
            style="border-radius:50%;"
          />
        </a>
        <span slot="title">社團名稱</span>
      </li>
      <li class="menuItem">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            width="50px"
            height="50px"
            style="border-radius:50%;"
          />
        </a>
        <span slot="title">社團名稱</span>
      </li>
      <li class="menuItem">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            width="50px"
            height="50px"
            style="border-radius:50%;"
          />
        </a>
        <span slot="title">社團名稱</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleIsFalse: false
    };
  },
  methods: {
    animation() {
      if (this.toggleIsFalse === false) {
        this.toggleIsFalse = true;
      } else {
        this.toggleIsFalse = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Menubar {
  position: absolute;
}

#checkForMenu {
  display: none;
}
.checkMenu {
  cursor: pointer;
  position: absolute;
}
.menuItem:hover {
  background-color: rgb(255, 166, 82);
  color: white;
}
ul li span {
  display: none;
  font-size: 1.2rem;
  animation: fadein 0.3s ease-in;
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
#checkForMenu:checked ~ ul li span {
  display: block;
  margin-left: 8px;
}
#checkForMenu:checked ~ ul li {
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
label {
  height: 25px;
}
.menu {
  list-style: none;
  position: fixed;
  top: 70px;
  left: 20px;
  margin: 0;
  padding: 0;
}
.menuItem {
  background-color: white;
  width: 60px;
  height: 70px;
  display: flex;
  align-items: center;
  transition: 0.3s ease;
  border-right: orange 1px solid;
  font-weight: bold;
  cursor: pointer;
}
.burger {
  cursor: pointer;
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
@media screen and (max-width: 837px) {
  .menu {
    transition: all 0.5s ease;
    width: 100vw;
    height: 100vh;
    top: 62px;
    left: -100vw;
    z-index: 3;
    opacity: 0;
  }
  .menuItem {
    width: 100vw;
    height: 100vh;
    background-color: orange;
  }
  #checkForMenu:checked ~ .menu {
    background-color: orange;
    opacity: 0.8;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  #checkForMenu:checked ~ ul li {
    background-color: orange;
    width: 100%;
    justify-content: center;
  }
  #checkForMenu:checked ~ ul li:hover {
    background-color: rgb(252, 175, 87);
    color: white;
  }
}
</style>