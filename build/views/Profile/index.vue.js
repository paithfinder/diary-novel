import { showNotify } from 'vant';
import 'vant/es/notify/style';
import { ref, nextTick, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
let timerId = null;
const afterRead = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
};
const username = ref('');
const password = ref('');
const submitR = () => {
    nextTick(() => {
        showNotify({ type: 'success', message: '恭喜你,注册成功!', duration: 1000 });
        timerId = setTimeout(() => {
            // 路由传参
            router.push({
                name: 'login',
                query: {
                    name: username.value,
                    pd: password.value
                }
            });
        }, 1000);
    });
};
onBeforeUnmount(() => {
    clearTimeout(timerId);
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("material") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VanForm;
    /** @type { [typeof __VLS_components.VanForm, typeof __VLS_components.vanForm, typeof __VLS_components.VanForm, typeof __VLS_components.vanForm, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ labelAlign: ("center"), inputAlign: ("center"), }));
    const __VLS_8 = __VLS_7({ labelAlign: ("center"), inputAlign: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { input: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VanUploader;
        /** @type { [typeof __VLS_components.VanUploader, typeof __VLS_components.vanUploader, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ afterRead: ((__VLS_ctx.afterRead)), }));
        const __VLS_14 = __VLS_13({ afterRead: ((__VLS_ctx.afterRead)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.username)), name: ("用户名"), label: ("用户名"), placeholder: ("请设置您的用户名"), rules: (([{ required: true, message: '请填写用户名' }])), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.username)), name: ("用户名"), label: ("用户名"), placeholder: ("请设置您的用户名"), rules: (([{ required: true, message: '请填写用户名' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ modelValue: ((__VLS_ctx.password)), type: ("password"), name: ("密码"), label: ("密码"), placeholder: ("请设置您的密码"), rules: (([{ required: true, message: '请填写密码' }])), }));
    const __VLS_26 = __VLS_25({ modelValue: ((__VLS_ctx.password)), type: ("password"), name: ("密码"), label: ("密码"), placeholder: ("请设置您的密码"), rules: (([{ required: true, message: '请填写密码' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30(Object.assign({ 'onClick': {} }, { plain: (true), type: ("success"), nativeType: ("submit") })));
    const __VLS_32 = __VLS_31(Object.assign({ 'onClick': {} }, { plain: (true), type: ("success"), nativeType: ("submit") }), ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        onClick: (__VLS_ctx.submitR)
    };
    let __VLS_33;
    let __VLS_34;
    __VLS_nonNullable(__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['wrap'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['material'];
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
            afterRead: afterRead,
            username: username,
            password: password,
            submitR: submitR,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
