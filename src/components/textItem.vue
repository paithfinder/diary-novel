<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { CheckboxGroupInstance } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const checkboxGroupRef = ref<CheckboxGroupInstance>()
let props = defineProps({
  name: String,
  pic: {
    type: String,
    default: () => {
      return 'diary/default_bg.png'
    }
  },
  type: Number,
  bookId: Number,
  showChoice: Boolean
})
let urlClass = ref(
  `url(${new URL(`../assets/${props.pic}`, import.meta.url).href})`
)
const checked = ref([])
const checkAll = () => {
  if (checkboxGroupRef.value) {
    checkboxGroupRef.value.toggleAll(true)
  }
}
const NotCheckAll = () => {
  if (checkboxGroupRef.value) {
    checkboxGroupRef.value.toggleAll(false)
  }
}
// 动态路由跳转 todo:获取bookId和type,通过id和type渲染不同类型的书
const goCur = (e: any) => {
  console.log(e.target, '我是被点击的书本')
  console.log(e.target.id)
  if (!props.showChoice) {
    router.push({ name: 'curbook', params: { type: `${props.type}`, bookId: `${props.bookId}` } })
  }
}
defineExpose({
  checkAll,
  NotCheckAll
})
</script>

<template>
  <div class="bigBox" @click="goCur($event)">
    <div class="textBox">
      <div class="modal" v-show="props.showChoice">
        <van-checkbox-group v-model="checked" ref="checkboxGroupRef">
          <van-checkbox></van-checkbox>
        </van-checkbox-group>
      </div>
    </div>
    <div>{{ props.name }}</div>
  </div>
</template>

<style scoped lang="less">
.bigBox {
  width: 150px;
  margin: 30px;
  box-sizing: border-box;

  .textBox {
    width: 150px;
    min-height: 200px;
    background-size: cover;
    background-position: center;
    background-image: v-bind(urlClass);

    .modal {
      width: 100%;
      height: 200px;
      background-color: rgba(255, 255, 255, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

::v-deep .van-icon {
  --van-checkbox-border-color: black !important;
}
</style>
