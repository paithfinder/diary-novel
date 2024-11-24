<script setup lang='ts'>
import codeInput from '@/components/codeInput.vue';
import { useRouter,useRoute } from 'vue-router';
const router =useRouter()
import { getCurrentInstance } from 'vue';
const currentInstance=getCurrentInstance()
console.log(currentInstance)
import {ResetCode}  from '@/utils/api'
import { showToast } from 'vant'
import 'vant/es/toast/style'
const goReset = async() => {
  const childComponent = currentInstance?.refs.child as { phone?: string,  verification?: string };
  const res=await ResetCode({
    telNumber:childComponent.phone,
    code:childComponent.verification
  })
  console.log(res,'我是重置密码的验证码的结果')
  if(!res.success){
    showToast(res.errorMsg)
  }
  if (childComponent.phone && res.success) {
    router.push({
      name: 'newPd',
      query: {
        telNumber: childComponent.phone
      }
    });
  } 
}

</script>

<template>
<div class="wrap">
    <div class="resetpd">
        <h1>重置密码</h1>
        <div class="pdBox">
           <van-form>
            <codeInput inset ref="child"></codeInput>
           </van-form>
        </div>
    </div>
    <van-button round block type="primary" native-type="submit" style="background: 
#00CCCC" @click="goReset">
          下一步
        </van-button>
</div>
</template>

<style scoped lang='less'>
.resetpd{
    margin-top:60px;

}
::v-deep .van-cell {
  background: transparent !important;
  height: 90px !important;
  padding:0 !important;
}

::v-deep .van-button{
transform:translateY(20px)
}
::v-deep .van-button--block{
  width:100%;
  border:0 !important;

}
.pdBox{
    margin-top:60px;
}

::v-deep .van-field__control{

  border-bottom:1px solid #CFDDEA ;
  box-sizing: border-box;


}
::v-deep .van-cell:after{
    border:none !important;
}
::v-deep .van-cell-group:after{
    border:none !important;

}


#code{
  position:absolute;
  top:22.5%;
  right:0;
  background-color: 
  #F9D840;
  padding:3px 20px 3px 20px;
  height:40px;
  text-align: center;
  line-height: 40px;
  border-radius: 25px;

}
</style>