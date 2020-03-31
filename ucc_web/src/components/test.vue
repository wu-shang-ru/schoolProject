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

<script>
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