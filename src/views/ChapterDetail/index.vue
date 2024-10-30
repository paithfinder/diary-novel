<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue'
import { showDialog } from 'vant';
import dateBox from '@/components/dateBox.vue'
import 'vant/es/dialog/style';
const route = useRoute()
const router = useRouter()
console.log(route)
console.log(route.query)
let starType = ref<string>('star-o')
const changestarType = () => {
  starType.value = starType.value === 'star-o' ? 'star' : 'star-o'
}
const goBack = () => {
  router.back()
}
// todo:获取当前时间和所有内容的数据
const chapterList = ref(
  {
    weekDay: '星期一',
    lunarDate: '八月甘八',
    nowdate: '2024/09/30',
    time: '21:04',
    content: '今天我上面的一颗牙要掉了，有一点疼，但不是很厉害。谁知上午的时候，我本想用舌头碰一下那颗牙，却不小心让牙的一半都掉了下来，疼得我啊啊直叫。中午的菜很丰盛，可是我的牙齿不能动，一动就疼，吃的东西就在眼前，却不能吃，这滋味可真不好受。'

  }
)

const showBoard = () => {
  isBoard.value = true
}
const isBoard = ref<boolean>(false)
const deleteItem = () => {
  showDialog({
    message: '确认删除本次编辑内容吗',
    theme: 'round-button'
  }).then(() => { });
};


const goEdit = () => {
  router.push('/chapterEdit')
}
</script>

<template>
  <div class="wrap">
    <div class="title">
      <div class="l">
        <van-icon name="arrow-left" @click="goBack" />
        {{ route.query.day !== 'undefined' ? route.query.day : `${route.query.chapter} ${route.query.chapterName}` }}
      </div>
      <div class="r">
        <van-icon :name=starType size="20px" @click="changestarType" color="#ffdf99" />

      </div>
    </div>
    <dateBox :chapterList="chapterList"></dateBox>
    <div class="content">
      {{ chapterList.content }}
    </div>
    <div class="menu" @click="showBoard">
      <div v-show="!isBoard"><van-icon name="list-switching" size="25px" color="#ccc" /></div>
      <div class="board" v-show="isBoard">
        <div style="width:50%;" @click="deleteItem">
          <van-icon name="delete-o" size="25px" color="#ccc" />
        </div>
        <div style="width:50%;" @click="goEdit">
          <van-icon name="edit" size="25px" color="#ccc" />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang='less'>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .l {
    display: flex;
    align-items: center;

    #edit {
      width: 45px;
      height: 45px;

      img {
        width: 100%;
        height: 100%;
        line-height: 20px;
      }
    }
  }
}



.menu {
  position: fixed;
  width: 100vw;
  height: 100px;
  line-height: 100px;
  background-color: #edf2fa;
  text-align: center;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;

  .board {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
}
</style>