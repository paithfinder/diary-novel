import { ref } from 'vue';
import myItem from '@/components/myItem.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let itemList = ref([
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
    }, {
        id: 4,
        title: '收藏夹',
        pic: 'like.png',
        number: 5
    }
]);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("profile") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("l") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("avator_wrap") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("@/assets/my/avator.jpg"), alt: ("") }, { class: ("avator") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("r") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrap-icon") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("arrow"), }));
    const __VLS_2 = __VLS_1({ name: ("arrow"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("record") }));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.itemList))) {
        // @ts-ignore
        [myItem, myItem,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(myItem, new myItem({ key: ((item.id)), title: ((item.title)), pic: ((item.pic)), number: ((item.number)), }));
        const __VLS_7 = __VLS_6({ key: ((item.id)), title: ((item.title)), pic: ((item.pic)), number: ((item.number)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("function") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("export") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("@/icons/my/export.png"), alt: ("") }, { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("setting") }));
    __VLS_styleScopedClasses['wrap'];
    __VLS_styleScopedClasses['profile'];
    __VLS_styleScopedClasses['l'];
    __VLS_styleScopedClasses['avator_wrap'];
    __VLS_styleScopedClasses['avator'];
    __VLS_styleScopedClasses['r'];
    __VLS_styleScopedClasses['wrap-icon'];
    __VLS_styleScopedClasses['record'];
    __VLS_styleScopedClasses['function'];
    __VLS_styleScopedClasses['export'];
    __VLS_styleScopedClasses['setting'];
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
            myItem: myItem,
            itemList: itemList,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
