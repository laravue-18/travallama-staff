import { resolveComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0eb7e2d2.mjs";
import { Head } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Leads",
  __ssrInlineRender: true,
  props: {
    visitors: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const columns = [
      { type: "index", width: 60, align: "center" },
      { title: "Date", key: "created_at" },
      { title: "User ID", key: "email" },
      { title: "Phone", key: "phone" },
      { title: "Quote ID", key: "id" },
      { title: "Q-type", key: "qtype" },
      { title: "Destination", key: "destination" },
      { title: "Coverage Type", key: "coverage_type" },
      { title: "Selected", key: "product_id" },
      { title: "Residence", key: "product_id" },
      { title: "Leave", key: "from" },
      { title: "Return", key: "to" },
      { title: "User-Source", key: "to" },
      { title: "Exit Page", key: "exit_page" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Leads</h1><div class="flex"${_scopeId}><div class="w-72 bg-white rounded shadow p-4"${_scopeId}><h1 class="text-indigo-400 text-lg font-black mb-6"${_scopeId}> Q-Type </h1><p class="flex justify-between items-center mb-2"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Individual</span><span class="text-green-500 text-xl font-bold"${_scopeId}> 77% </span></p><p class="flex justify-between items-center mb-2"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Family</span><span class="text-green-500 text-xl font-bold"${_scopeId}> 10% </span></p><p class="flex justify-between items-center"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Multi Family</span><span class="text-green-500 text-xl font-bold"${_scopeId}> 8% </span></p></div><div class="w-72 bg-white rounded shadow p-4 mx-12"${_scopeId}><h1 class="text-indigo-400 text-lg font-black mb-6"${_scopeId}> Coverage Type </h1><p class="flex justify-between items-center mb-2"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Medical</span><span class="text-green-500 text-xl font-bold"${_scopeId}> 30% </span></p><p class="flex justify-between items-center"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Comprehensive</span><span class="text-green-500 text-xl font-bold"${_scopeId}> 70% </span></p></div><div class="w-72 bg-white rounded shadow p-4"${_scopeId}><h1 class="text-indigo-400 text-lg font-black mb-6"${_scopeId}> Exit Page </h1><p class="flex justify-between items-center mb-2"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Step 1</span><span class="text-green-500 text-xl font-bold"${_scopeId}> 10% </span></p><p class="flex justify-between items-center mb-2"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Step 2</span><span class="text-green-500 text-xl font-bold"${_scopeId}> 20% </span></p><p class="flex justify-between items-center"${_scopeId}><span class="text-gray-500 text-xl font-bold"${_scopeId}> Step 3 </span><span class="text-green-500 text-xl font-bold"${_scopeId}> 8% </span></p></div></div><div class="shadow mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Table, {
              columns,
              data: __props.visitors
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Leads"),
              createVNode("div", { class: "flex" }, [
                createVNode("div", { class: "w-72 bg-white rounded shadow p-4" }, [
                  createVNode("h1", { class: "text-indigo-400 text-lg font-black mb-6" }, " Q-Type "),
                  createVNode("p", { class: "flex justify-between items-center mb-2" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Individual"),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 77% ")
                  ]),
                  createVNode("p", { class: "flex justify-between items-center mb-2" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Family"),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 10% ")
                  ]),
                  createVNode("p", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Multi Family"),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 8% ")
                  ])
                ]),
                createVNode("div", { class: "w-72 bg-white rounded shadow p-4 mx-12" }, [
                  createVNode("h1", { class: "text-indigo-400 text-lg font-black mb-6" }, " Coverage Type "),
                  createVNode("p", { class: "flex justify-between items-center mb-2" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Medical"),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 30% ")
                  ]),
                  createVNode("p", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Comprehensive"),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 70% ")
                  ])
                ]),
                createVNode("div", { class: "w-72 bg-white rounded shadow p-4" }, [
                  createVNode("h1", { class: "text-indigo-400 text-lg font-black mb-6" }, " Exit Page "),
                  createVNode("p", { class: "flex justify-between items-center mb-2" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Step 1"),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 10% ")
                  ]),
                  createVNode("p", { class: "flex justify-between items-center mb-2" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Step 2"),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 20% ")
                  ]),
                  createVNode("p", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "text-gray-500 text-xl font-bold" }, " Step 3 "),
                    createVNode("span", { class: "text-green-500 text-xl font-bold" }, " 8% ")
                  ])
                ])
              ]),
              createVNode("div", { class: "shadow mt-6" }, [
                createVNode(_component_Table, {
                  columns,
                  data: __props.visitors
                }, null, 8, ["data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quotes/Leads.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
