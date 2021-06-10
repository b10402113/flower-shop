<template>
  <div id="app">
    <div class="text">
      123
      <van-button type="primary">主要按鈕</van-button>
      <div class="box"></div>
      <p>12345</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
.text {
  font-size: 30px;
  padding: 20px;
}
.box {
  width: 100%;
  height: 100px;
  background-color: pink;
}
</style>
