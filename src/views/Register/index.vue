<script setup lang="ts">
import { useRouter } from 'vue-router'
import shortMsg from '@/components/shortMsg.vue'
const router = useRouter()

const toLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="wrap">
    <div class="title">
      <h2>注册</h2>
    </div>
    <shortMsg></shortMsg>
    <div class="help" @click="toLogin">已有账号，点击登录</div>
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt="" />
      <div class="thoughts">·创作与记录同行·</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  background: url('@/assets/Register/bg.png') no-repeat;
  background-position: center;
  background-size: cover;

  opacity: 0.8;
  position: relative;

  .title {
    display: flex;
    color: #48b3d2;
    justify-content: space-between;
    align-items: center;
  }

  .help {
    color: #fff;
    text-align: center;
    margin-top: 20px;
    box-sizing: border-box;
  }

  .logo {
    display: flex;
    width: 100%;
    align-items: center;
    position: absolute;
    bottom: 3%;
    padding-right: 100px;
    box-sizing: border-box;
    justify-content: space-between;

    img {
      width: 200px;
      height: 100px;
    }

    .thoughts {
      color: #66b6cd;
      font-family: 仿宋;
    }
  }
}

.text {
  color: #64c2df;
}

::v-deep .van-form {
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 15px !important;
  padding: 50px !important;
  box-sizing: border-box !important;
  margin-top: 100px !important;
}

::v-deep .van-cell-group {
  background: transparent !important;
}

::v-deep .van-cell {
  background: transparent !important;
  height: 100px !important;
}

::v-deep .van-field__control {
  border-bottom: 1px solid #fff !important;
}

::v-deep .van-cell:after {
  display: none !important;
}

::v-deep .van-field__value {
  display: flex !important;
  align-items: center !important;
}

::v-deep .van-field__error-message {
  width: 200px !important;
}
</style>
