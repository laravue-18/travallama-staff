import { resolveComponent, unref, withCtx, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0eb7e2d2.mjs";
import { Head, router } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    providers: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const columns = [
      { type: "index", width: 60, align: "center" },
      { title: "Name", key: "name" },
      { title: "Action", slot: "action" }
    ];
    function changeProviderStatus(id, status) {
      router.post(route("providers.update", id), { status });
    }
    function changeProductStatus(id, status) {
      router.post(route("products.update", id), { status });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      const _component_Collapse = resolveComponent("Collapse");
      const _component_Panel = resolveComponent("Panel");
      const _component_Switch = resolveComponent("Switch");
      const _component_Table = resolveComponent("Table");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Products</h1>`);
            _push2(ssrRenderComponent(_component_Card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Collapse, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(props.providers, (provider) => {
                          _push4(ssrRenderComponent(_component_Panel, {
                            class: "",
                            name: `${provider.id}`
                          }, {
                            content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Table, {
                                  columns,
                                  data: provider["products"]
                                }, {
                                  action: withCtx(({ row, index }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Switch, {
                                        "model-value": Boolean(row.status),
                                        size: "large",
                                        class: "ml-8",
                                        onClick: () => {
                                        },
                                        onOnChange: ($event) => changeProductStatus(row.id, !row.status)
                                      }, {
                                        open: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>ON</span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, "ON")
                                            ];
                                          }
                                        }),
                                        close: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>OFF</span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, "OFF")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Switch, {
                                          "model-value": Boolean(row.status),
                                          size: "large",
                                          class: "ml-8",
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
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Table, {
                                    columns,
                                    data: provider["products"]
                                  }, {
                                    action: withCtx(({ row, index }) => [
                                      createVNode(_component_Switch, {
                                        "model-value": Boolean(row.status),
                                        size: "large",
                                        class: "ml-8",
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
                                    _: 2
                                  }, 1032, ["data"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(provider.name)}</span>`);
                                _push5(ssrRenderComponent(_component_Switch, {
                                  "model-value": Boolean(provider.status),
                                  size: "large",
                                  class: "ml-8",
                                  onClick: () => {
                                  },
                                  onOnChange: ($event) => changeProviderStatus(provider.id, !provider.status)
                                }, {
                                  open: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span${_scopeId5}>ON</span>`);
                                    } else {
                                      return [
                                        createVNode("span", null, "ON")
                                      ];
                                    }
                                  }),
                                  close: withCtx((_5, _push6, _parent6, _scopeId5) => {
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
                                  createVNode("span", null, toDisplayString(provider.name), 1),
                                  createVNode(_component_Switch, {
                                    "model-value": Boolean(provider.status),
                                    size: "large",
                                    class: "ml-8",
                                    onClick: withModifiers(() => {
                                    }, ["stop"]),
                                    onOnChange: ($event) => changeProviderStatus(provider.id, !provider.status)
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
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.providers, (provider) => {
                            return openBlock(), createBlock(_component_Panel, {
                              class: "",
                              name: `${provider.id}`
                            }, {
                              content: withCtx(() => [
                                createVNode(_component_Table, {
                                  columns,
                                  data: provider["products"]
                                }, {
                                  action: withCtx(({ row, index }) => [
                                    createVNode(_component_Switch, {
                                      "model-value": Boolean(row.status),
                                      size: "large",
                                      class: "ml-8",
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
                                  _: 2
                                }, 1032, ["data"])
                              ]),
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(provider.name), 1),
                                createVNode(_component_Switch, {
                                  "model-value": Boolean(provider.status),
                                  size: "large",
                                  class: "ml-8",
                                  onClick: withModifiers(() => {
                                  }, ["stop"]),
                                  onOnChange: ($event) => changeProviderStatus(provider.id, !provider.status)
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
                              _: 2
                            }, 1032, ["name"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Collapse, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.providers, (provider) => {
                          return openBlock(), createBlock(_component_Panel, {
                            class: "",
                            name: `${provider.id}`
                          }, {
                            content: withCtx(() => [
                              createVNode(_component_Table, {
                                columns,
                                data: provider["products"]
                              }, {
                                action: withCtx(({ row, index }) => [
                                  createVNode(_component_Switch, {
                                    "model-value": Boolean(row.status),
                                    size: "large",
                                    class: "ml-8",
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
                                _: 2
                              }, 1032, ["data"])
                            ]),
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(provider.name), 1),
                              createVNode(_component_Switch, {
                                "model-value": Boolean(provider.status),
                                size: "large",
                                class: "ml-8",
                                onClick: withModifiers(() => {
                                }, ["stop"]),
                                onOnChange: ($event) => changeProviderStatus(provider.id, !provider.status)
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
                            _: 2
                          }, 1032, ["name"]);
                        }), 256))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Products"),
              createVNode(_component_Card, null, {
                default: withCtx(() => [
                  createVNode(_component_Collapse, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.providers, (provider) => {
                        return openBlock(), createBlock(_component_Panel, {
                          class: "",
                          name: `${provider.id}`
                        }, {
                          content: withCtx(() => [
                            createVNode(_component_Table, {
                              columns,
                              data: provider["products"]
                            }, {
                              action: withCtx(({ row, index }) => [
                                createVNode(_component_Switch, {
                                  "model-value": Boolean(row.status),
                                  size: "large",
                                  class: "ml-8",
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
                              _: 2
                            }, 1032, ["data"])
                          ]),
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(provider.name), 1),
                            createVNode(_component_Switch, {
                              "model-value": Boolean(provider.status),
                              size: "large",
                              class: "ml-8",
                              onClick: withModifiers(() => {
                              }, ["stop"]),
                              onOnChange: ($event) => changeProviderStatus(provider.id, !provider.status)
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
                          _: 2
                        }, 1032, ["name"]);
                      }), 256))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
