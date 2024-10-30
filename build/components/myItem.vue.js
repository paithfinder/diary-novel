import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    number: {
        type: Number,
        default: () => { }
    },
    pic: {
        type: String,
        default: () => {
            return;
        }
    },
    title: {
        type: String,
        default: () => {
            return;
        }
    }
});
let picture = ref(`${new URL(`../icons/my/${props.pic}`, import.meta.url).href}`);
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        number: {
            type: Number,
            default: () => { }
        },
        pic: {
            type: String,
            default: () => {
                return;
            }
        },
        title: {
            type: String,
            default: () => {
                return;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("itemBox") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign({ src: ((__VLS_ctx.picture)), alt: ("") }, { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    (props.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("number") }));
    (props.number);
    __VLS_styleScopedClasses['itemBox'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['number'];
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
            picture: picture,
        };
    },
    props: {
        number: {
            type: Number,
            default: () => { }
        },
        pic: {
            type: String,
            default: () => {
                return;
            }
        },
        title: {
            type: String,
            default: () => {
                return;
            }
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        number: {
            type: Number,
            default: () => { }
        },
        pic: {
            type: String,
            default: () => {
                return;
            }
        },
        title: {
            type: String,
            default: () => {
                return;
            }
        }
    },
});
;
