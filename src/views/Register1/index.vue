<script setup lang="ts">
import { useRouter } from 'vue-router'
import { watch } from 'vue'
const router = useRouter()
import { ref } from 'vue'
const toLogin = () => {
  router.push('/login')
}
const phone = ref<string>('')
const onSubmit = (values: Object) => {
  console.log('submit', values)
}
const goEnter = async () => {
  try {
    const res = await GetCode(phone.value);
    console.log(res.data, '我是获取验证码的结果');
    showToast('验证码已发送！');
    setTimeout(() => {
      router.push({
        name: 'register_step2',
        query: {
          phone: phone.value
        }
      }); // 跳转到下一个路由
    }, 2000); // 2秒后消失
  } catch (error) {
    console.error('获取验证码时发生错误:', error);
    showToast('验证码发送失败.请重试!');
  }

}
const phone11 = ref<boolean>(false)
watch(phone, async (oldValue, newValue) => {
  if (phone.value.length === 11) {
    try {
      const res = await phoneVertify(phone.value);
      console.log(res.success, '我是电话号码验证的结果');
      phone11.value = res.success === true ? true : false;
    } catch (error) {
      console.error('验证电话号码时发生错误:', error);
      showToast('请输入正确的手机号码!')
    }
  }
});



import { phoneVertify, GetCode } from '@/utils/api';
import { showToast } from 'vant';
import 'vant/es/toast/style'

</script>

<template>
  <div class="wrap">
    <div class="phoneBoard">
      <h2 class="title">手机号</h2>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <div id="phone">
            <van-field v-model="phone" name="phone" placeholder="请输入手机号码"
              :rules="[{ required: true, message: '手机号码不能为空!' }]" type="digit" maxlength="11" />
          </div>
          <img src="/src/icons/Register/register_correct_icon.png" alt="" id="correctP" v-show="phone11">
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

  .phoneBoard {
    margin-top: 60px;
  }

  .help {

    text-align: center;
    margin-top: 50px;
    box-sizing: border-box;

    a {
      text-decoration: underline;
      color: #00CCCC;
    }
  }

  #phone {
    margin-top: 20px;

  }

}

::v-deep .van-button {
  transform: translateY(20px)
}

::v-deep .van-button--block {
  width: 100%;
  border: 0 !important;

}

::v-deep .van-cell {
  background: transparent !important;
  height: 90px !important;
  padding: 0 !important;
}

::v-deep .van-cell-group {

  margin: 0 !important;
  width: 100%;
  position: relative;
}

#correctP {
  position: absolute;
  top: 25%;
  right: 0;
}

::v-deep .van-field__control {

  border-bottom: 1px solid #CFDDEA;
  box-sizing: border-box;


}
</style>
