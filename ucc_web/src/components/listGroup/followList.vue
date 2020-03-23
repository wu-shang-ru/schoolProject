<template>
  <div class="followList">
    <div class="list-group">
      <div v-for="index in followList" :key="index">
        <router-link :to="index.link">
          <a class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-lg-1">
                <img class="smallPicture" src="@/assets/userPhoto/user.png" alt="userPhoto" />
              </div>
              <div class="col-lg-3 text-left">{{index.title}}</div>
              <div class="col-lg-8 text-left">{{index.message}}</div>
            </div>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "followList",
  data() {
    return {
      followList: [
        {
          title: "追蹤標題",
          message: "快來參加!",
          link: "/abc"
        },
        {
          title: "吉他社聯合大成發",
          message: "快來參加!",
          link: "/abc"
        },
        {
          title: "吉他社聯合大成發",
          message: "快來參加!",
          link: "/abc"
        },
        {
          title: "吉他社聯合大成發",
          message: "快來參加!",
          link: "/abc"
        },
        {
          title: "吉他社聯合大成發",
          message: "快來參加!",
          link: "/abc"
        },
        {
          title: "熱舞社期末展",
          message: "不見不散!",
          link: "/def"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item {
  height: 55px;
  border-left: none;
  border-right: none;
  border-radius: 0px;
}
.smallPicture {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 1px solid #acacac;
}
</style>
