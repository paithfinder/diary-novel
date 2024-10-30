<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()
const route = useRoute()
// 接收注册信息上一个路由页面传过来的参数
console.log(route.query)
const router = useRouter()
const username = ref<string>('')
const password = ref<string>('')
const checked = ref<boolean>(true)
const onSubmit = (values: Object) => {
  console.log('submit', values)
}
const toRegister = () => {
  router.push('/register')
}
import { LoginInfo } from '@/utils/api';
import { showToast } from 'vant'
import 'vant/es/toast/style'
// todo:异步获取token并存入
const goHome = async () => {
  const data = { name: username.value, password: password.value }
  const res = await LoginInfo(data)
  console.log(res.data, '我是登录验证返回的信息')
  if (res.data) {
    userStore.setToken(res.data)
    console.log('我是增添了token的user信息', userStore.user)
    showToast('登录成功！')
    router.push('/bookshelf')
  }
}
const goMsg = () => {
  router.push('/login2')
}
const resetPd = () => {
  router.push('/forgetPd')
}
</script>

<template>
  <div class="wrap">
    <div class="title">
      <h2>密码登录</h2>
      <div class="title" @click="goMsg">
        短信验证码登录
        <img src="@/icons/Login/箭头.png" alt="" class="icon" />
      </div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username" name="name" placeholder="请输入您的用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="password" placeholder="请输入您的密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <van-checkbox v-model="checked" shape="square" style="margin-top: 10px">
          <div>
            我已阅读<span class="text">&nbsp;用户协议&nbsp;</span> 及
            <span class="text">&nbsp;隐私政策&nbsp;</span>
          </div>
        </van-checkbox>

        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit" style="background: #64c2df" @click="goHome">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="help">
      <div @click="toRegister">注册</div>
      <div @click="resetPd">忘记密码？</div>
    </div>
    <div class="others">
      <div class="name">————— 其他登录方式 —————</div>
      <div class="pic">
        <img src="@/icons/Login/QQ.png" alt="" />
        <img src="@/icons/Login/微信.png" alt="" />
      </div>
    </div>
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt="" />
      <div class="thoughts">·创作与记录同行·</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  background: url('@/assets/Login/bg.png') no-repeat;
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

  .help {
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .others {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;

    .name {
      text-align: center;
    }

    .pic {
      margin: 0 auto;
      display: flex;
      width: 30%;
      justify-content: space-between;
      margin-top: 20px;

      img {
        width: 80px;
        height: 80px;
      }
    }
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
      font-family: STXingkai;
    }
  }
}

.icon {
  width: 50px;
  height: 50px;
  margin-left: 5px;
}

.text {
  color: #64c2df;
}

::v-deep .van-form {
  background: rgba(109, 194, 219, 0.5) !important;
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
</style>
