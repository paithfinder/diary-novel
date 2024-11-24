import request from '@/utils/request'
import axios, { AxiosError, type Method } from 'axios'
import { ref } from 'vue'
//一般情况下，接口类型会放到一个文件
// 下面两个TS接口，表示要传的参数

// Res是返回的参数，T是泛型，需要自己定义，返回对数统一管理***
type Res<T> = Promise<ItypeAPI<T>>
// 一般情况下响应数据返回的这三个参数，
// 但不排除后端返回其它的可能性，
interface ItypeAPI<T> {
  data: T //请求的数据，用泛型
  msg: string | null // 返回状态码的信息，如请求成功等
  code: number //返回后端自定义的200，404，500这种状态码
}
interface registerData {
  telNumber: string
  code: string
}
interface userObj {
  userName: string
  telNumber?: string
  password: string
}
interface loginObj {
  name: string
  password: string
}
interface login2Obj {
  telNumber: string
  code: string
}
interface pdObj{
  telNumber: string
  password: string
}
// // post请求 ，没参数
// export const LogoutAPI = (): Res<null> => instance.post('/admin/logout')

// 获取手机号注册验证码
export const RegisterIn = (data: registerData): any => request.post('user/verifyCode', data)
// 存入用户基本信息：名字 密码 电话号码
export const UserInfo = (data: userObj): any => request.post('user/userInfor', data)
// 验证登录信息:用户名 密码
export const LoginInfo = (data: loginObj): any => request.post('user/login', data)
// 登录：电话 验证码
export const LoginCode = (data: login2Obj): any => request.post('user/loginVerifyCode', data)

//用户注册时获取手机验证码
export const GetCode = (phoneNumber: string): Res<string> =>
  request.get(`user/sendCode/${phoneNumber}`)

// 用户登录使用验证码
export const GetLoginCode=(phoneNumber: string):any=>
  request.get(`user/loginWithCode/sendCode/${phoneNumber}`)

// 使用cookie直接实现登录
export const GetCookie=():any=>
  request.get(`user/loginWithCookie`)
// 验证电话号码是否违规
export const phoneVertify = (phoneNumber: string): any =>
  request.get(`user/judgeTel/${phoneNumber}`)
// 验证用户名是否重复
export const nameJudge = (name: string): any => request.get(`user/nameJudge/${name}`)
//用户忘记密码时发送验证码
export const GetfogetCode = (phoneNumber: string): Res<string> =>
  request.get(`user/fogetSendCode/${phoneNumber}`)
//重置密码
export const ResetPd=(data:pdObj):any=>
  request.post('user/resetPassword',data)
//重置密码验证验证码
export const ResetCode=(data:login2Obj):any=>
  request.post('user/forgetVerifyCode',data)
