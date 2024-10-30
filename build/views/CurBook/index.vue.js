import { useRoute } from 'vue-router';
import textItem from '@/components/textItem.vue';
import { ref } from 'vue';
import chapter from '@/components/chapter.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
import { showToast } from 'vant';
import 'vant/es/toast/style';
import router from '@/router';
// 获取传过来的参数
console.log(route.params, '我是路由传递过来的参数');
let bookType = ref(parseInt(route.params.type, 10));
const typeName = bookType.value === 0 ? '日记' : '小说';
const bookId = ref(parseInt(route.params.bookId, 10));
const onClick = () => {
    showToast('点击气泡');
};
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
const curBook = ref({
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
});
let value = ref('');
const backShelf = () => {
    router.back();
};
const chapterDetail = () => {
};
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
    __VLS_styleScopedClasses['content'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrap") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("topBar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.typeName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.backShelf) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("curBar") }));
    // @ts-ignore
    [textItem, textItem,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(textItem, new textItem({ pic: ((__VLS_ctx.curBook.pic)), }));
    const __VLS_1 = __VLS_0({ pic: ((__VLS_ctx.curBook.pic)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(Object.assign({ name: ("setting-o"), size: ("30px") }, { style: ({}) })));
    const __VLS_7 = __VLS_6(Object.assign({ name: ("setting-o"), size: ("30px") }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("name") }));
    const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ name: ("flower-o"), size: ("20px"), }));
    const __VLS_13 = __VLS_12({ name: ("flower-o"), size: ("20px"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("text"), });
    (__VLS_ctx.curBook.name);
    const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ name: ("flower-o"), size: ("20px"), }));
    const __VLS_19 = __VLS_18({ name: ("flower-o"), size: ("20px"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("search") }));
    const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.VanSearch;
    /** @type { [typeof __VLS_components.VanSearch, typeof __VLS_components.vanSearch, ] } */
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ modelValue: ((__VLS_ctx.value)), shape: ("round"), placeholder: ("请输入搜索关键词"), }));
    const __VLS_25 = __VLS_24({ modelValue: ((__VLS_ctx.value)), shape: ("round"), placeholder: ("请输入搜索关键词"), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("content") }));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.curBook.contentList))) {
        // @ts-ignore
        [chapter, chapter,];
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(chapter, new chapter(Object.assign({ 'onClick': {} }, { key: ((item.date)), item: ((item)) })));
        const __VLS_30 = __VLS_29(Object.assign({ 'onClick': {} }, { key: ((item.date)), item: ((item)) }), ...__VLS_functionalComponentArgsRest(__VLS_29));
        let __VLS_34;
        const __VLS_35 = {
            onClick: (__VLS_ctx.chapterDetail)
        };
        let __VLS_31;
        let __VLS_32;
        const __VLS_33 = __VLS_pickFunctionalComponentCtx(chapter, __VLS_30);
    }
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VanFloatingBubble;
    /** @type { [typeof __VLS_components.VanFloatingBubble, typeof __VLS_components.vanFloatingBubble, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(Object.assign({ 'onClick': {} }, { icon: ("plus") })));
    const __VLS_38 = __VLS_37(Object.assign({ 'onClick': {} }, { icon: ("plus") }), ...__VLS_functionalComponentArgsRest(__VLS_37));
    let __VLS_42;
    const __VLS_43 = {
        onClick: (__VLS_ctx.onClick)
    };
    let __VLS_39;
    let __VLS_40;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    __VLS_styleScopedClasses['wrap'];
    __VLS_styleScopedClasses['topBar'];
    __VLS_styleScopedClasses['curBar'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['name'];
    __VLS_styleScopedClasses['search'];
    __VLS_styleScopedClasses['content'];
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
            textItem: textItem,
            chapter: chapter,
            typeName: typeName,
            onClick: onClick,
            curBook: curBook,
            value: value,
            backShelf: backShelf,
            chapterDetail: chapterDetail,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
