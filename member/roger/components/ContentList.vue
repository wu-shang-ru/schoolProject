<template>
  <div class="ContentList mt-4">
    <nav aria-label="breadcrumb" class="float-right titieList">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">熱門</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">最新</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">追蹤</a>
        </li>
      </ol>
    </nav>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-lg-1">
            <img class="smallPicture" src="../assets/ch.jpg" alt="userPhoto" />
          </div>
          <div class="col-lg-3 text-left">123</div>
          <div class="col-lg-8 text-left">Dapibus ac facilisi</div>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-lg-1">
            <img class="smallPicture" src="../assets/wong.jpg" alt="userPhoto" />
          </div>
          <div class="col-lg-3 text-left">123</div>
          <div class="col-lg-8 text-left">Dapibus ac facilisi</div>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-lg-1">
            <img class="smallPicture" src="../assets/wu.jpg" alt="userPhoto" />
          </div>
          <div class="col-lg-3 text-left">123</div>
          <div class="col-lg-8 text-left">Dapibus ac facilisi</div>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-lg-1">
            <img class="smallPicture" src="../assets/hao.jpg" alt="userPhoto" />
          </div>
          <div class="col-lg-3 text-left">123</div>
          <div class="col-lg-8 text-left">Dapibus ac facilisi</div>
        </div>
      </a>
      <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
      <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
      <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
      <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
      <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
      <a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentList"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ContentList {
  position: relative;
  border: 1px solid #acacac;
  margin: auto;
  width: 900px;
  height: 650px;
  padding-top: 30px;
}
.smallPicture {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 1px solid #acacac;
}
.titieList {
  position: absolute;
  top: -25px;
  right: 10px;
}
.breadcrumb {
  background-color: #ffffff;
}
</style>
