import { resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { Head, Link } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = resolveComponent("icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Users</h1><div class="flex items-center justify-between mb-6"${_scopeId}><div${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "btn-indigo",
              href: "/users/create"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Create</span><span class="hidden md:inline"${_scopeId2}> User</span>`);
                } else {
                  return [
                    createVNode("span", null, "Create"),
                    createVNode("span", { class: "hidden md:inline" }, " User")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white rounded-md shadow overflow-x-auto"${_scopeId}><table class="w-full whitespace-nowrap"${_scopeId}><tr class="text-left font-bold"${_scopeId}><th class="pb-4 pt-6 px-6"${_scopeId}>Name</th><th class="pb-4 pt-6 px-6"${_scopeId}>Email</th><th class="pb-4 pt-6 px-6" colspan="2"${_scopeId}>Role</th></tr><!--[-->`);
            ssrRenderList(__props.users, (user) => {
              _push2(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"${_scopeId}><td class="border-t"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "flex items-center px-6 py-4 focus:text-indigo-500",
                href: `/users/${user.id}/edit`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (user.photo) {
                      _push3(`<img class="block -my-2 mr-2 w-5 h-5 rounded-full"${ssrRenderAttr("src", user.photo)}${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(user.name)} `);
                    if (user.deleted_at) {
                      _push3(ssrRenderComponent(_component_icon, {
                        name: "trash",
                        class: "flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      user.photo ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "block -my-2 mr-2 w-5 h-5 rounded-full",
                        src: user.photo
                      }, null, 8, ["src"])) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(user.name) + " ", 1),
                      user.deleted_at ? (openBlock(), createBlock(_component_icon, {
                        key: 1,
                        name: "trash",
                        class: "flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="border-t"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "flex items-center px-6 py-4",
                href: `/users/${user.id}/edit`,
                tabindex: "-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(user.email)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(user.email), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="border-t"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "flex items-center px-6 py-4",
                href: `/users/${user.id}/edit`,
                tabindex: "-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(user.roles[0].name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(user.roles[0].name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="w-px border-t"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                class: "flex items-center px-4",
                href: `/users/${user.id}/edit`,
                tabindex: "-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_icon, {
                      name: "cheveron-right",
                      class: "block w-6 h-6 fill-gray-400"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_icon, {
                        name: "cheveron-right",
                        class: "block w-6 h-6 fill-gray-400"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.users.length === 0) {
              _push2(`<tr${_scopeId}><td class="px-6 py-4 border-t" colspan="4"${_scopeId}>No users found.</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</table></div>`);
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Users"),
              createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                createVNode("div"),
                createVNode(unref(Link), {
                  class: "btn-indigo",
                  href: "/users/create"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Create"),
                    createVNode("span", { class: "hidden md:inline" }, " User")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "bg-white rounded-md shadow overflow-x-auto" }, [
                createVNode("table", { class: "w-full whitespace-nowrap" }, [
                  createVNode("tr", { class: "text-left font-bold" }, [
                    createVNode("th", { class: "pb-4 pt-6 px-6" }, "Name"),
                    createVNode("th", { class: "pb-4 pt-6 px-6" }, "Email"),
                    createVNode("th", {
                      class: "pb-4 pt-6 px-6",
                      colspan: "2"
                    }, "Role")
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                    return openBlock(), createBlock("tr", {
                      key: user.id,
                      class: "hover:bg-gray-100 focus-within:bg-gray-100"
                    }, [
                      createVNode("td", { class: "border-t" }, [
                        createVNode(unref(Link), {
                          class: "flex items-center px-6 py-4 focus:text-indigo-500",
                          href: `/users/${user.id}/edit`
                        }, {
                          default: withCtx(() => [
                            user.photo ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "block -my-2 mr-2 w-5 h-5 rounded-full",
                              src: user.photo
                            }, null, 8, ["src"])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(user.name) + " ", 1),
                            user.deleted_at ? (openBlock(), createBlock(_component_icon, {
                              key: 1,
                              name: "trash",
                              class: "flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      createVNode("td", { class: "border-t" }, [
                        createVNode(unref(Link), {
                          class: "flex items-center px-6 py-4",
                          href: `/users/${user.id}/edit`,
                          tabindex: "-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(user.email), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      createVNode("td", { class: "border-t" }, [
                        createVNode(unref(Link), {
                          class: "flex items-center px-6 py-4",
                          href: `/users/${user.id}/edit`,
                          tabindex: "-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(user.roles[0].name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      createVNode("td", { class: "w-px border-t" }, [
                        createVNode(unref(Link), {
                          class: "flex items-center px-4",
                          href: `/users/${user.id}/edit`,
                          tabindex: "-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, {
                              name: "cheveron-right",
                              class: "block w-6 h-6 fill-gray-400"
                            })
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128)),
                  __props.users.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                    createVNode("td", {
                      class: "px-6 py-4 border-t",
                      colspan: "4"
                    }, "No users found.")
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
