import { ref, nextTick, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { showNotify } from 'vant';
import 'vant/es/notify/style';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
let timerId = null;
const phone = ref('');
const resetPd = ref('');
const verification = ref('');
let reciprocal = null;
const sendCode = (event) => {
    event.target.disabled = true;
    reciprocal = setInterval(() => {
        reverseN.value--;
        if (reverseN.value < 0) {
            clearInterval(reciprocal);
            event.target.disabled = false;
            reverseN.value = 3;
        }
    }, 1000);
    console.log(event.target.innerText);
};
const reverseN = ref(3);
const submitR = () => {
    nextTick(() => {
        showNotify({ type: 'success', message: '修改成功!', duration: 1000 });
        timerId = setTimeout(() => {
            router.push({
                name: 'login'
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ class: ("form") })));
    const __VLS_2 = __VLS_1(Object.assign({ class: ("form") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.phone)), name: ("电话号码"), label: ("电话号码"), placeholder: ("请输入您的电话号码"), rules: (([{ required: true, message: '请填写电话号码' }])), }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.phone)), name: ("电话号码"), label: ("电话号码"), placeholder: ("请输入您的电话号码"), rules: (([{ required: true, message: '请填写电话号码' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.resetPd)), type: ("password"), name: ("新密码"), label: ("新密码"), placeholder: ("请输入您的新密码"), rules: (([{ required: true, message: '请填写密码' }])), }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.resetPd)), type: ("password"), name: ("新密码"), label: ("新密码"), placeholder: ("请输入您的新密码"), rules: (([{ required: true, message: '请填写密码' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("code"), });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.verification)), name: ("verification"), label: ("验证码"), placeholder: ("填写验证码"), rules: (([{ required: true, message: '不能为空' }])), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.verification)), name: ("verification"), label: ("验证码"), placeholder: ("填写验证码"), rules: (([{ required: true, message: '不能为空' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(Object.assign(Object.assign(Object.assign({ 'onClick': {} }, { color: ("linear-gradient(to right, #375b7f, #33d6d6)"), size: ("mini") }), { style: ({}) }), { id: ("bt-code") })));
    const __VLS_26 = __VLS_25(Object.assign(Object.assign(Object.assign({ 'onClick': {} }, { color: ("linear-gradient(to right, #375b7f, #33d6d6)"), size: ("mini") }), { style: ({}) }), { id: ("bt-code") }), ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (__VLS_ctx.sendCode)
    };
    let __VLS_27;
    let __VLS_28;
    (__VLS_ctx.reverseN < 3 && __VLS_ctx.reverseN > -1
        ? `${__VLS_ctx.reverseN + 1}s后自动获取`
        : '获取验证码');
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    const __VLS_32 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(Object.assign({ 'onClick': {} }, { plain: (true), type: ("success"), nativeType: ("submit") })));
    const __VLS_34 = __VLS_33(Object.assign({ 'onClick': {} }, { plain: (true), type: ("success"), nativeType: ("submit") }), ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.submitR)
    };
    let __VLS_35;
    let __VLS_36;
    __VLS_nonNullable(__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['wrap'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['material'];
    __VLS_styleScopedClasses['form'];
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
            phone: phone,
            resetPd: resetPd,
            verification: verification,
            sendCode: sendCode,
            reverseN: reverseN,
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
