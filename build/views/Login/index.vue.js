import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/stores/modules/user';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const route = useRoute();
// 接收注册信息上一个路由页面传过来的参数
console.log(route.query);
const router = useRouter();
const username = ref('');
const password = ref('');
const checked = ref(true);
const onSubmit = (values) => {
    console.log('submit', values);
};
const toRegister = () => {
    router.push('/register');
};
// todo:异步获取token并存入
const goHome = () => {
    const user = {
        token: '232e2',
        name: username.value,
        password: password.value
    };
    userStore.setUser(user);
    router.push('/bookshelf');
};
const goMsg = () => {
    router.push('/login2');
};
const resetPd = () => {
    router.push('/forgetPd');
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
    __VLS_styleScopedClasses['van-cell'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrap") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.goMsg) }, { class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ("@/icons/Login/箭头.png"), alt: ("") }, { class: ("icon") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("form") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VanForm;
    /** @type { [typeof __VLS_components.VanForm, typeof __VLS_components.vanForm, typeof __VLS_components.VanForm, typeof __VLS_components.vanForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onSubmit': {} })));
    const __VLS_2 = __VLS_1(Object.assign({ 'onSubmit': {} }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onSubmit: (__VLS_ctx.onSubmit)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.VanCellGroup;
    /** @type { [typeof __VLS_components.VanCellGroup, typeof __VLS_components.vanCellGroup, typeof __VLS_components.VanCellGroup, typeof __VLS_components.vanCellGroup, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ inset: (true), }));
    const __VLS_10 = __VLS_9({ inset: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.username)), name: ("name"), placeholder: ("请输入您的用户名"), rules: (([{ required: true, message: '请填写用户名' }])), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.username)), name: ("name"), placeholder: ("请输入您的用户名"), rules: (([{ required: true, message: '请填写用户名' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.password)), type: ("password"), name: ("password"), placeholder: ("请输入您的密码"), rules: (([{ required: true, message: '请填写密码' }])), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.password)), type: ("password"), name: ("password"), placeholder: ("请输入您的密码"), rules: (([{ required: true, message: '请填写密码' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.VanCheckbox;
    /** @type { [typeof __VLS_components.VanCheckbox, typeof __VLS_components.vanCheckbox, typeof __VLS_components.VanCheckbox, typeof __VLS_components.vanCheckbox, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26(Object.assign({ modelValue: ((__VLS_ctx.checked)), shape: ("square") }, { style: ({}) })));
    const __VLS_28 = __VLS_27(Object.assign({ modelValue: ((__VLS_ctx.checked)), shape: ("square") }, { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("text") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: ("text") }));
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(Object.assign(Object.assign({ 'onClick': {} }, { round: (true), block: (true), type: ("primary"), nativeType: ("submit") }), { style: ({}) })));
    const __VLS_34 = __VLS_33(Object.assign(Object.assign({ 'onClick': {} }, { round: (true), block: (true), type: ("primary"), nativeType: ("submit") }), { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.goHome)
    };
    let __VLS_35;
    let __VLS_36;
    __VLS_nonNullable(__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("help") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.toRegister) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (__VLS_ctx.resetPd) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("others") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("name") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("pic") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/icons/Login/QQ.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/icons/Login/微信.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("logo") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/Login/logo.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("thoughts") }));
    __VLS_styleScopedClasses['wrap'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['help'];
    __VLS_styleScopedClasses['others'];
    __VLS_styleScopedClasses['name'];
    __VLS_styleScopedClasses['pic'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['thoughts'];
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
            username: username,
            password: password,
            checked: checked,
            onSubmit: onSubmit,
            toRegister: toRegister,
            goHome: goHome,
            goMsg: goMsg,
            resetPd: resetPd,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
