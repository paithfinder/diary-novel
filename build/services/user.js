import { request } from '@/utils/request';
// 账号密码登录
export const loginIn = (name, password) => {
    request('login', 'POST', { name, password });
};
