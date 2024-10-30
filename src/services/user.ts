import type { User } from '@/types/user'
import { request } from '@/utils/request'

// 账号密码登录
export const loginIn = (name: string, password: string) => {
  request<User>('login', 'POST', { name, password })
}
