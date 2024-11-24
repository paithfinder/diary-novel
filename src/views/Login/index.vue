<script setup lang="ts">
import { ref,computed,watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'
import type { FormInstance } from 'vant';
const userStore = useUserStore()
const route = useRoute()
// 接收注册信息上一个路由页面传过来的参数
console.log(route.query)
const router = useRouter()
const username = ref<string>('')
const password = ref<string>('')
const checked = ref<boolean>(true)
const formRef = ref<FormInstance>()

const onSubmit = (values: Object) => {
  console.log('submit', values)
}
const toRegister = () => {
  router.push('/register_step1')
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

const resetPd = () => {
  router.push('/forgetPd')
}
let loginType=ref('1')
let contentImg = computed(() => {
  return `url(${new URL(`../../assets/Login/login_content_0${loginType.value}_bg.png`, import.meta.url).href})`;
});
let loginPd=ref(true)

const changeLoginType=()=>{
  loginType.value=loginType.value==='1'?'2':'1'
  loginPd.value = !loginPd.value
  formRef.value?.resetValidation()
}





import codeInput from '@/components/codeInput.vue';



const pdType=ref('password')


</script>

<template>
  <div class="wrap">
    <div class="title">
      <div @click="toRegister">注册</div>
    </div>
    <div class="logo">
      <img src="@/assets/Login/logo.png" alt="" />

    </div>
    <div class="form" >
      <div class="loginWay">
        <div @click="changeLoginType" :class="{highLightFont:loginPd}">账号登录</div>
        <div @click="changeLoginType" :class="{highLightFont:!loginPd}">验证码登录</div>
      </div>
      <van-form @submit="onSubmit" ref="formRef">
        <van-cell-group inset v-show="loginPd">
          <van-field v-model="username" name="name" placeholder='请输入账号'
            :rules="[{ required: true, message: '账号为空！' }]" />
          <van-field v-model="password" :type="pdType" name="password" placeholder='请输入密码'
            :rules="[{ required: true, message: '密码为空！'}]" />
        </van-cell-group>
        <codeInput  inset   :loginPd="loginPd"></codeInput>
       
        <van-checkbox v-model="checked"  style="margin-top: 10px" icon-size="12px">
          <div  class="contact">
            我已阅读<span class="text"><a>《用户协议》</a></span> 及
            <span class="text"><a>《隐私政策》</a></span>
          </div>
        </van-checkbox>

        <div style="width:100%;margin:12px auto;">
          <van-button round block type="primary" native-type="submit" style="background: #00CCCC " @click="goHome">
            登录
          </van-button>
        </div>
            <div class="help">

      <div @click="resetPd"  id="forgetPd" v-show="loginPd">忘记密码？</div>
    </div>
      </van-form>
    </div>

    <div class="others">
      <div class="name">————————— 其他登录方式 —————————</div>
      <div class="pic">
        <img src="@/icons/Login/login_qq.png" alt="" />
        <img src="@/icons/Login/login_wechat.png" alt="" />
      </div>
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


  
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    
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
    margin-top: 100px;

    .name {
      text-align: center;
    }

    .pic {
      margin: 0 auto;
      display: flex;
      width: 65%;
      justify-content: space-between;
      margin-top: 30px;

      img {
        width: 80px;
        height: 80px;
      }
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:45px;


    img {
      width:430px;
      height:260px;
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
  a{
    text-decoration:underline;
  }
}
.form{
  background-image: v-bind(contentImg);
  background-repeat:  no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px !important;
  padding: 50px !important;
  box-sizing: border-box !important;

  position:relative;
  height:628px;
  display: flex;
  align-items: center;
  justify-content: center;
  width:95%;
  margin:0 auto;
  .loginWay{
    position: absolute;
    top:0;
    left: 0;
    width:100%;
    height:25%;

    box-sizing: border-box;
    display:flex;
    justify-content: space-around;
    align-items: center;
    color:#1E4874 ;
  
    line-height:16px;
    font-size: 15px;
    // font-weight: bold;
  }
}
::v-deep .van-form {
position: absolute;
top:25%;
// display: flex;
// flex-direction: column;
// align-items: center;
width:80%;

}

::v-deep .van-cell-group {
  background: transparent !important;
  margin:0 !important;
  width:100%;
  position:relative;
}

#forgetPd{
  text-decoration: underline;
  width:100%;
  text-align: center;
}

.contact{
  font-size:12px;

  font-family: KaiTi
}
::v-deep .van-cell {
  background: transparent !important;
  height: 90px !important;
  padding:0 !important;
}

::v-deep .van-field__control {
  border-bottom: 1px solid #00CCCC  !important;
}
::v-deep .van-field__control::placeholder {
  color: #003366 ; 

  font-size: 13px;;
}
::v-deep .van-cell:after {
  display: none !important;
}
::v-deep .van-button{
border:none !important;
font-weight: bold;
}
.highLightFont{
  font-weight: bold;
}
</style>
