import { resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0eb7e2d2.mjs";
import { Head } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    rows: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const columns = [
      { type: "index", width: 60, align: "center", fixed: "left" },
      { title: "Date", key: "created_at", fixed: "left" },
      { title: "User ID", key: "email", fixed: "left" },
      { title: "Phone", key: "phone", fixed: "left" },
      { title: "Travellers", key: "travellers" },
      { title: "Sessions", key: "sessions" },
      { title: "Quotes", key: "quotes" },
      { title: "Saved Trips", key: "trips" },
      { title: "Policies", key: "policies" },
      { title: "Last Purchase Date", key: "date" },
      { title: "View", slot: "view", width: 160, fixed: "right" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      const _component_Button = resolveComponent("Button");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Customers</h1><div class="shadow mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Table, {
              columns,
              data: __props.rows,
              class: "overflow-auto"
            }, {
              view: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    size: "small",
                    style: { "margin-right": "5px" }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Detail`);
                      } else {
                        return [
                          createTextVNode("Detail")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    size: "small"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`History`);
                      } else {
                        return [
                          createTextVNode("History")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      type: "primary",
                      size: "small",
                      style: { "margin-right": "5px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Detail")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      type: "primary",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("History")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Customers"),
              createVNode("div", { class: "shadow mt-6" }, [
                createVNode(_component_Table, {
                  columns,
                  data: __props.rows,
                  class: "overflow-auto"
                }, {
                  view: withCtx(({ row, index }) => [
                    createVNode(_component_Button, {
                      type: "primary",
                      size: "small",
                      style: { "margin-right": "5px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Detail")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      type: "primary",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("History")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Orders/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
