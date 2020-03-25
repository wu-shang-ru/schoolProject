<template>
  <div class="ContentList mt-4">
    <nav aria-label="breadcrumb" class="float-right titieList">
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
    </nav>
    <keep-alive>
      <component :is="listPrint"></component>
    </keep-alive>
    <div class="block mt-3">
      <el-pagination layout="prev, pager, next" :total="100"></el-pagination>
    </div>
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
      listPrint: "hotList"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ContentList {
  position: relative;
  border: 1px solid #acacac;
  margin: auto;
  width: 900px;
  height: 430px;
  padding-top: 30px;
}
.titieList {
  position: absolute;
  top: -25px;
  right: 10px;
}
.breadcrumb {
  background-color: #ffffff;
}
.center {
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
