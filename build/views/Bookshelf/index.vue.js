import { ref } from 'vue';
import tabPage from '@/components/tabPage.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 进行proxy对象转化(item为未转化的proxy对象)（end为转化后的结果）
// 输出可以看到已经不是proxy对象了
// todo:获取日记和小说数据的方法,获取后处理成小说和日记各自的再分别传给子组件进行渲染
// <TextItem[]> 是 TypeScript 的泛型语法，它告诉 TypeScript 这个 ref 对象应该持有一个 TextItem 类型的数组。
let diaryList = ref([
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
]);
let storyList = ref([
    {
        bookId: 5,
        name: '霸道总裁爱上我',
        pic: 'story/story_default.jpg',
        type: 1
    },
    {
        bookId: 6, name: '妈咪才是白月光', pic: 'story/story_default.jpg',
        type: 1
    }
]);
const activeName = ref('a');
const titleA = ref('我的日记');
const titleB = ref('我的小说');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrap") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("topBar") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VanTabs;
    /** @type { [typeof __VLS_components.VanTabs, typeof __VLS_components.vanTabs, typeof __VLS_components.VanTabs, typeof __VLS_components.vanTabs, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ active: ((__VLS_ctx.activeName)), }));
    const __VLS_2 = __VLS_1({ active: ((__VLS_ctx.activeName)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [tabPage, tabPage,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(tabPage, new tabPage({ list: ((__VLS_ctx.diaryList)), name: ("a"), title: ((__VLS_ctx.titleA)), }));
    const __VLS_7 = __VLS_6({ list: ((__VLS_ctx.diaryList)), name: ("a"), title: ((__VLS_ctx.titleA)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    // @ts-ignore
    [tabPage, tabPage,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(tabPage, new tabPage({ list: ((__VLS_ctx.storyList)), name: ("b"), title: ((__VLS_ctx.titleB)), }));
    const __VLS_12 = __VLS_11({ list: ((__VLS_ctx.storyList)), name: ("b"), title: ((__VLS_ctx.titleB)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['wrap'];
    __VLS_styleScopedClasses['topBar'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            tabPage: tabPage,
            diaryList: diaryList,
            storyList: storyList,
            activeName: activeName,
            titleA: titleA,
            titleB: titleB,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
