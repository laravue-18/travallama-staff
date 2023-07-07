import { _ as _sfc_main$j } from "./AuthenticatedLayout-0eb7e2d2.mjs";
import { Link, Head } from "@inertiajs/vue3";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { resolveComponent, useSSRContext, mergeProps, getCurrentInstance, nextTick, h, resolveDirective, withCtx, createTextVNode, toDisplayString, createSlots, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot, withDirectives, vModelText } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrGetDirectiveProps, ssrRenderTeleport, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./ApplicationLogo-848ae812.mjs";
import { v4 } from "uuid";
import Popper$1 from "popper.js/dist/umd/popper.js";
import "deepmerge";
import draggable from "vuedraggable";
import elementResizeDetectorMaker from "element-resize-detector";
const _sfc_main$i = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          class: ["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded", { "bg-white": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$h = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `select-input-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: this.modelValue
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-select", { error: $props.error }]
  }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</select>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectInput.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f]]);
const isClient = typeof window !== "undefined";
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
let cached;
function getScrollBarSize(fresh) {
  if (isClient && (fresh || cached === void 0)) {
    const inner = document.createElement("div");
    inner.style.width = "100%";
    inner.style.height = "200px";
    const outer = document.createElement("div");
    const outerStyle = outer.style;
    outerStyle.position = "absolute";
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = "none";
    outerStyle.visibility = "hidden";
    outerStyle.width = "200px";
    outerStyle.height = "150px";
    outerStyle.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    const widthContained = inner.offsetWidth;
    outer.style.overflow = "scroll";
    let widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, "Moz$1");
}
function getStyle(element, styleName) {
  if (!isClient)
    return;
  if (!element || !styleName)
    return null;
  styleName = camelCase(styleName);
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, "");
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
}
function deepCopy(data) {
  const t2 = typeOf(data);
  let o;
  if (t2 === "array") {
    o = [];
  } else if (t2 === "object") {
    o = {};
  } else {
    return data;
  }
  if (t2 === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t2 === "object") {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === "string") {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }
  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent)
      name = parent.$options.name;
  }
  return parent;
}
const mixinsForm = {
  inject: {
    FormInstance: {
      default: ""
    },
    FormItemInstance: {
      default: null
    }
  },
  computed: {
    itemDisabled() {
      let state = this.disabled;
      if (!state && this.FormInstance)
        state = this.FormInstance.disabled;
      return state ? true : null;
    }
  },
  methods: {
    handleFormItemChange(type, data) {
      if (this.FormItemInstance) {
        if (type === "blur")
          this.FormItemInstance.formBlur(data);
        else if (type === "change")
          this.FormItemInstance.formChange(data);
      }
    }
  }
};
const prefixCls$8 = "ivu-checkbox-group";
const _sfc_main$g = {
  name: "CheckboxGroup",
  mixins: [mixinsForm],
  emits: ["update:modelValue", "on-change"],
  provide() {
    return {
      CheckboxGroupInstance: this
    };
  },
  props: {
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.size === "" ? "default" : global.$VIEWUI.size;
      }
    }
  },
  data() {
    return {
      currentValue: this.modelValue || [],
      children: []
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls$8}`,
        {
          [`ivu-checkbox-${this.size}`]: !!this.size
        }
      ];
    }
  },
  methods: {
    change(data) {
      this.currentValue = data;
      this.$emit("update:modelValue", data);
      this.$emit("on-change", data);
      this.handleFormItemChange("change", data);
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: $options.classes }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/checkbox/checkbox-group.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e]]);
const prefixCls$7 = "ivu-checkbox";
const _sfc_main$f = {
  name: "Checkbox",
  mixins: [mixinsForm],
  emits: ["update:modelValue", "on-change"],
  inject: {
    CheckboxGroupInstance: {
      default: null
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.size === "" ? "default" : global.$VIEWUI.size;
      }
    },
    name: {
      type: String
    },
    // 4.0.0
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSlot: true,
      focusInner: false,
      model: []
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls$7}-wrapper`,
        {
          [`${prefixCls$7}-group-item`]: this.group,
          [`${prefixCls$7}-wrapper-checked`]: this.currentValue,
          [`${prefixCls$7}-wrapper-disabled`]: this.itemDisabled,
          [`${prefixCls$7}-${this.size}`]: !!this.size,
          [`${prefixCls$7}-border`]: this.border
        }
      ];
    },
    checkboxClasses() {
      return [
        `${prefixCls$7}`,
        {
          [`${prefixCls$7}-checked`]: this.currentValue,
          [`${prefixCls$7}-disabled`]: this.itemDisabled,
          [`${prefixCls$7}-indeterminate`]: this.indeterminate
        }
      ];
    },
    innerClasses() {
      return [
        `${prefixCls$7}-inner`,
        {
          [`${prefixCls$7}-focus`]: this.focusInner
        }
      ];
    },
    inputClasses() {
      return `${prefixCls$7}-input`;
    },
    currentValue() {
      if (this.CheckboxGroupInstance) {
        return this.CheckboxGroupInstance.modelValue.indexOf(this.label) >= 0;
      } else {
        return this.modelValue === this.trueValue;
      }
    },
    group() {
      return !!this.CheckboxGroupInstance;
    }
  },
  mounted() {
    if (!this.CheckboxGroupInstance)
      this.showSlot = this.$slots.default !== void 0;
  },
  methods: {
    change(event) {
      if (this.itemDisabled) {
        return false;
      }
      const checked = event.target.checked;
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit("update:modelValue", value);
      if (this.group) {
        this.CheckboxGroupInstance.change(this.model);
      } else {
        this.$emit("on-change", value);
        this.handleFormItemChange("change", value);
      }
    },
    onBlur() {
      this.focusInner = false;
    },
    onFocus() {
      this.focusInner = true;
    }
  },
  watch: {
    modelValue(val) {
      if (val === this.trueValue || val === this.falseValue)
        ;
      else {
        throw "Value should be trueValue or falseValue.";
      }
    },
    "CheckboxGroupInstance.modelValue": {
      handler(val) {
        this.model = val || [];
      },
      immediate: true
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<label${ssrRenderAttrs(mergeProps({ class: $options.wrapClasses }, _attrs))}><span class="${ssrRenderClass($options.checkboxClasses)}"><span class="${ssrRenderClass($options.innerClasses)}"></span>`);
  if ($options.group) {
    _push(`<input type="checkbox" class="${ssrRenderClass($options.inputClasses)}"${ssrIncludeBooleanAttr(_ctx.itemDisabled) ? " disabled" : ""}${ssrRenderAttr("value", $props.label)}${ssrIncludeBooleanAttr(Array.isArray($data.model) ? ssrLooseContain($data.model, $props.label) : $data.model) ? " checked" : ""}${ssrRenderAttr("name", $props.name)}>`);
  } else {
    _push(`<input type="checkbox" class="${ssrRenderClass($options.inputClasses)}"${ssrIncludeBooleanAttr(_ctx.itemDisabled) ? " disabled" : ""}${ssrIncludeBooleanAttr($options.currentValue) ? " checked" : ""}${ssrRenderAttr("name", $props.name)}>`);
  }
  _push(`</span>`);
  if ($data.showSlot) {
    _push(`<span class="ivu-checkbox-label-text">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      _push(`${ssrInterpolate($props.label)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</label>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/checkbox/checkbox.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
const Popper = {
  emits: ["on-popper-show", "on-popper-hide", "created", "update:modelValue"],
  props: {
    eventsEnabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "bottom"
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: Object,
    popper: Object,
    offset: {
      default: 0
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    transition: String,
    options: {
      type: Object,
      default() {
        return {
          modifiers: {
            computeStyle: {
              gpuAcceleration: false
            },
            preventOverflow: {
              boundariesElement: "window"
            }
          }
        };
      }
    }
    // visible: {
    //     type: Boolean,
    //     default: false
    // }
  },
  data() {
    return {
      visible: this.modelValue
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        this.visible = val;
        this.$emit("update:modelValue", val);
      }
    },
    visible(val) {
      if (val) {
        if (this.handleIndexIncrease)
          this.handleIndexIncrease();
        this.updatePopper();
        this.$emit("on-popper-show");
      } else {
        this.$emit("on-popper-hide");
      }
      this.$emit("update:modelValue", val);
    }
  },
  methods: {
    createPopper() {
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return;
      }
      const options = this.options;
      const popper = this.popper || this.$refs.popper;
      const reference = this.reference || this.$refs.reference;
      if (!popper || !reference)
        return;
      if (this.popperJS && this.popperJS.hasOwnProperty("destroy")) {
        this.popperJS.destroy();
      }
      options.eventsEnabled = this.eventsEnabled;
      options.placement = this.placement;
      if (!options.modifiers.offset) {
        options.modifiers.offset = {};
      }
      options.modifiers.offset.offset = this.offset;
      options.onCreate = () => {
        nextTick(this.updatePopper);
        this.$emit("created", this);
      };
      this.popperJS = new Popper$1(reference, popper, options);
    },
    updatePopper() {
      this.popperJS ? this.popperJS.update() : this.createPopper();
    },
    doDestroy() {
      if (this.visible)
        return;
      this.popperJS.destroy();
      this.popperJS = null;
    }
  },
  updated() {
    nextTick(() => this.updatePopper());
  },
  beforeUnmount() {
    if (this.popperJS) {
      this.popperJS.destroy();
    }
  }
};
const prefixCls$6 = "ivu-icon";
const _sfc_main$e = {
  name: "Icon",
  props: {
    type: {
      type: String,
      default: ""
    },
    size: [Number, String],
    color: String,
    custom: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls$6}`,
        {
          [`${prefixCls$6}-${this.type}`]: this.type !== "",
          [`${this.custom}`]: this.custom !== ""
        }
      ];
    },
    styles() {
      let style = {};
      if (this.size)
        style["font-size"] = `${this.size}px`;
      if (this.color)
        style.color = this.color;
      return style;
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<i${ssrRenderAttrs(mergeProps({
    class: $options.classes,
    style: $options.styles
  }, _attrs))}></i>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/icon/icon.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const mixinsLink = {
  props: {
    to: {
      type: [Object, String]
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      validator(value) {
        return oneOf(value, ["_blank", "_self", "_parent", "_top"]);
      },
      default: "_self"
    },
    append: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    linkUrl() {
      const type = typeof this.to;
      if (type !== "string") {
        return null;
      }
      if (this.to.includes("//")) {
        return this.to;
      }
      const router = this.$router;
      if (router) {
        const current = this.$route;
        const route = router.resolve(this.to, current, this.append);
        return route ? route.href : this.to;
      }
      return this.to;
    }
  },
  methods: {
    handleOpenTo() {
      if (!isClient)
        return;
      const router = this.$router;
      let to = this.to;
      if (router) {
        const current = this.$route;
        const route = router.resolve(this.to, current, this.append);
        to = route ? route.href : this.to;
      }
      if (typeof this.to === "string")
        return;
      window.open(to);
    },
    handleClick(new_window = false) {
      const router = this.$router;
      if (!isClient)
        return;
      if (new_window) {
        this.handleOpenTo();
      } else {
        if (router) {
          if (typeof this.to === "string" && this.to.includes("//")) {
            window.location.href = this.to;
          } else {
            this.replace ? this.$router.replace(this.to, () => {
            }) : this.$router.push(this.to, () => {
            });
          }
        } else {
          window.location.href = this.to;
        }
      }
    },
    handleCheckClick(event, new_window = false) {
      if (this.to) {
        if (this.target === "_blank") {
          this.handleOpenTo();
          return false;
        } else {
          event.preventDefault();
          this.handleClick(new_window);
        }
      }
    }
  }
};
const prefixCls$5 = "ivu-btn";
const _sfc_main$d = {
  name: "Button",
  mixins: [mixinsLink, mixinsForm],
  components: { Icon },
  emits: ["click"],
  props: {
    type: {
      validator(value) {
        return oneOf(value, ["default", "primary", "dashed", "text", "info", "success", "warning", "error"]);
      },
      default: "default"
    },
    shape: {
      validator(value) {
        return oneOf(value, ["circle", "circle-outline"]);
      }
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.size === "" ? "default" : global.$VIEWUI.size;
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: "button",
      validator(value) {
        return oneOf(value, ["button", "submit", "reset"]);
      }
    },
    icon: {
      type: String,
      default: ""
    },
    customIcon: {
      type: String,
      default: ""
    },
    long: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSlot() {
      return !!this.$slots.default;
    },
    classes() {
      return [
        `${prefixCls$5}`,
        `${prefixCls$5}-${this.type}`,
        {
          [`${prefixCls$5}-long`]: this.long,
          [`${prefixCls$5}-${this.shape}`]: !!this.shape,
          [`${prefixCls$5}-${this.size}`]: this.size !== "default",
          [`${prefixCls$5}-loading`]: this.loading != null && this.loading,
          [`${prefixCls$5}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
          [`${prefixCls$5}-ghost`]: this.ghost
        }
      ];
    },
    // Point out if it should render as <a> tag
    isHrefPattern() {
      const { to } = this;
      return !!to;
    },
    tagName() {
      const { isHrefPattern } = this;
      return isHrefPattern ? "a" : "button";
    },
    tagProps() {
      const { isHrefPattern } = this;
      if (isHrefPattern) {
        const { linkUrl, target } = this;
        return { href: linkUrl, target };
      } else {
        const { htmlType } = this;
        return { type: htmlType };
      }
    }
  },
  methods: {
    // Ctrl or CMD and click, open in new window when use `to`
    handleClickLink(event) {
      this.$emit("click", event);
      const openInNewWindow = event.ctrlKey || event.metaKey;
      this.handleCheckClick(event, openInNewWindow);
    }
  },
  render() {
    let tag;
    if (this.tagName === "button")
      tag = "button";
    else if (this.tagName === "a")
      tag = "a";
    let slots = [];
    if (this.loading) {
      slots.push(h(Icon, {
        class: "ivu-load-loop",
        type: "ios-loading"
      }));
    }
    if ((this.icon || this.customIcon) && !this.loading) {
      slots.push(h(Icon, {
        type: this.icon,
        custom: this.customIcon
      }));
    }
    if (this.showSlot) {
      slots.push(h("span", {
        ref: "slot"
      }), this.$slots.default());
    }
    return h(tag, {
      class: this.classes,
      disabled: this.itemDisabled,
      onClick: this.handleClickLink,
      ...this.tagProps
    }, slots);
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/button/button.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const clickOutside = {
  beforeMount(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      binding.value(e);
    }
    el.__vueClickOutside__ = documentHandler;
    isClient && document.addEventListener("click", documentHandler);
  },
  unmounted(el, binding) {
    isClient && document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};
let transferIndex = 0;
function transferIncrease() {
  transferIndex++;
}
function setLang(lang2) {
  if (isClient && typeof window.viewuiplus !== "undefined") {
    if (!("langs" in viewuiplus)) {
      viewuiplus.langs = {};
    }
    viewuiplus.langs[lang2.i.locale] = lang2;
  }
}
const lang$1 = {
  i: {
    locale: "zh-CN",
    select: {
      placeholder: "请选择",
      noMatch: "无匹配数据",
      loading: "加载中"
    },
    table: {
      noDataText: "暂无数据",
      noFilteredDataText: "暂无筛选结果",
      confirmFilter: "筛选",
      resetFilter: "重置",
      clearFilter: "全部",
      sumText: "合计"
    },
    datepicker: {
      selectDate: "选择日期",
      selectTime: "选择时间",
      startTime: "开始时间",
      endTime: "结束时间",
      clear: "清空",
      ok: "确定",
      datePanelLabel: "[yyyy年] [m月]",
      month: "月",
      month1: "1 月",
      month2: "2 月",
      month3: "3 月",
      month4: "4 月",
      month5: "5 月",
      month6: "6 月",
      month7: "7 月",
      month8: "8 月",
      month9: "9 月",
      month10: "10 月",
      month11: "11 月",
      month12: "12 月",
      year: "年",
      weekStartDay: "0",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      months: {
        m1: "1月",
        m2: "2月",
        m3: "3月",
        m4: "4月",
        m5: "5月",
        m6: "6月",
        m7: "7月",
        m8: "8月",
        m9: "9月",
        m10: "10月",
        m11: "11月",
        m12: "12月"
      }
    },
    transfer: {
      titles: {
        source: "源列表",
        target: "目的列表"
      },
      filterPlaceholder: "请输入搜索内容",
      notFoundText: "列表为空"
    },
    modal: {
      okText: "确定",
      cancelText: "取消"
    },
    poptip: {
      okText: "确定",
      cancelText: "取消"
    },
    page: {
      prev: "上一页",
      next: "下一页",
      total: "共",
      item: "条",
      items: "条",
      prev5: "向前 5 页",
      next5: "向后 5 页",
      page: "条/页",
      goto: "跳至",
      p: "页"
    },
    rate: {
      star: "星",
      stars: "星"
    },
    time: {
      before: "前",
      after: "后",
      just: "刚刚",
      seconds: "秒",
      minutes: "分钟",
      hours: "小时",
      days: "天"
    },
    tree: {
      emptyText: "暂无数据"
    },
    image: {
      zoomIn: "放大",
      zoomOut: "缩小",
      rotateLeft: "左旋转",
      rotateRight: "右旋转",
      fail: "失败",
      preview: "预览"
    }
  }
};
setLang(lang$1);
const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function Format() {
  function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function template(string, ...args) {
    if (args.length === 1 && typeof args[0] === "object") {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    if (string === void 0) {
      return "";
    }
    return string.replace(RE_NARGS, (match, prefix, i, index) => {
      let result;
      if (string[index - 1] === "{" && string[index + match.length] === "}") {
        return i;
      } else {
        result = hasOwn(args, i) ? args[i] : null;
        if (result === null || result === void 0) {
          return "";
        }
        return result;
      }
    });
  }
  return template;
}
const format = Format();
let lang = lang$1;
let i18nHandler = function() {
  if (Reflect.has(this, "$t")) {
    return this.$t(...arguments);
  }
};
const t = function(path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== void 0)
    return value;
  const array = path.split(".");
  let current = lang;
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1)
      return format(value, options);
    if (!value)
      return "";
    current = value;
  }
  return "";
};
const Locale = {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
const prefixCls$4 = "ivu-poptip";
const _sfc_main$c = {
  name: "Poptip",
  mixins: [Popper, Locale],
  emits: ["on-ok", "on-cancel"],
  directives: { clickOutside },
  components: { iButton: _sfc_main$d },
  props: {
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "focus", "hover"]);
      },
      default: "click"
    },
    placement: {
      validator(value) {
        return oneOf(value, ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]);
      },
      default: "top"
    },
    title: {
      type: [String, Number]
    },
    content: {
      type: [String, Number],
      default: ""
    },
    width: {
      type: [String, Number]
    },
    confirm: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String
    },
    cancelText: {
      type: String
    },
    transfer: {
      type: Boolean,
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.transfer === "" ? false : global.$VIEWUI.transfer;
      }
    },
    popperClass: {
      type: String
    },
    wordWrap: {
      type: Boolean,
      default: false
    },
    // default by css: 8px 16px
    padding: {
      type: String
    },
    // 3.4.0
    disabled: {
      type: Boolean,
      default: false
    },
    // 4.0.0
    capture: {
      type: Boolean,
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI ? false : global.$VIEWUI.capture;
      }
    },
    transferClassName: {
      type: String
    }
  },
  data() {
    return {
      prefixCls: prefixCls$4,
      showTitle: true,
      isInput: false,
      disableCloseUnderTransfer: false,
      // transfer 模式下，点击 slot 也会触发关闭
      tIndex: this.handleGetIndex()
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls$4}`,
        {
          [`${prefixCls$4}-confirm`]: this.confirm
        }
      ];
    },
    popperClasses() {
      return [
        `${prefixCls$4}-popper`,
        {
          [`${prefixCls$4}-confirm`]: this.transfer && this.confirm,
          [`${this.popperClass}`]: !!this.popperClass,
          [prefixCls$4 + "-transfer"]: this.transfer,
          [this.transferClassName]: this.transferClassName
        }
      ];
    },
    styles() {
      let style = {};
      if (this.width) {
        style.width = `${this.width}px`;
      }
      if (this.transfer)
        style["z-index"] = 1060 + this.tIndex;
      return style;
    },
    localeOkText() {
      if (this.okText === void 0) {
        return this.t("i.poptip.okText");
      } else {
        return this.okText;
      }
    },
    localeCancelText() {
      if (this.cancelText === void 0) {
        return this.t("i.poptip.cancelText");
      } else {
        return this.cancelText;
      }
    },
    contentClasses() {
      return [
        `${prefixCls$4}-body-content`,
        {
          [`${prefixCls$4}-body-content-word-wrap`]: this.wordWrap
        }
      ];
    },
    contentPaddingStyle() {
      const styles = {};
      if (this.padding !== "")
        styles["padding"] = this.padding;
      return styles;
    }
  },
  methods: {
    handleClick() {
      if (this.disabled)
        return;
      if (this.confirm) {
        this.visible = !this.visible;
        return true;
      }
      if (this.trigger !== "click") {
        return false;
      }
      this.visible = !this.visible;
    },
    handleTransferClick() {
      if (this.transfer)
        this.disableCloseUnderTransfer = true;
    },
    handleClose() {
      if (this.disableCloseUnderTransfer) {
        this.disableCloseUnderTransfer = false;
        return false;
      }
      if (this.confirm) {
        this.visible = false;
        return true;
      }
      if (this.trigger !== "click") {
        return false;
      }
      this.visible = false;
    },
    handleFocus(fromInput = true) {
      if (this.disabled)
        return;
      if (this.trigger !== "focus" || this.confirm || this.isInput && !fromInput) {
        return false;
      }
      this.visible = true;
    },
    handleBlur(fromInput = true) {
      if (this.trigger !== "focus" || this.confirm || this.isInput && !fromInput) {
        return false;
      }
      this.visible = false;
    },
    handleMouseenter() {
      if (this.disabled)
        return;
      if (this.trigger !== "hover" || this.confirm) {
        return false;
      }
      if (this.enterTimer)
        clearTimeout(this.enterTimer);
      this.enterTimer = setTimeout(() => {
        this.visible = true;
      }, 100);
    },
    handleMouseleave() {
      if (this.trigger !== "hover" || this.confirm) {
        return false;
      }
      if (this.enterTimer) {
        clearTimeout(this.enterTimer);
        this.enterTimer = setTimeout(() => {
          this.visible = false;
        }, 100);
      }
    },
    cancel() {
      this.visible = false;
      this.$emit("on-cancel");
    },
    ok() {
      this.visible = false;
      this.$emit("on-ok");
    },
    getInputChildren() {
      const $input = this.$refs.reference.querySelectorAll("input");
      const $textarea = this.$refs.reference.querySelectorAll("textarea");
      let $children = null;
      if ($input.length) {
        $children = $input[0];
      } else if ($textarea.length) {
        $children = $textarea[0];
      }
      return $children;
    },
    handleGetIndex() {
      transferIncrease();
      return transferIndex;
    },
    handleIndexIncrease() {
      this.tIndex = this.handleGetIndex();
    }
  },
  mounted() {
    if (!this.confirm) {
      this.showTitle = this.$slots.title !== void 0 || this.title;
    }
    if (this.trigger === "focus") {
      nextTick(() => {
        const $children = this.getInputChildren();
        if ($children) {
          this.isInput = true;
          $children.addEventListener("focus", this.handleFocus, false);
          $children.addEventListener("blur", this.handleBlur, false);
        }
      });
    }
  },
  beforeUnmount() {
    const $children = this.getInputChildren();
    if ($children) {
      $children.removeEventListener("focus", this.handleFocus, false);
      $children.removeEventListener("blur", this.handleBlur, false);
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_i_button = resolveComponent("i-button");
  const _directive_click_outside = resolveDirective("click-outside");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: $options.classes }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, $options.handleClose)))}><div class="${ssrRenderClass([$data.prefixCls + "-rel"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div class="${ssrRenderClass($options.popperClasses)}" style="${ssrRenderStyle([
      $options.styles,
      _ctx.visible ? null : { display: "none" }
    ])}"><div class="${ssrRenderClass([$data.prefixCls + "-content"])}"><div class="${ssrRenderClass([$data.prefixCls + "-arrow"])}"></div>`);
    if ($props.confirm) {
      _push2(`<div class="${ssrRenderClass([$data.prefixCls + "-inner"])}"><div class="${ssrRenderClass([$data.prefixCls + "-body"])}"><i class="ivu-icon ivu-icon-ios-help-circle"></i><div class="${ssrRenderClass([$data.prefixCls + "-body-message"])}">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push2(`${ssrInterpolate($props.title)}`);
      }, _push2, _parent);
      _push2(`</div></div><div class="${ssrRenderClass([$data.prefixCls + "-footer"])}">`);
      _push2(ssrRenderComponent(_component_i_button, {
        type: "text",
        size: "small",
        onClick: $options.cancel
      }, {
        default: withCtx((_, _push3, _parent2, _scopeId) => {
          if (_push3) {
            _push3(`${ssrInterpolate($options.localeCancelText)}`);
          } else {
            return [
              createTextVNode(toDisplayString($options.localeCancelText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push2(ssrRenderComponent(_component_i_button, {
        type: "primary",
        size: "small",
        onClick: $options.ok
      }, {
        default: withCtx((_, _push3, _parent2, _scopeId) => {
          if (_push3) {
            _push3(`${ssrInterpolate($options.localeOkText)}`);
          } else {
            return [
              createTextVNode(toDisplayString($options.localeOkText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push2(`</div></div>`);
    } else {
      _push2(`<!---->`);
    }
    if (!$props.confirm) {
      _push2(`<div class="${ssrRenderClass([$data.prefixCls + "-inner"])}">`);
      if ($data.showTitle) {
        _push2(`<div class="${ssrRenderClass([$data.prefixCls + "-title"])}" style="${ssrRenderStyle($options.contentPaddingStyle)}">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
          _push2(`<div class="${ssrRenderClass([$data.prefixCls + "-title-inner"])}">${ssrInterpolate($props.title)}</div>`);
        }, _push2, _parent);
        _push2(`</div>`);
      } else {
        _push2(`<!---->`);
      }
      _push2(`<div class="${ssrRenderClass([$data.prefixCls + "-body"])}" style="${ssrRenderStyle($options.contentPaddingStyle)}"><div class="${ssrRenderClass($options.contentClasses)}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, () => {
        _push2(`<div class="${ssrRenderClass([$data.prefixCls + "-body-content-inner"])}">${ssrInterpolate($props.content)}</div>`);
      }, _push2, _parent);
      _push2(`</div></div></div>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div></div>`);
  }, "body", !$props.transfer, _parent);
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/poptip/poptip.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Poptip = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$b]]);
const renderHeader = {
  name: "TableRenderHeader",
  props: {
    render: Function,
    column: Object,
    index: Number
  },
  render() {
    const params = {
      column: this.column,
      index: this.index
    };
    return this.render(h, params);
  }
};
const Mixin = {
  methods: {
    alignCls(column, row = {}) {
      let cellClassName = "";
      if (row.cellClassName && column.key && row.cellClassName[column.key]) {
        cellClassName = row.cellClassName[column.key];
      }
      return [
        `${this.prefixCls}-column-${column.__id}`,
        {
          [`${cellClassName}`]: cellClassName,
          // cell className
          [`${column.className}`]: column.className,
          // column className
          [`${this.prefixCls}-column-${column.align}`]: column.align,
          [`${this.prefixCls}-hidden`]: this.fixed === "left" && column.fixed !== "left" || this.fixed === "right" && column.fixed !== "right" || !this.fixed && column.fixed && (column.fixed === "left" || column.fixed === "right")
        }
      ];
    },
    isPopperShow(column) {
      return column.filters && (!this.fixed && !column.fixed || this.fixed === "left" && column.fixed === "left" || this.fixed === "right" && column.fixed === "right");
    },
    setCellWidth(column) {
      let width = "";
      if (column.width) {
        width = column.width;
      } else if (this.columnsWidth[column._index]) {
        width = this.columnsWidth[column._index].width;
      }
      if (width === "0")
        width = "";
      return width;
    }
  }
};
const _sfc_main$b = {
  name: "TableHead",
  mixins: [Mixin, Locale],
  components: { CheckboxGroup, Checkbox, Poptip, iButton: _sfc_main$d, renderHeader, draggable },
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    objData: Object,
    data: Array,
    // rebuildData
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    columnRows: Array,
    fixedColumnRows: Array
  },
  data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  },
  computed: {
    styles() {
      const style = Object.assign({}, this.styleObject);
      const width = parseInt(this.styleObject.width);
      style.width = `${width}px`;
      return style;
    },
    isSelectAll() {
      let isSelectAll = true;
      if (!this.data.length)
        isSelectAll = false;
      let isAllDisabledAndUnSelected = true;
      for (let i in this.objData) {
        const objData = this.objData[i];
        if (!objData._isChecked && !objData._isDisabled) {
          isSelectAll = false;
          break;
        } else if (objData.children && objData.children.length) {
          isSelectAll = this.isChildrenSelected(objData, isSelectAll);
        }
        if (!(objData._isDisabled && !objData._isChecked)) {
          isAllDisabledAndUnSelected = false;
        } else if (objData.children && objData.children.length) {
          isAllDisabledAndUnSelected = this.isChildrenAllDisabledAndUnSelected(objData, isAllDisabledAndUnSelected);
        }
      }
      if (isAllDisabledAndUnSelected)
        isSelectAll = false;
      return isSelectAll;
    },
    headRows() {
      const isGroup = this.columnRows.length > 1;
      if (isGroup) {
        return this.fixed ? this.fixedColumnRows : this.columnRows;
      } else {
        return [this.columns];
      }
    },
    isSelectDisabled() {
      let isSelectDisabled = true;
      if (this.data.length) {
        for (let i in this.objData) {
          const objData = this.objData[i];
          if (!objData._isDisabled) {
            isSelectDisabled = false;
          } else if (objData.children && objData.children.length) {
            isSelectDisabled = this.isChildrenDisabled(objData, isSelectDisabled);
          }
        }
      }
      return isSelectDisabled;
    }
  },
  methods: {
    cellClasses(column) {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]: !this.fixed && column.fixed && (column.fixed === "left" || column.fixed === "right"),
          [`${this.prefixCls}-cell-with-selection`]: column.type === "selection"
        }
      ];
    },
    scrollBarCellClass() {
      let hasRightFixed = false;
      for (let i in this.headRows) {
        for (let j in this.headRows[i]) {
          if (this.headRows[i][j].fixed === "right") {
            hasRightFixed = true;
            break;
          }
          if (hasRightFixed)
            break;
        }
      }
      return [
        {
          [`${this.prefixCls}-hidden`]: hasRightFixed
        }
      ];
    },
    itemClasses(column, item) {
      return [
        `${this.prefixCls}-filter-select-item`,
        {
          [`${this.prefixCls}-filter-select-item-selected`]: column._filterChecked[0] === item.value
        }
      ];
    },
    itemAllClasses(column) {
      return [
        `${this.prefixCls}-filter-select-item`,
        {
          [`${this.prefixCls}-filter-select-item-selected`]: !column._filterChecked.length
        }
      ];
    },
    selectAll() {
      const status = !this.isSelectAll;
      this.$parent.selectAll(status);
    },
    handleSort(index, type) {
      const column = this.columns.find((item) => item._index === index);
      const _index = column._index;
      if (column._sortType === type) {
        type = "normal";
      }
      this.$parent.handleSort(_index, type);
    },
    handleSortByHead(index) {
      const column = this.columns.find((item) => item._index === index);
      if (column.sortable) {
        const type = column._sortType;
        if (type === "normal") {
          this.handleSort(index, "asc");
        } else if (type === "asc") {
          this.handleSort(index, "desc");
        } else {
          this.handleSort(index, "normal");
        }
      }
    },
    handleFilter(index) {
      this.$parent.handleFilter(index);
    },
    handleSelect(index, value) {
      this.$parent.handleFilterSelect(index, value);
    },
    handleReset(index) {
      this.$parent.handleFilterReset(index);
    },
    handleFilterHide(index) {
      this.$parent.handleFilterHide(index);
    },
    // 因为表头嵌套不是深拷贝，所以没有 _ 开头的方法，在 isGroup 下用此列
    getColumn(rowIndex, index) {
      const isGroup = this.columnRows.length > 1;
      if (isGroup) {
        const id = this.headRows[rowIndex][index].__id;
        return this.columns.filter((item) => item.__id === id)[0];
      } else {
        return this.headRows[rowIndex][index];
      }
    },
    handleMouseDown(column, event) {
      if (this.$isServer)
        return;
      if (isClient && this.draggingColumn) {
        this.dragging = true;
        const table = this.$parent;
        const tableEl = table.$el;
        const tableLeft = tableEl.getBoundingClientRect().left;
        const columnEl = this.$el.querySelector(`th.ivu-table-column-${column.__id}`);
        const columnRect = columnEl.getBoundingClientRect();
        const minLeft = columnRect.left - tableLeft + 30;
        table.showResizeLine = true;
        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft
        };
        const resizeProxy = table.$refs.resizeLine;
        resizeProxy.style.left = this.dragState.startLeft + "px";
        document.onselectstart = function() {
          return false;
        };
        document.ondragstart = function() {
          return false;
        };
        const handleMouseMove = (event2) => {
          const deltaLeft = event2.clientX - this.dragState.startMouseLeft;
          const proxyLeft = this.dragState.startLeft + deltaLeft;
          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + "px";
        };
        const handleMouseUp = () => {
          if (this.dragging) {
            const {
              startColumnLeft,
              startLeft
            } = this.dragState;
            const finalLeft = parseInt(resizeProxy.style.left, 10);
            const columnWidth = finalLeft - startColumnLeft;
            const _column = table.allColumns.find((item) => item.__id === column.__id);
            if (_column) {
              _column.width = columnWidth;
              column.width = columnWidth;
              table.handleResize();
            }
            table.$emit("on-column-width-resize", _column.width, startLeft - startColumnLeft, column, event);
            isClient && (document.body.style.cursor = "");
            this.dragging = false;
            this.draggingColumn = null;
            this.dragState = {};
            table.showResizeLine = false;
          }
          if (!isClient)
            return;
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;
        };
        if (!isClient)
          return;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }
    },
    handleMouseMove(column, event) {
      let target = event.target;
      while (target && target.tagName !== "TH") {
        target = target.parentNode;
      }
      if (!column || !column.resizable)
        return;
      if (isClient && !this.dragging) {
        let rect = target.getBoundingClientRect();
        const bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = "col-resize";
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = "";
          this.draggingColumn = null;
        }
      }
    },
    handleMouseOut() {
      if (this.$isServer)
        return;
      isClient && (document.body.style.cursor = "");
    },
    isChildrenSelected(objData, isSelectAll) {
      let status = isSelectAll;
      if (objData.children && objData.children.length) {
        objData.children.forEach((row) => {
          if (!row._isChecked && !row._isDisabled) {
            status = false;
          } else if (row.children && row.children.length) {
            status = this.isChildrenSelected(row, status);
          }
        });
      }
      return status;
    },
    isChildrenAllDisabledAndUnSelected(objData, isAllDisabledAndUnSelected) {
      let status = isAllDisabledAndUnSelected;
      if (objData.children && objData.children.length) {
        objData.children.forEach((row) => {
          if (!(row._isDisabled && !row._isChecked)) {
            status = false;
          } else if (row.children && row.children.length) {
            status = this.isChildrenAllDisabledAndUnSelected(row, status);
          }
        });
      }
      return status;
    },
    isChildrenDisabled(objData, isSelectDisabled) {
      let status = isSelectDisabled;
      if (objData.children && objData.children.length) {
        objData.children.forEach((row) => {
          if (!row._isDisabled) {
            status = false;
          } else if (row.children && row.children.length) {
            status = this.isChildrenDisabled(row, status);
          }
        });
      }
      return status;
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_render_header = resolveComponent("render-header");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Poptip = resolveComponent("Poptip");
  const _component_checkbox_group = resolveComponent("checkbox-group");
  const _component_checkbox = resolveComponent("checkbox");
  const _component_i_button = resolveComponent("i-button");
  _push(`<table${ssrRenderAttrs(mergeProps({
    cellspacing: "0",
    cellpadding: "0",
    border: "0",
    style: $options.styles
  }, _attrs))}><colgroup><!--[-->`);
  ssrRenderList($props.columns, (column, index) => {
    _push(`<col${ssrRenderAttr("width", _ctx.setCellWidth(column))}>`);
  });
  _push(`<!--]-->`);
  if (_ctx.$parent.showVerticalScrollBar) {
    _push(`<col${ssrRenderAttr("width", _ctx.$parent.scrollBarWidth)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</colgroup><thead><!--[-->`);
  ssrRenderList($options.headRows, (cols, rowIndex) => {
    _push(`<tr><!--[-->`);
    ssrRenderList(cols, (column, index) => {
      _push(`<th${ssrRenderAttr("colspan", column.colSpan)}${ssrRenderAttr("rowspan", column.rowSpan)} class="${ssrRenderClass(_ctx.alignCls(column))}"><div class="${ssrRenderClass($options.cellClasses(column))}">`);
      if (column.type === "expand") {
        _push(`<!--[-->`);
        if (!column.renderHeader) {
          _push(`<span>${ssrInterpolate(column.title || "")}</span>`);
        } else {
          _push(ssrRenderComponent(_component_render_header, {
            render: column.renderHeader,
            column,
            index
          }, null, _parent));
        }
        _push(`<!--]-->`);
      } else if (column.type === "selection") {
        _push(`<!--[-->`);
        if (!column.hideSelectAll) {
          _push(ssrRenderComponent(_component_Checkbox, {
            "model-value": $options.isSelectAll,
            disabled: $options.isSelectDisabled,
            onOnChange: $options.selectAll
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        if (!column.renderHeader) {
          _push(`<span class="${ssrRenderClass({ [$props.prefixCls + "-cell-sort"]: column.sortable })}">${ssrInterpolate(column.title || "#")}</span>`);
        } else {
          _push(ssrRenderComponent(_component_render_header, {
            render: column.renderHeader,
            column,
            index
          }, null, _parent));
        }
        if (column.sortable) {
          _push(`<span class="${ssrRenderClass([$props.prefixCls + "-sort"])}"><i class="${ssrRenderClass([{ on: $options.getColumn(rowIndex, index)._sortType === "asc" }, "ivu-icon ivu-icon-md-arrow-dropup"])}"></i><i class="${ssrRenderClass([{ on: $options.getColumn(rowIndex, index)._sortType === "desc" }, "ivu-icon ivu-icon-md-arrow-dropdown"])}"></i></span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.isPopperShow(column)) {
          _push(ssrRenderComponent(_component_Poptip, {
            modelValue: $options.getColumn(rowIndex, index)._filterVisible,
            "onUpdate:modelValue": ($event) => $options.getColumn(rowIndex, index)._filterVisible = $event,
            placement: "bottom",
            "popper-class": "ivu-table-popper",
            transfer: "",
            capture: false,
            onOnPopperHide: ($event) => $options.handleFilterHide($options.getColumn(rowIndex, index)._index)
          }, createSlots({
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="${ssrRenderClass([$props.prefixCls + "-filter"])}"${_scopeId}><i class="${ssrRenderClass([{ on: $options.getColumn(rowIndex, index)._isFiltered }, "ivu-icon ivu-icon-ios-funnel"])}"${_scopeId}></i></span>`);
              } else {
                return [
                  createVNode("span", {
                    class: [$props.prefixCls + "-filter"]
                  }, [
                    createVNode("i", {
                      class: ["ivu-icon ivu-icon-ios-funnel", { on: $options.getColumn(rowIndex, index)._isFiltered }]
                    }, null, 2)
                  ], 2)
                ];
              }
            }),
            _: 2
          }, [
            $options.getColumn(rowIndex, index)._filterMultiple ? {
              name: "content",
              fn: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="${ssrRenderClass([$props.prefixCls + "-filter-list"])}"${_scopeId}><div class="${ssrRenderClass([$props.prefixCls + "-filter-list-item"])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_checkbox_group, {
                    modelValue: $options.getColumn(rowIndex, index)._filterChecked,
                    "onUpdate:modelValue": ($event) => $options.getColumn(rowIndex, index)._filterChecked = $event
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<!--[-->`);
                        ssrRenderList(column.filters, (item, index2) => {
                          _push3(ssrRenderComponent(_component_checkbox, {
                            key: index2,
                            label: item.value
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`${ssrInterpolate(item.label)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(column.filters, (item, index2) => {
                            return openBlock(), createBlock(_component_checkbox, {
                              key: index2,
                              label: item.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["label"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div><div class="${ssrRenderClass([$props.prefixCls + "-filter-footer"])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_i_button, {
                    type: "text",
                    size: "small",
                    disabled: !$options.getColumn(rowIndex, index)._filterChecked.length,
                    onClick: ($event) => $options.handleFilter($options.getColumn(rowIndex, index)._index)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.t("i.table.confirmFilter"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.t("i.table.confirmFilter")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_i_button, {
                    type: "text",
                    size: "small",
                    onClick: ($event) => $options.handleReset($options.getColumn(rowIndex, index)._index)
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.t("i.table.resetFilter"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.t("i.table.resetFilter")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: [$props.prefixCls + "-filter-list"]
                    }, [
                      createVNode("div", {
                        class: [$props.prefixCls + "-filter-list-item"]
                      }, [
                        createVNode(_component_checkbox_group, {
                          modelValue: $options.getColumn(rowIndex, index)._filterChecked,
                          "onUpdate:modelValue": ($event) => $options.getColumn(rowIndex, index)._filterChecked = $event
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(column.filters, (item, index2) => {
                              return openBlock(), createBlock(_component_checkbox, {
                                key: index2,
                                label: item.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["label"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ], 2),
                      createVNode("div", {
                        class: [$props.prefixCls + "-filter-footer"]
                      }, [
                        createVNode(_component_i_button, {
                          type: "text",
                          size: "small",
                          disabled: !$options.getColumn(rowIndex, index)._filterChecked.length,
                          onClick: ($event) => $options.handleFilter($options.getColumn(rowIndex, index)._index)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.t("i.table.confirmFilter")), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"]),
                        createVNode(_component_i_button, {
                          type: "text",
                          size: "small",
                          onClick: ($event) => $options.handleReset($options.getColumn(rowIndex, index)._index)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.t("i.table.resetFilter")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ], 2)
                    ], 2)
                  ];
                }
              }),
              key: "0"
            } : {
              name: "content",
              fn: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="${ssrRenderClass([$props.prefixCls + "-filter-list"])}"${_scopeId}><ul class="${ssrRenderClass([$props.prefixCls + "-filter-list-single"])}"${_scopeId}><li class="${ssrRenderClass($options.itemAllClasses($options.getColumn(rowIndex, index)))}"${_scopeId}>${ssrInterpolate(_ctx.t("i.table.clearFilter"))}</li><!--[-->`);
                  ssrRenderList(column.filters, (item) => {
                    _push2(`<li class="${ssrRenderClass($options.itemClasses($options.getColumn(rowIndex, index), item))}"${_scopeId}>${ssrInterpolate(item.label)}</li>`);
                  });
                  _push2(`<!--]--></ul></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: [$props.prefixCls + "-filter-list"]
                    }, [
                      createVNode("ul", {
                        class: [$props.prefixCls + "-filter-list-single"]
                      }, [
                        createVNode("li", {
                          class: $options.itemAllClasses($options.getColumn(rowIndex, index)),
                          onClick: ($event) => $options.handleReset($options.getColumn(rowIndex, index)._index)
                        }, toDisplayString(_ctx.t("i.table.clearFilter")), 11, ["onClick"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(column.filters, (item) => {
                          return openBlock(), createBlock("li", {
                            class: $options.itemClasses($options.getColumn(rowIndex, index), item),
                            key: item.value,
                            onClick: ($event) => $options.handleSelect($options.getColumn(rowIndex, index)._index, item.value)
                          }, toDisplayString(item.label), 11, ["onClick"]);
                        }), 128))
                      ], 2)
                    ], 2)
                  ];
                }
              }),
              key: "1"
            }
          ]), _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      if (column.resizable) {
        _push(`<div class="ivu-table-header-resizable"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</th>`);
    });
    _push(`<!--]-->`);
    if (_ctx.$parent.showVerticalScrollBar && rowIndex === 0) {
      _push(`<th class="${ssrRenderClass($options.scrollBarCellClass())}"${ssrRenderAttr("rowspan", $options.headRows.length)}></th>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</tr>`);
  });
  _push(`<!--]--></thead></table>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/table/table-head.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const tableHead = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$a = {
  props: {
    row: Object,
    prefixCls: String,
    draggable: Boolean,
    isChildren: Boolean
    // 开启后，会认为是子节点，相关逻辑通过 rowKey 查找
  },
  computed: {
    objData() {
      return this.$parent.objData;
    }
  },
  methods: {
    onDrag(e, index) {
      e.dataTransfer.setData("index", index);
    },
    onDrop(e, index) {
      const dragIndex = e.dataTransfer.getData("index");
      this.$parent.$parent.dragAndDrop(dragIndex, index);
      e.preventDefault();
    },
    allowDrop(e) {
      e.preventDefault();
    },
    rowClasses(_index) {
      const objData = this.isChildren ? this.$parent.$parent.getDataByRowKey(this.row._rowKey) : this.objData[_index];
      return [
        `${this.prefixCls}-row`,
        this.rowClsName(_index),
        {
          [`${this.prefixCls}-row-highlight`]: objData && objData._isHighlight,
          [`${this.prefixCls}-row-hover`]: objData && objData._isHover
        }
      ];
    },
    rowClsName(_index) {
      return this.$parent.$parent.rowClassName(this.objData[_index], _index);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.draggable) {
    _push(`<tr${ssrRenderAttrs(mergeProps({
      class: $options.rowClasses($props.row._index),
      draggable: $props.draggable
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</tr>`);
  } else {
    _push(`<tr${ssrRenderAttrs(mergeProps({
      class: $options.rowClasses($props.row._index),
      draggable: false
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</tr>`);
  }
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/table/table-tr.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const TableTr = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$9]]);
const Expand = {
  name: "TableExpand",
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render() {
    const params = {
      row: this.row,
      index: this.index
    };
    if (this.column)
      params.column = this.column;
    return this.render(h, params);
  }
};
const TableSlot = {
  name: "TableSlot",
  inject: ["TableInstance"],
  props: {
    row: Object,
    index: Number,
    column: {
      type: Object,
      default: null
    },
    display: {
      type: String,
      default: "block"
    }
  },
  render() {
    return h("div", {
      "class": {
        "ivu-table-cell-slot": true,
        "ivu-table-cell-slot-inline": this.display === "inline",
        "ivu-table-cell-slot-inline-block": this.display === "inline-block"
      }
    }, this.TableInstance.$slots[this.column.slot]({
      row: this.row,
      column: this.column,
      index: this.index
    }));
  }
};
const prefixCls$3 = "ivu-tooltip";
const _sfc_main$9 = {
  name: "Tooltip",
  mixins: [Popper],
  props: {
    placement: {
      validator(value) {
        return oneOf(value, ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]);
      },
      default: "bottom"
    },
    content: {
      type: [String, Number],
      default: ""
    },
    delay: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    controlled: {
      // under this prop,Tooltip will not close when mouseleave
      type: Boolean,
      default: false
    },
    always: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.transfer === "" ? false : global.$VIEWUI.transfer;
      }
    },
    theme: {
      validator(value) {
        return oneOf(value, ["dark", "light"]);
      },
      default: "dark"
    },
    maxWidth: {
      type: [String, Number]
    },
    transferClassName: {
      type: String
    }
  },
  data() {
    return {
      prefixCls: prefixCls$3,
      tIndex: this.handleGetIndex()
    };
  },
  computed: {
    innerStyles() {
      const styles = {};
      if (this.maxWidth)
        styles["max-width"] = `${this.maxWidth}px`;
      return styles;
    },
    innerClasses() {
      return [
        `${prefixCls$3}-inner`,
        {
          [`${prefixCls$3}-inner-with-width`]: !!this.maxWidth
        }
      ];
    },
    dropStyles() {
      let styles = {};
      if (this.transfer)
        styles["z-index"] = 1060 + this.tIndex;
      return styles;
    },
    dropdownCls() {
      return [
        `${prefixCls$3}-popper`,
        `${prefixCls$3}-${this.theme}`,
        {
          [prefixCls$3 + "-transfer"]: this.transfer,
          [this.transferClassName]: this.transferClassName
        }
      ];
    }
  },
  watch: {
    content() {
      this.updatePopper();
    }
  },
  methods: {
    handleShowPopper() {
      if (this.timeout)
        clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = true;
      }, this.delay);
      this.tIndex = this.handleGetIndex();
    },
    handleClosePopper() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        if (!this.controlled) {
          this.timeout = setTimeout(() => {
            this.visible = false;
          }, 100);
        }
      }
    },
    handleGetIndex() {
      transferIncrease();
      return transferIndex;
    }
  },
  mounted() {
    if (this.always) {
      this.updatePopper();
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$data.prefixCls]
  }, _attrs))}><div class="${ssrRenderClass([$data.prefixCls + "-rel"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div style="${ssrRenderStyle([
      !$props.disabled && (_ctx.visible || $props.always) ? null : { display: "none" },
      $options.dropStyles
    ])}" class="${ssrRenderClass($options.dropdownCls)}"><div class="${ssrRenderClass([$data.prefixCls + "-content"])}"><div class="${ssrRenderClass([$data.prefixCls + "-arrow"])}"></div><div class="${ssrRenderClass($options.innerClasses)}" style="${ssrRenderStyle($options.innerStyles)}">`);
    ssrRenderSlot(_ctx.$slots, "content", {}, () => {
      _push2(`${ssrInterpolate($props.content)}`);
    }, _push2, _parent);
    _push2(`</div></div></div>`);
  }, "body", !$props.transfer, _parent);
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/tooltip/tooltip.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$8 = {
  name: "TableCell",
  components: { Icon, Checkbox, TableExpand: Expand, TableSlot, Tooltip },
  inject: ["TableInstance"],
  props: {
    prefixCls: String,
    row: Object,
    column: Object,
    naturalIndex: Number,
    // index of rebuildData
    index: Number,
    // _index of data
    checked: Boolean,
    disabled: Boolean,
    expanded: Boolean,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    // 是否为 tree 子节点
    treeNode: Boolean,
    treeLevel: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      renderType: "",
      uid: -1,
      context: this.$parent.$parent.$parent.currentContext,
      showTooltip: false
      // 鼠标滑过overflow文本时，再检查是否需要显示
    };
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]: !this.fixed && this.column.fixed && (this.column.fixed === "left" || this.column.fixed === "right"),
          [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
          [`${this.prefixCls}-cell-with-expand`]: this.renderType === "expand",
          [`${this.prefixCls}-cell-with-selection`]: this.renderType === "selection"
        }
      ];
    },
    expandCls() {
      return [
        `${this.prefixCls}-cell-expand`,
        {
          [`${this.prefixCls}-cell-expand-expanded`]: this.expanded
        }
      ];
    },
    showChildren() {
      let status = false;
      if (this.renderType === "html" || this.renderType === "normal" || this.renderType === "render" || this.renderType === "slot") {
        const data = this.row;
        if (data.children && data.children.length || "_loading" in data) {
          if (this.column.tree)
            status = true;
        }
      }
      return status;
    },
    showTreeNode() {
      let status = false;
      if (this.renderType === "html" || this.renderType === "normal" || this.renderType === "render" || this.renderType === "slot") {
        if (this.column.tree && this.treeNode)
          status = true;
      }
      return status;
    },
    showLevel() {
      let status = false;
      if (this.renderType === "html" || this.renderType === "normal" || this.renderType === "render" || this.renderType === "slot") {
        if (this.column.tree && this.treeNode)
          status = true;
      }
      return status;
    },
    treeLevelStyle() {
      return {
        "padding-left": this.treeLevel * this.TableInstance.indentSize + "px"
      };
    },
    childrenExpand() {
      const data = this.TableInstance.getDataByRowKey(this.row._rowKey);
      return data._isShowChildren;
    },
    childrenLoading() {
      const data = this.TableInstance.getDataByRowKey(this.row._rowKey);
      return "_loading" in data && data._loading;
    }
  },
  methods: {
    toggleSelect() {
      if (this.treeNode) {
        this.$parent.$parent.$parent.toggleSelect(this.index, this.row._rowKey);
      } else {
        this.$parent.$parent.$parent.toggleSelect(this.index);
      }
    },
    toggleExpand() {
      this.$parent.$parent.$parent.toggleExpand(this.index);
    },
    handleClick() {
    },
    handleTooltipIn() {
      if (!isClient)
        return;
      const $content = this.$refs.content;
      let range = document.createRange();
      range.setStart($content, 0);
      range.setEnd($content, $content.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      this.showTooltip = rangeWidth > $content.offsetWidth;
      range = null;
    },
    handleToggleTree() {
      this.$parent.$parent.$parent.toggleTree(this.row._rowKey);
    }
    // 改为 table-body 中触发，因为 cell 有padding间距
    // handleCellClick (event) {
    //     this.$parent.$parent.$parent.$emit('on-cell-click', this.row, this.column, this.row[this.column.key], event);
    // }
  },
  created() {
    if (this.column.type === "index") {
      this.renderType = "index";
    } else if (this.column.type === "selection") {
      this.renderType = "selection";
    } else if (this.column.type === "html") {
      this.renderType = "html";
    } else if (this.column.type === "expand") {
      this.renderType = "expand";
    } else if (this.column.render) {
      this.renderType = "render";
    } else if (this.column.slot) {
      this.renderType = "slot";
    } else {
      this.renderType = "normal";
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Icon = resolveComponent("Icon");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_table_expand = resolveComponent("table-expand");
  const _component_table_slot = resolveComponent("table-slot");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $options.classes,
    ref: "cell"
  }, _attrs))}>`);
  if ($data.renderType === "index") {
    _push(`<span>${ssrInterpolate($props.column.indexMethod ? $props.column.indexMethod($props.row, $props.naturalIndex) : $props.naturalIndex + 1)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.renderType === "selection") {
    _push(ssrRenderComponent(_component_Checkbox, {
      "model-value": $props.checked,
      onClick: $options.handleClick,
      onOnChange: $options.toggleSelect,
      disabled: $props.disabled
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.showLevel) {
    _push(`<div class="ivu-table-cell-tree-level" style="${ssrRenderStyle($options.treeLevelStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.showChildren) {
    _push(`<div class="${ssrRenderClass([{ "ivu-table-cell-tree-loading": $options.childrenLoading }, "ivu-table-cell-tree"])}">`);
    if ($options.childrenLoading) {
      _push(ssrRenderComponent(_component_Icon, {
        type: "ios-loading",
        class: "ivu-load-loop"
      }, null, _parent));
    } else if (!$options.childrenExpand) {
      _push(ssrRenderComponent(_component_Icon, { type: "ios-add" }, null, _parent));
    } else {
      _push(ssrRenderComponent(_component_Icon, { type: "ios-remove" }, null, _parent));
    }
    _push(`</div>`);
  } else if ($options.showTreeNode) {
    _push(`<div class="ivu-table-cell-tree ivu-table-cell-tree-empty"></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.renderType === "html") {
    _push(`<span>${$props.row[$props.column.key]}</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.renderType === "normal") {
    _push(`<!--[-->`);
    if ($props.column.tooltip) {
      _push(ssrRenderComponent(_component_Tooltip, {
        transfer: "",
        content: $props.row[$props.column.key],
        theme: $props.column.tooltipTheme ? $props.column.tooltipTheme : $options.TableInstance.tooltipTheme,
        disabled: !$data.showTooltip,
        "max-width": $props.column.tooltipMaxWidth ? $props.column.tooltipMaxWidth : $options.TableInstance.tooltipMaxWidth,
        class: "ivu-table-cell-tooltip"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="ivu-table-cell-tooltip-content"${_scopeId}>${ssrInterpolate($props.row[$props.column.key])}</span>`);
          } else {
            return [
              createVNode("span", {
                ref: "content",
                onMouseenter: $options.handleTooltipIn,
                class: "ivu-table-cell-tooltip-content"
              }, toDisplayString($props.row[$props.column.key]), 41, ["onMouseenter"])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<span>${ssrInterpolate($props.row[$props.column.key])}</span>`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  if ($data.renderType === "expand" && !$props.row._disableExpand) {
    _push(`<div class="${ssrRenderClass($options.expandCls)}">`);
    _push(ssrRenderComponent(_component_Icon, { type: "ios-arrow-forward" }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.renderType === "render") {
    _push(ssrRenderComponent(_component_table_expand, {
      row: $props.row,
      column: $props.column,
      index: $props.index,
      render: $props.column.render
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.renderType === "slot") {
    _push(ssrRenderComponent(_component_table_slot, {
      row: $props.row,
      column: $props.column,
      display: $props.column.display || "block",
      index: $props.index
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/table/cell.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  name: "TableBody",
  mixins: [Mixin],
  components: { TableCell, Expand, TableTr },
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    data: Array,
    // rebuildData
    objData: Object,
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    expandRender() {
      let render = function() {
        return "";
      };
      for (let i = 0; i < this.columns.length; i++) {
        const column = this.columns[i];
        if (column.type && column.type === "expand") {
          if (column.render)
            render = column.render;
        }
      }
      return render;
    }
  },
  methods: {
    rowChecked(_index) {
      return this.objData[_index] && this.objData[_index]._isChecked;
    },
    rowDisabled(_index) {
      return this.objData[_index] && this.objData[_index]._isDisabled;
    },
    rowExpanded(_index) {
      return this.objData[_index] && this.objData[_index]._isExpanded;
    },
    rowStatusByRowKey(type, rowKey2) {
      const data = this.$parent.getDataByRowKey(rowKey2);
      return data[type];
    },
    handleMouseIn(_index, event, rowKey2) {
      event.stopPropagation();
      this.$parent.handleMouseIn(_index, rowKey2);
    },
    handleMouseOut(_index, event, rowKey2) {
      event.stopPropagation();
      this.$parent.handleMouseOut(_index, rowKey2);
    },
    clickCurrentRow(_index, event, rowKey2) {
      this.$parent.clickCurrentRow(_index, rowKey2);
    },
    dblclickCurrentRow(_index, event, rowKey2) {
      event.stopPropagation();
      this.$parent.dblclickCurrentRow(_index, rowKey2);
    },
    clickCell(row, column, key, event) {
      this.$parent.$emit("on-cell-click", row, column, row[key], event);
    },
    contextmenuCurrentRow(_index, event, rowKey2) {
      event.stopPropagation();
      if (this.$parent.contextMenu)
        event.preventDefault();
      this.$parent.contextmenuCurrentRow(_index, rowKey2, event);
    },
    selectStartCurrentRow() {
      if (this.$parent.contextMenu)
        ;
    },
    getSpan(row, column, rowIndex, columnIndex) {
      const fn = this.$parent.spanMethod;
      if (typeof fn === "function") {
        const result = fn({
          row,
          column,
          rowIndex,
          columnIndex
        });
        let rowspan = 1;
        let colspan = 1;
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if (typeof result === "object") {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
        return {
          rowspan,
          colspan
        };
      } else {
        return {};
      }
    },
    showWithSpan(row, column, rowIndex, columnIndex) {
      const result = this.getSpan(row, column, rowIndex, columnIndex);
      return !("rowspan" in result && result.rowspan === 0 || "colspan" in result && result.colspan === 0);
    },
    isTrShow(rowKey2) {
      let status = true;
      let child;
      for (let i in this.objData) {
        const row = this.objData[i];
        const showChildren = row._isShowChildren;
        if (row._rowKey === rowKey2) {
          status = status && showChildren;
          break;
        } else if (row.children && row.children.length) {
          child = this.getTrStatus(rowKey2, row, status && showChildren);
          if (child[0] && child[0]._rowKey === rowKey2) {
            return child[1];
          }
        }
      }
      return status;
    },
    getTrStatus(rowKey2, data, parentStatus) {
      let status = parentStatus;
      let childData;
      if (data.children && data.children.length) {
        for (let i = 0; i < data.children.length; i++) {
          const row = data.children[i];
          const showChildren = row._isShowChildren;
          if (row._rowKey === rowKey2) {
            childData = row;
            status = status && showChildren;
            break;
          } else if (row.children && row.children.length) {
            const child = this.getTrStatus(rowKey2, row, status && showChildren);
            if (child[0] && child[0]._rowKey === rowKey2) {
              return child;
            }
          }
        }
      }
      return [childData, status];
    },
    getLevel(rowKey2) {
      let level;
      let child;
      for (let i = 0; i < this.data.length; i++) {
        const row = this.data[i];
        if (row[this.rowKey] === rowKey2) {
          level = 0;
          break;
        } else if (row.children && row.children.length) {
          child = this.getChildLevel(row, rowKey2, 1);
          if (child[0] && child[0][this.rowKey] === rowKey2) {
            return child[1];
          }
        }
      }
      return level;
    },
    getChildLevel(data, rowKey2, level) {
      let newLevel;
      let childData;
      if (data.children && data.children.length) {
        for (let i = 0; i < data.children.length; i++) {
          const row = data.children[i];
          if (row[this.rowKey] === rowKey2) {
            childData = row;
            newLevel = level;
            break;
          } else if (row.children && row.children.length) {
            const child = this.getChildLevel(row, rowKey2, level + 1);
            if (child[0] && child[0][this.rowKey] === rowKey2) {
              return child;
            }
          }
        }
      }
      return [childData, newLevel];
    },
    getChildNode(h2, data, nodes) {
      if (data.children && data.children.length) {
        data.children.forEach((row, index) => {
          let $tds = [];
          this.columns.forEach((column, colIndex) => {
            if (this.showWithSpan(row, column, index, colIndex)) {
              const $tableCell = h2(TableCell, {
                fixed: this.fixed,
                "prefix-cls": this.prefixCls,
                row,
                column,
                "natural-index": index,
                index: row._index,
                checked: this.rowStatusByRowKey("_isChecked", row._rowKey),
                disabled: this.rowStatusByRowKey("_isDisabled", row._rowKey),
                expanded: this.rowStatusByRowKey("_isExpanded", row._rowKey),
                treeNode: true,
                treeLevel: this.getLevel(row._rowKey),
                key: column._columnKey
              });
              const $td = h2("td", {
                class: this.alignCls(column, row),
                ...this.getSpan(row, column, index, colIndex),
                onClick: (e) => this.clickCell(row, column, column.key, e)
              }, [$tableCell]);
              $tds.push($td);
            }
          });
          const trStyle = {};
          if (!this.isTrShow(data._rowKey))
            trStyle.display = "none";
          const $tableTr = h2(TableTr, {
            draggable: false,
            row,
            "prefix-cls": this.prefixCls,
            isChildren: true,
            style: trStyle,
            key: this.rowKey ? row._rowKey : index,
            onMouseenter: (e) => this.handleMouseIn(row._index, e, row._rowKey),
            onMouseleave: (e) => this.handleMouseOut(row._index, e, row._rowKey),
            onClick: (e) => this.clickCurrentRow(row._index, e, row._rowKey),
            onDblclick: (e) => this.dblclickCurrentRow(row._index, e, row._rowKey),
            onContextmenu: (e) => this.contextmenuCurrentRow(row._index, e, row._rowKey),
            onSelectstart: (e) => this.selectStartCurrentRow(row._index, e, row._rowKey)
          }, () => $tds);
          nodes.push($tableTr);
          if (row.children && row.children.length) {
            this.getChildNode(h2, row, nodes);
          }
        });
        return nodes;
      } else {
        return nodes;
      }
    }
  },
  render() {
    let $cols = [];
    this.columns.forEach((column) => {
      const $col = h("col", {
        width: this.setCellWidth(column)
      });
      $cols.push($col);
    });
    const $colgroup = h("colgroup", {}, $cols);
    let $tableTrs = [];
    this.data.forEach((row, index) => {
      let $tds = [];
      this.columns.forEach((column, colIndex) => {
        if (this.showWithSpan(row, column, index, colIndex)) {
          const $tableCell = h(TableCell, {
            fixed: this.fixed,
            "prefix-cls": this.prefixCls,
            row,
            column,
            "natural-index": index,
            index: row._index,
            checked: this.rowChecked(row._index),
            disabled: this.rowDisabled(row._index),
            expanded: this.rowExpanded(row._index),
            key: column._columnKey
          });
          const $td = h("td", {
            class: this.alignCls(column, row),
            ...this.getSpan(row, column, index, colIndex),
            onClick: (e) => this.clickCell(row, column, column.key, e)
          }, [$tableCell]);
          $tds.push($td);
        }
      });
      const $tableTr = h(TableTr, {
        draggable: this.draggable,
        row,
        "prefix-cls": this.prefixCls,
        key: this.rowKey ? row._rowKey : index,
        onMouseenter: (e) => this.handleMouseIn(row._index, e),
        onMouseleave: (e) => this.handleMouseOut(row._index, e),
        onClick: (e) => this.clickCurrentRow(row._index, e),
        onDblclick: (e) => this.dblclickCurrentRow(row._index, e),
        onContextmenu: (e) => this.contextmenuCurrentRow(row._index, e),
        onSelectstart: (e) => this.selectStartCurrentRow(row._index, e)
      }, () => $tds);
      $tableTrs.push($tableTr);
      if (this.rowExpanded(row._index)) {
        const $Expand = h(Expand, {
          row,
          render: this.expandRender,
          index: row._index,
          key: this.rowKey ? row._rowKey : index
        });
        const $td = h("td", {
          colspan: this.columns.length,
          class: this.prefixCls + "-expanded-cell"
        }, [$Expand]);
        const $tr = h("tr", {
          class: {
            [this.prefixCls + "-expanded-hidden"]: this.fixed
          }
        }, [$td]);
        $tableTrs.push($tr);
      }
      if (row.children && row.children.length) {
        const $childNodes = this.getChildNode(h, row, []);
        $childNodes.forEach((item) => {
          $tableTrs.push(item);
        });
      }
    });
    const $tbody = h("tbody", {
      class: this.prefixCls + "-tbody"
    }, [$tableTrs]);
    return h("table", {
      cellspacing: "0",
      cellpadding: "0",
      border: "0",
      style: this.styleObject
    }, [$colgroup, $tbody]);
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/table/table-body.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  name: "TableSummary",
  mixins: [Mixin],
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    data: Object,
    // rebuildData
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    }
  },
  methods: {
    cellCls(column) {
      return [
        {
          ["ivu-table-hidden"]: this.fixed === "left" && column.fixed !== "left" || this.fixed === "right" && column.fixed !== "right" || !this.fixed && column.fixed && (column.fixed === "left" || column.fixed === "right")
        }
      ];
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "overflow": "hidden" } }, _attrs))}><table class="ivu-table-summary" cellspacing="0" cellpadding="0" border="0" style="${ssrRenderStyle($props.styleObject)}"><colgroup><!--[-->`);
  ssrRenderList($props.columns, (column, index) => {
    _push(`<col${ssrRenderAttr("width", _ctx.setCellWidth(column))}>`);
  });
  _push(`<!--]--></colgroup><tbody class="${ssrRenderClass([$props.prefixCls + "-tbody"])}"><tr class="ivu-table-row"><!--[-->`);
  ssrRenderList($props.columns, (column, index) => {
    _push(`<td class="${ssrRenderClass(_ctx.alignCls(column))}"><div class="${ssrRenderClass([$options.cellCls(column), "ivu-table-cell"])}"><span>${ssrInterpolate($props.data[column.key].value)}</span></div></td>`);
  });
  _push(`<!--]--></tr></tbody></table></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/table/summary.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const tableSummary = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "Drop",
  emits: ["mouseenter", "mouseleave", "click"],
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    className: {
      type: String
    },
    transfer: {
      type: Boolean
    },
    // 4.6.0
    eventsEnabled: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean
    },
    classes: {
      type: Object,
      default: () => {
      }
    },
    styles: {
      type: Object,
      default: () => {
      }
    },
    transitionName: {
      type: String,
      default: "transition-drop"
    },
    boundariesElement: {
      // type: [String, HTMLElement],
      default: "window"
    }
  },
  data() {
    return {
      popper: null,
      width: "",
      popperStatus: false,
      tIndex: this.handleGetIndex()
    };
  },
  computed: {
    mergedStyle() {
      let style = {};
      if (this.width)
        style.minWidth = `${this.width}px`;
      if (this.transfer)
        style["z-index"] = 1060 + this.tIndex;
      return Object.assign({}, this.styles, style);
    },
    mergedClass() {
      return Object.assign({}, this.classes, {
        [this.className]: this.className
      });
    }
  },
  methods: {
    update() {
      nextTick(() => {
        if (this.popper) {
          this.popper.update();
          this.popperStatus = true;
        } else {
          this.popper = new Popper$1(this.$parent.$refs.reference, this.$refs.drop, {
            eventsEnabled: this.eventsEnabled,
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              },
              preventOverflow: {
                boundariesElement: this.boundariesElement
              }
            },
            onCreate: () => {
              this.resetTransformOrigin();
              nextTick(this.popper.update());
            },
            onUpdate: () => {
              this.resetTransformOrigin();
            }
          });
        }
        if (this.$parent.$options.name === "iSelect") {
          this.width = parseInt(getStyle(this.$parent.$el, "width"));
        }
        this.tIndex = this.handleGetIndex();
      });
    },
    destroy() {
      if (this.popper) {
        setTimeout(() => {
          if (this.popper && !this.popperStatus) {
            this.popper.popper.style.display = "none";
            this.popper.destroy();
            this.popper = null;
          }
          this.popperStatus = false;
        }, 300);
      }
    },
    resetTransformOrigin() {
      if (!this.popper)
        return;
      let x_placement = this.popper.popper.getAttribute("x-placement");
      let placementStart = x_placement.split("-")[0];
      let placementEnd = x_placement.split("-")[1];
      const leftOrRight = x_placement === "left" || x_placement === "right";
      if (!leftOrRight) {
        this.popper.popper.style.transformOrigin = placementStart === "bottom" || placementStart !== "top" && placementEnd === "start" ? "center top" : "center bottom";
      }
    },
    handleGetIndex() {
      transferIncrease();
      return transferIndex;
    },
    handleMouseenter(e) {
      this.$emit("mouseenter", e);
    },
    handleMouseleave(e) {
      this.$emit("mouseleave", e);
    },
    handleOnUpdatePopper() {
      this.update();
    },
    handleOnDestroyPopper() {
      this.destroy();
    },
    handleClick(event) {
      this.$emit("click", event);
    }
  },
  beforeUnmount() {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div${ssrRenderAttrs(mergeProps({
      style: [
        $props.visible ? null : { display: "none" },
        $options.mergedStyle
      ],
      class: ["ivu-select-dropdown", $options.mergedClass],
      ref: "drop"
    }, _ctx.$attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
    _push2(`</div>`);
  }, "body", !$props.transfer, _parent);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/select/dropdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Drop = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const prefixCls$2 = "ivu-dropdown";
const _sfc_main$4 = {
  name: "Dropdown",
  directives: { clickOutside },
  components: { Drop },
  emits: ["on-visible-change", "on-clickoutside", "on-click", "on-hover-click", "on-haschild-click"],
  props: {
    trigger: {
      validator(value) {
        return oneOf(value, ["click", "hover", "custom", "contextMenu"]);
      },
      default: "hover"
    },
    placement: {
      validator(value) {
        return oneOf(value, ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"]);
      },
      default: "bottom"
    },
    visible: {
      type: Boolean,
      default: false
    },
    transfer: {
      type: Boolean,
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.transfer === "" ? false : global.$VIEWUI.transfer;
      }
    },
    transferClassName: {
      type: String
    },
    stopPropagation: {
      type: Boolean,
      default: false
    },
    // 4.0.0
    capture: {
      type: Boolean,
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI ? true : global.$VIEWUI.capture;
      }
    },
    // 4.6.0
    eventsEnabled: {
      type: Boolean,
      default: false
    },
    boundariesElement: {
      // type: [String, HTMLElement],
      default: "window"
    }
  },
  computed: {
    transition() {
      return ["bottom-start", "bottom", "bottom-end"].indexOf(this.placement) > -1 ? "slide-up" : "fade";
    },
    dropdownCls() {
      return {
        [prefixCls$2 + "-transfer"]: this.transfer,
        [this.transferClassName]: this.transferClassName
      };
    },
    relClasses() {
      return [
        `${prefixCls$2}-rel`,
        {
          [`${prefixCls$2}-rel-user-select-none`]: this.trigger === "contextMenu"
        }
      ];
    }
  },
  data() {
    return {
      prefixCls: prefixCls$2,
      currentVisible: this.visible,
      timeout: null
    };
  },
  watch: {
    visible(val) {
      this.currentVisible = val;
    },
    currentVisible(val) {
      if (val) {
        this.$refs.drop.update();
      } else {
        this.$refs.drop.destroy();
      }
      this.$emit("on-visible-change", val);
    }
  },
  methods: {
    handleClick() {
      if (this.trigger === "custom")
        return false;
      if (this.trigger !== "click") {
        return false;
      }
      const $parent = this.hasParent();
      if (!$parent)
        this.currentVisible = !this.currentVisible;
    },
    handleRightClick() {
      if (this.trigger === "custom")
        return false;
      if (this.trigger !== "contextMenu") {
        return false;
      }
      this.currentVisible = !this.currentVisible;
    },
    handleMouseenter() {
      if (this.trigger === "custom")
        return false;
      if (this.trigger !== "hover") {
        return false;
      }
      if (this.timeout)
        clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.currentVisible = true;
      }, 250);
    },
    handleMouseleave() {
      if (this.trigger === "custom")
        return false;
      if (this.trigger !== "hover") {
        return false;
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.currentVisible = false;
        }, 150);
      }
    },
    onClickoutside(e) {
      this.handleClose();
      this.handleRightClose();
      if (this.currentVisible)
        this.$emit("on-clickoutside", e);
    },
    handleClose() {
      if (this.trigger === "custom")
        return false;
      if (this.trigger !== "click") {
        return false;
      }
      this.currentVisible = false;
    },
    handleRightClose() {
      if (this.trigger === "custom")
        return false;
      if (this.trigger !== "contextMenu") {
        return false;
      }
      this.currentVisible = false;
    },
    hasParent() {
      const $parent = findComponentUpward(this, "Dropdown");
      if ($parent) {
        return $parent;
      } else {
        return false;
      }
    },
    handleHaschildClick() {
      nextTick(() => {
        if (this.trigger === "custom")
          return false;
        this.currentVisible = true;
      });
      const $parent = this.hasParent();
      if ($parent)
        $parent.handleHaschildClick();
    },
    handleItemClick(key) {
      if (this.stopPropagation)
        return;
      const $parent = this.hasParent();
      if ($parent)
        $parent.handleItemClick(key);
      else
        this.$emit("on-click", key);
    },
    handleHoverClick() {
      const $parent = this.hasParent();
      if ($parent) {
        nextTick(() => {
          if (this.trigger === "custom")
            return false;
          this.currentVisible = false;
        });
        $parent.handleHoverClick();
      } else {
        nextTick(() => {
          if (this.trigger === "custom")
            return false;
          this.currentVisible = false;
        });
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Drop = resolveComponent("Drop");
  const _directive_click_outside = resolveDirective("click-outside");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$data.prefixCls]
  }, _attrs, ssrGetDirectiveProps(_ctx, _directive_click_outside, $options.onClickoutside)))}><div class="${ssrRenderClass($options.relClasses)}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Drop, {
    ref: "drop",
    visible: $data.currentVisible,
    classes: $options.dropdownCls,
    placement: $props.placement,
    eventsEnabled: $props.eventsEnabled,
    boundariesElement: $props.boundariesElement,
    transfer: $props.transfer,
    "transition-name": "transition-drop",
    onMouseenter: $options.handleMouseenter,
    onMouseleave: $options.handleMouseleave
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "list", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "list")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/dropdown/dropdown.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "DropdownMenu"
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "ivu-dropdown-menu" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/dropdown/dropdown-menu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const ScrollbarMixins = {
  props: {
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    checkScrollBar() {
      if (!isClient)
        return;
      let fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) {
        const documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
      }
      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
      if (this.bodyIsOverflowing) {
        this.scrollBarWidth = getScrollBarSize();
      }
    },
    checkMaskInVisible() {
      let masks = isClient ? document.getElementsByClassName("ivu-modal-mask") || [] : [];
      return Array.from(masks).every((m) => m.style.display === "none" || m.classList.contains("fade-leave-to"));
    },
    setScrollBar() {
      if (isClient && this.bodyIsOverflowing && this.scrollBarWidth !== void 0) {
        document.body.style.paddingRight = `${this.scrollBarWidth}px`;
      }
    },
    resetScrollBar() {
      isClient && (document.body.style.paddingRight = "");
    },
    addScrollEffect() {
      if (!this.lockScroll)
        return;
      this.checkScrollBar();
      this.setScrollBar();
      isClient && (document.body.style.overflow = "hidden");
    },
    removeScrollEffect() {
      if (!this.lockScroll)
        return;
      if (isClient && this.checkMaskInVisible()) {
        document.body.style.overflow = "";
        this.resetScrollBar();
      }
    }
  }
};
const prefixCls$1 = "ivu-spin";
const _sfc_main$2 = {
  name: "Spin",
  mixins: [ScrollbarMixins],
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.size === "" ? "default" : global.$VIEWUI.size;
      }
    },
    fix: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showText: false,
      // used for $Spin
      visible: false
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls$1}`,
        {
          [`${prefixCls$1}-${this.size}`]: !!this.size,
          [`${prefixCls$1}-fix`]: this.fix,
          [`${prefixCls$1}-show-text`]: this.showText,
          [`${prefixCls$1}-fullscreen`]: this.fullscreen
        }
      ];
    },
    mainClasses() {
      return `${prefixCls$1}-main`;
    },
    dotClasses() {
      return `${prefixCls$1}-dot`;
    },
    textClasses() {
      return `${prefixCls$1}-text`;
    },
    fullscreenVisible() {
      if (this.fullscreen) {
        return this.visible;
      } else {
        return true;
      }
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.addScrollEffect();
      } else {
        this.removeScrollEffect();
      }
    }
  },
  mounted() {
    this.showText = !!this.$slots.default && this.$slots.default().some((item) => item.children && item.children.length);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($options.fullscreenVisible && $props.show) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: $options.classes }, _attrs))}><div class="${ssrRenderClass($options.mainClasses)}"><span class="${ssrRenderClass($options.dotClasses)}"></span><div class="${ssrRenderClass($options.textClasses)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/spin/spin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Spin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const on = function() {
  if (isClient && document.addEventListener) {
    return function(element, event, handler, useCapture = false) {
      if (element && event && handler) {
        element.addEventListener(event, handler, useCapture);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
}();
const off = function() {
  if (isClient && document.removeEventListener) {
    return function(element, event, handler, useCapture = false) {
      if (element && event) {
        element.removeEventListener(event, handler, useCapture);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
}();
function random(len = 32) {
  const $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const maxPos = $chars.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}
const newLine = "\r\n";
const appendLine = (content, row, { separator, quoted }) => {
  const line = row.map((data) => {
    if (!quoted)
      return data;
    data = typeof data === "string" ? data.replace(/"/g, '"') : data;
    return `"${data}"`;
  });
  content.push(line.join(separator));
};
const defaults = {
  separator: ",",
  quoted: false
};
function csv$1(columns, datas, options, noHeader = false) {
  options = Object.assign({}, defaults, options);
  let columnOrder;
  const content = [];
  const column = [];
  if (columns) {
    columnOrder = columns.map((v) => {
      if (typeof v === "string")
        return v;
      if (!noHeader) {
        column.push(typeof v.title !== "undefined" ? v.title : v.key);
      }
      return v.key;
    });
    if (column.length > 0)
      appendLine(content, column, options);
  } else {
    columnOrder = [];
    datas.forEach((v) => {
      if (!Array.isArray(v)) {
        columnOrder = columnOrder.concat(Object.keys(v));
      }
    });
    if (columnOrder.length > 0) {
      columnOrder = columnOrder.filter((value, index, self) => self.indexOf(value) === index);
      if (!noHeader)
        appendLine(content, columnOrder, options);
    }
  }
  if (Array.isArray(datas)) {
    datas.forEach((row) => {
      if (!Array.isArray(row)) {
        row = columnOrder.map((k) => typeof row[k] !== "undefined" ? row[k] : "");
      }
      appendLine(content, row, options);
    });
  }
  return content.join(newLine);
}
function has(browser) {
  const ua = navigator.userAgent;
  if (browser === "ie") {
    const isIE = ua.indexOf("compatible") > -1 && ua.indexOf("MSIE") > -1;
    if (isIE) {
      const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(ua);
      return parseFloat(RegExp["$1"]);
    } else {
      return false;
    }
  } else {
    return ua.indexOf(browser) > -1;
  }
}
const csv = {
  _isIE11() {
    let iev = 0;
    const ieold = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    const trident = !!navigator.userAgent.match(/Trident\/7.0/);
    const rv = navigator.userAgent.indexOf("rv:11.0");
    if (ieold) {
      iev = Number(RegExp.$1);
    }
    if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
      iev = 10;
    }
    if (trident && rv !== -1) {
      iev = 11;
    }
    return iev === 11;
  },
  _isEdge() {
    return /Edge/.test(navigator.userAgent);
  },
  _getDownloadUrl(text) {
    const BOM = "\uFEFF";
    if (isClient && window.Blob && window.URL && window.URL.createObjectURL) {
      const csvData = new Blob([BOM + text], { type: "text/csv" });
      return URL.createObjectURL(csvData);
    } else {
      return "data:attachment/csv;charset=utf-8," + BOM + encodeURIComponent(text);
    }
  },
  download(filename, text) {
    if (!isClient)
      return;
    if (has("ie") && has("ie") < 10) {
      const oWin = window.top.open("about:blank", "_blank");
      oWin.document.charset = "utf-8";
      oWin.document.write(text);
      oWin.document.close();
      oWin.document.execCommand("SaveAs", filename);
      oWin.close();
    } else if (has("ie") === 10 || this._isIE11() || this._isEdge()) {
      const BOM = "\uFEFF";
      const csvData = new Blob([BOM + text], { type: "text/csv" });
      navigator.msSaveBlob(csvData, filename);
    } else {
      const link = document.createElement("a");
      link.download = filename;
      link.href = this._getDownloadUrl(text);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
const convertColumnOrder = (columns, fixedType) => {
  let list = [];
  let other = [];
  columns.forEach((col) => {
    if (col.fixed && col.fixed === fixedType) {
      list.push(col);
    } else {
      other.push(col);
    }
  });
  return list.concat(other);
};
const getAllColumns = (cols, forTableHead = false) => {
  const columns = deepCopy(cols);
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      if (forTableHead)
        result.push(column);
      result.push.apply(result, getAllColumns(column.children, forTableHead));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (columns, fixedType = false) => {
  const originColumns = fixedType ? fixedType === "left" ? deepCopy(convertColumnOrder(columns, "left")) : deepCopy(convertColumnOrder(columns, "right")) : deepCopy(columns);
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns, true);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
const getRandomStr = function(len = 32) {
  const $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const maxPos = $chars.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
};
const prefixCls = "ivu-table";
let rowKey = 1;
let columnKey = 1;
const _sfc_main$1 = {
  name: "Table",
  mixins: [Locale],
  components: { tableHead, tableBody: _sfc_main$7, tableSummary, Spin, Dropdown, DropdownMenu },
  emits: ["on-current-change", "on-row-click", "on-row-dblclick", "on-contextmenu", "on-select", "on-select-cancel", "on-selection-change", "on-expand", "on-expand-tree", "on-select-all", "on-select-all-cancel", "on-sort-change", "on-filter-change", "on-drag-drop", "on-cell-click", "on-column-width-resize"],
  provide() {
    return {
      TableInstance: this
    };
  },
  inject: {
    TabsInstance: {
      default: null
    },
    ModalInstance: {
      default: null
    },
    DrawerInstance: {
      default: null
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default() {
        const global = getCurrentInstance().appContext.config.globalProperties;
        return !global.$VIEWUI || global.$VIEWUI.size === "" ? "default" : global.$VIEWUI.size;
      }
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    // 3.4.0
    maxHeight: {
      type: [Number, String]
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    highlightRow: {
      type: Boolean,
      default: false
    },
    rowClassName: {
      type: Function,
      default() {
        return "";
      }
    },
    context: {
      type: Object
    },
    noDataText: {
      type: String
    },
    noFilteredDataText: {
      type: String
    },
    disabledHover: {
      type: Boolean
    },
    loading: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    tooltipTheme: {
      validator(value) {
        return oneOf(value, ["dark", "light"]);
      },
      default: "dark"
    },
    // 4.5.0
    tooltipMaxWidth: {
      type: Number,
      default: 300
    },
    // #5380 开启后，:key 强制更新，否则使用 index
    // 4.1 开始支持 String，指定具体字段
    rowKey: {
      type: [Boolean, String],
      default: false
    },
    // 4.0.0
    spanMethod: {
      type: Function
    },
    // 4.0.0
    showSummary: {
      type: Boolean,
      default: false
    },
    // 4.0.0
    summaryMethod: {
      type: Function
    },
    // 4.0.0
    sumText: {
      type: String
    },
    // 4.1.0
    indentSize: {
      type: Number,
      default: 16
    },
    // 4.1.0
    loadData: {
      type: Function
    },
    // 4.4.0
    updateShowChildren: {
      type: Boolean,
      default: false
    },
    // 4.1.0
    contextMenu: {
      type: Boolean,
      default: false
    },
    // 4.2.0
    showContextMenu: {
      type: Boolean,
      default: false
    },
    // 4.7.0
    fixedShadow: {
      validator(value) {
        return oneOf(value, ["auto", "show", "hide"]);
      },
      default: "show"
    },
    autoCloseContextmenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const colsWithId = this.makeColumnsId(this.columns);
    return {
      ready: false,
      tableWidth: 0,
      columnsWidth: {},
      prefixCls,
      compiledUids: [],
      objData: this.makeObjData(),
      // checkbox or highlight-row
      rebuildData: [],
      // for sort or filter
      cloneColumns: this.makeColumns(colsWithId),
      columnRows: this.makeColumnRows(false, colsWithId),
      leftFixedColumnRows: this.makeColumnRows("left", colsWithId),
      rightFixedColumnRows: this.makeColumnRows("right", colsWithId),
      allColumns: getAllColumns(colsWithId),
      // for multiple table-head, get columns that have no children
      showSlotHeader: true,
      showSlotFooter: true,
      bodyHeight: 0,
      scrollBarWidth: getScrollBarSize(),
      currentContext: this.context,
      cloneData: deepCopy(this.data),
      // when Cell has a button to delete row data, clickCurrentRow will throw an error, so clone a data
      showVerticalScrollBar: false,
      showHorizontalScrollBar: false,
      headerWidth: 0,
      headerHeight: 0,
      showResizeLine: false,
      contextMenuVisible: false,
      contextMenuStyles: {
        top: 0,
        left: 0
      },
      scrollOnTheLeft: false,
      scrollOnTheRight: false,
      id: random(6)
    };
  },
  computed: {
    localeNoDataText() {
      if (this.noDataText === void 0) {
        return this.t("i.table.noDataText");
      } else {
        return this.noDataText;
      }
    },
    localeNoFilteredDataText() {
      if (this.noFilteredDataText === void 0) {
        return this.t("i.table.noFilteredDataText");
      } else {
        return this.noFilteredDataText;
      }
    },
    localeSumText() {
      if (this.sumText === void 0) {
        return this.t("i.table.sumText");
      } else {
        return this.sumText;
      }
    },
    wrapClasses() {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-hide`]: !this.ready,
          [`${prefixCls}-with-header`]: this.showSlotHeader,
          [`${prefixCls}-with-footer`]: this.showSlotFooter,
          [`${prefixCls}-with-summary`]: this.showSummary,
          [`${prefixCls}-wrapper-with-border`]: this.border
        }
      ];
    },
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-border`]: this.border,
          [`${prefixCls}-stripe`]: this.stripe,
          [`${prefixCls}-with-fixed-top`]: !!this.height
        }
      ];
    },
    fixedTableClasses() {
      return [
        `${prefixCls}-fixed`,
        {
          [`${prefixCls}-fixed-shadow`]: this.fixedShadow === "show" || this.fixedShadow === "auto" && !this.scrollOnTheLeft
        }
      ];
    },
    fixedRightTableClasses() {
      return [
        `${prefixCls}-fixed-right`,
        {
          [`${prefixCls}-fixed-shadow`]: this.fixedShadow === "show" || this.fixedShadow === "auto" && !this.scrollOnTheRight
        }
      ];
    },
    fixedHeaderClasses() {
      return [
        `${prefixCls}-fixed-header`,
        {
          [`${prefixCls}-fixed-header-with-empty`]: !this.rebuildData.length
        }
      ];
    },
    styles() {
      let style = {};
      let summaryHeight = 0;
      if (this.showSummary) {
        if (this.size === "small")
          summaryHeight = 40;
        else if (this.size === "large")
          summaryHeight = 60;
        else
          summaryHeight = 48;
      }
      if (this.height) {
        let height = parseInt(this.height) + summaryHeight;
        style.height = `${height}px`;
      }
      if (this.maxHeight) {
        const maxHeight = parseInt(this.maxHeight) + summaryHeight;
        style.maxHeight = `${maxHeight}px`;
      }
      if (this.width)
        style.width = `${this.width}px`;
      return style;
    },
    tableStyle() {
      let style = {};
      if (this.tableWidth !== 0) {
        let width = "";
        if (this.bodyHeight === 0) {
          width = this.tableWidth;
        } else {
          width = this.tableWidth - (this.showVerticalScrollBar ? this.scrollBarWidth : 0);
        }
        style.width = `${width}px`;
      }
      return style;
    },
    tableHeaderStyle() {
      let style = {};
      if (this.tableWidth !== 0) {
        let width = "";
        width = this.tableWidth;
        style.width = `${width}px`;
      }
      return style;
    },
    fixedTableStyle() {
      let style = {};
      let width = 0;
      this.leftFixedColumns.forEach((col) => {
        if (col.fixed && col.fixed === "left")
          width += col._width;
      });
      style.width = `${width}px`;
      return style;
    },
    fixedRightTableStyle() {
      let style = {};
      let width = 0;
      this.rightFixedColumns.forEach((col) => {
        if (col.fixed && col.fixed === "right")
          width += col._width;
      });
      style.width = `${width}px`;
      style.right = `${this.showVerticalScrollBar ? this.scrollBarWidth : 0}px`;
      return style;
    },
    fixedRightHeaderStyle() {
      let style = {};
      let width = 0;
      let height = this.headerHeight + 1;
      if (this.showVerticalScrollBar) {
        width = this.scrollBarWidth;
      }
      style.width = `${width}px`;
      style.height = `${height}px`;
      return style;
    },
    bodyStyle() {
      let style = {};
      if (this.bodyHeight !== 0) {
        const height = this.bodyHeight;
        if (this.height) {
          style.height = `${height}px`;
        } else if (this.maxHeight) {
          style.maxHeight = `${height}px`;
        }
      }
      return style;
    },
    fixedBodyStyle() {
      let style = {};
      if (this.bodyHeight !== 0) {
        let height = this.bodyHeight - (this.showHorizontalScrollBar ? this.scrollBarWidth : 0);
        const bodyHeight = this.showHorizontalScrollBar ? `${height}px` : `${height - 1}px`;
        if (this.height)
          style.height = bodyHeight;
        else if (this.maxHeight)
          style.maxHeight = bodyHeight;
      }
      return style;
    },
    leftFixedColumns() {
      return convertColumnOrder(this.cloneColumns, "left");
    },
    rightFixedColumns() {
      return convertColumnOrder(this.cloneColumns, "right");
    },
    isLeftFixed() {
      return this.columns.some((col) => col.fixed && col.fixed === "left");
    },
    isRightFixed() {
      return this.columns.some((col) => col.fixed && col.fixed === "right");
    },
    // for summary data
    summaryData() {
      if (!this.showSummary)
        return {};
      let sums = {};
      if (this.summaryMethod) {
        sums = this.summaryMethod({ columns: this.cloneColumns, data: this.rebuildData });
      } else {
        this.cloneColumns.forEach((column, index) => {
          const key = column.key;
          if (index === 0) {
            sums[key] = {
              key: column.key,
              value: this.localeSumText
            };
            return;
          }
          const values = this.rebuildData.map((item) => Number(item[column.key]));
          const precisions = [];
          let notNumber = true;
          values.forEach((value) => {
            if (!isNaN(value)) {
              notNumber = false;
              let decimal = ("" + value).split(".")[1];
              precisions.push(decimal ? decimal.length : 0);
            }
          });
          const precision = Math.max.apply(null, precisions);
          if (!notNumber) {
            const currentValue = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
              } else {
                return prev;
              }
            }, 0);
            sums[key] = {
              key: column.key,
              value: currentValue
            };
          } else {
            sums[key] = {
              key: column.key,
              value: ""
            };
          }
        });
      }
      return sums;
    }
  },
  methods: {
    rowClsName(index) {
      return this.rowClassName(this.data[index], index);
    },
    handleResize() {
      let tableWidth = this.$el.offsetWidth - 1;
      let columnsWidth = {};
      let sumMinWidth = 0;
      let hasWidthColumns = [];
      let noWidthColumns = [];
      let noMaxWidthColumns = [];
      this.cloneColumns.forEach((col) => {
        if (col.width) {
          hasWidthColumns.push(col);
        } else {
          noWidthColumns.push(col);
          if (col.minWidth) {
            sumMinWidth += col.minWidth;
          }
          if (col.maxWidth)
            ;
          else {
            noMaxWidthColumns.push(col);
          }
        }
        col._width = null;
      });
      let unUsableWidth = hasWidthColumns.map((cell) => cell.width).reduce((a, b) => a + b, 0);
      let usableWidth = tableWidth - unUsableWidth - sumMinWidth - (this.showVerticalScrollBar ? this.scrollBarWidth : 0) - 1;
      let usableLength = noWidthColumns.length;
      let columnWidth = 0;
      if (usableWidth > 0 && usableLength > 0) {
        columnWidth = parseInt(usableWidth / usableLength);
      }
      for (let i = 0; i < this.cloneColumns.length; i++) {
        const column = this.cloneColumns[i];
        let width = columnWidth + (column.minWidth ? column.minWidth : 0);
        if (column.width) {
          width = column.width;
        } else {
          if (column._width) {
            width = column._width;
          } else {
            if (column.minWidth > width) {
              width = column.minWidth;
            } else if (column.maxWidth < width) {
              width = column.maxWidth;
            }
            if (usableWidth > 0) {
              usableWidth -= width - (column.minWidth ? column.minWidth : 0);
              usableLength--;
              if (usableLength > 0) {
                columnWidth = parseInt(usableWidth / usableLength);
              } else {
                columnWidth = 0;
              }
            } else {
              columnWidth = 0;
            }
          }
        }
        column._width = width;
        columnsWidth[column._index] = {
          width
        };
      }
      if (usableWidth > 0) {
        usableLength = noMaxWidthColumns.length;
        columnWidth = parseInt(usableWidth / usableLength);
        for (let i = 0; i < noMaxWidthColumns.length; i++) {
          const column = noMaxWidthColumns[i];
          let width = column._width + columnWidth;
          if (usableLength > 1) {
            usableLength--;
            usableWidth -= columnWidth;
            columnWidth = parseInt(usableWidth / usableLength);
          } else {
            columnWidth = 0;
          }
          column._width = width;
          columnsWidth[column._index] = {
            width
          };
        }
      }
      this.tableWidth = this.cloneColumns.map((cell) => cell._width).reduce((a, b) => a + b, 0) + (this.showVerticalScrollBar ? this.scrollBarWidth : 0) + 1;
      this.columnsWidth = columnsWidth;
      this.fixedHeader();
      if (this.fixedShadow === "auto") {
        nextTick(() => {
          const $body = this.$refs.body;
          this.scrollOnTheLeft = $body.scrollLeft === 0;
          this.scrollOnTheRight = $body.scrollWidth === $body.scrollLeft + $body.clientWidth;
        });
      }
    },
    handleMouseIn(_index, rowKey2) {
      if (this.disabledHover)
        return;
      const objData = rowKey2 ? this.getDataByRowKey(rowKey2) : this.objData[_index];
      if (objData._isHover)
        return;
      objData._isHover = true;
    },
    handleMouseOut(_index, rowKey2) {
      if (this.disabledHover)
        return;
      const objData = rowKey2 ? this.getDataByRowKey(rowKey2) : this.objData[_index];
      objData._isHover = false;
    },
    // 通用处理 highlightCurrentRow 和 clearCurrentRow
    handleCurrentRow(type, _index, rowKey2) {
      const objData = rowKey2 ? this.getDataByRowKey(rowKey2) : this.objData[_index];
      let oldData = null;
      let oldIndex = -1;
      for (let i in this.objData) {
        if (this.objData[i]._isHighlight) {
          oldIndex = parseInt(i);
          this.objData[i]._isHighlight = false;
          break;
        } else if (this.objData[i].children && this.objData[i].children.length) {
          const resetData = this.handleResetChildrenRow(this.objData[i]);
          if (resetData)
            oldData = JSON.parse(JSON.stringify(resetData));
        }
      }
      if (type === "highlight")
        objData._isHighlight = true;
      if (oldIndex >= 0) {
        oldData = JSON.parse(JSON.stringify(this.cloneData[oldIndex]));
      }
      const newData = type === "highlight" ? rowKey2 ? JSON.parse(JSON.stringify(this.getBaseDataByRowKey(rowKey2))) : JSON.parse(JSON.stringify(this.cloneData[_index])) : null;
      this.$emit("on-current-change", newData, oldData);
    },
    handleResetChildrenRow(objData) {
      let data = null;
      if (objData.children && objData.children.length) {
        for (let i = 0; i < objData.children.length; i++) {
          const item = objData.children[i];
          if (item._isHighlight) {
            item._isHighlight = false;
            data = item;
            break;
          } else if (item.children && item.children.length) {
            data = this.handleResetChildrenRow(item);
          }
        }
      }
      return data;
    },
    highlightCurrentRow(_index, rowKey2) {
      const objData = rowKey2 ? this.getDataByRowKey(rowKey2) : this.objData[_index];
      if (!this.highlightRow || objData._isHighlight)
        return;
      this.handleCurrentRow("highlight", _index, rowKey2);
    },
    clearCurrentRow() {
      if (!this.highlightRow)
        return;
      this.handleCurrentRow("clear");
    },
    clickCurrentRow(_index, rowKey2) {
      this.highlightCurrentRow(_index, rowKey2);
      if (rowKey2) {
        this.$emit("on-row-click", JSON.parse(JSON.stringify(this.getBaseDataByRowKey(rowKey2))));
      } else {
        this.$emit("on-row-click", JSON.parse(JSON.stringify(this.cloneData[_index])), _index);
      }
    },
    dblclickCurrentRow(_index, rowKey2) {
      this.highlightCurrentRow(_index, rowKey2);
      if (rowKey2) {
        this.$emit("on-row-dblclick", JSON.parse(JSON.stringify(this.getBaseDataByRowKey(rowKey2))));
      } else {
        this.$emit("on-row-dblclick", JSON.parse(JSON.stringify(this.cloneData[_index])), _index);
      }
    },
    contextmenuCurrentRow(_index, rowKey2, event) {
      if (this.contextMenuVisible)
        this.handleClickContextMenuOutside();
      nextTick(() => {
        const $TableWrap = this.$refs.tableWrap;
        const TableBounding = $TableWrap.getBoundingClientRect();
        const position = {
          left: `${event.clientX - TableBounding.left}px`,
          top: `${event.clientY - TableBounding.top}px`
        };
        this.contextMenuStyles = position;
        this.contextMenuVisible = true;
        if (rowKey2) {
          this.$emit("on-contextmenu", JSON.parse(JSON.stringify(this.getBaseDataByRowKey(rowKey2))), event, position);
        } else {
          this.$emit("on-contextmenu", JSON.parse(JSON.stringify(this.cloneData[_index])), event, position);
        }
      });
    },
    getSelection() {
      let selectionIndexes = [];
      let selectionRowKeys = [];
      for (let i in this.objData) {
        const objData = this.objData[i];
        if (objData._isChecked)
          selectionIndexes.push(parseInt(i));
        if (objData.children && objData.children.length) {
          selectionRowKeys = selectionRowKeys.concat(this.getSelectionChildrenRowKeys(objData, selectionRowKeys));
        }
      }
      selectionRowKeys = [...new Set(selectionRowKeys)];
      let selection = [];
      this.data.forEach((item, index) => {
        if (selectionIndexes.indexOf(index) > -1) {
          selection = selection.concat(item);
        }
        if (item.children && item.children.length && selectionRowKeys.length) {
          selection = selection.concat(this.getSelectionChildren(item, selection, selectionRowKeys));
        }
      });
      selection = [...new Set(selection)];
      return JSON.parse(JSON.stringify(selection));
    },
    getSelectionChildrenRowKeys(objData, selectionRowKeys) {
      if (objData.children && objData.children.length) {
        objData.children.forEach((item) => {
          if (item._isChecked)
            selectionRowKeys.push(item._rowKey);
          if (item.children && item.children.length) {
            selectionRowKeys = selectionRowKeys.concat(this.getSelectionChildrenRowKeys(item, selectionRowKeys));
          }
        });
      }
      return selectionRowKeys;
    },
    getSelectionChildren(data, selection, selectionRowKeys) {
      if (data.children && data.children.length) {
        data.children.forEach((item) => {
          if (selectionRowKeys.indexOf(item[this.rowKey]) > -1) {
            selection = selection.concat(item);
          }
          if (item.children && item.children.length) {
            selection = selection.concat(this.getSelectionChildren(item, selection, selectionRowKeys));
          }
        });
      }
      return selection;
    },
    toggleSelect(_index, rowKey2) {
      let data = {};
      if (rowKey2) {
        data = this.getDataByRowKey(rowKey2);
      } else {
        for (let i in this.objData) {
          if (parseInt(i) === _index) {
            data = this.objData[i];
            break;
          }
        }
      }
      const status = !data._isChecked;
      data._isChecked = status;
      const selection = this.getSelection();
      const selectedData = rowKey2 ? this.getBaseDataByRowKey(rowKey2, this.data) : this.data[_index];
      this.$emit(status ? "on-select" : "on-select-cancel", selection, JSON.parse(JSON.stringify(selectedData)));
      this.$emit("on-selection-change", selection);
    },
    toggleExpand(_index) {
      let data = {};
      for (let i in this.objData) {
        if (parseInt(i) === _index) {
          data = this.objData[i];
          break;
        }
      }
      const status = !data._isExpanded;
      this.objData[_index]._isExpanded = status;
      this.$emit("on-expand", JSON.parse(JSON.stringify(this.cloneData[_index])), status);
      if (this.height || this.maxHeight) {
        nextTick(() => this.fixedBody());
      }
    },
    toggleTree(rowKey2) {
      const data = this.getDataByRowKey(rowKey2);
      if ("_loading" in data && data._loading)
        return;
      if ("_loading" in data && !data._loading && data.children.length === 0) {
        const sourceData = this.getBaseDataByRowKey(rowKey2, this.data);
        sourceData._loading = true;
        this.loadData(sourceData, (children) => {
          sourceData._loading = false;
          if (children.length) {
            sourceData.children = children;
            nextTick(() => {
              const newData = this.getDataByRowKey(rowKey2);
              newData._isShowChildren = !newData._isShowChildren;
              this.updateDataStatus(rowKey2, "_showChildren", newData._isShowChildren);
            });
          }
        });
        return;
      }
      data._isShowChildren = !data._isShowChildren;
      if (this.updateShowChildren)
        this.updateDataStatus(rowKey2, "_showChildren", data._isShowChildren);
      this.$emit("on-expand-tree", rowKey2, data._isShowChildren);
    },
    /**
     * @description 当修改某内置属性，如 _isShowChildren 时，因当将原 data 对应 _showChildren 也修改，否则修改 data 时，状态会重置
     * @param rowKey rowKey
     * @param key 原数据对应的字段
     * @param value 修改的值
     * */
    // todo 单选、多选等状态可能也需要更新原数据
    updateDataStatus(rowKey2, key, value) {
      const data = this.getBaseDataByRowKey(rowKey2, this.data);
      data[key] = value;
    },
    getDataByRowKey(rowKey2, objData = this.objData) {
      let data = null;
      for (let i in objData) {
        const thisData = objData[i];
        if (thisData._rowKey === rowKey2) {
          data = thisData;
          break;
        } else if (thisData.children && thisData.children.length) {
          data = this.getChildrenByRowKey(rowKey2, thisData);
          if (data) {
            break;
          }
        }
      }
      return data;
    },
    getChildrenByRowKey(rowKey2, objData) {
      let data = null;
      if (objData.children && objData.children.length) {
        for (let i = 0; i < objData.children.length; i++) {
          const item = objData.children[i];
          if (item._rowKey === rowKey2) {
            data = item;
            break;
          } else if (item.children && item.children.length) {
            data = this.getChildrenByRowKey(rowKey2, item);
            if (data) {
              break;
            }
          }
        }
      }
      return data;
    },
    getBaseDataByRowKey(rowKey2, sourceData = this.cloneData) {
      let data = null;
      for (let i = 0; i < sourceData.length; i++) {
        const thisData = sourceData[i];
        if (thisData[this.rowKey] === rowKey2) {
          data = thisData;
          break;
        } else if (thisData.children && thisData.children.length) {
          data = this.getChildrenDataByRowKey(rowKey2, thisData);
          if (data && data[this.rowKey] === rowKey2)
            return data;
        }
      }
      return data;
    },
    getChildrenDataByRowKey(rowKey2, cloneData) {
      let data = null;
      if (cloneData.children && cloneData.children.length) {
        for (let i = 0; i < cloneData.children.length; i++) {
          const item = cloneData.children[i];
          if (item[this.rowKey] === rowKey2) {
            data = item;
            break;
          } else if (item.children && item.children.length) {
            data = this.getChildrenDataByRowKey(rowKey2, item);
            if (data) {
              break;
            }
          }
        }
      }
      return data;
    },
    selectAll(status) {
      for (const data of this.rebuildData) {
        const objData = this.objData[data._index];
        if (!objData._isDisabled) {
          objData._isChecked = status;
        }
        if (data.children && data.children.length) {
          this.selectAllChildren(objData, status);
        }
      }
      const selection = this.getSelection();
      if (status) {
        this.$emit("on-select-all", selection);
      } else {
        this.$emit("on-select-all-cancel", selection);
      }
      this.$emit("on-selection-change", selection);
    },
    selectAllChildren(data, status) {
      if (data.children && data.children.length) {
        data.children.map((item) => {
          if (!item._isDisabled) {
            item._isChecked = status;
          }
          if (item.children && item.children.length) {
            this.selectAllChildren(item, status);
          }
        });
      }
    },
    fixedHeader() {
      if (this.height || this.maxHeight) {
        nextTick(() => {
          const titleHeight = parseInt(getStyle(this.$refs.title, "height")) || 0;
          const headerHeight = parseInt(getStyle(this.$refs.header, "height")) || 0;
          const footerHeight = parseInt(getStyle(this.$refs.footer, "height")) || 0;
          if (this.height) {
            this.bodyHeight = this.height - titleHeight - headerHeight - footerHeight;
          } else if (this.maxHeight) {
            this.bodyHeight = this.maxHeight - titleHeight - headerHeight - footerHeight;
          }
          nextTick(() => this.fixedBody());
        });
      } else {
        this.bodyHeight = 0;
        nextTick(() => this.fixedBody());
      }
    },
    fixedBody() {
      if (this.$refs.header) {
        this.headerWidth = this.$refs.header.children[0].offsetWidth;
        this.headerHeight = this.$refs.header.children[0].offsetHeight;
      }
      if (!this.$refs.tbody || !this.data || this.data.length === 0) {
        this.showVerticalScrollBar = false;
      } else {
        let bodyContentEl = this.$refs.tbody.$el;
        let bodyEl = bodyContentEl.parentElement;
        let bodyContentHeight = bodyContentEl.offsetHeight;
        let bodyHeight = bodyEl.offsetHeight;
        this.showHorizontalScrollBar = bodyEl.offsetWidth < bodyContentEl.offsetWidth + (this.showVerticalScrollBar ? this.scrollBarWidth : 0);
        this.showVerticalScrollBar = this.bodyHeight ? bodyHeight - (this.showHorizontalScrollBar ? this.scrollBarWidth : 0) < bodyContentHeight : false;
        if (this.showVerticalScrollBar) {
          bodyEl.classList.add(this.prefixCls + "-overflowY");
        } else {
          bodyEl.classList.remove(this.prefixCls + "-overflowY");
        }
        if (this.showHorizontalScrollBar) {
          bodyEl.classList.add(this.prefixCls + "-overflowX");
        } else {
          bodyEl.classList.remove(this.prefixCls + "-overflowX");
        }
      }
    },
    hideColumnFilter() {
      this.cloneColumns.forEach((col) => col._filterVisible = false);
    },
    handleBodyScroll(event) {
      this.scrollOnTheLeft = event.target.scrollLeft === 0;
      this.scrollOnTheRight = event.target.scrollWidth === event.target.scrollLeft + event.target.clientWidth;
      if (this.showHeader)
        this.$refs.header.scrollLeft = event.target.scrollLeft;
      if (this.isLeftFixed)
        this.$refs.fixedBody.scrollTop = event.target.scrollTop;
      if (this.isRightFixed)
        this.$refs.fixedRightBody.scrollTop = event.target.scrollTop;
      if (this.showSummary && this.$refs.summary)
        this.$refs.summary.$el.scrollLeft = event.target.scrollLeft;
      this.hideColumnFilter();
    },
    handleFixedMousewheel(event) {
      let deltaY = event.deltaY;
      if (!deltaY && event.detail) {
        deltaY = event.detail * 40;
      }
      if (!deltaY && event.wheelDeltaY) {
        deltaY = -event.wheelDeltaY;
      }
      if (!deltaY && event.wheelDelta) {
        deltaY = -event.wheelDelta;
      }
      if (!deltaY)
        return;
      const body = this.$refs.body;
      const currentScrollTop = body.scrollTop;
      if (deltaY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (deltaY > 0 && body.scrollHeight - body.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      let step = 0;
      let timeId = setInterval(() => {
        step += 5;
        if (deltaY > 0) {
          body.scrollTop += 2;
        } else {
          body.scrollTop -= 2;
        }
        if (step >= Math.abs(deltaY)) {
          clearInterval(timeId);
        }
      }, 5);
    },
    handleMouseWheel(event) {
      const deltaX = event.deltaX;
      const $body = this.$refs.body;
      if (deltaX > 0) {
        $body.scrollLeft = $body.scrollLeft + 10;
      } else {
        $body.scrollLeft = $body.scrollLeft - 10;
      }
    },
    sortData(data, type, index) {
      const key = this.cloneColumns[index].key;
      data.sort((a, b) => {
        if (this.cloneColumns[index].sortMethod) {
          return this.cloneColumns[index].sortMethod(a[key], b[key], type);
        } else {
          if (type === "asc") {
            return a[key] > b[key] ? 1 : -1;
          } else if (type === "desc") {
            return a[key] < b[key] ? 1 : -1;
          }
        }
      });
      for (let i = 0; i < data.length; i++) {
        if (data[i].children && data[i].children.length) {
          data[i].children = this.sortData(data[i].children, type, index);
        }
      }
      return data;
    },
    handleSort(_index, type) {
      const index = this.GetOriginalIndex(_index);
      this.cloneColumns.forEach((col) => col._sortType = "normal");
      const key = this.cloneColumns[index].key;
      if (this.cloneColumns[index].sortable !== "custom") {
        if (type === "normal") {
          this.rebuildData = this.makeDataWithFilter();
        } else {
          this.rebuildData = this.sortData(this.rebuildData, type, index);
        }
      }
      this.cloneColumns[index]._sortType = type;
      this.$emit("on-sort-change", {
        column: JSON.parse(JSON.stringify(this.allColumns[this.cloneColumns[index]._index])),
        key,
        order: type
      });
    },
    handleFilterHide(index) {
      if (!this.cloneColumns[index]._isFiltered)
        this.cloneColumns[index]._filterChecked = [];
    },
    filterData(data, column) {
      return data.filter((row) => {
        if (typeof column.filterRemote === "function")
          return true;
        let status = !column._filterChecked.length;
        for (let i = 0; i < column._filterChecked.length; i++) {
          status = column.filterMethod(column._filterChecked[i], row);
          if (status)
            break;
        }
        return status;
      });
    },
    filterOtherData(data, index) {
      let column = this.cloneColumns[index];
      if (typeof column.filterRemote === "function") {
        column.filterRemote.call(this.$parent, column._filterChecked, column.key, column);
      }
      this.cloneColumns.forEach((col, colIndex) => {
        if (colIndex !== index) {
          data = this.filterData(data, col);
        }
      });
      return data;
    },
    handleFilter(index) {
      const column = this.cloneColumns[index];
      let filterData = this.makeDataWithSort();
      filterData = this.filterOtherData(filterData, index);
      this.rebuildData = this.filterData(filterData, column);
      this.cloneColumns[index]._isFiltered = true;
      this.cloneColumns[index]._filterVisible = false;
      this.$emit("on-filter-change", column);
    },
    /**
     * #2832
     * 应该区分当前表头的 column 是左固定还是右固定
     * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
     * 左固定和右固定，要区分对待
     * 所以，此方法用来获取正确的 index
     * */
    GetOriginalIndex(_index) {
      return this.cloneColumns.findIndex((item) => item._index === _index);
    },
    handleFilterSelect(_index, value) {
      const index = this.GetOriginalIndex(_index);
      this.cloneColumns[index]._filterChecked = [value];
      this.handleFilter(index);
    },
    handleFilterReset(_index) {
      const index = this.GetOriginalIndex(_index);
      this.cloneColumns[index]._isFiltered = false;
      this.cloneColumns[index]._filterVisible = false;
      this.cloneColumns[index]._filterChecked = [];
      let filterData = this.makeDataWithSort();
      filterData = this.filterOtherData(filterData, index);
      this.rebuildData = filterData;
      this.$emit("on-filter-change", this.cloneColumns[index]);
    },
    makeData() {
      let data = deepCopy(this.data);
      data.forEach((row, index) => {
        row._index = index;
        row._rowKey = typeof this.rowKey === "string" ? row[this.rowKey] : rowKey++;
        if (row.children && row.children.length) {
          row.children = this.makeChildrenData(row);
        }
      });
      return data;
    },
    makeChildrenData(data) {
      if (data.children && data.children.length) {
        return data.children.map((row, index) => {
          const newRow = deepCopy(row);
          newRow._index = index;
          newRow._rowKey = typeof this.rowKey === "string" ? newRow[this.rowKey] : rowKey++;
          if (newRow.children && newRow.children.length) {
            newRow.children = this.makeChildrenData(newRow);
          }
          return newRow;
        });
      } else {
        return data;
      }
    },
    makeDataWithSort() {
      let data = this.makeData();
      let sortType = "normal";
      let sortIndex = -1;
      let isCustom = false;
      for (let i = 0; i < this.cloneColumns.length; i++) {
        if (this.cloneColumns[i]._sortType !== "normal") {
          sortType = this.cloneColumns[i]._sortType;
          sortIndex = i;
          isCustom = this.cloneColumns[i].sortable === "custom";
          break;
        }
      }
      if (sortType !== "normal" && !isCustom)
        data = this.sortData(data, sortType, sortIndex);
      return data;
    },
    makeDataWithFilter() {
      let data = this.makeData();
      this.cloneColumns.forEach((col) => data = this.filterData(data, col));
      return data;
    },
    makeDataWithSortAndFilter() {
      let data = this.makeDataWithSort();
      this.cloneColumns.forEach((col) => data = this.filterData(data, col));
      return data;
    },
    makeObjBaseData(row) {
      const newRow = deepCopy(row);
      if (typeof this.rowKey === "string") {
        newRow._rowKey = newRow[this.rowKey];
      }
      newRow._isHover = false;
      if (newRow._disabled) {
        newRow._isDisabled = newRow._disabled;
      } else {
        newRow._isDisabled = false;
      }
      if (newRow._checked) {
        newRow._isChecked = newRow._checked;
      } else {
        newRow._isChecked = false;
      }
      if (newRow._expanded) {
        newRow._isExpanded = newRow._expanded;
      } else {
        newRow._isExpanded = false;
      }
      if (newRow._highlight) {
        newRow._isHighlight = newRow._highlight;
      } else {
        newRow._isHighlight = false;
      }
      return newRow;
    },
    makeObjData() {
      let data = {};
      this.data.forEach((row, index) => {
        const newRow = this.makeObjBaseData(row);
        if (newRow.children && newRow.children.length) {
          if (newRow._showChildren) {
            newRow._isShowChildren = newRow._showChildren;
          } else {
            newRow._isShowChildren = false;
          }
          newRow.children = this.makeChildrenObjData(newRow);
        }
        data[index] = newRow;
      });
      return data;
    },
    makeChildrenObjData(data) {
      if (data.children && data.children.length) {
        return data.children.map((row) => {
          const newRow = this.makeObjBaseData(row);
          if (newRow._showChildren) {
            newRow._isShowChildren = newRow._showChildren;
          } else {
            newRow._isShowChildren = false;
          }
          if (newRow.children && newRow.children.length) {
            newRow.children = this.makeChildrenObjData(newRow);
          }
          return newRow;
        });
      } else {
        return data;
      }
    },
    // 修改列，设置一个隐藏的 id，便于后面的多级表头寻找对应的列，否则找不到
    makeColumnsId(columns) {
      const cloneColumns = deepCopy(columns);
      return cloneColumns.map((item) => {
        if ("children" in item)
          this.makeColumnsId(item.children);
        item.__id = getRandomStr(6);
        return item;
      });
    },
    makeColumns(cols) {
      let columns = deepCopy(getAllColumns(cols));
      let left = [];
      let right = [];
      let center = [];
      columns.forEach((column, index) => {
        column._index = index;
        column._columnKey = columnKey++;
        column.width = parseInt(column.width);
        column._width = column.width ? column.width : "";
        column._sortType = "normal";
        column._filterVisible = false;
        column._isFiltered = false;
        column._filterChecked = [];
        if ("filterMultiple" in column) {
          column._filterMultiple = column.filterMultiple;
        } else {
          column._filterMultiple = true;
        }
        if ("filteredValue" in column) {
          column._filterChecked = column.filteredValue;
          column._isFiltered = true;
        }
        if ("sortType" in column) {
          column._sortType = column.sortType;
        }
        if (column.fixed && column.fixed === "left") {
          left.push(column);
        } else if (column.fixed && column.fixed === "right") {
          right.push(column);
        } else {
          center.push(column);
        }
      });
      return left.concat(center).concat(right);
    },
    // create a multiple table-head
    makeColumnRows(fixedType, cols) {
      return convertToRows(cols, fixedType);
    },
    exportCsv(params) {
      if (params.filename) {
        if (params.filename.indexOf(".csv") === -1) {
          params.filename += ".csv";
        }
      } else {
        params.filename = "table.csv";
      }
      let columns = [];
      let datas = [];
      if (params.columns && params.data) {
        columns = params.columns;
        datas = params.data;
      } else {
        columns = this.allColumns;
        if (!("original" in params))
          params.original = true;
        datas = params.original ? this.data : this.rebuildData;
      }
      let noHeader = false;
      if ("noHeader" in params)
        noHeader = params.noHeader;
      const data = csv$1(columns, datas, params, noHeader);
      if (params.callback)
        params.callback(data);
      else
        csv.download(params.filename, data);
    },
    dragAndDrop(a, b) {
      this.$emit("on-drag-drop", a, b);
    },
    handleClickContextMenuOutside() {
      this.contextMenuVisible = false;
    },
    handleOnVisibleChange(val) {
      if (val) {
        nextTick(() => {
          this.handleResize();
        });
      }
    },
    addTable(instance) {
      const target = this[instance];
      if (!target)
        return;
      if (!target.tableList)
        target.tableList = [];
      target.tableList.push({
        id: this.id,
        table: this
      });
    },
    removeTable(instance) {
      const target = this[instance];
      if (!target || !target.tableList)
        return;
      const index = target.tableList.findIndex((item) => item.id === this.id);
      target.tableList.splice(index, 1);
    },
    closeContextMenu() {
      this.handleClickContextMenuOutside();
    },
    handleClickDropdownItem() {
      if (this.autoCloseContextmenu)
        this.closeContextMenu();
    }
  },
  created() {
    if (!this.context)
      this.currentContext = this.$parent;
    this.showSlotHeader = this.$slots.header !== void 0;
    this.showSlotFooter = this.$slots.footer !== void 0;
    this.rebuildData = this.makeDataWithSortAndFilter();
  },
  mounted() {
    this.addTable("TabsInstance");
    this.addTable("ModalInstance");
    this.addTable("DrawerInstance");
    this.handleResize();
    nextTick(() => this.ready = true);
    on(window, "resize", this.handleResize);
    this.observer = elementResizeDetectorMaker();
    this.observer.listenTo(this.$el, this.handleResize);
  },
  beforeUnmount() {
    this.removeTable("TabsInstance");
    this.removeTable("ModalInstance");
    this.removeTable("DrawerInstance");
    off(window, "resize", this.handleResize);
    this.observer.removeAllListeners(this.$el);
    this.observer.uninstall(this.$el);
    this.observer = null;
  },
  watch: {
    data: {
      handler() {
        const oldDataLen = this.rebuildData.length;
        this.objData = this.makeObjData();
        this.rebuildData = this.makeDataWithSortAndFilter();
        this.handleResize();
        if (!oldDataLen) {
          this.fixedHeader();
        }
        setTimeout(() => {
          this.cloneData = deepCopy(this.data);
        }, 0);
      },
      deep: true
    },
    columns: {
      handler() {
        const colsWithId = this.makeColumnsId(this.columns);
        this.allColumns = getAllColumns(colsWithId);
        this.cloneColumns = this.makeColumns(colsWithId);
        this.columnRows = this.makeColumnRows(false, colsWithId);
        this.leftFixedColumnRows = this.makeColumnRows("left", colsWithId);
        this.rightFixedColumnRows = this.makeColumnRows("right", colsWithId);
        this.rebuildData = this.makeDataWithSortAndFilter();
        this.handleResize();
      },
      deep: true
    },
    height() {
      this.handleResize();
    },
    maxHeight() {
      this.handleResize();
    },
    showHorizontalScrollBar() {
      this.handleResize();
    },
    showVerticalScrollBar() {
      this.handleResize();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_head = resolveComponent("table-head");
  const _component_table_body = resolveComponent("table-body");
  const _component_table_summary = resolveComponent("table-summary");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_DropdownMenu = resolveComponent("DropdownMenu");
  const _component_Spin = resolveComponent("Spin");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $options.wrapClasses,
    style: $options.styles,
    ref: "tableWrap"
  }, _attrs))}><div class="${ssrRenderClass($options.classes)}">`);
  if ($data.showSlotHeader) {
    _push(`<div class="${ssrRenderClass([$data.prefixCls + "-title"])}">`);
    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.showHeader) {
    _push(`<div class="${ssrRenderClass([$data.prefixCls + "-header"])}">`);
    _push(ssrRenderComponent(_component_table_head, {
      "prefix-cls": $data.prefixCls,
      styleObject: $options.tableHeaderStyle,
      columns: $data.cloneColumns,
      "column-rows": $data.columnRows,
      "obj-data": $data.objData,
      "columns-width": $data.columnsWidth,
      data: $data.rebuildData
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([$data.prefixCls + "-body"])}" style="${ssrRenderStyle([
    $options.bodyStyle,
    !(!!$options.localeNoDataText && (!$props.data || $props.data.length === 0) || !!$options.localeNoFilteredDataText && (!$data.rebuildData || $data.rebuildData.length === 0)) ? null : { display: "none" }
  ])}">`);
  _push(ssrRenderComponent(_component_table_body, {
    ref: "tbody",
    draggable: $props.draggable,
    "prefix-cls": $data.prefixCls,
    styleObject: $options.tableStyle,
    columns: $data.cloneColumns,
    data: $data.rebuildData,
    "row-key": $props.rowKey,
    "columns-width": $data.columnsWidth,
    "obj-data": $data.objData
  }, null, _parent));
  _push(`</div>`);
  if ($props.showSummary && ($props.data && $props.data.length)) {
    _push(ssrRenderComponent(_component_table_summary, {
      ref: "summary",
      "prefix-cls": $data.prefixCls,
      styleObject: $options.tableStyle,
      columns: $data.cloneColumns,
      data: $options.summaryData,
      "columns-width": $data.columnsWidth
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([$data.prefixCls + "-tip"])}" style="${ssrRenderStyle([
    $options.bodyStyle,
    !!$options.localeNoDataText && (!$props.data || $props.data.length === 0) || !!$options.localeNoFilteredDataText && (!$data.rebuildData || $data.rebuildData.length === 0) ? null : { display: "none" }
  ])}"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td style="${ssrRenderStyle({ "height": $options.bodyStyle.height, "width": `${$data.headerWidth}px` })}">`);
  if (!$props.data || $props.data.length === 0) {
    _push(`<span>${$options.localeNoDataText}</span>`);
  } else {
    _push(`<span>${$options.localeNoFilteredDataText}</span>`);
  }
  _push(`</td></tr></tbody></table></div>`);
  if ($options.isLeftFixed) {
    _push(`<div class="${ssrRenderClass($options.fixedTableClasses)}" style="${ssrRenderStyle($options.fixedTableStyle)}">`);
    if ($props.showHeader) {
      _push(`<div class="${ssrRenderClass($options.fixedHeaderClasses)}">`);
      _push(ssrRenderComponent(_component_table_head, {
        fixed: "left",
        "prefix-cls": $data.prefixCls,
        styleObject: $options.fixedTableStyle,
        columns: $options.leftFixedColumns,
        "column-rows": $data.columnRows,
        "fixed-column-rows": $data.leftFixedColumnRows,
        "obj-data": $data.objData,
        "columns-width": $data.columnsWidth,
        data: $data.rebuildData
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([$data.prefixCls + "-fixed-body"])}" style="${ssrRenderStyle($options.fixedBodyStyle)}">`);
    _push(ssrRenderComponent(_component_table_body, {
      fixed: "left",
      draggable: $props.draggable,
      "prefix-cls": $data.prefixCls,
      styleObject: $options.fixedTableStyle,
      columns: $options.leftFixedColumns,
      data: $data.rebuildData,
      "row-key": $props.rowKey,
      "columns-width": $data.columnsWidth,
      "obj-data": $data.objData
    }, null, _parent));
    _push(`</div>`);
    if ($props.showSummary && ($props.data && $props.data.length)) {
      _push(ssrRenderComponent(_component_table_summary, {
        fixed: "left",
        "prefix-cls": $data.prefixCls,
        styleObject: $options.fixedTableStyle,
        columns: $options.leftFixedColumns,
        data: $options.summaryData,
        "columns-width": $data.columnsWidth,
        style: { "margin-top": $data.showHorizontalScrollBar ? $data.scrollBarWidth + "px" : 0 }
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isRightFixed) {
    _push(`<div class="${ssrRenderClass($options.fixedRightTableClasses)}" style="${ssrRenderStyle($options.fixedRightTableStyle)}">`);
    if ($props.showHeader) {
      _push(`<div class="${ssrRenderClass($options.fixedHeaderClasses)}">`);
      _push(ssrRenderComponent(_component_table_head, {
        fixed: "right",
        "prefix-cls": $data.prefixCls,
        styleObject: $options.fixedRightTableStyle,
        columns: $options.rightFixedColumns,
        "column-rows": $data.columnRows,
        "fixed-column-rows": $data.rightFixedColumnRows,
        "obj-data": $data.objData,
        "columns-width": $data.columnsWidth,
        data: $data.rebuildData
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="${ssrRenderClass([$data.prefixCls + "-fixed-body"])}" style="${ssrRenderStyle($options.fixedBodyStyle)}">`);
    _push(ssrRenderComponent(_component_table_body, {
      fixed: "right",
      draggable: $props.draggable,
      "prefix-cls": $data.prefixCls,
      styleObject: $options.fixedRightTableStyle,
      columns: $options.rightFixedColumns,
      data: $data.rebuildData,
      "row-key": $props.rowKey,
      "columns-width": $data.columnsWidth,
      "obj-data": $data.objData
    }, null, _parent));
    _push(`</div>`);
    if ($props.showSummary && ($props.data && $props.data.length)) {
      _push(ssrRenderComponent(_component_table_summary, {
        fixed: "right",
        "prefix-cls": $data.prefixCls,
        styleObject: $options.fixedRightTableStyle,
        columns: $options.rightFixedColumns,
        data: $options.summaryData,
        "columns-width": $data.columnsWidth,
        style: { "margin-top": $data.showHorizontalScrollBar ? $data.scrollBarWidth + "px" : 0 }
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isRightFixed) {
    _push(`<div class="${ssrRenderClass([$data.prefixCls + "-fixed-right-header"])}" style="${ssrRenderStyle($options.fixedRightHeaderStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showSlotFooter) {
    _push(`<div class="${ssrRenderClass([$data.prefixCls + "-footer"])}">`);
    ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="ivu-table-resize-line" style="${ssrRenderStyle($data.showResizeLine ? null : { display: "none" })}"></div>`);
  if ($props.showContextMenu) {
    _push(`<div class="ivu-table-context-menu" style="${ssrRenderStyle($data.contextMenuStyles)}">`);
    _push(ssrRenderComponent(_component_Dropdown, {
      trigger: "custom",
      visible: $data.contextMenuVisible,
      transfer: "",
      onOnClick: $options.handleClickDropdownItem,
      onOnClickoutside: $options.handleClickContextMenuOutside
    }, {
      list: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_DropdownMenu, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "contextMenu", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "contextMenu")
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_DropdownMenu, null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "contextMenu")
              ]),
              _: 3
            })
          ];
        }
      }),
      _: 3
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Spin, {
    fix: "",
    size: "large",
    show: $props.loading
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "loading", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "loading")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/src/components/table/table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Vable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    AuthenticatedLayout: _sfc_main$j,
    Head,
    Link,
    Pagination,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
    SelectInput,
    Vable,
    draggable
  },
  props: {
    filters: Object,
    rows: Object,
    stats: Object
  },
  data() {
    return {
      columns: [
        { title: "Date", slot: "date", width: 200, resizable: true, sortable: "custom", sortType: this.filters.date_sort },
        { title: "Timestamp", slot: "timestamp", width: 200, resizable: true },
        {
          title: "OS",
          key: "device",
          width: 200,
          resizable: true,
          filters: [
            {
              label: "Web",
              value: "web"
            },
            {
              label: "Mobile",
              value: "mobile"
            }
          ],
          [this.filters.device_filter ? "filteredValue" : ""]: this.filters.device_filter,
          filterRemote() {
          }
        },
        {
          title: "Q-User",
          slot: "q_user",
          width: 200,
          resizable: true,
          sortable: "custom",
          filters: [
            {
              label: "Customer",
              value: "Customer"
            },
            {
              label: "Lead",
              value: "Lead"
            },
            {
              label: "Visitor",
              value: "Visitor"
            }
          ],
          [this.filters.q_user_filter ? "filteredValue" : ""]: this.filters.q_user_filter,
          filterRemote() {
          }
        },
        { title: "Quote ID", slot: "quote_id", width: 200, resizable: true, sortable: "custom" },
        {
          title: "Q-type",
          slot: "q_type",
          width: 200,
          resizable: true,
          sortable: "custom",
          filters: [
            {
              label: "Individual",
              value: "individual"
            },
            {
              label: "Family",
              value: "family"
            },
            {
              label: "Multi Family",
              value: "multi-family"
            }
          ],
          filterMethod(value, row) {
            const val = row.price ? "Customer" : row.email ? "Lead" : "Visitor";
            return val.indexOf(value) > -1;
          }
        },
        { title: "Destination", slot: "destination", width: 200, resizable: true, sortable: "custom" },
        { title: "Leave", slot: "from", width: 200, resizable: true, sortable: "custom" },
        { title: "Return", slot: "to", width: 200, resizable: true, sortable: "custom" },
        { title: "Travelers", slot: "travelers", width: 200, resizable: true, sortable: "custom" },
        { title: "Coverage Type", slot: "coverage_type", width: 200, resizable: true, sortable: "custom" },
        { title: "Selected", slot: "selected", width: 200, resizable: true, sortable: "custom" },
        { title: "Residence", slot: "residence", width: 200, resizable: true, sortable: "custom" },
        { title: "Success", slot: "success", width: 200, resizable: true, sortable: "custom" },
        { title: "Exit Page", slot: "exit_page", width: 200, resizable: true, sortable: "custom" },
        { title: "Status", slot: "status", width: 200, resizable: true, sortable: "custom" },
        { title: "View Details", slot: "action", fixed: "right", align: "center", width: 200, resizable: true, sortable: "custom" }
      ],
      form: {
        search: this.filters.search,
        country: ""
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/quotes", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    },
    onSortableChange(col) {
      if (col.order == "asc" || col.order == "desc") {
        this.form[(col.column.key ? col.column.key : col.column.slot) + "_sort"] = col.order;
      } else {
        this.form[(col.column.key ? col.column.key : col.column.slot) + "_sort"] = null;
      }
    },
    onFilterChange(val) {
      if (val._filterChecked.length) {
        this.form[(val.key ? val.key : val.slot) + "_filter"] = val._filterChecked;
      } else {
        this.form[(val.key ? val.key : val.slot) + "_filter"] = null;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AuthenticatedLayout = resolveComponent("AuthenticatedLayout");
  const _component_Disclosure = resolveComponent("Disclosure");
  const _component_DisclosureButton = resolveComponent("DisclosureButton");
  const _component_ChevronUpIcon = resolveComponent("ChevronUpIcon");
  const _component_DisclosurePanel = resolveComponent("DisclosurePanel");
  const _component_Vable = resolveComponent("Vable");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Dashboard" }, null, _parent));
  _push(ssrRenderComponent(_component_AuthenticatedLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Quotes</h1>`);
        _push2(ssrRenderComponent(_component_Disclosure, null, {
          default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_DisclosureButton, { class: "flex w-full justify-between rounded bg-white px-4 py-2 border" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span${_scopeId3}>Quick Stats</span>`);
                    _push4(ssrRenderComponent(_component_ChevronUpIcon, {
                      class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("span", null, "Quick Stats"),
                      createVNode(_component_ChevronUpIcon, {
                        class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                      }, null, 8, ["class"])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_DisclosurePanel, null, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="grid grid-cols-3 lg:grid-cols-7 gap-12 py-4"${_scopeId3}><div class="col-span-3 p-2"${_scopeId3}><table class="w-full"${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}></th><th class="text-indigo-400 font-normal text-lg px-2 pb-2"${_scopeId3}> Total Visits </th><th class="text-indigo-400 font-normal text-lg px-2 pb-2"${_scopeId3}> Total Quotes </th><th class="text-indigo-400 font-normal text-lg px-2 pb-2"${_scopeId3}> Coversion Rate </th></tr></thead><tbody${_scopeId3}><tr${_scopeId3}><td class="py-2 border-b text-gray-500"${_scopeId3}>Month To Date</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.month_to_date)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_quotes.month_to_date)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.month_to_date ? ($props.stats.total_quotes.month_to_date / $props.stats.total_visits.month_to_date * 100).toFixed(2) : 0)} % </td></tr><tr${_scopeId3}><td class="py-2 border-b text-gray-500"${_scopeId3}>Last Month</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.last_month)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_quotes.last_month)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.last_month ? ($props.stats.total_quotes.last_month / $props.stats.total_visits.last_month * 100).toFixed(2) : 0)} % </td></tr><tr${_scopeId3}><td class="py-2 border-b text-gray-500"${_scopeId3}>Last 30 Days</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.last_30_days)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_quotes.last_30_days)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.last_30_days ? ($props.stats.total_quotes.last_30_days / $props.stats.total_visits.last_30_days * 100).toFixed(2) : 0)} % </td></tr><tr${_scopeId3}><td class="py-2 border-b text-gray-500"${_scopeId3}>Week To Day</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.week_to_day)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_quotes.week_to_day)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.week_to_day ? ($props.stats.total_quotes.week_to_day / $props.stats.total_visits.week_to_day * 100).toFixed(2) : 0)} % </td></tr><tr${_scopeId3}><td class="py-2 border-b text-gray-500"${_scopeId3}>Last 7 Days</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.last_7_days)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_quotes.last_7_days)}</td><td class="py-2 border-b text-green-500 text-center"${_scopeId3}>${ssrInterpolate($props.stats.total_visits.last_7_days ? ($props.stats.total_quotes.last_7_days / $props.stats.total_visits.last_7_days * 100).toFixed(2) : 0)} % </td></tr></tbody></table></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Success Rate </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Exit </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.success_rate.exit)} | ${ssrInterpolate(($props.stats.success_rate.exit / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2))} % </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Lead </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.success_rate.lead)} | ${ssrInterpolate(($props.stats.success_rate.lead / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2))} % </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Purchase </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.success_rate.purchase)} | ${ssrInterpolate(($props.stats.success_rate.purchase / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2))} % </span></p></div></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Repeat </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Lead </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.repeat.lead)}</span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Customer </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.repeat.customer)}</span></p></div></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Coverage Type </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Medical </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.coverage_type.medical)} % </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Comprehensive </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.coverage_type.comprehensive)} % </span></p></div></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Q-Type </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Individual </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.q_type.individual)}% </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Family </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.q_type.family)}% </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Multi Family </span><span class="text-green-500"${_scopeId3}>${ssrInterpolate($props.stats.q_type.multi_family)}% </span></p></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-3 lg:grid-cols-7 gap-12 py-4" }, [
                        createVNode("div", { class: "col-span-3 p-2" }, [
                          createVNode("table", { class: "w-full" }, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th"),
                                createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Total Visits "),
                                createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Total Quotes "),
                                createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Coversion Rate ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("td", { class: "py-2 border-b text-gray-500" }, "Month To Date"),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.month_to_date), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.month_to_date), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.month_to_date ? ($props.stats.total_quotes.month_to_date / $props.stats.total_visits.month_to_date * 100).toFixed(2) : 0) + " % ", 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last Month"),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_month), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_month), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_month ? ($props.stats.total_quotes.last_month / $props.stats.total_visits.last_month * 100).toFixed(2) : 0) + " % ", 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last 30 Days"),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_30_days), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_30_days), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_30_days ? ($props.stats.total_quotes.last_30_days / $props.stats.total_visits.last_30_days * 100).toFixed(2) : 0) + " % ", 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "py-2 border-b text-gray-500" }, "Week To Day"),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.week_to_day), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.week_to_day), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.week_to_day ? ($props.stats.total_quotes.week_to_day / $props.stats.total_visits.week_to_day * 100).toFixed(2) : 0) + " % ", 1)
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last 7 Days"),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_7_days), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_7_days), 1),
                                createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_7_days ? ($props.stats.total_quotes.last_7_days / $props.stats.total_visits.last_7_days * 100).toFixed(2) : 0) + " % ", 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Success Rate "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Exit "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.exit) + " | " + toDisplayString(($props.stats.success_rate.exit / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Lead "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.lead) + " | " + toDisplayString(($props.stats.success_rate.lead / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Purchase "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.purchase) + " | " + toDisplayString(($props.stats.success_rate.purchase / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Repeat "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Lead "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.repeat.lead), 1)
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Customer "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.repeat.customer), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Coverage Type "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Medical "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.coverage_type.medical) + " % ", 1)
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Comprehensive "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.coverage_type.comprehensive) + " % ", 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Q-Type "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Individual "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.individual) + "% ", 1)
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Family "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.family) + "% ", 1)
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Multi Family "),
                              createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.multi_family) + "% ", 1)
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_DisclosureButton, { class: "flex w-full justify-between rounded bg-white px-4 py-2 border" }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Quick Stats"),
                    createVNode(_component_ChevronUpIcon, {
                      class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                    }, null, 8, ["class"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_DisclosurePanel, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid grid-cols-3 lg:grid-cols-7 gap-12 py-4" }, [
                      createVNode("div", { class: "col-span-3 p-2" }, [
                        createVNode("table", { class: "w-full" }, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th"),
                              createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Total Visits "),
                              createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Total Quotes "),
                              createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Coversion Rate ")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            createVNode("tr", null, [
                              createVNode("td", { class: "py-2 border-b text-gray-500" }, "Month To Date"),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.month_to_date), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.month_to_date), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.month_to_date ? ($props.stats.total_quotes.month_to_date / $props.stats.total_visits.month_to_date * 100).toFixed(2) : 0) + " % ", 1)
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last Month"),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_month), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_month), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_month ? ($props.stats.total_quotes.last_month / $props.stats.total_visits.last_month * 100).toFixed(2) : 0) + " % ", 1)
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last 30 Days"),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_30_days), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_30_days), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_30_days ? ($props.stats.total_quotes.last_30_days / $props.stats.total_visits.last_30_days * 100).toFixed(2) : 0) + " % ", 1)
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "py-2 border-b text-gray-500" }, "Week To Day"),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.week_to_day), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.week_to_day), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.week_to_day ? ($props.stats.total_quotes.week_to_day / $props.stats.total_visits.week_to_day * 100).toFixed(2) : 0) + " % ", 1)
                            ]),
                            createVNode("tr", null, [
                              createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last 7 Days"),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_7_days), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_7_days), 1),
                              createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_7_days ? ($props.stats.total_quotes.last_7_days / $props.stats.total_visits.last_7_days * 100).toFixed(2) : 0) + " % ", 1)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Success Rate "),
                        createVNode("div", { class: "divide-y" }, [
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Exit "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.exit) + " | " + toDisplayString(($props.stats.success_rate.exit / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                          ]),
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Lead "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.lead) + " | " + toDisplayString(($props.stats.success_rate.lead / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                          ]),
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Purchase "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.purchase) + " | " + toDisplayString(($props.stats.success_rate.purchase / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Repeat "),
                        createVNode("div", { class: "divide-y" }, [
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Lead "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.repeat.lead), 1)
                          ]),
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Customer "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.repeat.customer), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Coverage Type "),
                        createVNode("div", { class: "divide-y" }, [
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Medical "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.coverage_type.medical) + " % ", 1)
                          ]),
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Comprehensive "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.coverage_type.comprehensive) + " % ", 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Q-Type "),
                        createVNode("div", { class: "divide-y" }, [
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Individual "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.individual) + "% ", 1)
                          ]),
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Family "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.family) + "% ", 1)
                          ]),
                          createVNode("p", { class: "flex justify-between py-2" }, [
                            createVNode("span", { class: "text-gray-500" }, " Multi Family "),
                            createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.multi_family) + "% ", 1)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="bg-white rounded p-4 my-4"${_scopeId}><input type="text"${ssrRenderAttr("value", $data.form.search)} placeholder="Search..." class="border border-gray-200 rounded px-4 py-2"${_scopeId}></div>`);
        _push2(ssrRenderComponent(_component_Vable, {
          columns: $data.columns,
          data: $props.rows.data,
          border: "",
          onOnSortChange: $options.onSortableChange,
          onOnFilterChange: $options.onFilterChange
        }, {
          date: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(new Date(row.created_at).getFullYear())}-${ssrInterpolate(new Date(row.created_at).getMonth() + 1)}-${ssrInterpolate(new Date(row.created_at).getDate())}`);
            } else {
              return [
                createTextVNode(toDisplayString(new Date(row.created_at).getFullYear()) + "-" + toDisplayString(new Date(row.created_at).getMonth() + 1) + "-" + toDisplayString(new Date(row.created_at).getDate()), 1)
              ];
            }
          }),
          timestamp: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(new Date(row.created_at).getHours())}:${ssrInterpolate(new Date(row.created_at).getMinutes())}`);
            } else {
              return [
                createTextVNode(toDisplayString(new Date(row.created_at).getHours()) + ":" + toDisplayString(new Date(row.created_at).getMinutes()), 1)
              ];
            }
          }),
          q_user: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.order ? "Customer" : row.quote ? row.quote.email ? "Lead" : "Visitor" : "Visitor")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.order ? "Customer" : row.quote ? row.quote.email ? "Lead" : "Visitor" : "Visitor"), 1)
              ];
            }
          }),
          quote_id: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.id : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.id : ""), 1)
              ];
            }
          }),
          q_type: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.qtype : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.qtype : ""), 1)
              ];
            }
          }),
          destination: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.destination : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.destination : ""), 1)
              ];
            }
          }),
          from: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.from : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.from : ""), 1)
              ];
            }
          }),
          to: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.to : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.to : ""), 1)
              ];
            }
          }),
          travelers: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.ages ? JSON.parse(row.quote.ages).length : "" : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.ages ? JSON.parse(row.quote.ages).length : "" : ""), 1)
              ];
            }
          }),
          coverage_type: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.coverage_type : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.coverage_type : ""), 1)
              ];
            }
          }),
          selected: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.order ? row.order.product.name : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.order ? row.order.product.name : ""), 1)
              ];
            }
          }),
          residence: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.order ? row.order.country : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.order ? row.order.country : ""), 1)
              ];
            }
          }),
          success: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.order ? "Purchase" : row.quote ? row.quote.email ? "Lead" : "Exit" : "Exit")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.order ? "Purchase" : row.quote ? row.quote.email ? "Lead" : "Exit" : "Exit"), 1)
              ];
            }
          }),
          exit_page: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(row.quote ? row.quote.exit_page : "")}`);
            } else {
              return [
                createTextVNode(toDisplayString(row.quote ? row.quote.exit_page : ""), 1)
              ];
            }
          }),
          status: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Active `);
            } else {
              return [
                createTextVNode(" Active ")
              ];
            }
          }),
          action: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Link, {
                href: _ctx.route("quotes.show", row.id)
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<button class="text-white bg-indigo-500 px-3 py-1 rounded"${_scopeId3}>View</button>`);
                  } else {
                    return [
                      createVNode("button", { class: "text-white bg-indigo-500 px-3 py-1 rounded" }, "View")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Link, {
                  href: _ctx.route("quotes.show", row.id)
                }, {
                  default: withCtx(() => [
                    createVNode("button", { class: "text-white bg-indigo-500 px-3 py-1 rounded" }, "View")
                  ]),
                  _: 2
                }, 1032, ["href"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Pagination, {
          class: "mt-4",
          links: $props.rows.links
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Quotes"),
          createVNode(_component_Disclosure, null, {
            default: withCtx(({ open }) => [
              createVNode(_component_DisclosureButton, { class: "flex w-full justify-between rounded bg-white px-4 py-2 border" }, {
                default: withCtx(() => [
                  createVNode("span", null, "Quick Stats"),
                  createVNode(_component_ChevronUpIcon, {
                    class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                  }, null, 8, ["class"])
                ]),
                _: 2
              }, 1024),
              createVNode(_component_DisclosurePanel, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-3 lg:grid-cols-7 gap-12 py-4" }, [
                    createVNode("div", { class: "col-span-3 p-2" }, [
                      createVNode("table", { class: "w-full" }, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th"),
                            createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Total Visits "),
                            createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Total Quotes "),
                            createVNode("th", { class: "text-indigo-400 font-normal text-lg px-2 pb-2" }, " Coversion Rate ")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          createVNode("tr", null, [
                            createVNode("td", { class: "py-2 border-b text-gray-500" }, "Month To Date"),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.month_to_date), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.month_to_date), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.month_to_date ? ($props.stats.total_quotes.month_to_date / $props.stats.total_visits.month_to_date * 100).toFixed(2) : 0) + " % ", 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last Month"),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_month), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_month), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_month ? ($props.stats.total_quotes.last_month / $props.stats.total_visits.last_month * 100).toFixed(2) : 0) + " % ", 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last 30 Days"),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_30_days), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_30_days), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_30_days ? ($props.stats.total_quotes.last_30_days / $props.stats.total_visits.last_30_days * 100).toFixed(2) : 0) + " % ", 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "py-2 border-b text-gray-500" }, "Week To Day"),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.week_to_day), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.week_to_day), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.week_to_day ? ($props.stats.total_quotes.week_to_day / $props.stats.total_visits.week_to_day * 100).toFixed(2) : 0) + " % ", 1)
                          ]),
                          createVNode("tr", null, [
                            createVNode("td", { class: "py-2 border-b text-gray-500" }, "Last 7 Days"),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_7_days), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_quotes.last_7_days), 1),
                            createVNode("td", { class: "py-2 border-b text-green-500 text-center" }, toDisplayString($props.stats.total_visits.last_7_days ? ($props.stats.total_quotes.last_7_days / $props.stats.total_visits.last_7_days * 100).toFixed(2) : 0) + " % ", 1)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Success Rate "),
                      createVNode("div", { class: "divide-y" }, [
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Exit "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.exit) + " | " + toDisplayString(($props.stats.success_rate.exit / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                        ]),
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Lead "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.lead) + " | " + toDisplayString(($props.stats.success_rate.lead / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                        ]),
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Purchase "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.success_rate.purchase) + " | " + toDisplayString(($props.stats.success_rate.purchase / ($props.stats.success_rate.exit + $props.stats.success_rate.lead + $props.stats.success_rate.purchase) * 100).toFixed(2)) + " % ", 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Repeat "),
                      createVNode("div", { class: "divide-y" }, [
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Lead "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.repeat.lead), 1)
                        ]),
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Customer "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.repeat.customer), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Coverage Type "),
                      createVNode("div", { class: "divide-y" }, [
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Medical "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.coverage_type.medical) + " % ", 1)
                        ]),
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Comprehensive "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.coverage_type.comprehensive) + " % ", 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Q-Type "),
                      createVNode("div", { class: "divide-y" }, [
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Individual "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.individual) + "% ", 1)
                        ]),
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Family "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.family) + "% ", 1)
                        ]),
                        createVNode("p", { class: "flex justify-between py-2" }, [
                          createVNode("span", { class: "text-gray-500" }, " Multi Family "),
                          createVNode("span", { class: "text-green-500" }, toDisplayString($props.stats.q_type.multi_family) + "% ", 1)
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode("div", { class: "bg-white rounded p-4 my-4" }, [
            withDirectives(createVNode("input", {
              type: "text",
              "onUpdate:modelValue": ($event) => $data.form.search = $event,
              placeholder: "Search...",
              class: "border border-gray-200 rounded px-4 py-2"
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.form.search]
            ])
          ]),
          createVNode(_component_Vable, {
            columns: $data.columns,
            data: $props.rows.data,
            border: "",
            onOnSortChange: $options.onSortableChange,
            onOnFilterChange: $options.onFilterChange
          }, {
            date: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(new Date(row.created_at).getFullYear()) + "-" + toDisplayString(new Date(row.created_at).getMonth() + 1) + "-" + toDisplayString(new Date(row.created_at).getDate()), 1)
            ]),
            timestamp: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(new Date(row.created_at).getHours()) + ":" + toDisplayString(new Date(row.created_at).getMinutes()), 1)
            ]),
            q_user: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.order ? "Customer" : row.quote ? row.quote.email ? "Lead" : "Visitor" : "Visitor"), 1)
            ]),
            quote_id: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.id : ""), 1)
            ]),
            q_type: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.qtype : ""), 1)
            ]),
            destination: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.destination : ""), 1)
            ]),
            from: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.from : ""), 1)
            ]),
            to: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.to : ""), 1)
            ]),
            travelers: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.ages ? JSON.parse(row.quote.ages).length : "" : ""), 1)
            ]),
            coverage_type: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.coverage_type : ""), 1)
            ]),
            selected: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.order ? row.order.product.name : ""), 1)
            ]),
            residence: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.order ? row.order.country : ""), 1)
            ]),
            success: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.order ? "Purchase" : row.quote ? row.quote.email ? "Lead" : "Exit" : "Exit"), 1)
            ]),
            exit_page: withCtx(({ row, index }) => [
              createTextVNode(toDisplayString(row.quote ? row.quote.exit_page : ""), 1)
            ]),
            status: withCtx(({ row, index }) => [
              createTextVNode(" Active ")
            ]),
            action: withCtx(({ row, index }) => [
              createVNode(_component_Link, {
                href: _ctx.route("quotes.show", row.id)
              }, {
                default: withCtx(() => [
                  createVNode("button", { class: "text-white bg-indigo-500 px-3 py-1 rounded" }, "View")
                ]),
                _: 2
              }, 1032, ["href"])
            ]),
            _: 1
          }, 8, ["columns", "data", "onOnSortChange", "onOnFilterChange"]),
          createVNode(_component_Pagination, {
            class: "mt-4",
            links: $props.rows.links
          }, null, 8, ["links"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quotes/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
