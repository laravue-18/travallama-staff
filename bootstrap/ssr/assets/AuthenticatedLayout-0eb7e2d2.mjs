import { onMounted, onUnmounted, computed, ref, mergeProps, unref, useSSRContext, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, A as ApplicationLogo } from "./ApplicationLogo-848ae812.mjs";
import { Link, usePage } from "@inertiajs/vue3";
const _sfc_main$5 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white dark:bg-gray-700"]
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[unref(widthClass), unref(alignmentClasses)], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({ class: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  props: {
    name: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.name === "cheveron-down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>`);
  } else if ($props.name === "cheveron-right") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"></polygon></svg>`);
  } else if ($props.name === "dashboard") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path></svg>`);
  } else if ($props.name === "office") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      width: "100",
      height: "100",
      viewBox: "0 0 100 100"
    }, _attrs))}><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"></path></svg>`);
  } else if ($props.name === "printer") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"></path></svg>`);
  } else if ($props.name === "trash") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"></path></svg>`);
  } else if ($props.name === "users") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"></path></svg>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Icon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "MainMenu",
  __ssrInlineRender: true,
  setup(__props) {
    function isUrl(...urls) {
      let currentUrl = usePage().url.substr(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "dashboard",
              class: ["mr-2 w-4 h-4", isUrl("dashboard") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("dashboard") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Dashboard </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "dashboard",
                class: ["mr-2 w-4 h-4", isUrl("dashboard") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("dashboard") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Dashboard ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/products"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "office",
              class: ["mr-2 w-4 h-4", isUrl("products") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("products") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Products </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "office",
                class: ["mr-2 w-4 h-4", isUrl("products") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("products") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Products ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/users"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("users") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("users") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Users </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("users") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("users") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Users ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/quotes"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("visitors") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("quotes") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Quotes </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("visitors") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("quotes") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Quotes ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/leads"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("leads") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("leads") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Leads </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("leads") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("leads") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Leads ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/customers"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("customers") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("customers") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Customers </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("customers") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("customers") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Customers ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/earnings"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("earnings") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("earnings") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Earnings </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("earnings") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("earnings") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Earnings ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/analytics"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("analytics") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("analytics") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Analytics </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("analytics") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("analytics") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Analytics ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/permissions"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("permissions") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("permissions") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Permissions </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("permissions") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("permissions") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Permissions ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "group flex items-center py-3",
        href: "/chat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Icon, {
              name: "users",
              class: ["mr-2 w-4 h-4", isUrl("chat") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
            }, null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(isUrl("chat") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Chatroom </div>`);
          } else {
            return [
              createVNode(Icon, {
                name: "users",
                class: ["mr-2 w-4 h-4", isUrl("chat") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
              }, null, 8, ["class"]),
              createVNode("div", {
                class: isUrl("chat") ? "text-white" : "text-indigo-300 group-hover:text-white"
              }, " Chatroom ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MainMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-green-500 rounded"><div class="flex items-center"><svg class="flex-shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg><div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.success)}</div></div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-green-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-red-500 rounded"><div class="flex items-center"><svg class="flex-shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"></path></svg>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div class="py-4 text-white text-sm font-medium">`);
      if (Object.keys(_ctx.$page.props.errors).length === 1) {
        _push(`<span>There is one form error.</span>`);
      } else {
        _push(`<span>There are ${ssrInterpolate(Object.keys(_ctx.$page.props.errors).length)} form errors.</span>`);
      }
      _push(`</div>`);
    }
    _push(`</div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-red-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FlashMessages.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-white text-gray-800 dark:text-gray-200" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-white text-gray-800 dark:text-gray-200" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0"><div class="mr-4 mt-1"></div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$4, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="md:flex md:flex-grow md:overflow-hidden">`);
      _push(ssrRenderComponent(_sfc_main$2, { class: "hidden flex-shrink-0 p-12 w-56 bg-indigo-800 overflow-y-auto md:block" }, null, _parent));
      _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
      _push(ssrRenderComponent(FlashMessages, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
