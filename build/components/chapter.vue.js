import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRouter();
const router = useRouter();
// 获取传过来的参数
const props = defineProps({
    item: {
        type: Object,
        default: () => { }
    }
});
let parts = props.item.date.split('.');
let day = parts[2]; // 日
let yearAndMonth = parts[0] + '.' + parts[1]; // 年份和月份
console.log('日:', day);
console.log('年份和月份:', yearAndMonth);
const goDetail = () => {
    router.push({ name: 'chapterDetail', query: { chapterId: `${props.item.chapterId}`, chapter: `${props.item.chapter}`, chapterName: `${props.item.chapterName}`, day: `${props.item.day}` } });
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    var _a;
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['time'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.goDetail) }, { class: ("chapterBox") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("time") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.day);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    (props.item.weekName ? props.item.weekName : props.item.chapter);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    ((_a = props.item) === null || _a === void 0 ? void 0 : _a.chapterName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.yearAndMonth);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("word") }));
    (props.item.content);
    __VLS_styleScopedClasses['chapterBox'];
    __VLS_styleScopedClasses['time'];
    __VLS_styleScopedClasses['word'];
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
            day: day,
            yearAndMonth: yearAndMonth,
            goDetail: goDetail,
        };
    },
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    },
});
;
