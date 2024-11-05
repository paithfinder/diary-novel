<script setup lang="ts">
import { useRouter } from 'vue-router'
import shortMsg from '@/components/shortMsg.vue'
const router = useRouter()
import {ref} from 'vue'
const toLogin = () => {
  router.push('/login')
}
const phone = ref<string>('')
  const onSubmit = (values: Object) => {
  console.log('submit', values)
}
const goEnter = async () => {


}
</script>

<template>
  <div class="wrap">
    <div class="phoneBoard">
      <h2 class="title">手机号</h2>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div id="phone">
          <van-field v-model="phone" name="phone" placeholder="请输入手机号码"
            :rules="[{ required: true, message: '请输入正确的手机号码' }]" />
        </div>
        <img src="/src/icons/Register/register_correct_icon.png" alt="" id="correctP" >
      </van-cell-group>

 
        <van-button round block type="primary" native-type="submit" style="background: 
#00CCCC" @click="goEnter">
          获取验证码
        </van-button>
  
    </van-form>
    <div class="help" @click="toLogin">已有账号？<a>立即登录</a></div>
    </div>

  </div>
</template>

<style scoped lang="less">
.wrap {
  position: relative;
  background-color: #ffffff;
  .phoneBoard{
  margin-top:60px;
}
  .help {

    text-align: center;
    margin-top: 50px;
    box-sizing: border-box;
    a{
      text-decoration: underline;
      color:#00CCCC ;
    }
  }
#phone{
  margin-top:20px;

}

}
::v-deep .van-button{
transform:translateY(20px)
}
::v-deep .van-button--block{
  width:100%;
  border:0 !important;

}
::v-deep .van-cell {
  background: transparent !important;
  height: 90px !important;
  padding:0 !important;
}
::v-deep .van-cell-group {

  margin:0 !important;
  width:100%;
  position:relative;
}
#correctP{
  position:absolute;
  top:25%;
  right:0;
}
::v-deep .van-field__control{

  border-bottom:1px solid #CFDDEA ;
  box-sizing: border-box;


}
</style>
