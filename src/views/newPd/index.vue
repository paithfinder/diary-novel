<script setup lang='ts'>
import { ref, computed } from 'vue'
import { ResetPd } from '@/utils/api';
import {useRoute,useRouter} from 'vue-router'
const router=useRouter()
const route=useRoute()
console.log(route.query.telNumber)
const pdType1 = ref('password')
const pdType2 = ref('password')
const oldPd = ref('')
const newPd = ref('')
let eyeIcon1 = computed(() => {
    return `${new URL(`/src/icons/Login/login_password_${eyeType1.value}.png`, import.meta.url).href}`;
})
let eyeIcon2 = computed(() => {
    return `${new URL(`/src/icons/Login/login_password_${eyeType2.value}.png`, import.meta.url).href}`;
})
const changeEyeType1 = () => {
    eyeType1.value = eyeType1.value === 'closed' ? 'open' : 'closed'
    pdType1.value = pdType1.value === 'password' ? 'text' : 'password'

}
const changeEyeType2 = () => {
    eyeType2.value = eyeType2.value === 'closed' ? 'open' : 'closed'
    pdType2.value = pdType2.value === 'password' ? 'text' : 'password'

}
let eyeType1 = ref('closed')
let eyeType2 = ref('closed')
import { showToast } from 'vant'
import 'vant/es/toast/style'
const resetPassword = async() => {
const res=await ResetPd({
    telNumber:String(route.query.telNumber),
    password:newPd.value
})
console.log(res,'我是重新设置密码的结果')
if(res.success){
    showToast('设置成功！')
    setTimeout(function(){
        router.push('/login')
    },2000)
}else{
    showToast(res.errorMsg)
}
}
</script>

<template>
    <div class="wrap">
        <div class="resetpd">
            <h1>新密码</h1>
            <div class="pdBox">
                <van-form id="form">
                    <van-cell-group inset>
                        <van-field v-model="oldPd" :type="pdType1" name="password" placeholder='请输入新密码' :rules="[
                            {
                                validator: (value) => {
                                    if (!value) {
                                        return '新密码不能为空！';
                                    }
                                    // 正则表达式用于检查密码复杂度
                                    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*._?])[A-Za-z\d~!@#$%^&*._?]{8,}$/;
                                    // 检查密码是否符合规则
                                    if (!regex.test(value)) {
                                        return '密码必须包含大小写字母、特殊字符、数字,且长度为8位';
                                    }
                                    return true;

                                },

                            }
                        ]" />
                        <van-field v-model="newPd" :type="pdType2" name="password" placeholder='请再次输入新密码' :rules="[
                           
                            {
                                validator: (value) => {
                                    if (value !== oldPd) {
                                        return '两次输入的密码不一致';
                                    }
                                    return true;
                                },
                            },
                        ]" />
                    </van-cell-group>
                    <img :src="eyeIcon1" alt="" id="eye1" @click="changeEyeType1">
                    <img :src="eyeIcon2" alt="" id="eye2" @click="changeEyeType2">
                </van-form>

            </div>
        </div>
        <van-button round block type="primary" native-type="submit" style="background: 
#00CCCC" @click="resetPassword">
            保存
        </van-button>
    </div>
</template>

<style scoped lang='less'>
.resetpd {
    margin-top: 60px;

}

::v-deep .van-cell {
    background: transparent !important;
    height: 90px !important;
    padding: 0 !important;
}

#eye2 {
    position: absolute;
    top: 58%;
    right: 0;
    z-index: 1000;
}

#eye1 {
    position: absolute;
    top: 8%;
    right: 0;
    z-index: 1000;
}

#form {
    position: relative;
}

::v-deep .van-button {
    transform: translateY(20px)
}

::v-deep .van-button--block {
    width: 100%;
    border: 0 !important;

}

.pdBox {
    margin-top: 60px;
}

::v-deep .van-field__control {

    border-bottom: 1px solid #CFDDEA;
    box-sizing: border-box;


}

::v-deep .van-cell:after {
    border: none !important;
}

::v-deep .van-cell-group:after {
    border: none !important;

}

::v-deep .van-cell-group {
    position: relative;
    margin: 0 !important;
    width: 100%;

}
</style>