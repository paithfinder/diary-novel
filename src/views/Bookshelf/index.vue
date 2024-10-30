<script setup lang="ts">
import { ref } from 'vue'
import tabPage from '@/components/tabPage.vue'
import type { Text } from '@/types/text'
// 进行proxy对象转化(item为未转化的proxy对象)（end为转化后的结果）

// 输出可以看到已经不是proxy对象了
// todo:获取日记和小说数据的方法,获取后处理成小说和日记各自的再分别传给子组件进行渲染

// <TextItem[]> 是 TypeScript 的泛型语法，它告诉 TypeScript 这个 ref 对象应该持有一个 TextItem 类型的数组。
let diaryList = ref<Text[]>([
  {
    bookId: 1,
    name: '小狗日记',
    pic: 'diary/diary_default.jpg',
    type: 0
  },
  {
    bookId: 2,
    name: '小趴菜实习日记',
    pic: 'diary/diary_default.jpg',
    type: 0
  },
  {
    bookId: 3,
    name: '小狗日记',
    pic: 'diary/diary_default.jpg',
    type: 0
  },
  {
    bookId: 4,
    name: '小趴菜实习日记',
    pic: 'diary/diary_default.jpg',
    type: 0
  }
])
let storyList = ref<Text[]>([
  {
    bookId: 5,
    name: '霸道总裁爱上我',
    pic: 'story/story_default.jpg',
    type: 1
  },
  {
    bookId: 6, name: '妈咪才是白月光', pic: 'story/story_default.jpg',
    type: 1
  }
])

const activeName = ref<string>('a')
const titleA = ref<string>('我的日记')
const titleB = ref<string>('我的小说')
</script>

<template>
  <div class="wrap">
    <div class="topBar">
      <van-tabs v-model:active="activeName">
        <tabPage :list="diaryList" name="a" :title="titleA"></tabPage>
        <tabPage :list="storyList" name="b" :title="titleB"></tabPage>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
