import {
    useRoute,
    useRouter
} from 'vue-router';
import {
    ref
} from 'vue';
import {
    showDialog
} from 'vant';
import dateBox from '@/components/dateBox.vue';
import 'vant/es/dialog/style';
const {
    defineProps,
    defineSlots,
    defineEmits,
    defineExpose,
    defineModel,
    defineOptions,
    withDefaults,
} = await import('vue');
const route = useRoute();
const router = useRouter();
console.log(route);
console.log(route.query);
let starType = ref('star-o');
const changestarType = () => {
    starType.value = starType.value === 'star-o' ? 'star' : 'star-o';
};
const goBack = () => {
    router.back();
};
// todo:获取当前时间和所有内容的数据
const chapterList = ref({
    weekDay: '星期一',
    lunarDate: '八月甘八',
    nowdate: '2024/09/30',
    time: '21:04',
    content: '今天我上面的一颗牙要掉了，有一点疼，但不是很厉害。谁知上午的时候，我本想用舌头碰一下那颗牙，却不小心让牙的一半都掉了下来，疼得我啊啊直叫。中午的菜很丰盛，可是我的牙齿不能动，一动就疼，吃的东西就在眼前，却不能吃，这滋味可真不好受。'
});
const showBoard = () => {
    isBoard.value = true;
};
const isBoard = ref(false);
const deleteItem = () => {
    showDialog({
        message: '确认删除本次编辑内容吗',
        theme: 'round-button'
    }).then(() => {});
};
const goEdit = () => {
    router.push('/chapterEdit');
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        class: ("wrap")
    }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        class: ("title")
    }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        class: ("l")
    }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({
        'onClick': {}
    }, {
        name: ("arrow-left")
    })));
    const __VLS_2 = __VLS_1(Object.assign({
        'onClick': {}
    }, {
        name: ("arrow-left")
    }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.goBack)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    (__VLS_ctx.route.query.day !== 'undefined' ? __VLS_ctx.route.query.day : `${__VLS_ctx.route.query.chapter} ${__VLS_ctx.route.query.chapterName}`);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        class: ("r")
    }));
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(Object.assign({
        'onClick': {}
    }, {
        name: ((__VLS_ctx.starType)),
        size: ("20px"),
        color: ("#ffdf99")
    })));
    const __VLS_10 = __VLS_9(Object.assign({
        'onClick': {}
    }, {
        name: ((__VLS_ctx.starType)),
        size: ("20px"),
        color: ("#ffdf99")
    }), ...__VLS_functionalComponentArgsRest(__VLS_9));
    let __VLS_14;
    const __VLS_15 = {
        onClick: (__VLS_ctx.changestarType)
    };
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    // @ts-ignore
    [dateBox, dateBox, ];
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(dateBox, new dateBox({
        chapterList: ((__VLS_ctx.chapterList)),
    }));
    const __VLS_17 = __VLS_16({
        chapterList: ((__VLS_ctx.chapterList)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        class: ("content")
    }));
    (__VLS_ctx.chapterList.content);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        onClick: (__VLS_ctx.showBoard)
    }, {
        class: ("menu")
    }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), {
        value: (!__VLS_ctx.isBoard)
    }), null, null);
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        name: ("list-switching"),
        size: ("25px"),
        color: ("#ccc"),
    }));
    const __VLS_23 = __VLS_22({
        name: ("list-switching"),
        size: ("25px"),
        color: ("#ccc"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        class: ("board")
    }));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), {
        value: (__VLS_ctx.isBoard)
    }), null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        onClick: (__VLS_ctx.deleteItem)
    }, {
        style: ({})
    }));
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
        name: ("delete-o"),
        size: ("25px"),
        color: ("#ccc"),
    }));
    const __VLS_29 = __VLS_28({
        name: ("delete-o"),
        size: ("25px"),
        color: ("#ccc"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({
        onClick: (__VLS_ctx.goEdit)
    }, {
        style: ({})
    }));
    const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
        name: ("edit"),
        size: ("25px"),
        color: ("#ccc"),
    }));
    const __VLS_35 = __VLS_34({
        name: ("edit"),
        size: ("25px"),
        color: ("#ccc"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    __VLS_styleScopedClasses['wrap'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['l'];
    __VLS_styleScopedClasses['r'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['menu'];
    __VLS_styleScopedClasses['board'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
};
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            dateBox: dateBox,
            route: route,
            starType: starType,
            changestarType: changestarType,
            goBack: goBack,
            chapterList: chapterList,
            showBoard: showBoard,
            isBoard: isBoard,
            deleteItem: deleteItem,
            goEdit: goEdit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});;