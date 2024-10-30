<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  number: {
    type: Number,
    default: () => {}
  },
  pic: {
    type: String,
    default: () => {
      return
    }
  },
  title: {
    type: String,
    default: () => {
      return
    }
  }
})
let picture = ref(
  `${new URL(`../icons/my/${props.pic}`, import.meta.url).href}`
)
</script>

<template>
  <div class="itemBox">
    <img :src="picture" alt="" style="width: 40px; height: 40px" />
    <div class="title">{{ props.title }}</div>
    <div class="number">{{ props.number }}</div>
  </div>
</template>

<style scoped lang="less">
.itemBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34%;

  .number {
    text-shadow:
      2px -2px white,
      -6px 6px gray;
    color: yellow;
    font-size: 20px;
    font-weight: bold;
  }

  .title {
    color: #fff;
    font-family: STXingkai;
    margin-top: 10px;
  }
}
</style>
