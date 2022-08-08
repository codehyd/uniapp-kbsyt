<template>
  <view class="login">
    <view class="load_bg"></view>
    <image
      lazy-load
      class="login_bg"
      src="https://www.757abc.com/wxmp/img/login.jpg"
    ></image>
    <!-- <view class="login_bg"></view> -->
    <view class="login_wrap">
      <text class="title">登录</text>
      <u-button>121</u-button>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped>
.load_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 370rpx;
  z-index: -1;
  background-color: #3c75f8;
}
.login_bg {
  width: 100%;
  height: 370rpx;
}

.login_wrap {
  position: relative;
  top: -80rpx;
  margin: 0 20rpx;
  padding: 20rpx;
  background: #fff;
  border-radius: 16rpx;
}
.title {
  font-weight: 700;
  font-size: 30rpx;
  border-bottom: 6rpx solid #0094ff;
  padding-bottom: 12rpx;
}
</style>
