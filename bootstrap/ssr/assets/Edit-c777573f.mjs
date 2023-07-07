import { ref, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0eb7e2d2.mjs";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-2c5bfbc5.mjs";
import { _ as _sfc_main$5, a as _sfc_main$7, b as _sfc_main$8 } from "./Modal-6d54a280.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-2c7b8ce0.mjs";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: Object,
    roles: Array
  },
  setup(__props) {
    const props = __props;
    const confirmingUserDeletion = ref(false);
    const form = useForm({
      name: props.user.name,
      email: props.user.email,
      role: props.user.roles[0].name,
      password: "",
      password_confirmation: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
    };
    const update = () => {
      form.put(route(`users.update`, props.user.id), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    const destroy = () => {
      form.delete(route(`users.destroy`, props.user.id), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: "Create User" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-indigo-400 hover:text-indigo-600",
              href: "/users"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Users`);
                } else {
                  return [
                    createTextVNode("Users")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-indigo-400 font-medium"${_scopeId}>/</span> Edit </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden p-6"${_scopeId}><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "role",
              value: "Role"
            }, null, _parent2, _scopeId));
            _push2(`<select class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"${_scopeId}><!--[-->`);
            ssrRenderList(__props.roles, (role) => {
              _push2(`<option${ssrRenderAttr("value", role.name)}${_scopeId}>${ssrInterpolate(role.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing,
              onClick: confirmUserDeletion
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete User `);
                } else {
                  return [
                    createTextVNode(" Delete User ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update User `);
                } else {
                  return [
                    createTextVNode(" Update User ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              show: confirmingUserDeletion.value,
              onClose: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId2}> Are you sure you want to delete this user? </h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"${_scopeId2}> Once this user is deleted, all of its resources and data will be permanently deleted. </p><div class="mt-6 flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$8, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: destroy
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete User `);
                      } else {
                        return [
                          createTextVNode(" Delete User ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, " Are you sure you want to delete this user? "),
                      createVNode("p", { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, " Once this user is deleted, all of its resources and data will be permanently deleted. "),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$8, { onClick: closeModal }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$5, {
                          class: ["ml-3", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: destroy
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete User ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, [
                createVNode(unref(Link), {
                  class: "text-indigo-400 hover:text-indigo-600",
                  href: "/users"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Users")
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "text-indigo-400 font-medium" }, "/"),
                createTextVNode(" Edit ")
              ]),
              createVNode("div", { class: "max-w-3xl bg-white rounded-md shadow overflow-hidden p-6" }, [
                createVNode("form", {
                  onSubmit: withModifiers(update, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "name",
                      value: "Name"
                    }),
                    createVNode(_sfc_main$3, {
                      id: "name",
                      type: "text",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.name
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$2, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_sfc_main$3, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autocomplete: "username"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$2, {
                      for: "role",
                      value: "Role"
                    }),
                    withDirectives(createVNode("select", {
                      class: "mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",
                      "onUpdate:modelValue": ($event) => unref(form).role = $event
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                        return openBlock(), createBlock("option", {
                          value: role.name
                        }, toDisplayString(role.name), 9, ["value"]);
                      }), 256))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).role]
                    ]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$2, {
                      for: "password",
                      value: "Password"
                    }),
                    createVNode(_sfc_main$3, {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$2, {
                      for: "password_confirmation",
                      value: "Confirm Password"
                    }),
                    createVNode(_sfc_main$3, {
                      id: "password_confirmation",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.password_confirmation
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between mt-4" }, [
                    createVNode(_sfc_main$5, {
                      class: { "opacity-25": unref(form).processing },
                      disabled: unref(form).processing,
                      onClick: withModifiers(confirmUserDeletion, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Delete User ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled", "onClick"]),
                    createVNode(_sfc_main$6, {
                      class: ["ml-4", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update User ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ]),
              createVNode(_sfc_main$7, {
                show: confirmingUserDeletion.value,
                onClose: closeModal
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-6" }, [
                    createVNode("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, " Are you sure you want to delete this user? "),
                    createVNode("p", { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, " Once this user is deleted, all of its resources and data will be permanently deleted. "),
                    createVNode("div", { class: "mt-6 flex justify-end" }, [
                      createVNode(_sfc_main$8, { onClick: closeModal }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        class: ["ml-3", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing,
                        onClick: destroy
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete User ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
