<template>
  <div>
    <van-nav-bar
      title="節日名稱"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="banner">
      <img src="../assets/images/valentines.jpeg" alt="" />
    </div>
    <sub-title title="節日意義"></sub-title>
    <div class="festival-meaning">
      <p>
        雖然只要有心，每天都是情人節，但倘若每個月都會在行事曆上看到這節日，那還真是叫單身的人不知如何是好。除了先前我們介紹過的「黑色情人節」外，事實上還有各式各樣令人大開眼界的隱藏版情人節，而且是韓國從國定情人節延伸出來的，就算每個月迎接度過類似的節日也樂此不彼。到底分別有哪些充滿愛的意涵？以下帶你一探究竟，如果想跟另一半一起耍浪漫的話不妨筆記起來吧！
      </p>
    </div>
    <sub-title title="推薦花種"></sub-title>
    <div class="flower-grid">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import SubTitle from '../components/SubTitle.vue'
export default {
  components: { SubTitle },

  name: 'Festival',
  methods: {
    onClickLeft () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  padding: 10px;
  background-color: hsl(358, 100%, 68%);
  img {
    width: 100%;
    border-radius: 2px;
  }
}
// .van-nav-bar {
//  background-color: rgb(241, 186, 66);
// }
.van-nav-bar {
  ::v-deep .van-icon {
    color: hsl(358, 100%, 68%);
  }
  ::v-deep .van-nav-bar__text {
    color: hsl(358, 100%, 68%);
  }
  ::v-deep .van-ellipsis {
    color: #202020;
    opacity: 0.7;
  }
}

.festival-meaning {
  padding: 0px 20px;
  p {
    font-size: 12px;
    color: #202020;
    opacity: 0.7;
  }
}
</style>
