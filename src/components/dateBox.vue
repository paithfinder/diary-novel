<script setup lang='ts'>
type chapterItem = {
  weekDay: string,
  lunarDate: string,
  nowdate: string,
  time: string,
  content: string
}
const props = defineProps<{
  chapterList: chapterItem;
}>();

const year = props.chapterList.nowdate.split('/')[0]
const date = props.chapterList.nowdate.split('/')[1] + '/' + props.chapterList.nowdate.split('/')[2]
</script>

<template>
  <div class="dateBox">
    <div class="time">
      <div id="weekDay">{{ $props.chapterList.weekDay }}</div>
      <div id="date-time">
        <div>
          {{ $props.chapterList.lunarDate }}
        </div>
        <div>
          {{ $props.chapterList.time }}
        </div>
      </div>
    </div>
    <div class="date">
      <div class="dateSquare">
        <div style="position:relative">{{ year }}</div>

        <div>{{ date }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.dateBox {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .time {
    height: 100%;
    display: flex;
    align-items: center;

    #weekDay {
      height: 100%;
      line-height: 160px;
      font-size: 30px;
      font-weight: bold;
    }

    #date-time {
      font-size: 13px;
      margin-left: 15px;
    }
  }

  .date {
    height: 100%;
    display: flex;
    align-items: center;

    .dateSquare {
      height: 90px;
      width: 120px;
      border: 1px solid black;

      div {
        text-align: center;
        width: 100%;
        height: 45px;
        line-height: 45px;

      }

      div:first-child::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 98%;

        border: 1px dashed black;
      }
    }
  }
}
</style>