<script setup lang="ts">
import { ref,nextTick,onMounted } from 'vue'
import { useRouter,useRoute } from 'vue-router'
const route=useRoute()
const router = useRouter()
console.log(route.query.phone)
const onSubmit = (values: Object) => {
  console.log('submit', values)
}

const goEnter = async () => {

}

onMounted(() => {
  if (inputRefs.value[0]) {
    inputRefs.value[0].focus()
  }
})
import 'vant/es/toast/style'
const numList = ref([
  { id: 1, value: null },
  { id: 2, value: null },
  { id: 3, value: null },
  { id: 4, value: null },
  { id: 5, value: null },
  { id: 6, value: null }
])
const vertifyCode = computed(() => {
  return numList.value.map(item => item.value).join('');
});
// 创建一个ref来存储van-field的引用
const inputRefs = ref<any>([])

const inputChange = async(value, index) => {
  console.log(value, index,'input change')
  if (value && index < numList.value.length - 1) {
    // 如果当前输入框有值，并且不是最后一个输入框，则让下一个输入框获得焦点
    console.log(inputRefs.value[index + 1])
    inputRefs.value[index + 1].focus()
  }else if(!value && index>0){
    console.log(7777777777777777)
    inputRefs.value[index -1].focus()
  }
}
import { RegisterIn,GetCode } from '@/utils/api';
import {watch,computed} from 'vue'
import { showToast } from 'vant';
watch(vertifyCode,async(oldValue,newValue)=>{
  if(vertifyCode.value.length===6){
    const res=await RegisterIn(
      {
        "telNumber":String(route.query.phone),
        "code":vertifyCode.value
      }
    )
    console.log(res,'我是验证码返回结果')
    if(!res.success){
      errCode.value=true
    }else{
      showToast('验证成功!')
      setTimeout(() => {
        router.push('/profile'); // 跳转到下一个路由
    }, 2000); // 2秒后消失
    }
  }
})
const errCode=ref<boolean>(false)
const reCode=async()=>{
  try{
  const res = await GetCode(String(route.query.phone));
  console.log(res.data, '我是获取验证码的结果');
  numList.value.forEach(item => {
    item.value = null;
  });
 showToast('验证码已发送！');

  errCode.value=false

}catch(error){
  console.error('获取验证码时发生错误:', error);
  showToast('验证码发送失败.请重试!');
}
}
</script>

<template>
  <div class="wrap">
    <div class="codeBoard">
      <van-form @submit="onSubmit">
        <div class="number">
          <!-- 使用v-for循环numList，并为每个van-field创建ref -->
          <div v-for="(item, index) in numList" :key="item.id" id="numBox">
            <van-field v-model="item.value" type="digit" maxlength="1" @input="inputChange($event, index)"
               :ref="el => inputRefs[index] = el" />
          </div>
        </div>
        <div style="color:red;margin-top:15px;" v-show="errCode">验证码错误，请重新输入验证码</div>
        <van-button round block type="primary" native-type="submit" style="background: #00CCCC" @click="reCode" v-show="errCode">
          重新获取验证码
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  position: relative;
  background-color: #ffffff;

  .codeBoard {
    margin-top: 60px;

    .number {
      display: flex;
      justify-content: space-between;
      align-items: center;

      #numBox {
        width: 80px;
        height: 80px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
      }
    }
  }


}

::v-deep .van-button {
  transform: translateY(20px)
}

::v-deep .van-button--block {
  width: 100%;
  border: 0 !important;

}


::v-deep .van-field__body {
  height: 100%;
}

::v-deep .van-field__body input {
  height: 100%;
  text-align: center;
  font-size: 25px;

}

::v-deep .van-cell {
  padding: 0;
  height: 100%;
}
</style>
