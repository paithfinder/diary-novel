<script setup lang='ts'>
import { DefineProps } from 'vue';
const props = defineProps({
  loginPd: {
    type: Boolean,
    default: null
  }
})
let eyeIcon = computed(() => {
  return `${new URL(`/src/icons/Login/login_password_${eyeType.value}.png`, import.meta.url).href}`;
})
const changeEyeType = () => {
  eyeType.value = eyeType.value === 'closed' ? 'open' : 'closed'
  pdType.value = pdType.value === 'password' ? 'text' : 'password'

}
const pdType = ref('password')
let eyeType = ref('closed')
import { showToast } from 'vant'
import 'vant/es/toast/style'
const sendCode = async (event: any) => {
  event.target.disabled = true
  if (router.currentRoute.value.name !== "forgetPd") {
    const res = await phoneVertify(phone.value)
    console.log(res, '我是手机号码验证的结果')
    if (res.success) {
      try {
        let res = await GetLoginCode(phone.value);
        console.log(res, '我是登录验证码');
        reciprocal = setInterval(() => {
          reverseN.value--
          if (reverseN.value < 0) {
            clearInterval(reciprocal)
            event.target.disabled = false
            reverseN.value = 60
          }
        }, 1000)
        console.log(event.target.innerText)
        showToast('已发送！')
      } catch (error) {
        showToast('获取验证码失败！')
        // 这里可以进一步处理错误，例如显示错误信息给用户
      }

    } else {
      showToast('请填写正确手机号！')
      event.target.disabled = false
    }
  } else {
    if (phone11) {
      try {
        const res = await GetfogetCode(phone.value);
        console.log(res.data, '我是获取验证码的结果');
        showToast('验证码已发送！');
      } catch (error) {
        console.error('获取验证码时发生错误:', error);
        showToast('验证码发送失败.请重试!');
      }
    }
  }



}
const reverseN = ref<number>(60)
let reciprocal: any = null
import { GetLoginCode, phoneVertify } from '@/utils/api';
import { ref, computed, watch } from 'vue'
const verification = ref<string>('')
const phone = ref<string>('')
const phone11 = ref<boolean>(false)
watch(phone, async (oldValue, newValue) => {
  if (phone.value.length === 11) {
    try {
      const res = await phoneVertify(phone.value);
      console.log(res.success, '我是电话号码验证的结果');
      if (res.success === true && router.currentRoute.value.name === "forgetPd") {
        phone11.value = true
      } else {
        phone11.value = false
      }
    } catch (error) {
      console.error('验证电话号码时发生错误:', error);
      showToast('请输入正确的手机号码!')
    }
  }
});
import { useRouter } from 'vue-router';
const router = useRouter()
console.log()
import { GetfogetCode } from '@/utils/api';

import 'vant/es/toast/style'
defineExpose({
  phone,
  verification
})
</script>

<template>

  <div class="wrapperPd">
    <van-cell-group v-show="!props.loginPd">
      <div>
        <van-field v-model="phone" name="phone" placeholder='请输入手机号码'
          :rules="[{ required: true, message: '请输入正确手机号码' }]" type="digit" maxlength="11" />
        <van-field v-model="verification" name="verification" placeholder='请输入验证码'
          :rules="[{ required: true, message: '请输入正确验证码' }]" type="digit" maxlength="6" />
      </div>
      <img src="/src/icons/Register/register_correct_icon.png" alt="" id="correctP" v-show="phone11">
    </van-cell-group>

    <img :src="eyeIcon" alt="" id="eye" @click="changeEyeType" v-show="props.loginPd">
    <div id="code" @click="sendCode" v-show="!props.loginPd"> {{
      reverseN < 60 && reverseN > -1
        ? `${reverseN + 1}s之后自动获取`
        : '获取验证码'
    }}</div>
  </div>


</template>

<style scoped lang='less'>
#eye {
  position: absolute;
  top: -10vw;
  right: 0;

}

#code {
  position: absolute;
  top: 45%;
  right: 0;
  background-color:
    #F9D840;
  padding: 3px 20px 3px 20px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 25px;

}

::v-deep .van-cell-group {

  margin: 0 !important;
  width: 100%;

}

.wrapperPd {
  position: relative;
}

#correctP {
  position: absolute;
  top: 5%;
  right: 0;
}
</style>