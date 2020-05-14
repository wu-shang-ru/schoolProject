<template>
  <div class="hotList">
    <div class="item" v-for="index in hotList" :key="index">
      <div class="imgBox">
        <img :src="index.img" class="itemImg" />
      </div>
      <div class="itemContent">
        <h3 class="itemTitle mb-3">{{index.title}}</h3>
        <div class="itemIntroduction mb-4">
          <h6>{{index.message}}</h6>
        </div>
        <div class="itemAttention">
          關注度：12
          <br />留言數：23
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotList",
  data() {
    return {
      hotList: [
        {
          title: "聯網未來挑戰賽(hotList)",
          message:
            "快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!快來參加!",
          img:
            "https://files.bountyhunter.co/contest/public/202004/f5eac69d-0e16-46f9-b228-f75a15f77c3c_640x640.png"
        },
        {
          title: "「舜間發現愛，興善攝光彩」廟會創意攝影與創",
          message:
            "木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人木頭人!",
          img:
            "https://files.bountyhunter.co/contest/public/202004/8ae04293-cd11-40d0-9040-d7578369dcd6_640x640.png"
        },
        {
          title: "WHO需要你的關心？關懷譚先生大賽",
          message:
            "火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人火星人",
          img:
            "https://files.bountyhunter.co/contest/public/202004/91e55cfd-2414-4230-a830-9adf72a980a2_640x640.jpg"
        },
        {
          title: "藝術智能之「我眼中的抗疫英雄」創作繪畫比賽",
          message:
            "隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的隨機的",
          img:
            "https://files.bountyhunter.co/contest/public/202004/7e4ebc1b-1ff2-4e8b-aa8d-7fc42cf045e4_640x640.png"
        },
        {
          title: "109年使用牌照稅網路有獎徵答",
          message: "快來參加!",
          img:
            "https://files.bountyhunter.co/contest/public/202004/9773bdd1-948f-4d66-9cde-0c1854f3a51f_640x640.png"
        },
        {
          title: "熱舞社期末展",
          message: "不見不散!",
          img: "/def"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 160px;
  width: 100%;
  box-shadow: 0 0 3px #2e2e2e;
  background-color: #ffffff;
  margin: 20px 0px;
}
.itemImg {
  height: 160px;
  width: 100%;
}
.imgBox {
  padding: 0px;
  grid-column: 1/2;
  grid-row: 1/3;
}
.itemContent {
  grid-column: 2/5;
  grid-row: 1/3;
  padding: 0px 15px;
}
.itemTitle {
  text-align: left;
}
.itemIntroduction {
  text-align: left;
  height: 35px;
}
.itemAttention {
  text-align: right;
}
</style>
