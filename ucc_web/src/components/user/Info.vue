<template>
  <div class="info">
    <div class="container userinfo">
      <div class="row">
        <div class="col-lg-12">
          <div class="photoGroup">
            <div class="row">
              <div class="col-lg-12">
                <div class="userBackgroundPhoto">
                  <el-image :src="src" class="PhotoSize"></el-image>
                </div>
              </div>
            </div>
            <div class="row marginTop-100px">
              <div class="col-lg-3 userPhoto">
                <el-avatar :size="130
                " :src="userInfo.imgUrl"></el-avatar>
              </div>
            </div>
            <div class="row photoBtn">
              <div class="col-lg-4">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">上傳大頭貼</el-button>
                </el-upload>
              </div>
              <div class="col-lg-8">
                <el-upload
                  class="upload-demo mr-1"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">上傳背景照片</el-button>
                </el-upload>
              </div>
            </div>
          </div>
          <div class="row infoBar">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              <div class="inputGroup">
                <div class="inputItem">
                  <div class="row">
                    <div class="col-lg-9">
                      <el-input placeholder="請輸入您的暱稱" v-model="userInfo.userName">
                        <template slot="prepend">暱稱</template>
                      </el-input>
                    </div>
                    <div class="col-lg-3">
                      <el-select v-model="userInfoGroup.sex" placeholder="性別">
                        <el-option
                          v-for="item in sexOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="inputItem">
                  <el-input placeholder="請輸入您的電子信箱" v-model="userInfo.email">
                    <template slot="prepend">信箱</template>
                  </el-input>
                </div>
                <h6 class="textTitle">連絡電話及住址</h6>
                <div class="inputItem">
                  <el-input placeholder="請輸入您的連絡電話" v-model="userInfoGroup.phoneNumber">
                    <template slot="prepend">電話</template>
                  </el-input>
                </div>
                <div class="inputItem">
                  <el-input placeholder="請輸入您的聯絡地址" v-model="userInfoGroup.address">
                    <template slot="prepend">地址</template>
                  </el-input>
                </div>
                <h6 class="textTitle">您的大學資訊</h6>
                <div class="inputItem">
                  <div class="row">
                    <div class="col-lg-3">
                      <el-select v-model="userInfoGroup.schoolCounty" placeholder="縣市">
                        <el-option
                          v-for="item in countyOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                    <div class="col-lg-9">
                      <el-input placeholder="請輸入您的學校名稱" v-model="userInfoGroup.schoolName">
                        <template slot="prepend">學校</template>
                      </el-input>
                    </div>
                  </div>
                </div>
                <div class="inputItem">
                  <div class="row">
                    <div class="col-lg-9">
                      <el-input placeholder="請輸入您的科系名稱" v-model="userInfoGroup.department">
                        <template slot="prepend">科系</template>
                      </el-input>
                    </div>
                    <div class="col-lg-3">
                      <el-select v-model="userInfoGroup.grade" placeholder="年級">
                        <el-option
                          v-for="item in gradeOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { authenticated } from "@/utils/AuthStore";
export default {
  name: "Info",
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",

      userInfoGroup: {
        name: "",
        Email: "",
        phoneNumber: "",
        address: "",
        sex: "",
        schoolCounty: "",
        schoolName: "",
        department: "",
        grade: ""
      },

      sexOptions: [
        {
          value: "選項1",
          label: "男"
        },
        {
          value: "選項2",
          label: "女"
        }
      ],

      countyOptions: [
        {
          value: "選項1",
          label: "台北市"
        },
        {
          value: "選項2",
          label: "新北市"
        },
        {
          value: "選項3",
          label: "基隆市"
        }
      ],

      gradeOptions: [
        {
          value: "選項1",
          label: "四技一"
        },
        {
          value: "選項2",
          label: "四技二"
        },
        {
          value: "選項3",
          label: "四技三"
        },
        {
          value: "選項4",
          label: "四技四"
        },
        {
          value: "選項5",
          label: "二技一"
        },
        {
          value: "選項6",
          label: "二技二"
        },
        {
          value: "選項7",
          label: "五專一"
        },
        {
          value: "選項8",
          label: "五專二"
        },
        {
          value: "選項9",
          label: "五專三"
        },
        {
          value: "選項10",
          label: "五專四"
        },
        {
          value: "選項11",
          label: "五專五"
        },
        {
          value: "選項12",
          label: "研究一"
        },
        {
          value: "選項13",
          label: "研究二"
        }
      ]
    };
  },

  methods: {
    ...mapActions({
      logout: "auth/logout"
    })
  },

  beforeRouteEnter(to, from, next) {
    if (authenticated()) {
      next();
    } else {
      next("/");
    }
  },

  computed: {
    ...mapGetters({
      userInfo: "user/userInfo"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info {
  background-color: #eeeeee;
  height: 750px;
}

.userBackgroundPhoto {
  height: 200px;
  margin-top: 15px;
  margin-left: 0px;
}

.PhotoSize {
  height: 100%;
}

.marginTop-100px {
  margin-top: -100px;
}

.photoBtn {
  text-align: right;
  margin-top: -70px;
}

.infoBar {
  position: relative;
  top: 40px;
  height: 450px;
  border: 1px solid #dddddd;
  box-shadow: 0px 0px 1px #000000;
  width: 100%;
  background-color: #ffffff;
}

.photoGroup {
  position: relative;
  left: -15px;
}

.inputGroup {
  position: relative;
}

.inputItem {
  margin-top: 15px;
}

.el-select .el-input {
  width: 130px;
}

.textTitle {
  margin-top: 25px;
  text-align: left;
}

.userinfo {
  width: 800px;
}
</style>
