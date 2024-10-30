import { showDialog } from 'vant';
import 'vant/es/dialog/style';
import { ref, defineProps } from 'vue';
import textItem from '@/components/textItem.vue';
import addBox from '@/components/addBox.vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    list: {
        type: Array,
        default: () => { }
    },
    title: {
        type: String,
        default: () => { }
    }
});
const showChoice = ref(false);
const setFn = () => {
    showChoice.value = !showChoice.value;
};
const textChild = ref();
const chooseText = ref('全选');
const deleteItem = () => {
    showDialog({
        message: '确认删除书籍吗',
        theme: 'round-button'
    }).then(() => { });
};
const handleCheckAll = () => {
    console.log(textChild.value);
    if (chooseText.value === '全选') {
        textChild.value.forEach((e) => {
            e.checkAll();
            chooseText.value = '取消';
        });
    }
    else {
        textChild.value.forEach((e) => {
            e.NotCheckAll();
            chooseText.value = '全选';
        });
    }
};
const show = ref(false);
const onSubmit = (values) => {
    console.log('submit', values);
    show.value = false;
};
const bookName = ref('');
const value = ref([
    { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' }
]);
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        list: {
            type: Array,
            default: () => { }
        },
        title: {
            type: String,
            default: () => { }
        }
    },
});
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VanTab;
    /** @type { [typeof __VLS_components.VanTab, typeof __VLS_components.vanTab, typeof __VLS_components.VanTab, typeof __VLS_components.vanTab, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ title: ((props.title)) }, { class: ("tab") })));
    const __VLS_2 = __VLS_1(Object.assign({ title: ((props.title)) }, { class: ("tab") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("choice") }));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showChoice) }), null, null);
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(Object.assign({ 'onClick': {} }, { type: ("primary"), size: ("small") })));
    const __VLS_8 = __VLS_7(Object.assign({ 'onClick': {} }, { type: ("primary"), size: ("small") }), ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.handleCheckAll)
    };
    let __VLS_9;
    let __VLS_10;
    (__VLS_ctx.chooseText);
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14(Object.assign({ 'onClick': {} }, { icon: ("delete-o"), color: ("red"), size: ("small") })));
    const __VLS_16 = __VLS_15(Object.assign({ 'onClick': {} }, { icon: ("delete-o"), color: ("red"), size: ("small") }), ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        onClick: (__VLS_ctx.deleteItem)
    };
    let __VLS_17;
    let __VLS_18;
    __VLS_nonNullable(__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    for (const [item] of __VLS_getVForSourceType((props.list))) {
        // @ts-ignore
        [textItem, textItem,];
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(textItem, new textItem({ ref: ("textChild"), key: ((item.bookId)), type: ((item.type)), bookId: ((item.bookId)), name: ((item.name)), pic: ((item.pic)), showChoice: ((__VLS_ctx.showChoice)), }));
        const __VLS_23 = __VLS_22({ ref: ("textChild"), key: ((item.bookId)), type: ((item.type)), bookId: ((item.bookId)), name: ((item.name)), pic: ((item.pic)), showChoice: ((__VLS_ctx.showChoice)), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        // @ts-ignore navigation for `const textChild = ref()`
        __VLS_ctx.textChild;
        var __VLS_27 = {};
        const __VLS_26 = __VLS_pickFunctionalComponentCtx(textItem, __VLS_23);
    }
    // @ts-ignore
    [addBox, addBox,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(addBox, new addBox(Object.assign({ 'onClick': {} })));
    const __VLS_29 = __VLS_28(Object.assign({ 'onClick': {} }), ...__VLS_functionalComponentArgsRest(__VLS_28));
    let __VLS_33;
    const __VLS_34 = {
        onClick: (...[$event]) => {
            __VLS_ctx.show = true;
        }
    };
    let __VLS_30;
    let __VLS_31;
    const __VLS_32 = __VLS_pickFunctionalComponentCtx(addBox, __VLS_29);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.setFn) }, { class: ("set-box") }));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (!__VLS_ctx.showChoice) }), null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("set-icon") }));
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ name: ("setting-o"), size: ("30px"), color: ("#dc362e"), }));
    const __VLS_37 = __VLS_36({ name: ("setting-o"), size: ("30px"), color: ("#dc362e"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.setFn) }, { class: ("set-box") }));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showChoice) }), null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("set-icon") }));
    const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ name: ("revoke"), size: ("30px"), color: ("#dc362e"), }));
    const __VLS_43 = __VLS_42({ name: ("revoke"), size: ("30px"), color: ("#dc362e"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.VanOverlay;
    /** @type { [typeof __VLS_components.VanOverlay, typeof __VLS_components.vanOverlay, typeof __VLS_components.VanOverlay, typeof __VLS_components.vanOverlay, ] } */
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47(Object.assign({ 'onClick': {} }, { show: ((__VLS_ctx.show)) })));
    const __VLS_49 = __VLS_48(Object.assign({ 'onClick': {} }, { show: ((__VLS_ctx.show)) }), ...__VLS_functionalComponentArgsRest(__VLS_48));
    let __VLS_53;
    const __VLS_54 = {
        onClick: (...[$event]) => {
            __VLS_ctx.show = false;
        }
    };
    let __VLS_50;
    let __VLS_51;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: () => { } }, { class: ("blockBox") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("block") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ name: ("records-o"), size: ("30px"), }));
    const __VLS_57 = __VLS_56({ name: ("records-o"), size: ("30px"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VanForm;
    /** @type { [typeof __VLS_components.VanForm, typeof __VLS_components.vanForm, typeof __VLS_components.VanForm, typeof __VLS_components.vanForm, ] } */
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61(Object.assign({ 'onSubmit': {} }, { class: ("form") })));
    const __VLS_63 = __VLS_62(Object.assign({ 'onSubmit': {} }, { class: ("form") }), ...__VLS_functionalComponentArgsRest(__VLS_62));
    let __VLS_67;
    const __VLS_68 = {
        onSubmit: (__VLS_ctx.onSubmit)
    };
    let __VLS_64;
    let __VLS_65;
    const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.VanCellGroup;
    /** @type { [typeof __VLS_components.VanCellGroup, typeof __VLS_components.vanCellGroup, typeof __VLS_components.VanCellGroup, typeof __VLS_components.vanCellGroup, ] } */
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ inset: (true), }));
    const __VLS_71 = __VLS_70({ inset: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ modelValue: ((__VLS_ctx.bookName)), name: ("bookName"), label: ("书名"), placeholder: ("请填写书名"), rules: (([{ required: true, message: '请填写书名' }])), }));
    const __VLS_77 = __VLS_76({ modelValue: ((__VLS_ctx.bookName)), name: ("bookName"), label: ("书名"), placeholder: ("请填写书名"), rules: (([{ required: true, message: '请填写书名' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    __VLS_nonNullable(__VLS_74.slots).default;
    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
    const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ name: ("uploader"), label: ("文件上传"), }));
    const __VLS_83 = __VLS_82({ name: ("uploader"), label: ("文件上传"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { input: __VLS_thisSlot } = __VLS_nonNullable(__VLS_86.slots);
        const __VLS_87 = __VLS_resolvedLocalAndGlobalComponents.VanUploader;
        /** @type { [typeof __VLS_components.VanUploader, typeof __VLS_components.vanUploader, ] } */
        // @ts-ignore
        const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ modelValue: ((__VLS_ctx.value)), }));
        const __VLS_89 = __VLS_88({ modelValue: ((__VLS_ctx.value)), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
    }
    const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    const __VLS_93 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93(Object.assign({ 'onClick': {} }, { round: (true), block: (true), type: ("primary"), nativeType: ("submit") })));
    const __VLS_95 = __VLS_94(Object.assign({ 'onClick': {} }, { round: (true), block: (true), type: ("primary"), nativeType: ("submit") }), ...__VLS_functionalComponentArgsRest(__VLS_94));
    let __VLS_99;
    const __VLS_100 = {
        onClick: (...[$event]) => {
            __VLS_ctx.show = false;
        }
    };
    let __VLS_96;
    let __VLS_97;
    __VLS_nonNullable(__VLS_98.slots).default;
    const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
    __VLS_nonNullable(__VLS_66.slots).default;
    const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
    __VLS_nonNullable(__VLS_52.slots).default;
    const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49);
    __VLS_styleScopedClasses['tab'];
    __VLS_styleScopedClasses['choice'];
    __VLS_styleScopedClasses['set-box'];
    __VLS_styleScopedClasses['set-icon'];
    __VLS_styleScopedClasses['set-box'];
    __VLS_styleScopedClasses['set-icon'];
    __VLS_styleScopedClasses['blockBox'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['form'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "textChild": __VLS_27,
    };
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
            addBox: addBox,
            showChoice: showChoice,
            setFn: setFn,
            textChild: textChild,
            chooseText: chooseText,
            deleteItem: deleteItem,
            handleCheckAll: handleCheckAll,
            show: show,
            onSubmit: onSubmit,
            bookName: bookName,
            value: value,
        };
    },
    props: {
        list: {
            type: Array,
            default: () => { }
        },
        title: {
            type: String,
            default: () => { }
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        list: {
            type: Array,
            default: () => { }
        },
        title: {
            type: String,
            default: () => { }
        }
    },
});
;
