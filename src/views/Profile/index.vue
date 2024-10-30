<script setup lang="ts">
import { showNotify } from 'vant';
import 'vant/es/notify/style';
import { showToast } from 'vant';
import 'vant/es/toast/style';
import { ref, nextTick, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores';
const userStore = useUserStore()
const router = useRouter()
let timerId: any = null
const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  console.log(file)
}
const username = ref<string>('')
const password = ref<string>('')
import { UserInfo } from '@/utils/api';
import { nameJudge } from '@/utils/api';
console.log(userStore.user.telNumber, '我是user的信息')
const submitR = async () => {
  const res = await nameJudge(username.value)
  console.log(res, '我检测用户名是否重复')
  if (res.success) {
    const data = { userName: username.value, telNumber: userStore.user.telNumber, password: password.value }
    const res = await UserInfo(data)
    console.log(res, '发送注册信息')
    nextTick(() => {

      if (res.success) {
        showNotify({ type: 'success', message: '恭喜你,注册成功!', duration: 1000 })
        userStore.setUser({ TOKEN: null, name: username.value, password: password.value, telNumber: userStore.user.telNumber })
        console.log(userStore.user, '我是完善的user信息')
        timerId = setTimeout(() => {
          // 路由传参
          router.push({
            name: 'login',
            query: {
              name: username.value,
              pd: password.value
            }
          })
        }, 1000)
      }
    })
  } else {
    showToast('用户名已存在！')
  }
}
onBeforeUnmount(() => {
  clearTimeout(timerId)
})
const fileList = ref([])
</script>

<template>
  <div class="wrap">
    <div class="title">
      <h2>注册</h2>
    </div>
    <div class="material">
      <van-form>
        <div class="avator">
          <div id="load-Text">上传头像</div>
          <div id="uploader">
            <van-field label-align="center" input-align="center">
              <template #input>
                <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
              </template>
            </van-field>
          </div>
        </div>

        <van-field v-model="username" name="用户名" label="用户名" placeholder="请设置您的用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="请设置您的密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px">
          <van-button plain type="success" native-type="submit" @click="submitR">确认注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  background: url('@/assets/profile/bg.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.6;

  .title {
    margin-top: 20px;
    display: flex;
    color: #48b3d2;
    justify-content: space-between;
    align-items: center;
  }

  .material {
    width: 100%;
    height: 700px;
    position: relative;
    text-align: center;
    margin: 130px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(48, 45, 45, 0.7);





    .avator {
      display: flex;
      align-items: center;
      padding: 20px 32px 20px 32px;
      box-sizing: border-box;
      width: 82%;
      justify-content: space-between;

      #load-Text {
        color: #48b3d2;
        text-align: center;
      }
    }




    #hint {
      font-size: 18px;
      font-weight: bold;
    }
  }
}

::v-deep .van-cell {
  background-color: transparent !important;
  color: #fff !important;
}

::v-deep .van-field__label {
  color: #48b3d2;
}

::v-deep .van-button {
  width: 60%;
  background-color: rgba(72, 179, 210, 0.3) !important;
}

::v-deep .van-button--plain.van-button--success {
  color: #fff !important;
  border: 2px solid #48b3d2 !important;
}

::v-deep .van-field__control {
  color: #fff
}
</style>
