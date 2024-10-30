import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    enterType: {
        type: Number,
        default: () => {
            return null;
        }
    }
});
const router = useRouter();
const phone = ref('');
const verification = ref('');
const onSubmit = (values) => {
    console.log('submit', values);
};
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
onMounted(() => {
    clearInterval(reciprocal);
});
const goEnter = () => {
    const enterName = props.enterType === 1 ? 'login' : 'profile';
    router.push(`/${enterName}`);
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        enterType: {
            type: Number,
            default: () => {
                return null;
            }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("phone"), });
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.phone)), name: ("phone"), placeholder: ("请输入您的电话号码"), rules: (([{ required: true, message: '请填写用户名' }])), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.phone)), name: ("phone"), placeholder: ("请输入您的电话号码"), rules: (([{ required: true, message: '请填写用户名' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("code"), });
    const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.verification)), name: ("verification"), placeholder: ("填写验证码"), rules: (([{ required: true, message: '不能为空' }])), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.verification)), name: ("verification"), placeholder: ("填写验证码"), rules: (([{ required: true, message: '不能为空' }])), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_26 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26(Object.assign(Object.assign({ 'onClick': {} }, { color: ("linear-gradient(to right, #375b7f, #33d6d6)"), size: ("mini") }), { style: ({}) })));
    const __VLS_28 = __VLS_27(Object.assign(Object.assign({ 'onClick': {} }, { color: ("linear-gradient(to right, #375b7f, #33d6d6)"), size: ("mini") }), { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_27));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (__VLS_ctx.sendCode)
    };
    let __VLS_29;
    let __VLS_30;
    (__VLS_ctx.reverseN < 3 && __VLS_ctx.reverseN > -1
        ? `${__VLS_ctx.reverseN + 1}s后自动获取`
        : '获取验证码');
    __VLS_nonNullable(__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    __VLS_nonNullable(__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ style: ({}) }));
    const __VLS_34 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34(Object.assign(Object.assign({ 'onClick': {} }, { round: (true), block: (true), type: ("primary"), nativeType: ("submit") }), { style: ({}) })));
    const __VLS_36 = __VLS_35(Object.assign(Object.assign({ 'onClick': {} }, { round: (true), block: (true), type: ("primary"), nativeType: ("submit") }), { style: ({}) }), ...__VLS_functionalComponentArgsRest(__VLS_35));
    let __VLS_40;
    const __VLS_41 = {
        onClick: (__VLS_ctx.goEnter)
    };
    let __VLS_37;
    let __VLS_38;
    __VLS_nonNullable(__VLS_39.slots).default;
    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
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
            verification: verification,
            onSubmit: onSubmit,
            sendCode: sendCode,
            reverseN: reverseN,
            goEnter: goEnter,
        };
    },
    props: {
        enterType: {
            type: Number,
            default: () => {
                return null;
            }
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        enterType: {
            type: Number,
            default: () => {
                return null;
            }
        }
    },
});
;
