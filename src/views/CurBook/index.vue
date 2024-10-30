<script setup lang="ts">
import { useRoute } from 'vue-router'
import textItem from '@/components/textItem.vue'
import { ref } from 'vue'
import chapter from '@/components/chapter.vue'
const route = useRoute()
import type { listItem } from '@/types/listItem'
import { showToast } from 'vant'
import 'vant/es/toast/style'
import router from '@/router';
// 获取传过来的参数
console.log(route.params, '我是路由传递过来的参数')
let bookType = ref<number>(parseInt(route.params.type as string, 10))
const typeName = bookType.value === 0 ? '日记' : '小说'
const bookId = ref<number>(parseInt(route.params.bookId as string, 10))
const onClick = () => {
  showToast('点击气泡')
}
// 假数据 当前书本的详细信息
// 日记数据

interface bookItem {
  bookId: number
  name: string
  pic: string
  type: number
  contentList: listItem[]
}
// todo:通过bookId获取当前的book的相关信息
// const curBook = ref<bookItem>({
//   bookId: 1232432,
//   name: '回乡的诱惑',
//   pic: 'curBook/诱惑.jpg',
//   //   日记的类型是0
//   type: 0,
//   contentList: [
//     {
//       date: '2024.9.30',
//       weekName: '星期一',
//       content: '回乡的诱惑,她很美丽又善良……',
//       day:'第一天',
//       chapterId:23234

//     },
//     {
//       date: '2024.9.29',
//       weekName: '星期天',
//       content: '村里有个老汉叫大壮，他既魁梧又强壮',
//       day:'第二天',
//       chapterId:34534
//     }
//   ]
// })
// 小说数据
const curBook = ref<bookItem>({
  bookId: 1232432,
  name: '回乡的诱惑wafeqewfqf',
  pic: 'curBook/诱惑.jpg',
  type: 1,
  contentList: [
    {
      //  小说编辑的最后更新时间
      date: '2024.9.30',
      chapter: '第一章',
      chapterName: '小芳回乡',
      content: '村里有个姑凉叫小芳,她很美丽又善良……',
      chapterId: 111
    },
    {
      //  小说编辑的最后更新时间
      date: '2024.9.30',
      chapter: '第一章',
      chapterName: '小芳回乡',
      content: '村里有个姑凉叫小芳,她很美丽又善良……',
      chapterId: 23423
    }
  ]
})
let value = ref<string>('')
const backShelf = () => {
  router.back()
}
import type { Text } from '@/types/text'
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
</script>

<template>
  <div class="wrap">
    <div class="topBar">
      <div>我的{{ typeName }}</div>
      <div @click="backShelf">返回书架</div>
    </div>
    <div class="curBar">
      <van-swipe>
        <van-swipe-item v-for="(item,index) in diaryList" >
          <textItem :pic="item.pic"></textItem>
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
    </div>
    <div class="set">
      <van-icon name="setting-o" size="20px" />
    </div>

    <div class="title">
      <div class="name">
        <van-icon name="flower-o" size="20px" />
        <div id="text">—— • {{ curBook.name }} • ——</div>
        <van-icon name="flower-o" size="20px" />
      </div>
    </div>
    <div class="search">
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    </div>
    <div class="content">
      <chapter v-for="item in curBook.contentList" :key="item.date" :item="item" ></chapter>
    </div>
  </div>
  <van-floating-bubble icon="plus" @click="onClick" />
</template>

<style scoped lang="less">
.topBar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}


.set {
  width: 100%;
  text-align: center;

}

.title {
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:15px;
    #text {
      padding: 0 10px 0 10px;
      box-sizing: border-box;
    }
  }
}

.search {
  height: 150px;
  width: 100%;
  margin-top: 20px;
}

.content {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content:last-child {
  border-bottom: 20px solid #f5f5f5;
}
.custom-indicator{
  text-align: right;
}
::v-deep .van-swipe-item{
  display: flex;
  justify-content: center;
}
</style>
