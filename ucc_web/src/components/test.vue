<template>
  <div class="Menubar">
    <div @click="openClose" style="margin-bottom: 20px;margin-top:20px;">
      <el-radio-button v-model="isCollapse" :label="isOpen">{{tips}}</el-radio-button>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="1">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            width="35px"
            height="35px"
          />
        </a>
        <span slot="title">社團名稱</span>
      </el-menu-item>
      <el-menu-item index="2">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646027"
            width="35px"
            height="35px"
          />
        </a>
        <span slot="title">社團名稱</span>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            width="35px"
            height="35px"
          />
        </a>
        <span slot="title">社團名稱</span>
      </el-menu-item>
      <el-menu-item index="4">
        <a href="https://google.com">
          <img
            class="menuIcon"
            src="http://ntcbadm1.ntub.edu.tw/Inc/ShowIndexStdImg.ashx?dataPic=10646029"
            width="35px"
            height="35px"
          />
        </a>
        <span slot="title">社團名稱</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
        <el-submenu index="5" href="#" class="rightBtn">
          <template slot="title" class="rightBtn">
            <font-awesome-icon icon="user-friends" size="lg" style="color:#A9A9A9" />
          </template>
          <el-menu-item class="rightBtn" index="5-1" href="#">选项1</el-menu-item>
          <el-menu-item class="rightBtn" index="5-2" href="#">选项2</el-menu-item>
          <el-menu-item class="rightBtn" index="5-3" href="#">选项3</el-menu-item>
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

export default {
  data() {
    return {
      isCollapse: true,
      isOpen: false,
      tips: "＞"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    openClose() {
      this.isOpen = !this.isOpen;
      var tips;
      if (tips === "＞") {
        tips = "＜";
      } else {
        tips = "＞";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.Menubar {
  position: absolute;
}
.menuIcon {
  border-radius: 50%;
}
</style>