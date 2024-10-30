<script setup lang="ts"></script>

<template>
  <div class="box">
    <div class="addBox">
      <div class="add">
        <van-icon name="plus" size="30px" />
      </div>
    </div>
    <div class="text">添加</div>
  </div>
</template>

<style scoped lang="less">
.box {
  .addBox {
    width: 150px;
    height: 200px;
    margin: 30px;
    box-sizing: border-box;
    background-color: #ccc;
    position: relative;

    .add {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

}
</style>
