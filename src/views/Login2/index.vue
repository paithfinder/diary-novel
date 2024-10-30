<script setup lang="ts">
import { ref } from 'vue'
import shortMsg from '@/components/shortMsg.vue'
// 定义跳转的类型
const enterType = ref<number>(1)
</script>

<template>
  <div class="wrap">
    <div class="title">
      <h2>短信验证码登录</h2>
    </div>

    <shortMsg :enterType="enterType"></shortMsg>
  </div>
</template>

<style scoped lang="less">
.wrap {
  background: url('@/assets/Login2/bg.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  position: relative;

  .title {
    display: flex;
    color: #48b3d2;
    justify-content: space-between;
    align-items: center;
  }
}

::v-deep .van-form {
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 15px !important;
  padding: 50px !important;
  box-sizing: border-box !important;
  margin-top: 150px !important;
}
</style>
