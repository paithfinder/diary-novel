export interface listItem {
  // 注意这个date 对于小说是最后更新的事件 日记是哪天开始写就是哪天
  date: string
  weekName?: string
  content: string
  chapter?: string
  day?: string
  chapterName?: string
  chapterId: number
}
