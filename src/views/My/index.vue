<script setup lang="ts">
import { ref } from 'vue'
import myItem from '@/components/myItem.vue'
export type item = {
  id: number
  title: string
  pic: string
  number: number
}
let itemList = ref<item[]>([
  {
    id: 1,
    title: '已写书籍',
    pic: 'book.png',
    number: 5
  },
  {
    id: 2,
    title: '打卡天数',
    pic: 'day.png',
    number: 30
  },
  {
    id: 3,
    title: '总字数',
    pic: 'zishu.png',
    number: 232424
  },{
    id:4,
    title:'收藏夹',
    pic:'like.png',
    number:5
  }
])
</script>

<template>
  <div class="wrap">
    <div class="profile">
      <div class="l">
        <div class="avator_wrap">
          <img src="@/assets/my/avator.jpg" alt="" class="avator" />
        </div>
        <div style="margin-left: 10px">喜欢记录的王二狗</div>
      </div>
      <div class="r">
        <div>修改个人资料</div>
        <div class="wrap-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="record">
      <myItem v-for="item in itemList" :key="item.id" :title="item.title" :pic="item.pic" :number="item.number">
      </myItem>
    </div>
    <div class="function">
      <!-- 导出 -->
      <div class="export">
        <div>
          <img src="@/icons/my/export.png" alt="" style="width: 30px; height: 30px" />
        </div>
        <div>导出</div>
      </div>
      <!-- 设置 -->
      <div class="setting">设置</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .l {
    display: flex;
    align-items: center;

    .avator_wrap {
      width: 100px;
      height: 100px;

      .avator {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .r {
    display: flex;
    align-items: center;

    .wrap-icon {
      height: 100%;
      line-height: 20px;
    }
  }
}

.record {
  height: 280px;
  background-color: pink;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.function {
  display: flex;
  height: 200px;
  background-color: #ccc;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;

  .export {
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 20px;
  }
}
</style>
