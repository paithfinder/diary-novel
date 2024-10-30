import type { User } from '@/types/user.d.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 默认用户信息
    const user = ref<User | undefined>()
    // 设置用户，登录后使用
    const setUser = (u: User) => {
      user.value = u
    }
    // 设置Token
    const setToken = (token: number) => {
      if (user.value) {
        user.value.TOKEN = token
      } else {
        user.value = {
          TOKEN: token,
          name: null,
          password: null,
          telNumber: null
        }
      }
    }
    // 清空用户，退出后使用
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser, setToken }
  },
  {
    persist: true
  }
)
