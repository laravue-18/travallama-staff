import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-0eb7e2d2.mjs";
import "./ApplicationLogo-848ae812.mjs";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    row: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Quotes</h1><div class="grid grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}> Quote ID : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.id : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Q-Type : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.q_type : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Status : </span> Active</div><div${_scopeId}><span class="font-bold"${_scopeId}> User Type : </span> ${ssrInterpolate(__props.row.order ? "Customer" : __props.row.quote ? __props.row.quote.email ? "Lead" : "Visitor" : "Visitor")}</div></div><div class="grid grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}> Email : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.email : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Phone : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.phone : "")}</div></div><div class="grid grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}> First Name : </span> ${ssrInterpolate(__props.row.order ? __props.row.order.f_name : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Last Name : </span> ${ssrInterpolate(__props.row.order ? __props.row.order.l_name : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Age : </span> ${ssrInterpolate(__props.row.order ? __props.row.order.age : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> DOB : </span> ${ssrInterpolate(__props.row.order ? __props.row.order.birthday : "")}</div></div><div class="divide-y"${_scopeId}><div class="my-4"${_scopeId}><h1 class="text-2xl text-indigo-500 mt-8 mb-4"${_scopeId}>Step 1</h1><div class="grid grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}> Destination : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.destination : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Leave Date : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.from : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Return Date : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.to : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Trip Duration : </span> ${ssrInterpolate(__props.row.quote && __props.row.quote.to && __props.row.quote.from ? Math.ceil((new Date(__props.row.quote.to).getTime() - new Date(__props.row.quote.from).getTime()) / (1e3 * 3600 * 24)) : "")}</div></div></div><div class="my-4"${_scopeId}><h1 class="text-2xl text-indigo-500 mt-8 mb-4"${_scopeId}>Step 2</h1><div class="grid grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}> Residence : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.country : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Citizenship : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.citizenship : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Travelers : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.ages ? JSON.parse(__props.row.quote.ages).length : "" : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Ages : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.ages : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Zipcode : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.zipcode : "")}</div></div></div><div class="my-4"${_scopeId}><h1 class="text-2xl text-indigo-500 mt-8 mb-4"${_scopeId}>Step 3</h1><div class="grid grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}> Coverage Type : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.coverage_type : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> CFAR : </span> ${ssrInterpolate(__props.row.quote ? ["No", "Yes"][__props.row.quote.cfar] : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Trip Cost : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.trip_cost : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> First Payment : </span> ${ssrInterpolate(__props.row.quote ? __props.row.quote.first_payment : "")}</div><div${_scopeId}><span class="font-bold"${_scopeId}> Remaining Payments : </span> ${ssrInterpolate(__props.row.quote ? ["No", "Yes"][__props.row.quote.remaining_payment] : "")}</div></div></div><div class="my-4"${_scopeId}><h1 class="text-2xl text-indigo-500 mt-8 mb-4"${_scopeId}>Quote</h1><div class="grid grid-cols-4 gap-4"${_scopeId}><div${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.product1.name : "")}</div><div${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.product2.name : "")}</div><div${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.product3.name : "")}</div><div${_scopeId}><button class="bg-indigo-500 text-white px-4 py-1 rounded-full"${_scopeId}>View All Products</button></div></div></div><div class="my-4"${_scopeId}><h1 class="text-2xl text-indigo-500 mt-8 mb-4"${_scopeId}>Checkout</h1><div class="grid grid-cols-4 gap-4"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Quotes"),
              createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " Quote ID : "),
                  createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.id : ""), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " Q-Type : "),
                  createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.q_type : ""), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " Status : "),
                  createTextVNode(" Active")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " User Type : "),
                  createTextVNode(" " + toDisplayString(__props.row.order ? "Customer" : __props.row.quote ? __props.row.quote.email ? "Lead" : "Visitor" : "Visitor"), 1)
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " Email : "),
                  createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.email : ""), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " Phone : "),
                  createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.phone : ""), 1)
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " First Name : "),
                  createTextVNode(" " + toDisplayString(__props.row.order ? __props.row.order.f_name : ""), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " Last Name : "),
                  createTextVNode(" " + toDisplayString(__props.row.order ? __props.row.order.l_name : ""), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " Age : "),
                  createTextVNode(" " + toDisplayString(__props.row.order ? __props.row.order.age : ""), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, " DOB : "),
                  createTextVNode(" " + toDisplayString(__props.row.order ? __props.row.order.birthday : ""), 1)
                ])
              ]),
              createVNode("div", { class: "divide-y" }, [
                createVNode("div", { class: "my-4" }, [
                  createVNode("h1", { class: "text-2xl text-indigo-500 mt-8 mb-4" }, "Step 1"),
                  createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Destination : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.destination : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Leave Date : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.from : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Return Date : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.to : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Trip Duration : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote && __props.row.quote.to && __props.row.quote.from ? Math.ceil((new Date(__props.row.quote.to).getTime() - new Date(__props.row.quote.from).getTime()) / (1e3 * 3600 * 24)) : ""), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "my-4" }, [
                  createVNode("h1", { class: "text-2xl text-indigo-500 mt-8 mb-4" }, "Step 2"),
                  createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Residence : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.country : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Citizenship : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.citizenship : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Travelers : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.ages ? JSON.parse(__props.row.quote.ages).length : "" : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Ages : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.ages : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Zipcode : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.zipcode : ""), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "my-4" }, [
                  createVNode("h1", { class: "text-2xl text-indigo-500 mt-8 mb-4" }, "Step 3"),
                  createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Coverage Type : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.coverage_type : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " CFAR : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? ["No", "Yes"][__props.row.quote.cfar] : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Trip Cost : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.trip_cost : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " First Payment : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? __props.row.quote.first_payment : ""), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-bold" }, " Remaining Payments : "),
                      createTextVNode(" " + toDisplayString(__props.row.quote ? ["No", "Yes"][__props.row.quote.remaining_payment] : ""), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "my-4" }, [
                  createVNode("h1", { class: "text-2xl text-indigo-500 mt-8 mb-4" }, "Quote"),
                  createVNode("div", { class: "grid grid-cols-4 gap-4" }, [
                    createVNode("div", null, toDisplayString(__props.row.quote ? __props.row.quote.product1.name : ""), 1),
                    createVNode("div", null, toDisplayString(__props.row.quote ? __props.row.quote.product2.name : ""), 1),
                    createVNode("div", null, toDisplayString(__props.row.quote ? __props.row.quote.product3.name : ""), 1),
                    createVNode("div", null, [
                      createVNode("button", { class: "bg-indigo-500 text-white px-4 py-1 rounded-full" }, "View All Products")
                    ])
                  ])
                ]),
                createVNode("div", { class: "my-4" }, [
                  createVNode("h1", { class: "text-2xl text-indigo-500 mt-8 mb-4" }, "Checkout"),
                  createVNode("div", { class: "grid grid-cols-4 gap-4" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quotes/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
