import { resolveComponent, unref, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    roles: Array,
    permissions: Array
  },
  setup(__props) {
    const roleForm = useForm({ name: "" });
    const permissionForm = useForm({ name: "" });
    const submitNewRole = () => {
      roleForm.post(route(`roles.store`), {
        onFinish: () => roleForm.name = ""
      });
    };
    const submitNewPermission = () => {
      permissionForm.post(route(`permissions.store`), {
        onFinish: () => permissionForm.name = ""
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = resolveComponent("Input");
      const _component_Button = resolveComponent("Button");
      const _component_Checkbox = resolveComponent("Checkbox");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Roles and Permissions" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Roles and Permissions</h1><div class="mb-4 flex"${_scopeId}><form class="mr-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(roleForm).name,
              "onUpdate:modelValue": ($event) => unref(roleForm).name = $event,
              style: { "width": "300px" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              class: ["ml-4", { "opacity-25": unref(roleForm).processing }],
              disabled: unref(roleForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create Role`);
                } else {
                  return [
                    createTextVNode("Create Role")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><form class="ml-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              modelValue: unref(permissionForm).name,
              "onUpdate:modelValue": ($event) => unref(permissionForm).name = $event,
              style: { "width": "300px" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              class: ["ml-4", { "opacity-25": unref(permissionForm).processing }],
              disabled: unref(permissionForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create Permission`);
                } else {
                  return [
                    createTextVNode("Create Permission")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div><div class="bg-white rounded-md shadow overflow-x-auto"${_scopeId}><table class="w-full whitespace-nowrap"${_scopeId}><tr class="text-left font-bold"${_scopeId}><th class="pb-4 pt-6 px-6"${_scopeId}></th><!--[-->`);
            ssrRenderList(__props.roles, (role) => {
              _push2(`<th class="pb-4 pt-6 px-6"${_scopeId}>${ssrInterpolate(role.name)}</th>`);
            });
            _push2(`<!--]--></tr><!--[-->`);
            ssrRenderList(__props.permissions, (perm) => {
              _push2(`<tr${_scopeId}><td class="px-6 py-2 border-t"${_scopeId}>${ssrInterpolate(perm.name)}</td><!--[-->`);
              ssrRenderList(__props.roles, (role) => {
                _push2(`<td class="px-6 py-2 border-t"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Checkbox, null, null, _parent2, _scopeId));
                _push2(`</td>`);
              });
              _push2(`<!--]--></tr>`);
            });
            _push2(`<!--]--></table></div>`);
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Roles and Permissions"),
              createVNode("div", { class: "mb-4 flex" }, [
                createVNode("form", {
                  class: "mr-8",
                  onSubmit: withModifiers(submitNewRole, ["prevent"])
                }, [
                  createVNode(_component_Input, {
                    modelValue: unref(roleForm).name,
                    "onUpdate:modelValue": ($event) => unref(roleForm).name = $event,
                    style: { "width": "300px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_Button, {
                    type: "primary",
                    class: ["ml-4", { "opacity-25": unref(roleForm).processing }],
                    disabled: unref(roleForm).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Create Role")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ], 40, ["onSubmit"]),
                createVNode("form", {
                  class: "ml-8",
                  onSubmit: withModifiers(submitNewPermission, ["prevent"])
                }, [
                  createVNode(_component_Input, {
                    modelValue: unref(permissionForm).name,
                    "onUpdate:modelValue": ($event) => unref(permissionForm).name = $event,
                    style: { "width": "300px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_Button, {
                    type: "primary",
                    class: ["ml-4", { "opacity-25": unref(permissionForm).processing }],
                    disabled: unref(permissionForm).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Create Permission")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ], 40, ["onSubmit"])
              ]),
              createVNode("div", { class: "bg-white rounded-md shadow overflow-x-auto" }, [
                createVNode("table", { class: "w-full whitespace-nowrap" }, [
                  createVNode("tr", { class: "text-left font-bold" }, [
                    createVNode("th", { class: "pb-4 pt-6 px-6" }),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                      return openBlock(), createBlock("th", { class: "pb-4 pt-6 px-6" }, toDisplayString(role.name), 1);
                    }), 256))
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.permissions, (perm) => {
                    return openBlock(), createBlock("tr", null, [
                      createVNode("td", { class: "px-6 py-2 border-t" }, toDisplayString(perm.name), 1),
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                        return openBlock(), createBlock("td", { class: "px-6 py-2 border-t" }, [
                          createVNode(_component_Checkbox)
                        ]);
                      }), 256))
                    ]);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Permissions/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
