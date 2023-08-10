import { resolveComponent, unref, withCtx, createVNode, withModifiers, createTextVNode, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { Head, Link, router } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    providers: {
      type: Array,
      default: []
    },
    products: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const providerColumns = [
      { type: "index", width: 60, align: "center" },
      { title: "Name", key: "name" },
      { title: "Action", slot: "action" }
    ];
    const columns = [
      { type: "index", width: 60, align: "center" },
      { title: "Provider", slot: "provider" },
      { title: "Name", key: "name" },
      { title: "Coverage Type", key: "type" },
      { title: "Status", slot: "status" },
      { title: "Action", slot: "action" }
    ];
    function changeProviderStatus(id, status) {
      router.post(route("providers.update", id), { status });
    }
    function changeProductStatus(id, status) {
      router.post(route("products.update", id), { status });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Collapse = resolveComponent("Collapse");
      const _component_Panel = resolveComponent("Panel");
      const _component_Table = resolveComponent("Table");
      const _component_Switch = resolveComponent("Switch");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Products</h1>`);
            _push2(ssrRenderComponent(_component_Collapse, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Panel, null, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Table, {
                          columns: providerColumns,
                          data: props.providers
                        }, {
                          action: withCtx(({ row, index }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Switch, {
                                "model-value": Boolean(row.status),
                                size: "large",
                                class: "ml-8",
                                onClick: () => {
                                },
                                onOnChange: ($event) => changeProviderStatus(row.id, !row.status)
                              }, {
                                open: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>ON</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "ON")
                                    ];
                                  }
                                }),
                                close: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>OFF</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "OFF")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Switch, {
                                  "model-value": Boolean(row.status),
                                  size: "large",
                                  class: "ml-8",
                                  onClick: withModifiers(() => {
                                  }, ["stop"]),
                                  onOnChange: ($event) => changeProviderStatus(row.id, !row.status)
                                }, {
                                  open: withCtx(() => [
                                    createVNode("span", null, "ON")
                                  ]),
                                  close: withCtx(() => [
                                    createVNode("span", null, "OFF")
                                  ]),
                                  _: 2
                                }, 1032, ["model-value", "onClick", "onOnChange"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Table, {
                            columns: providerColumns,
                            data: props.providers
                          }, {
                            action: withCtx(({ row, index }) => [
                              createVNode(_component_Switch, {
                                "model-value": Boolean(row.status),
                                size: "large",
                                class: "ml-8",
                                onClick: withModifiers(() => {
                                }, ["stop"]),
                                onOnChange: ($event) => changeProviderStatus(row.id, !row.status)
                              }, {
                                open: withCtx(() => [
                                  createVNode("span", null, "ON")
                                ]),
                                close: withCtx(() => [
                                  createVNode("span", null, "OFF")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "onClick", "onOnChange"])
                            ]),
                            _: 1
                          }, 8, ["data"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Providers `);
                      } else {
                        return [
                          createTextVNode(" Providers ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Panel, null, {
                      content: withCtx(() => [
                        createVNode(_component_Table, {
                          columns: providerColumns,
                          data: props.providers
                        }, {
                          action: withCtx(({ row, index }) => [
                            createVNode(_component_Switch, {
                              "model-value": Boolean(row.status),
                              size: "large",
                              class: "ml-8",
                              onClick: withModifiers(() => {
                              }, ["stop"]),
                              onOnChange: ($event) => changeProviderStatus(row.id, !row.status)
                            }, {
                              open: withCtx(() => [
                                createVNode("span", null, "ON")
                              ]),
                              close: withCtx(() => [
                                createVNode("span", null, "OFF")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "onClick", "onOnChange"])
                          ]),
                          _: 1
                        }, 8, ["data"])
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Providers ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Table, {
              class: "mt-8",
              columns,
              data: props.products
            }, {
              provider: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(row.provider.name)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(row.provider.name), 1)
                  ];
                }
              }),
              status: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Switch, {
                    "model-value": Boolean(row.status),
                    size: "large",
                    class: "",
                    onClick: () => {
                    },
                    onOnChange: ($event) => changeProductStatus(row.id, !row.status)
                  }, {
                    open: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>ON</span>`);
                      } else {
                        return [
                          createVNode("span", null, "ON")
                        ];
                      }
                    }),
                    close: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>OFF</span>`);
                      } else {
                        return [
                          createVNode("span", null, "OFF")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Switch, {
                      "model-value": Boolean(row.status),
                      size: "large",
                      class: "",
                      onClick: withModifiers(() => {
                      }, ["stop"]),
                      onOnChange: ($event) => changeProductStatus(row.id, !row.status)
                    }, {
                      open: withCtx(() => [
                        createVNode("span", null, "ON")
                      ]),
                      close: withCtx(() => [
                        createVNode("span", null, "OFF")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "onClick", "onOnChange"])
                  ];
                }
              }),
              action: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: `/products/${row.id}`
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"${_scopeId3}><path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"${_scopeId3}></path><path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"${_scopeId3}></path></svg>`);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            class: "w-6 h-6"
                          }, [
                            createVNode("path", { d: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" }),
                            createVNode("path", { d: "M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" })
                          ]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: `/products/${row.id}`
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          class: "w-6 h-6"
                        }, [
                          createVNode("path", { d: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" }),
                          createVNode("path", { d: "M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" })
                        ]))
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Products"),
              createVNode(_component_Collapse, null, {
                default: withCtx(() => [
                  createVNode(_component_Panel, null, {
                    content: withCtx(() => [
                      createVNode(_component_Table, {
                        columns: providerColumns,
                        data: props.providers
                      }, {
                        action: withCtx(({ row, index }) => [
                          createVNode(_component_Switch, {
                            "model-value": Boolean(row.status),
                            size: "large",
                            class: "ml-8",
                            onClick: withModifiers(() => {
                            }, ["stop"]),
                            onOnChange: ($event) => changeProviderStatus(row.id, !row.status)
                          }, {
                            open: withCtx(() => [
                              createVNode("span", null, "ON")
                            ]),
                            close: withCtx(() => [
                              createVNode("span", null, "OFF")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "onClick", "onOnChange"])
                        ]),
                        _: 1
                      }, 8, ["data"])
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Providers ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Table, {
                class: "mt-8",
                columns,
                data: props.products
              }, {
                provider: withCtx(({ row, index }) => [
                  createVNode("span", null, toDisplayString(row.provider.name), 1)
                ]),
                status: withCtx(({ row, index }) => [
                  createVNode(_component_Switch, {
                    "model-value": Boolean(row.status),
                    size: "large",
                    class: "",
                    onClick: withModifiers(() => {
                    }, ["stop"]),
                    onOnChange: ($event) => changeProductStatus(row.id, !row.status)
                  }, {
                    open: withCtx(() => [
                      createVNode("span", null, "ON")
                    ]),
                    close: withCtx(() => [
                      createVNode("span", null, "OFF")
                    ]),
                    _: 2
                  }, 1032, ["model-value", "onClick", "onOnChange"])
                ]),
                action: withCtx(({ row, index }) => [
                  createVNode(unref(Link), {
                    href: `/products/${row.id}`
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        class: "w-6 h-6"
                      }, [
                        createVNode("path", { d: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" }),
                        createVNode("path", { d: "M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" })
                      ]))
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]),
                _: 1
              }, 8, ["data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
