import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const content = ref("");
const updateData = (e = "") => {
    let c1 = e.replace(/<img width="100%"/g, "<img");
    let c2 = c1.replace(/<img/g, '<img width="100%"');
    content.value = c2;
    console.log(content.value);
};
import Editor from '@tinymce/tinymce-vue';
const aiRequest = (request, respondWith) => {
    // Return a Promise that rejects with a string
    return new Promise((resolve, reject) => {
        reject('See docs to implement AI Assistant');
    });
};
const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;
import dateBox from '@/components/dateBox.vue';
const chapterList = ref({
    weekDay: '星期一',
    lunarDate: '八月甘八',
    nowdate: '2024/09/30',
    time: '21:04',
    content: '今天我上面的一颗牙要掉了，有一点疼，但不是很厉害。谁知上午的时候，我本想用舌头碰一下那颗牙，却不小心让牙的一半都掉了下来，疼得我啊啊直叫。中午的菜很丰盛，可是我的牙齿不能动，一动就疼，吃的东西就在眼前，却不能吃，这滋味可真不好受。'
});
const num = ref(1);
const chapterName = ref('小芳回家');
const minDate = new Date(2004, 0, 1);
const date = new Date();
console.log(date, '我是日期66666666666');
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
console.log(year, month, day);
const maxDate = new Date(year, month - 1, day);
let currentDate = ref([String(year), String(month), String(day)]);
let showTime = ref(false);
const confirmPicker = (values, options, indexes) => {
    console.log(values, options, indexes);
    showTime.value = false;
};
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => {
    router.back();
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
    __VLS_styleScopedClasses['van-cell'];
    __VLS_styleScopedClasses['title'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (!__VLS_ctx.showTime) }), null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("titleBar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("count") }));
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VanIcon;
    /** @type { [typeof __VLS_components.VanIcon, typeof __VLS_components.vanIcon, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onClick': {} }, { name: ("arrow-left") })));
    const __VLS_2 = __VLS_1(Object.assign({ 'onClick': {} }, { name: ("arrow-left") }), ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.goBack)
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_8 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ modelValue: ((__VLS_ctx.num)), inputAlign: ("center"), }));
    const __VLS_10 = __VLS_9({ modelValue: ((__VLS_ctx.num)), inputAlign: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("title") }));
    const __VLS_14 = __VLS_resolvedLocalAndGlobalComponents.VanField;
    /** @type { [typeof __VLS_components.VanField, typeof __VLS_components.vanField, ] } */
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ modelValue: ((__VLS_ctx.chapterName)), inputAlign: ("center"), label: ("标题"), labelAlign: ("center"), }));
    const __VLS_16 = __VLS_15({ modelValue: ((__VLS_ctx.chapterName)), inputAlign: ("center"), label: ("标题"), labelAlign: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.showTime = true;
        } }, { class: ("date") }));
    // @ts-ignore
    [dateBox, dateBox,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(dateBox, new dateBox({ chapterList: ((__VLS_ctx.chapterList)), }));
    const __VLS_21 = __VLS_20({ chapterList: ((__VLS_ctx.chapterList)), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ id: ("sample"), });
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.Editor;
    /** @type { [typeof __VLS_components.Editor, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ apiKey: ("c1wbmmo4titnuuirczlpr2xvirr91jkdny16u5oqyhe5ob9c"), init: (({
            language: 'zh_CN',
            height: '72vh',
            selector: 'textarea#open-source-plugins',
            plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
            editimage_cors_hosts: ['picsum.photos'],
            menubar: 'file edit view insert format tools table help',
            resize: false,
            toolbar_mode: 'sliding',
            autosave_ask_before_unload: true,
            autosave_interval: '30s',
            autosave_prefix: '{path}{query}-{id}-',
            autosave_restore_when_empty: false,
            autosave_retention: '2m',
            image_advtab: true,
            importcss_append: true,
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough| align numlist bullist | link image | table media| lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code  preview | print | pagebreak anchor codesample | ltr rtl ',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            image_caption: true,
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            noneditable_class: 'mceNonEditable',
            contextmenu: 'link image table',
            skin: __VLS_ctx.useDarkMode ? 'oxide-dark' : 'oxide',
            content_css: __VLS_ctx.useDarkMode ? 'dark' : 'default',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
            mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
            ],
            ai_request: __VLS_ctx.aiRequest,
        })), initialValue: (""), }));
    const __VLS_27 = __VLS_26({ apiKey: ("c1wbmmo4titnuuirczlpr2xvirr91jkdny16u5oqyhe5ob9c"), init: (({
            language: 'zh_CN',
            height: '72vh',
            selector: 'textarea#open-source-plugins',
            plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
            editimage_cors_hosts: ['picsum.photos'],
            menubar: 'file edit view insert format tools table help',
            resize: false,
            toolbar_mode: 'sliding',
            autosave_ask_before_unload: true,
            autosave_interval: '30s',
            autosave_prefix: '{path}{query}-{id}-',
            autosave_restore_when_empty: false,
            autosave_retention: '2m',
            image_advtab: true,
            importcss_append: true,
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough| align numlist bullist | link image | table media| lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code  preview | print | pagebreak anchor codesample | ltr rtl ',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            image_caption: true,
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            noneditable_class: 'mceNonEditable',
            contextmenu: 'link image table',
            skin: __VLS_ctx.useDarkMode ? 'oxide-dark' : 'oxide',
            content_css: __VLS_ctx.useDarkMode ? 'dark' : 'default',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
            mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
            ],
            ai_request: __VLS_ctx.aiRequest,
        })), initialValue: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("picker-time") }));
    __VLS_directiveAsFunction(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showTime) }), null, null);
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VanDatePicker;
    /** @type { [typeof __VLS_components.VanDatePicker, typeof __VLS_components.vanDatePicker, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31(Object.assign({ 'onConfirm': {} }, { modelValue: ((__VLS_ctx.currentDate)), title: ("选择日期"), minDate: ((__VLS_ctx.minDate)), maxDate: ((__VLS_ctx.maxDate)) })));
    const __VLS_33 = __VLS_32(Object.assign({ 'onConfirm': {} }, { modelValue: ((__VLS_ctx.currentDate)), title: ("选择日期"), minDate: ((__VLS_ctx.minDate)), maxDate: ((__VLS_ctx.maxDate)) }), ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_37;
    const __VLS_38 = {
        onConfirm: (__VLS_ctx.confirmPicker)
    };
    let __VLS_34;
    let __VLS_35;
    const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("complete") }));
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.VanButton;
    /** @type { [typeof __VLS_components.VanButton, typeof __VLS_components.vanButton, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ icon: ("success"), type: ("primary"), size: ("small"), }));
    const __VLS_41 = __VLS_40({ icon: ("success"), type: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    __VLS_styleScopedClasses['titleBar'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['date'];
    __VLS_styleScopedClasses['picker-time'];
    __VLS_styleScopedClasses['complete'];
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
            Editor: Editor,
            aiRequest: aiRequest,
            useDarkMode: useDarkMode,
            dateBox: dateBox,
            chapterList: chapterList,
            num: num,
            chapterName: chapterName,
            minDate: minDate,
            maxDate: maxDate,
            currentDate: currentDate,
            showTime: showTime,
            confirmPicker: confirmPicker,
            goBack: goBack,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
