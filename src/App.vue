<script setup lang="ts">
import { GetCookie } from '@/utils/api';
import {onBeforeMount} from 'vue'
import { showToast } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()
onBeforeMount(async()=>{
  let res= await  GetCookie()
console.log(res)
if(res.success){
  router.push('/bookshelf')
}else{
  showToast(res.errorMsg)
}
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
