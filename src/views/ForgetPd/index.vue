<script setup lang="ts">
import { ref, nextTick, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { showNotify } from 'vant'
import 'vant/es/notify/style'
const router = useRouter()
let timerId: any = null
const phone = ref<string>('')
const resetPd = ref<string>('')
const verification = ref<string>('')
let reciprocal: any = null
const sendCode = (event: any) => {
    event.target.disabled = true
    reciprocal = setInterval(() => {
        reverseN.value--
        if (reverseN.value < 0) {
            clearInterval(reciprocal)
            event.target.disabled = false
            reverseN.value = 3
        }
    }, 1000)
    console.log(event.target.innerText)
}
const reverseN = ref<number>(3)
const submitR = () => {
    nextTick(() => {
        showNotify({ type: 'success', message: '修改成功!', duration: 1000 })
        timerId = setTimeout(() => {
            router.push({
                name: 'login'
            })
        }, 1000)
    })
}
onBeforeUnmount(() => {
    clearTimeout(timerId)
})
</script>

<template>
    <div class="wrap">
        <div class="title">
            <h2>重设密码</h2>
        </div>
        <div class="material">
            <van-form class="form">
                <van-field v-model="phone" name="电话号码" label="电话号码" placeholder="请输入您的电话号码"
                    :rules="[{ required: true, message: '请填写电话号码' }]" />
                <van-field v-model="resetPd" type="password" name="新密码" label="新密码" placeholder="请输入您的新密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
                <div id="code">
                    <van-field v-model="verification"  name="verification" label="验证码"
                        placeholder="填写验证码" :rules="[{ required: true, message: '不能为空' }]" />
                    <van-button color="linear-gradient(to right, #375b7f, #33d6d6)" size="mini" style="width: 110px"
                        @click="sendCode" id="bt-code">
                        {{
                            reverseN < 3 && reverseN > -1
                                ? `${reverseN + 1}s后自动获取`
                            : '获取验证码'
                            }}
                    </van-button>
                </div>
                <div style="margin: 16px">
                    <van-button plain type="success" native-type="submit" @click="submitR">确认</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<style scoped lang="less">
.wrap {
    background: url('@/assets/ForgetPd/bg.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    position: relative;

    .title {
        margin-top: 20px;
        display: flex;
        color: #48b3d2;
        justify-content: space-between;
        align-items: center;
    }

    .material {
        width: 100%;
        position: relative;
        text-align: center;
        margin: 130px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(74, 95, 96, 0.7);
        border-radius: 15px;

        .form {
            padding: 50px 0 50px 0;
            box-sizing: border-box;

            #code {
                position: relative;

                #bt-code {
                    position: absolute;
                    right: 5%;
                    top: 20%;
                    width: 150px !important;
                }
            }

            #hint {
                font-size: 18px;
                font-weight: bold;
            }
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
</style>
