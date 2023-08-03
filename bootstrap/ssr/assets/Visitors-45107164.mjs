import { reactive, watch, resolveComponent, unref, withCtx, createVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { Head } from "@inertiajs/vue3";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import { P as Pagination } from "./Pagination-c6d28c2d.mjs";
import { Inertia } from "@inertiajs/inertia";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Visitors",
  __ssrInlineRender: true,
  props: { rows: Object },
  setup(__props) {
    const columns = [
      { title: "Date", key: "created_at" },
      { title: "Timestamp", key: "created_at" },
      { title: "User Type", key: "created_at" },
      { title: "Quote ID", key: "id" },
      { title: "Q-type", key: "qtype" },
      { title: "Destination", key: "destination" },
      { title: "Coverage Type", key: "coverage_type" },
      { title: "Selected", key: "product_id" },
      { title: "Residence", key: "product_id" },
      { title: "Leave", key: "from" },
      { title: "Return", key: "to" },
      { title: "Success", key: "to" },
      { title: "Exit Page", key: "exit_page" },
      { title: "View Details", key: "exit_page" }
    ];
    const filter = reactive({
      search: ""
    });
    watch(filter, (val) => {
      Inertia.get("/visitors", {
        search: "ak"
      }, {
        preserveState: true
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Visitors</h1>`);
            _push2(ssrRenderComponent(unref(Disclosure), null, {
              default: withCtx((open, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full justify-between rounded bg-white px-4 py-2 border" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Quick Stats</span>`);
                        _push4(ssrRenderComponent(unref(ChevronUpIcon), {
                          class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", null, "Quick Stats"),
                          createVNode(unref(ChevronUpIcon), {
                            class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                          }, null, 8, ["class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(DisclosurePanel), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-3 lg:grid-cols-5 gap-12 py-4"${_scopeId3}><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Total Quotes </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Month To Date </span><span class="text-green-500"${_scopeId3}> 511 </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Last Month</span><span class="text-green-500"${_scopeId3}> 233 </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Last 30 Days</span><span class="text-green-500"${_scopeId3}> 254 </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Week To Day</span><span class="text-green-500"${_scopeId3}> 77 </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Last 7 Days</span><span class="text-green-500"${_scopeId3}> 101 </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Duration </span><span class="text-green-500"${_scopeId3}> --- </span></p></div></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Success Rate </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Exit </span><span class="text-green-500"${_scopeId3}> 350 | 80% </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Lead </span><span class="text-green-500"${_scopeId3}> 150 | 20% </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Purchase </span><span class="text-green-500"${_scopeId3}> 8% </span></p></div></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Repeat </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Lead </span><span class="text-green-500"${_scopeId3}> 101 </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Customer </span><span class="text-green-500"${_scopeId3}> 54 </span></p></div></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Coverage Type </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Medical </span><span class="text-green-500"${_scopeId3}> 30% </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Comprehensive </span><span class="text-green-500"${_scopeId3}> 70% </span></p></div></div><div class="p-2"${_scopeId3}><h1 class="text-indigo-400 text-lg mb-2"${_scopeId3}> Q-Type </h1><div class="divide-y"${_scopeId3}><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Individual </span><span class="text-green-500"${_scopeId3}> 77% </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Family </span><span class="text-green-500"${_scopeId3}> 10% </span></p><p class="flex justify-between py-2"${_scopeId3}><span class="text-gray-500"${_scopeId3}> Multi Family </span><span class="text-green-500"${_scopeId3}> 8% </span></p></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-3 lg:grid-cols-5 gap-12 py-4" }, [
                            createVNode("div", { class: "p-2" }, [
                              createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Total Quotes "),
                              createVNode("div", { class: "divide-y" }, [
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Month To Date "),
                                  createVNode("span", { class: "text-green-500" }, " 511 ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Last Month"),
                                  createVNode("span", { class: "text-green-500" }, " 233 ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Last 30 Days"),
                                  createVNode("span", { class: "text-green-500" }, " 254 ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Week To Day"),
                                  createVNode("span", { class: "text-green-500" }, " 77 ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Last 7 Days"),
                                  createVNode("span", { class: "text-green-500" }, " 101 ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Duration "),
                                  createVNode("span", { class: "text-green-500" }, " --- ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "p-2" }, [
                              createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Success Rate "),
                              createVNode("div", { class: "divide-y" }, [
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Exit "),
                                  createVNode("span", { class: "text-green-500" }, " 350 | 80% ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Lead "),
                                  createVNode("span", { class: "text-green-500" }, " 150 | 20% ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Purchase "),
                                  createVNode("span", { class: "text-green-500" }, " 8% ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "p-2" }, [
                              createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Repeat "),
                              createVNode("div", { class: "divide-y" }, [
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Lead "),
                                  createVNode("span", { class: "text-green-500" }, " 101 ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Customer "),
                                  createVNode("span", { class: "text-green-500" }, " 54 ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "p-2" }, [
                              createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Coverage Type "),
                              createVNode("div", { class: "divide-y" }, [
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Medical "),
                                  createVNode("span", { class: "text-green-500" }, " 30% ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Comprehensive "),
                                  createVNode("span", { class: "text-green-500" }, " 70% ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "p-2" }, [
                              createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Q-Type "),
                              createVNode("div", { class: "divide-y" }, [
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Individual "),
                                  createVNode("span", { class: "text-green-500" }, " 77% ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Family "),
                                  createVNode("span", { class: "text-green-500" }, " 10% ")
                                ]),
                                createVNode("p", { class: "flex justify-between py-2" }, [
                                  createVNode("span", { class: "text-gray-500" }, " Multi Family "),
                                  createVNode("span", { class: "text-green-500" }, " 8% ")
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
                    createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded bg-white px-4 py-2 border" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Quick Stats"),
                        createVNode(unref(ChevronUpIcon), {
                          class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                        }, null, 8, ["class"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(DisclosurePanel), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-3 lg:grid-cols-5 gap-12 py-4" }, [
                          createVNode("div", { class: "p-2" }, [
                            createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Total Quotes "),
                            createVNode("div", { class: "divide-y" }, [
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Month To Date "),
                                createVNode("span", { class: "text-green-500" }, " 511 ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Last Month"),
                                createVNode("span", { class: "text-green-500" }, " 233 ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Last 30 Days"),
                                createVNode("span", { class: "text-green-500" }, " 254 ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Week To Day"),
                                createVNode("span", { class: "text-green-500" }, " 77 ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Last 7 Days"),
                                createVNode("span", { class: "text-green-500" }, " 101 ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Duration "),
                                createVNode("span", { class: "text-green-500" }, " --- ")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "p-2" }, [
                            createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Success Rate "),
                            createVNode("div", { class: "divide-y" }, [
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Exit "),
                                createVNode("span", { class: "text-green-500" }, " 350 | 80% ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Lead "),
                                createVNode("span", { class: "text-green-500" }, " 150 | 20% ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Purchase "),
                                createVNode("span", { class: "text-green-500" }, " 8% ")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "p-2" }, [
                            createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Repeat "),
                            createVNode("div", { class: "divide-y" }, [
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Lead "),
                                createVNode("span", { class: "text-green-500" }, " 101 ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Customer "),
                                createVNode("span", { class: "text-green-500" }, " 54 ")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "p-2" }, [
                            createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Coverage Type "),
                            createVNode("div", { class: "divide-y" }, [
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Medical "),
                                createVNode("span", { class: "text-green-500" }, " 30% ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Comprehensive "),
                                createVNode("span", { class: "text-green-500" }, " 70% ")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "p-2" }, [
                            createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Q-Type "),
                            createVNode("div", { class: "divide-y" }, [
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Individual "),
                                createVNode("span", { class: "text-green-500" }, " 77% ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Family "),
                                createVNode("span", { class: "text-green-500" }, " 10% ")
                              ]),
                              createVNode("p", { class: "flex justify-between py-2" }, [
                                createVNode("span", { class: "text-gray-500" }, " Multi Family "),
                                createVNode("span", { class: "text-green-500" }, " 8% ")
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
            _push2(`<div class="bg-white rounded p-4 my-4"${_scopeId}><input type="text"${ssrRenderAttr("value", filter.search)} placeholder="Search..." class="border border-gray-200 rounded px-4 py-2"${_scopeId}></div><div class="shadow mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Table, {
              columns,
              data: __props.rows.data
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(Pagination, {
              class: "mt-4",
              links: __props.rows.links
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Visitors"),
              createVNode(unref(Disclosure), null, {
                default: withCtx((open) => [
                  createVNode(unref(DisclosureButton), { class: "flex w-full justify-between rounded bg-white px-4 py-2 border" }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Quick Stats"),
                      createVNode(unref(ChevronUpIcon), {
                        class: [open ? "rotate-180 transform" : "", "h-5 w-5 text-purple-500"]
                      }, null, 8, ["class"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(DisclosurePanel), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-3 lg:grid-cols-5 gap-12 py-4" }, [
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Total Quotes "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Month To Date "),
                              createVNode("span", { class: "text-green-500" }, " 511 ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Last Month"),
                              createVNode("span", { class: "text-green-500" }, " 233 ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Last 30 Days"),
                              createVNode("span", { class: "text-green-500" }, " 254 ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Week To Day"),
                              createVNode("span", { class: "text-green-500" }, " 77 ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Last 7 Days"),
                              createVNode("span", { class: "text-green-500" }, " 101 ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Duration "),
                              createVNode("span", { class: "text-green-500" }, " --- ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Success Rate "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Exit "),
                              createVNode("span", { class: "text-green-500" }, " 350 | 80% ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Lead "),
                              createVNode("span", { class: "text-green-500" }, " 150 | 20% ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Purchase "),
                              createVNode("span", { class: "text-green-500" }, " 8% ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Repeat "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Lead "),
                              createVNode("span", { class: "text-green-500" }, " 101 ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Customer "),
                              createVNode("span", { class: "text-green-500" }, " 54 ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Coverage Type "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Medical "),
                              createVNode("span", { class: "text-green-500" }, " 30% ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Comprehensive "),
                              createVNode("span", { class: "text-green-500" }, " 70% ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-2" }, [
                          createVNode("h1", { class: "text-indigo-400 text-lg mb-2" }, " Q-Type "),
                          createVNode("div", { class: "divide-y" }, [
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Individual "),
                              createVNode("span", { class: "text-green-500" }, " 77% ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Family "),
                              createVNode("span", { class: "text-green-500" }, " 10% ")
                            ]),
                            createVNode("p", { class: "flex justify-between py-2" }, [
                              createVNode("span", { class: "text-gray-500" }, " Multi Family "),
                              createVNode("span", { class: "text-green-500" }, " 8% ")
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
                  "onUpdate:modelValue": ($event) => filter.search = $event,
                  placeholder: "Search...",
                  class: "border border-gray-200 rounded px-4 py-2"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, filter.search]
                ])
              ]),
              createVNode("div", { class: "shadow mt-6" }, [
                createVNode(_component_Table, {
                  columns,
                  data: __props.rows.data
                }, null, 8, ["data"])
              ]),
              createVNode(Pagination, {
                class: "mt-4",
                links: __props.rows.links
              }, null, 8, ["links"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quotes/Visitors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
