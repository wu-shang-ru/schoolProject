<template>
  <div class="ContentList mt-4">
    <!-- <nav aria-label="breadcrumb" class="float-right titieList">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" @click="listPrint='hotList'">
          <a href="#">熱門</a>
        </li>
        <li class="breadcrumb-item" @click="listPrint='newList'">
          <a href="#">最新</a>
        </li>
        <li class="breadcrumb-item" @click="listPrint='followList'">
          <a href="#">追蹤</a>
        </li>
      </ol>
    </nav>-->
    <div class="selectList">
      <el-radio-group v-model="radio" @change="changeList">
        <el-radio :label="1">
          <b>熱門活動</b>
        </el-radio>
        <el-radio :label="2">
          <b>最新活動</b>
        </el-radio>
        <el-radio :label="3">
          <b>追蹤活動</b>
        </el-radio>
      </el-radio-group>
    </div>
    <keep-alive>
      <component :is="listPrint"></component>
    </keep-alive>

    <!-- <div class="block mt-3">
      <el-pagination layout="prev, pager, next" :total="100"></el-pagination>
    </div>-->

    <!-- <div class="item">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 imgBox">
            <img
              src="https://exfast.me/wp-content/uploads/2019/04/1554182762-cddf42691119d44059a16a4095047a33-1140x600.jpg"
              class="itemImg"
            />
          </div>
          <div class="col-lg-9 itemContent">
            <h3 class="itemTitle mb-3">活動主題，名稱。</h3>
            <div class="itemIntroduction mb-4">
              <h6>內容大綱介紹內容大綱介紹內紹內容大綱介紹大容大綱介紹內容大容大綱容大綱介紹內容大容大容大綱介紹內容大容大容大綱介紹內容大容大容大綱介紹內容大容大容大綱介紹內容大容大容大綱介紹內容大容大介紹內容大綱介</h6>
            </div>
            <div class="itemAttention">
              關注度：12
              <br />留言數：23
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import hotList from "@/components/listGroup/hotList";
import newList from "@/components/listGroup/newList";
import followList from "@/components/listGroup/followList";

export default {
  name: "ContentList",

  components: {
    hotList,
    newList,
    followList
  },

  data() {
    return {
      listPrint: "hotList",
      radio: 1
    };
  },

  methods: {
    changeList(val) {
      if (val == 1) {
        this.listPrint = "hotList";
      } else if (val == 2) {
        this.listPrint = "newList";
      } else if (val == 3) {
        this.listPrint = "followList";
      }
    }
  }

  // mounted() {
  //   if (this.radio === 1) {
  //     this.listPrint = hotList;
  //   } else if (this.radio === 2) {
  //     this.listPrint = newList;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ContentList {
  position: relative;
  margin: auto;
  width: 900px;
}
.selectList {
  text-align: right;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px #000000;
  height: 35px;
  padding-top: 8px;
  padding-right: 10px;
}
</style>
