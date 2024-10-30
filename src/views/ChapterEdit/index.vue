<script setup lang='ts'>
import { ref } from 'vue'
const content = ref<string>("")
const updateData = (e = "") => {
    let c1 = e.replace(/<img width="100%"/g, "<img");
    let c2 = c1.replace(/<img/g, '<img width="100%"');
    content.value = c2;
    console.log(content.value);
}
import Editor from '@tinymce/tinymce-vue'
// Define the type for the ai_request function
interface AIRequestFunction {
    (request: any, respondWith: any): Promise<string>;
}

const aiRequest: AIRequestFunction = (request, respondWith) => {
    // Return a Promise that rejects with a string
    return new Promise((resolve, reject) => {
        reject('See docs to implement AI Assistant');
    });
};
const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;
import dateBox from '@/components/dateBox.vue';
const chapterList = ref(
    {
        weekDay: '星期一',
        lunarDate: '八月甘八',
        nowdate: '2024/09/30',
        time: '21:04',
        content: '今天我上面的一颗牙要掉了，有一点疼，但不是很厉害。谁知上午的时候，我本想用舌头碰一下那颗牙，却不小心让牙的一半都掉了下来，疼得我啊啊直叫。中午的菜很丰盛，可是我的牙齿不能动，一动就疼，吃的东西就在眼前，却不能吃，这滋味可真不好受。'

    }
)
const num = ref<number>(1);
const chapterName = ref<string>('小芳回家')

const minDate = new Date(2004, 0, 1);

const date = new Date()
console.log(date, '我是日期66666666666')
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
console.log(year, month, day)
const maxDate = new Date(year, month - 1, day);
let currentDate = ref([String(year), String(month), String(day)]);
let showTime = ref<boolean>(false)
const confirmPicker = (values: any, options: any, indexes: any) => {
    console.log(values, options, indexes)
    showTime.value = false
}
import { useRouter } from 'vue-router';
const router = useRouter()
const goBack = () => {
    router.back()
}
</script>

<template>
    <div v-show="!showTime">
        <div class="titleBar">

            <div class="count">
                <van-icon name="arrow-left" @click="goBack" />
                <div>第</div>
                <van-field v-model="num" input-align="center" />
                <div>天</div>
            </div>
            <div class="title">
                <van-field v-model="chapterName" input-align="center" label="标题" label-align="center" />
            </div>
        </div>
        <div class="date" @click="showTime = true">
            <dateBox :chapterList="chapterList"></dateBox>
        </div>
        <main id="sample">
            <Editor api-key="c1wbmmo4titnuuirczlpr2xvirr91jkdny16u5oqyhe5ob9c" :init="{
                language: 'zh_CN',
                height: '72vh',
                selector: 'textarea#open-source-plugins',
                plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
                editimage_cors_hosts: ['picsum.photos'],
                menubar: 'file edit view insert format tools table help',
                resize: false,
                toolbar_mode: 'sliding',
                autosave_ask_before_unload: true,
                autosave_interval: '30s',
                autosave_prefix: '{path}{query}-{id}-',
                autosave_restore_when_empty: false,
                autosave_retention: '2m',
                image_advtab: true,
                importcss_append: true,
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough| align numlist bullist | link image | table media| lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code  preview | print | pagebreak anchor codesample | ltr rtl ',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                image_caption: true,
                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                noneditable_class: 'mceNonEditable',
                contextmenu: 'link image table',
                skin: useDarkMode ? 'oxide-dark' : 'oxide',
                content_css: useDarkMode ? 'dark' : 'default',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
                ai_request: aiRequest,
            }" initial-value="" />
        </main>
    </div>
    <div class="picker-time" v-show="showTime">
        <van-date-picker v-model="currentDate" title="选择日期" :min-date="minDate" :max-date="maxDate"
            @confirm="confirmPicker" />
    </div>
    <div class="complete">
        <van-button icon="success" type="primary" size="small" />
    </div>

</template>

<style scoped lang='less'>
.date {
    padding: 0 30px 0 30px;
    box-sizing: border-box;
}

.tox-editor-container {
    position: relative;
}

.tox-editor-header {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.tox-statusbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

::v-deep .van-field__value {
    border: 1px solid #d3e3fd;
    border-radius: 10px;

}


::v-deep .van-cell {
    padding: 0 !important;


}

.titleBar {
    display: flex;
    padding: 30px 30px 0 30px;
    align-items: center;
    justify-content: space-between;
}

.count {
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: space-evenly;

    .van-cell {
        width: 60px;
    }

}

.title {
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: space-between;

    .van-cell {
        width: 300px;
    }
}

::v-deep .title .van-field__label {

    width: 110px;
    margin: 0 !important;
    font-weight: bold;
    line-height: 54px;

}

::v-deep .tox-statusbar__branding {
    display: none !important;
}

.complete {
    width: 100%;
    text-align: right;
    padding: 30px 30px 0 0;
    box-sizing: border-box;
}
</style>