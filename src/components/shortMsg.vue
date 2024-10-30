<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores';
import { showToast } from 'vant';
import 'vant/es/toast/style';
const userStore = useUserStore()
const props = defineProps({
  enterType: {
    type: Number,
    default: () => {
      return null
    }
  }
})
const router = useRouter()
const phone = ref<string>('')
const verification = ref<string>('')
const onSubmit = (values: Object) => {
  console.log('submit', values)
}
let reciprocal: any = null
import { GetCode,GetLoginCode,phoneVertify } from '@/utils/api';
const sendCode = async (event: any) => {
  event.target.disabled = true
  const res = await phoneVertify(phone.value)
  console.log(res, '我是手机号码验证的结果')
  if (res.success) {
    reciprocal = setInterval(() => {
      reverseN.value--
      if (reverseN.value < 0) {
        clearInterval(reciprocal)
        event.target.disabled = false
        reverseN.value = 3
      }
    }, 1000)
    console.log(event.target.innerText)
    if(props.enterType===1){
      let res=await GetLoginCode(
      phone.value
    )
    console.log(res, '我是登录验证码')
    }else{
      let res = await GetCode(
      phone.value
    )
    console.log(res, '我是注册验证码消息')
    }
  } else {
    showToast(`${res.errorMsg}`)
    event.target.disabled = false
  }

}
const reverseN = ref<number>(3)
onMounted(() => {
  clearInterval(reciprocal)
})
import { RegisterIn } from '@/utils/api';
import { LoginCode } from '@/utils/api';
import { showSuccessToast, showFailToast } from 'vant';
import 'vant/es/toast/style'
const goEnter = async () => {
  const data = { telNumber: phone.value, code: verification.value }
  const enterName = props.enterType === 1 ? 'login' : 'profile'
  if (props.enterType !== 1) {
    let res = await RegisterIn(data)
    console.log(res, '正在验证验证码')
    if (res.success) {
      const user = {
        TOKEN: null,
        name: null,
        password: null,
        telNumber: phone.value,
      }
      userStore.setUser(user)
      router.push(`/${enterName}`)
    } else {
      showFailToast('验证码错误');
    }
  } else {
    const data = { telNumber: phone.value, code: verification.value }
    let res = await LoginCode(data)
    console.log()
  }

}
</script>

<template>
  <div class="form">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div id="phone">
          <van-field v-model="phone" name="phone" placeholder="请输入您的电话号码"
            :rules="[{ required: true, message: '号码不能为空' }]" />
        </div>
        <div id="code">
          <van-field v-model="verification" name="verification" placeholder="填写验证码"
            :rules="[{ required: true, message: '不能为空' }]" />
          <van-button color="linear-gradient(to right, #375b7f, #33d6d6)" size="mini" style="width: 110px"
            @click="sendCode">
            {{
              reverseN < 3 && reverseN > -1
                ? `${reverseN + 1}s后自动获取`
                : '获取验证码'
            }}
          </van-button>
        </div>
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" style="background: #64c2df" @click="goEnter">
          确认
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped lang="less">
.form {
  #code {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }

  #phone {
    border-bottom: 1px solid #ccc;
  }
}
</style>
