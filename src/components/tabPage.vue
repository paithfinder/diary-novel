<script setup lang="ts">
// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';
import { ref, defineProps } from 'vue'
import type { PropType } from 'vue'
import textItem from '@/components/textItem.vue'
import addBox from '@/components/addBox.vue'
import type { Text } from '@/types/text'
const props = defineProps({
  list: {
    type: Array as PropType<Text[]>,
    default: () => { }
  },
  title: {
    type: String,
    default: () => { }
  }
})
const showChoice = ref<boolean>(false)
const setFn = () => {
  showChoice.value = !showChoice.value
}
const textChild = ref()
const chooseText = ref<string>('全选')
const deleteItem = () => {
  showDialog({
    message: '确认删除书籍吗',
    theme: 'round-button'
  }).then(() => { })
}
const handleCheckAll = () => {
  console.log(textChild.value)
  if (chooseText.value === '全选') {
    textChild.value.forEach((e: any) => {
      e.checkAll()
      chooseText.value = '取消'
    })
  } else {
    textChild.value.forEach((e: any) => {
      e.NotCheckAll()
      chooseText.value = '全选'
    })
  }
}
const show = ref(false)
const onSubmit = (values: any) => {
  console.log('submit', values)
  show.value = false
}
const bookName = ref<string>('')
const value = ref([
  { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' }
])
</script>

<template>
  <van-tab :title="props.title" class="tab">
    <!-- 全选和删除 -->
    <div class="choice" v-show="showChoice">
      <van-button type="primary" @click="handleCheckAll" size="small">{{
        chooseText
      }}</van-button>

      <van-button icon="delete-o" color="red" size="small" @click="deleteItem">删除</van-button>
    </div>
    <textItem ref="textChild" v-for="item in props.list" :key="item.bookId" :type="item.type" :bookId="item.bookId" :name="item.name" :pic="item.pic"
      :showChoice="showChoice">
    </textItem>
    <addBox @click="show = true"></addBox>
    <!-- 设置 -->
    <div class="set-box" @click="setFn" v-show="!showChoice">
      <div class="set-icon">
        <van-icon name="setting-o" size="30px" color="#dc362e" />
      </div>
      <div>设置</div>
    </div>
    <!-- 取消 -->
    <div class="set-box" @click="setFn" v-show="showChoice">
      <div class="set-icon">
        <van-icon name="revoke" size="30px" color="#dc362e" />
      </div>
      <div>返回</div>
    </div>
  </van-tab>
  <van-overlay :show="show" @click="show = false">
    <div class="blockBox" @click.stop>
      <div class="block">
        <div class="title">
          <div>
            <van-icon name="records-o" size="30px" />
          </div>
          <div>新增书籍</div>
        </div>
        <van-form @submit="onSubmit" class="form">
          <van-cell-group inset>
            <van-field v-model="bookName" name="bookName" label="书名" placeholder="请填写书名"
              :rules="[{ required: true, message: '请填写书名' }]" />
          </van-cell-group>
          <van-field name="uploader" label="文件上传">
            <template #input>
              <van-uploader v-model="value" />
            </template>
          </van-field>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit" @click="show = false">
              确定
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </van-overlay>
</template>

<style scoped lang="less">
.tab {
  display: flex;
  flex-wrap: wrap;

  .choice {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.set-box {
  width: 150px;
  height: 230px;
  margin: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .set-icon {
    height: 70px;
    width: 100%;
    text-align: center;
  }
}

.blockBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .block {
    // width: 120px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;

    .title {
      display: flex;
      font-size: 20px;
      font-weight: 200;
      color: #6dc2db;
      align-items: center;
      width: 35%;
      height: 80px;
      justify-content: space-between;
    }

    .form {
      margin-top: 20px;
    }
  }
}
</style>
