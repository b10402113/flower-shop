<template>
  <div class="home">
    <div class="search-field">
      <van-search
        v-model="value"
        placeholder="請輸入搜索花卉"
        background="#ff5a5f"
      />
    </div>
    <div class="nav-title">
      <p>花卉市場</p>
    </div>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav-sub-title">
      <p>
        <span>節日推薦</span>
      </p>
    </div>
    <div class="scroll-box">
      <img
        v-if="festivalLoading"
        src="../assets/images/loading.gif"
        alt=""
        class="loadingImg"
      />
      <div class="box-wrapper" v-else>
        <router-link to="/festival">
          <div class="box"></div>
        </router-link>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
    <div class="nav-sub-title">
      <p>
        <span>熱門花卉</span>
      </p>
    </div>
    <div class="flower-grid">
      <img
        v-if="isLoading"
        src="../assets/images/loading.gif"
        alt=""
        class="loadingImg"
      />

      <van-grid :column-num="3" v-else>
        <van-grid-item
          v-for="(item, index) in hottestFlower"
          :key="index"
          icon="photo-o"
          :text="item"
        />
      </van-grid>
    </div>

    <van-tabbar>
      <van-tabbar-item icon="home-o">首頁</van-tabbar-item>
      <van-tabbar-item icon="search">搜尋</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      active: '0',
      value: '',
      hottestFlower: [],
      isLoading: true,
      festivalLoading: true
    }
  },
  mounted () {
    console.log('123')
    this.axios.get('/hottestFlower').then(res => {
      const result = res.data.split(' ')
      result.pop()
      this.hottestFlower = result
      this.isLoading = false
    })
    this.axios.get('/upcomingfestival').then(res => {
      const result = res.data
      console.log(result)
    })
  }
}
</script>
<style lang="scss" scoped>
.search-field {
  background-color: red;
}
.nav-title {
  background-color: hsl(358, 100%, 68%);
  padding: 10px 100px;

  p {
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    color: white;
    // border-bottom: 1px solid #fff;
    padding: 10px 20px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      height: 2px;
      background: white;
      top: 100%;
      width: 20%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.swiper .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ffe4b8;
}
.nav-sub-title {
  p {
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    opacity: 0.7;
    color: #202020;
    // border-bottom: 1px solid #fff;
    padding: 20px 30px;
    position: relative;
    background-color: #fff;
    z-index: 333;
    span {
      background-color: #fff;
      padding: 0 4px;
    }
    &::after {
      content: '';
      position: absolute;
      height: 2px;
      background: #202020;
      opacity: 0.7;
      top: 50%;
      width: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: -999;
    }
  }
}
.scroll-box {
  overflow: hidden;

  .box-wrapper {
    padding: 10px 0;
    white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
    overflow-y: auto; /*可滑动*/
    height: 100%;
    background-color: #fff;
  }
  .box {
    width: 30%;
    margin-left: 3%;
    height: 150px;
    background: #ffe4b8;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 3px;
    display: inline-block; /*行内块元素*/
  }
}
.flower-grid {
  padding: 30px;
  padding-top: 0;
  margin-bottom: 60px;
  text-align: center;
}
.loadingImg {
  width: 100px;
  height: 100px;
}
.scroll-box{
  text-align: center;
}
</style>
