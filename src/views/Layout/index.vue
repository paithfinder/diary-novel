<script setup lang="ts">
import { ref } from 'vue'
const active = ref<string>('home')
</script>

<template>
    <router-view />
    <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="/bookshelf" replace name="home">书架</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/my" replace name="my">我的</van-tabbar-item>
    </van-tabbar>
</template>

<style scoped lang="less"></style>
