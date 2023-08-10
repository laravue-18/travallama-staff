import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { Head, router } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const Show_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    const changeHandler = (e, id = null) => {
      router.post("", {
        [e.target.name]: e.target.value,
        id
      }, {
        preserveScroll: true,
        onSuccess: () => {
          if (id == 0)
            e.target.value = "";
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Product Edit</h1><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Provider</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Name</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Coverage Type</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Status</th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.product.provider_id)}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.product.name)}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.product.type)}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.product.status)}</td></tr></tbody></table>`);
            if (__props.product.type == "comprehensive") {
              _push2(`<!--[--><h4 class="mt-8 mb-4 text-xl font-extrabold"${_scopeId}>TRIP PROTECT</h4><table class="w-full bordered"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="font-bold border border-gray-400 p-4 w-96"${_scopeId}>Cancellation</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="w-full text-sm border rounded px-2 py-1" name="cancellation"${ssrRenderAttr("value", __props.product.cancellation ? __props.product.cancellation.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Cancel For Any Reason(CFAR)</td><td class="border border-gray-400 p-4"${_scopeId}><div class="mb-2"${_scopeId}><label for=""${_scopeId}>Label</label><input type="text" class="w-full text-sm border rounded px-2 py-1" name="cfar_label"${ssrRenderAttr("value", __props.product.cfar ? __props.product.cfar.label : "")}${_scopeId}></div><div${_scopeId}><label for=""${_scopeId}>Additional Information</label><input type="text" class="w-full text-sm border rounded px-2 py-1" name="cfar_info"${ssrRenderAttr("value", __props.product.cfar ? __props.product.cfar.additional_info : "")}${_scopeId}></div></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Interruption</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="w-full text-sm border rounded px-2 py-1" name="interruption"${ssrRenderAttr("value", __props.product.interruption ? __props.product.interruption.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Interrupt For Any Reason (IFAR)</td><td class="border border-gray-400 p-4"${_scopeId}><div class="mb-2"${_scopeId}><label for=""${_scopeId}>Label</label><input type="text" class="w-full text-sm border rounded px-2 py-1" name="ifar_label"${ssrRenderAttr("value", __props.product.ifar ? __props.product.ifar.label : "")}${_scopeId}></div><div${_scopeId}><label for=""${_scopeId}>Additional Information</label><input type="text" class="w-full text-sm border rounded px-2 py-1" name="ifar_info"${ssrRenderAttr("value", __props.product.ifar ? __props.product.ifar.additional_info : "")}${_scopeId}></div></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Trip Delay</td><td class="border border-gray-400 p-4"${_scopeId}>`);
              if (__props.product.trip_delays) {
                _push2(`<!--[-->`);
                ssrRenderList(__props.product.trip_delays, (item) => {
                  _push2(`<div class="flex gap-4 mb-2"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="trip_delay_label"${ssrRenderAttr("value", item.label)} placeholder="Label"${_scopeId}><input type="text" class="w-full text-sm border rounded px-2 py-1" name="trip_delay_info"${ssrRenderAttr("value", item.additional_info)} placeholder="Addional Information"${_scopeId}></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex gap-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="trip_delay_label" placeholder="Label for New"${_scopeId}></div></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Missed Connection</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="w-full text-sm border rounded px-2 py-1" name="missed_connection"${ssrRenderAttr("value", __props.product.missed_connection ? __props.product.missed_connection.label : "")}${_scopeId}></td></tr></tbody></table><h4 class="mt-8 mb-4 text-xl font-extrabold"${_scopeId}>HEALTH &amp; ACCIDENT</h4><table class="w-full bordered"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="font-bold border border-gray-400 p-4 w-96"${_scopeId}>Medical</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="w-full text-sm border rounded px-2 py-1" name="medical"${ssrRenderAttr("value", __props.product.medical ? __props.product.medical.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Emergency Medical Evacuation</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="w-full text-sm border rounded px-2 py-1" name="emergency_medical"${ssrRenderAttr("value", __props.product.emergency_medical ? __props.product.emergency_medical.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Preexisting conditions waiver</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="w-full text-sm border rounded px-2 py-1" name="preexisting_condition"${ssrRenderAttr("value", __props.product.preexisting_condition ? __props.product.preexisting_condition.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Accidental Death &amp; Dismemberment (AD&amp;D)</td><td class="border border-gray-400 p-4"${_scopeId}>`);
              if (__props.product.adds) {
                _push2(`<!--[-->`);
                ssrRenderList(__props.product.adds, (item) => {
                  _push2(`<div class="flex gap-4 mb-2"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="add_label"${ssrRenderAttr("value", item.label)} placeholder="Label"${_scopeId}></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex gap-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="add_label" placeholder="Label for New"${_scopeId}></div></td></tr></tbody></table><h4 class="mt-8 mb-4 text-xl font-extrabold"${_scopeId}>PROPERTY COVERAGE</h4><table class="w-full bordered"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="font-bold border border-gray-400 p-4 w-96"${_scopeId}>Baggage Loss</td><td class="border border-gray-400 p-4"${_scopeId}>`);
              if (__props.product.baggage_losses) {
                _push2(`<!--[-->`);
                ssrRenderList(__props.product.baggage_losses, (item) => {
                  _push2(`<div class="flex gap-4 mb-2"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="baggage_loss_label"${ssrRenderAttr("value", item.label)} placeholder="Label"${_scopeId}></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex gap-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="baggage_loss_label" placeholder="Label for New"${_scopeId}></div></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Baggage Delay</td><td class="border border-gray-400 p-4"${_scopeId}>`);
              if (__props.product.baggage_delaies) {
                _push2(`<!--[-->`);
                ssrRenderList(__props.product.baggage_delaies, (item) => {
                  _push2(`<div class="flex gap-4 mb-2"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="baggage_delay_label"${ssrRenderAttr("value", item.label)} placeholder="Label"${_scopeId}></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex gap-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="baggage_delay_label" placeholder="Label for New"${_scopeId}></div></td></tr></tbody></table><h4 class="mt-8 mb-4 text-xl font-extrabold"${_scopeId}>OTHER IMPORTANT COVERAGES</h4><table class="w-full bordered"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="font-bold border border-gray-400 p-4 w-96"${_scopeId}>Cancellation for Work Reasons</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="cancellation_for_work_reason"${ssrRenderAttr("value", __props.product.cancellation_for_work_reason ? __props.product.cancellation_for_work_reason.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Electronic/Professional Equipment</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="equipment"${ssrRenderAttr("value", __props.product.equipment ? __props.product.equipment.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Poltical, Security, Natural Disaster Evacuation</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="disaster_evacuation"${ssrRenderAttr("value", __props.product.disaster_evacuation ? __props.product.disaster_evacuation.label : "")}${_scopeId}></td></tr><tr${_scopeId}><td class="font-bold border border-gray-400 p-4"${_scopeId}>Car Rental Damage</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="car_rental_damage"${ssrRenderAttr("value", __props.product.car_rental_damage ? __props.product.car_rental_damage.label : "")}${_scopeId}></td></tr></tbody></table><h4 class="mt-8 mb-4 text-xl font-extrabold"${_scopeId}>REFUND POLICY</h4><table class="w-full bordered"${_scopeId}><tbody${_scopeId}><tr${_scopeId}><td class="font-bold border border-gray-400 p-4 w-96"${_scopeId}>REFUND POLICY</td><td class="border border-gray-400 p-4"${_scopeId}><input type="text" class="text-sm border rounded px-2 py-1" name="refund_policy"${ssrRenderAttr("value", __props.product.refund_policy ? __props.product.refund_policy.label : "")}${_scopeId}></td></tr></tbody></table><!--]-->`);
            } else {
              _push2(`<!--[--><!--]-->`);
            }
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Product Edit"),
              createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Provider"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Name"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Coverage Type"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Status")
                  ])
                ]),
                createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                  createVNode("tr", null, [
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.product.provider_id), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.product.name), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.product.type), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.product.status), 1)
                  ])
                ])
              ]),
              __props.product.type == "comprehensive" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("h4", { class: "mt-8 mb-4 text-xl font-extrabold" }, "TRIP PROTECT"),
                createVNode("table", { class: "w-full bordered" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4 w-96" }, "Cancellation"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "w-full text-sm border rounded px-2 py-1",
                          name: "cancellation",
                          value: __props.product.cancellation ? __props.product.cancellation.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Cancel For Any Reason(CFAR)"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("label", { for: "" }, "Label"),
                          createVNode("input", {
                            type: "text",
                            class: "w-full text-sm border rounded px-2 py-1",
                            name: "cfar_label",
                            value: __props.product.cfar ? __props.product.cfar.label : "",
                            onChange: changeHandler
                          }, null, 40, ["value"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { for: "" }, "Additional Information"),
                          createVNode("input", {
                            type: "text",
                            class: "w-full text-sm border rounded px-2 py-1",
                            name: "cfar_info",
                            value: __props.product.cfar ? __props.product.cfar.additional_info : "",
                            onChange: changeHandler
                          }, null, 40, ["value"])
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Interruption"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "w-full text-sm border rounded px-2 py-1",
                          name: "interruption",
                          value: __props.product.interruption ? __props.product.interruption.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Interrupt For Any Reason (IFAR)"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("label", { for: "" }, "Label"),
                          createVNode("input", {
                            type: "text",
                            class: "w-full text-sm border rounded px-2 py-1",
                            name: "ifar_label",
                            value: __props.product.ifar ? __props.product.ifar.label : "",
                            onChange: changeHandler
                          }, null, 40, ["value"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { for: "" }, "Additional Information"),
                          createVNode("input", {
                            type: "text",
                            class: "w-full text-sm border rounded px-2 py-1",
                            name: "ifar_info",
                            value: __props.product.ifar ? __props.product.ifar.additional_info : "",
                            onChange: changeHandler
                          }, null, 40, ["value"])
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Trip Delay"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        __props.product.trip_delays ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.product.trip_delays, (item) => {
                          return openBlock(), createBlock("div", { class: "flex gap-4 mb-2" }, [
                            createVNode("input", {
                              type: "text",
                              class: "text-sm border rounded px-2 py-1",
                              name: "trip_delay_label",
                              value: item.label,
                              onChange: (e) => changeHandler(e, item.id),
                              placeholder: "Label"
                            }, null, 40, ["value", "onChange"]),
                            createVNode("input", {
                              type: "text",
                              class: "w-full text-sm border rounded px-2 py-1",
                              name: "trip_delay_info",
                              value: item.additional_info,
                              onChange: (e) => changeHandler(e, item.id),
                              placeholder: "Addional Information"
                            }, null, 40, ["value", "onChange"])
                          ]);
                        }), 256)) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("input", {
                            type: "text",
                            class: "text-sm border rounded px-2 py-1",
                            name: "trip_delay_label",
                            onChange: (e) => changeHandler(e, 0),
                            placeholder: "Label for New"
                          }, null, 40, ["onChange"])
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Missed Connection"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "w-full text-sm border rounded px-2 py-1",
                          name: "missed_connection",
                          value: __props.product.missed_connection ? __props.product.missed_connection.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ])
                  ])
                ]),
                createVNode("h4", { class: "mt-8 mb-4 text-xl font-extrabold" }, "HEALTH & ACCIDENT"),
                createVNode("table", { class: "w-full bordered" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4 w-96" }, "Medical"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "w-full text-sm border rounded px-2 py-1",
                          name: "medical",
                          value: __props.product.medical ? __props.product.medical.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Emergency Medical Evacuation"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "w-full text-sm border rounded px-2 py-1",
                          name: "emergency_medical",
                          value: __props.product.emergency_medical ? __props.product.emergency_medical.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Preexisting conditions waiver"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "w-full text-sm border rounded px-2 py-1",
                          name: "preexisting_condition",
                          value: __props.product.preexisting_condition ? __props.product.preexisting_condition.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Accidental Death & Dismemberment (AD&D)"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        __props.product.adds ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.product.adds, (item) => {
                          return openBlock(), createBlock("div", { class: "flex gap-4 mb-2" }, [
                            createVNode("input", {
                              type: "text",
                              class: "text-sm border rounded px-2 py-1",
                              name: "add_label",
                              value: item.label,
                              onChange: (e) => changeHandler(e, item.id),
                              placeholder: "Label"
                            }, null, 40, ["value", "onChange"])
                          ]);
                        }), 256)) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("input", {
                            type: "text",
                            class: "text-sm border rounded px-2 py-1",
                            name: "add_label",
                            onChange: (e) => changeHandler(e, 0),
                            placeholder: "Label for New"
                          }, null, 40, ["onChange"])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("h4", { class: "mt-8 mb-4 text-xl font-extrabold" }, "PROPERTY COVERAGE"),
                createVNode("table", { class: "w-full bordered" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4 w-96" }, "Baggage Loss"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        __props.product.baggage_losses ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.product.baggage_losses, (item) => {
                          return openBlock(), createBlock("div", { class: "flex gap-4 mb-2" }, [
                            createVNode("input", {
                              type: "text",
                              class: "text-sm border rounded px-2 py-1",
                              name: "baggage_loss_label",
                              value: item.label,
                              onChange: (e) => changeHandler(e, item.id),
                              placeholder: "Label"
                            }, null, 40, ["value", "onChange"])
                          ]);
                        }), 256)) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("input", {
                            type: "text",
                            class: "text-sm border rounded px-2 py-1",
                            name: "baggage_loss_label",
                            onChange: (e) => changeHandler(e, 0),
                            placeholder: "Label for New"
                          }, null, 40, ["onChange"])
                        ])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Baggage Delay"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        __props.product.baggage_delaies ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.product.baggage_delaies, (item) => {
                          return openBlock(), createBlock("div", { class: "flex gap-4 mb-2" }, [
                            createVNode("input", {
                              type: "text",
                              class: "text-sm border rounded px-2 py-1",
                              name: "baggage_delay_label",
                              value: item.label,
                              onChange: (e) => changeHandler(e, item.id),
                              placeholder: "Label"
                            }, null, 40, ["value", "onChange"])
                          ]);
                        }), 256)) : createCommentVNode("", true),
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("input", {
                            type: "text",
                            class: "text-sm border rounded px-2 py-1",
                            name: "baggage_delay_label",
                            onChange: (e) => changeHandler(e, 0),
                            placeholder: "Label for New"
                          }, null, 40, ["onChange"])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("h4", { class: "mt-8 mb-4 text-xl font-extrabold" }, "OTHER IMPORTANT COVERAGES"),
                createVNode("table", { class: "w-full bordered" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4 w-96" }, "Cancellation for Work Reasons"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "text-sm border rounded px-2 py-1",
                          name: "cancellation_for_work_reason",
                          value: __props.product.cancellation_for_work_reason ? __props.product.cancellation_for_work_reason.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Electronic/Professional Equipment"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "text-sm border rounded px-2 py-1",
                          name: "equipment",
                          value: __props.product.equipment ? __props.product.equipment.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Poltical, Security, Natural Disaster Evacuation"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "text-sm border rounded px-2 py-1",
                          name: "disaster_evacuation",
                          value: __props.product.disaster_evacuation ? __props.product.disaster_evacuation.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4" }, "Car Rental Damage"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "text-sm border rounded px-2 py-1",
                          name: "car_rental_damage",
                          value: __props.product.car_rental_damage ? __props.product.car_rental_damage.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ])
                  ])
                ]),
                createVNode("h4", { class: "mt-8 mb-4 text-xl font-extrabold" }, "REFUND POLICY"),
                createVNode("table", { class: "w-full bordered" }, [
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "font-bold border border-gray-400 p-4 w-96" }, "REFUND POLICY"),
                      createVNode("td", { class: "border border-gray-400 p-4" }, [
                        createVNode("input", {
                          type: "text",
                          class: "text-sm border rounded px-2 py-1",
                          name: "refund_policy",
                          value: __props.product.refund_policy ? __props.product.refund_policy.label : "",
                          onChange: changeHandler
                        }, null, 40, ["value"])
                      ])
                    ])
                  ])
                ])
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
