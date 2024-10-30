<script setup lang="ts">
import type { listItem } from '@/types/listItem'
import { useRoute, useRouter } from 'vue-router';
const route = useRouter()
const router = useRouter()
// 获取传过来的参数
const props = defineProps({
  item: {
    type: Object as () => listItem,
    default: () => { }
  }
})
let parts = props.item.date.split('.')
let day = parts[2] // 日
let yearAndMonth = parts[0] + '.' + parts[1] // 年份和月份
console.log('日:', day)
console.log('年份和月份:', yearAndMonth)
const goDetail = () => {
  router.push({ name: 'chapterDetail', query: { chapterId: `${props.item.chapterId}`, chapter: `${props.item.chapter}`, chapterName: `${props.item.chapterName}`, day: `${props.item.day}` } })
}
</script>

<template>
  <div class="chapterBox" @click="goDetail">
    <div class="time">
      <div>{{ day }}</div>
      <div style="padding: 5px 0 5px 0; box-sizing: border-box">
        {{ props.item.weekName ? props.item.weekName : props.item.chapter }}
      </div>
      <div style="padding: 0 0 5px 0; box-sizing: border-box">
        {{ props.item?.chapterName }}
      </div>
      <div>{{ yearAndMonth }}</div>
    </div>
    <div class="word">{{ props.item.content }}</div>
  </div>
</template>

<style scoped lang="less">
.chapterBox {
  width: 95%;
  height: 250px;
  background-color: #ffffff;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  .time {
    flex: 3;
    position: relative; // 添加相对定位，为伪元素提供定位上下文
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #828282;
  }

  .time::after {
    position: absolute; // 使用绝对定位来放置伪元素
    right: 0; // 将伪元素放置在.time容器的右侧
    top: 50%; // 将伪元素垂直居中
    transform: translateY(-50%); // 垂直居中调整
    width: 6px;
    height: 200px;
    content: '';
    background-color: #f5f5f5;
  }

  .word {
    flex: 7;
    padding: 30px;
    box-sizing: border-box;
  }
}
</style>
