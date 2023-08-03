import { reactive, ref, onMounted, getCurrentInstance, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { router } from "@inertiajs/vue3";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    row: Object
  },
  setup(__props) {
    const props = __props;
    const selectedProducts = reactive(props.row.quote && props.row.quote.product1 ? [props.row.quote.product1.id, props.row.quote.product2.id, props.row.quote.product3.id] : []);
    const productsModal = ref(false);
    const viewAllProducts = () => {
      productsModal.value = true;
      axios.post(route("quotes.store"), { quote_id: props.row.quote.id }).then((res) => res.data).then((data) => {
        products.value.products = Object.values(data);
      });
    };
    const products = ref({ products: [] });
    const columns = [
      { title: "Company", slot: "company_name" },
      { title: "Product", key: "name" },
      { title: "Score", slot: "score" },
      { title: "Price", key: "price" },
      { title: "Cancellation", slot: "cancellation" },
      { title: "Medical", slot: "medical" },
      { title: "Pre-existing", slot: "pre_existing" },
      { title: "CFAR", slot: "cfar" },
      { title: "Select", slot: "select" },
      { title: "Checkout", slot: "checkout" }
    ];
    const changeSelected = (rowId, val) => {
      selectedProducts[val] = rowId;
    };
    const changeQuote = () => {
      router.post(
        route("quotes.update", props.row.quote.id),
        { selectedProducts },
        {
          onSuccess: () => {
          }
        }
      );
    };
    let instance;
    onMounted(() => {
      instance = getCurrentInstance();
    });
    const copyLink = (val) => {
      navigator.clipboard.writeText(val);
      instance.proxy.$Notice.success({
        title: "Link copied to clipboard",
        desc: val
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Drawer = resolveComponent("Drawer");
      const _component_Button = resolveComponent("Button");
      const _component_Table = resolveComponent("Table");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Quotes</h1><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Quote ID</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Q-Type</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>14/21</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Q-User</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Success</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Exit</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Status</th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.id : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.qtype : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>9/21</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Visitor</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Purchase</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Success</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Converted</td></tr></tbody></table><h4 class="text-xl font-bold mt-4 mb-2"${_scopeId}>Step 1</h4><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Destination</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Leave Date</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Return Date</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Trip Duration</th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.destination : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.from : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.to : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote && __props.row.quote.to && __props.row.quote.from ? Math.ceil((new Date(__props.row.quote.to).getTime() - new Date(__props.row.quote.from).getTime()) / (1e3 * 3600 * 24)) : "")}</td></tr></tbody></table><h4 class="text-xl font-bold mt-4 mb-2"${_scopeId}>Step 2</h4><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Residence</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Zipcode</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Citizenship</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Travelers</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Ages</th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.country : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.zipcode : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.citizenship : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.travelers ? JSON.parse(__props.row.quote.travelers).length : "" : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.travelers ? JSON.parse(__props.row.quote.travelers).map((i) => i.age) : "" : "")}</td></tr></tbody></table><h4 class="text-xl font-bold mt-4 mb-2"${_scopeId}>Step 3</h4><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Type</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>CFAR</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Trip Cost</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>First Payment</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Remaing Payment</th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.coverage_type : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? ["No", "Yes"][__props.row.quote.cfar] : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.trip_cost : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? __props.row.quote.first_payment : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote ? ["No", "Yes"][__props.row.quote.remaining_payment] : "")}</td></tr></tbody></table>`);
            if (__props.row.quote && __props.row.quote.product1) {
              _push2(`<!--[--><h4 class="text-xl font-bold mt-4 mb-2"${_scopeId}>Quote</h4><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Economy</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Best Value</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Premium</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}></th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote && __props.row.quote.product1 ? __props.row.quote.product1.name : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote && __props.row.quote.product2 ? __props.row.quote.product2.name : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(__props.row.quote && __props.row.quote.product3 ? __props.row.quote.product3.name : "")}</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}><button class="bg-indigo-500 text-white px-4 py-1 rounded-full"${_scopeId}>View All Products</button></td></tr></tbody></table><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.row.order) {
              _push2(`<!--[--><h4 class="text-xl font-bold mt-4 mb-2"${_scopeId}>Checkout</h4><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Base Premium</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Policy Upgrades</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Total Premium</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Policy Number</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Policy Link</th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>$200</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>$100</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>$300</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}></td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}></td></tr></tbody></table><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.row.order) {
              _push2(`<!--[--><h4 class="text-xl font-bold mt-4 mb-2"${_scopeId}>Travelers</h4><table class="bg-white border-collapse border border-slate-400 w-full"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>First Name</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Last Name</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Age</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>Gender</th><th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"${_scopeId}>DOB</th></tr></thead><tbody class="bg-white dark:bg-slate-800"${_scopeId}><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Josh</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Bochner</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>43</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Male</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>12/28/1979</td></tr><tr${_scopeId}><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Josh</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Bochner</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>43</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>Male</td><td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"${_scopeId}>12/28/1979</td></tr></tbody></table><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Drawer, {
              title: "All Products",
              modelValue: productsModal.value,
              "onUpdate:modelValue": ($event) => productsModal.value = $event,
              closable: false,
              width: "82%"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "primary",
                    onClick: changeQuote
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Save Change`);
                      } else {
                        return [
                          createTextVNode("Save Change")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_Table, {
                    columns,
                    data: products.value.products,
                    class: "border table-auto"
                  }, {
                    company_name: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(row.provider.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(row.provider.name), 1)
                        ];
                      }
                    }),
                    score: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 300 `);
                      } else {
                        return [
                          createTextVNode(" 300 ")
                        ];
                      }
                    }),
                    cancellation: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4)
                        ;
                      else {
                        return [];
                      }
                    }),
                    medical: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4)
                        ;
                      else {
                        return [];
                      }
                    }),
                    pre_existing: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4)
                        ;
                      else {
                        return [];
                      }
                    }),
                    cfar: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4)
                        ;
                      else {
                        return [];
                      }
                    }),
                    select: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Select, {
                          "model-value": selectedProducts.indexOf(row.id),
                          onOnChange: (i) => changeSelected(row.id, i)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Option, { value: 0 }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Economy`);
                                  } else {
                                    return [
                                      createTextVNode("Economy")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Option, { value: 1 }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Best Value`);
                                  } else {
                                    return [
                                      createTextVNode("Best Value")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Option, { value: 2 }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Premium`);
                                  } else {
                                    return [
                                      createTextVNode("Premium")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Option, { value: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode("Economy")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: 1 }, {
                                  default: withCtx(() => [
                                    createTextVNode("Best Value")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: 2 }, {
                                  default: withCtx(() => [
                                    createTextVNode("Premium")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Select, {
                            "model-value": selectedProducts.indexOf(row.id),
                            onOnChange: (i) => changeSelected(row.id, i)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Option, { value: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode("Economy")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Option, { value: 1 }, {
                                default: withCtx(() => [
                                  createTextVNode("Best Value")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Option, { value: 2 }, {
                                default: withCtx(() => [
                                  createTextVNode("Premium")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["model-value", "onOnChange"])
                        ];
                      }
                    }),
                    checkout: withCtx(({ row, index }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="mr-6"${_scopeId3}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"${_scopeId3}><path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"${_scopeId3}></path></svg></button><button${_scopeId3}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"${_scopeId3}><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"${_scopeId3}></path></svg></button>`);
                      } else {
                        return [
                          createVNode("button", { class: "mr-6" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              class: "w-5 h-5"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ]),
                          createVNode("button", {
                            onClick: ($event) => copyLink("//test.link")
                          }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              class: "w-5 h-5"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-right mb-4" }, [
                      createVNode(_component_Button, {
                        type: "primary",
                        onClick: changeQuote
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Save Change")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_Table, {
                      columns,
                      data: products.value.products,
                      class: "border table-auto"
                    }, {
                      company_name: withCtx(({ row, index }) => [
                        createTextVNode(toDisplayString(row.provider.name), 1)
                      ]),
                      score: withCtx(({ row, index }) => [
                        createTextVNode(" 300 ")
                      ]),
                      cancellation: withCtx(({ row, index }) => []),
                      medical: withCtx(({ row, index }) => []),
                      pre_existing: withCtx(({ row, index }) => []),
                      cfar: withCtx(({ row, index }) => []),
                      select: withCtx(({ row, index }) => [
                        createVNode(_component_Select, {
                          "model-value": selectedProducts.indexOf(row.id),
                          onOnChange: (i) => changeSelected(row.id, i)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Option, { value: 0 }, {
                              default: withCtx(() => [
                                createTextVNode("Economy")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Option, { value: 1 }, {
                              default: withCtx(() => [
                                createTextVNode("Best Value")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Option, { value: 2 }, {
                              default: withCtx(() => [
                                createTextVNode("Premium")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["model-value", "onOnChange"])
                      ]),
                      checkout: withCtx(({ row, index }) => [
                        createVNode("button", { class: "mr-6" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            class: "w-5 h-5"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z",
                              "clip-rule": "evenodd"
                            })
                          ]))
                        ]),
                        createVNode("button", {
                          onClick: ($event) => copyLink("//test.link")
                        }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            class: "w-5 h-5"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z",
                              "clip-rule": "evenodd"
                            })
                          ]))
                        ], 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Quotes"),
              createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Quote ID"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Q-Type"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "14/21"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Q-User"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Success"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Exit"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Status")
                  ])
                ]),
                createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                  createVNode("tr", null, [
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.id : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.qtype : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "9/21"),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Visitor"),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Purchase"),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Success"),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Converted")
                  ])
                ])
              ]),
              createVNode("h4", { class: "text-xl font-bold mt-4 mb-2" }, "Step 1"),
              createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Destination"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Leave Date"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Return Date"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Trip Duration")
                  ])
                ]),
                createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                  createVNode("tr", null, [
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.destination : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.from : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.to : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote && __props.row.quote.to && __props.row.quote.from ? Math.ceil((new Date(__props.row.quote.to).getTime() - new Date(__props.row.quote.from).getTime()) / (1e3 * 3600 * 24)) : ""), 1)
                  ])
                ])
              ]),
              createVNode("h4", { class: "text-xl font-bold mt-4 mb-2" }, "Step 2"),
              createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Residence"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Zipcode"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Citizenship"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Travelers"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Ages")
                  ])
                ]),
                createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                  createVNode("tr", null, [
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.country : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.zipcode : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.citizenship : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.travelers ? JSON.parse(__props.row.quote.travelers).length : "" : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.travelers ? JSON.parse(__props.row.quote.travelers).map((i) => i.age) : "" : ""), 1)
                  ])
                ])
              ]),
              createVNode("h4", { class: "text-xl font-bold mt-4 mb-2" }, "Step 3"),
              createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Type"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "CFAR"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Trip Cost"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "First Payment"),
                    createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Remaing Payment")
                  ])
                ]),
                createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                  createVNode("tr", null, [
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.coverage_type : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? ["No", "Yes"][__props.row.quote.cfar] : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.trip_cost : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? __props.row.quote.first_payment : ""), 1),
                    createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote ? ["No", "Yes"][__props.row.quote.remaining_payment] : ""), 1)
                  ])
                ])
              ]),
              __props.row.quote && __props.row.quote.product1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("h4", { class: "text-xl font-bold mt-4 mb-2" }, "Quote"),
                createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Economy"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Best Value"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Premium"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" })
                    ])
                  ]),
                  createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote && __props.row.quote.product1 ? __props.row.quote.product1.name : ""), 1),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote && __props.row.quote.product2 ? __props.row.quote.product2.name : ""), 1),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, toDisplayString(__props.row.quote && __props.row.quote.product3 ? __props.row.quote.product3.name : ""), 1),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, [
                        createVNode("button", {
                          class: "bg-indigo-500 text-white px-4 py-1 rounded-full",
                          onClick: viewAllProducts
                        }, "View All Products")
                      ])
                    ])
                  ])
                ])
              ], 64)) : createCommentVNode("", true),
              __props.row.order ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode("h4", { class: "text-xl font-bold mt-4 mb-2" }, "Checkout"),
                createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Base Premium"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Policy Upgrades"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Total Premium"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Policy Number"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Policy Link")
                    ])
                  ]),
                  createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "$200"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "$100"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "$300"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" })
                    ])
                  ])
                ])
              ], 64)) : createCommentVNode("", true),
              __props.row.order ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                createVNode("h4", { class: "text-xl font-bold mt-4 mb-2" }, "Travelers"),
                createVNode("table", { class: "bg-white border-collapse border border-slate-400 w-full" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "First Name"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Last Name"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Age"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "Gender"),
                      createVNode("th", { class: "border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white" }, "DOB")
                    ])
                  ]),
                  createVNode("tbody", { class: "bg-white dark:bg-slate-800" }, [
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Josh"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Bochner"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "43"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Male"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "12/28/1979")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Josh"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Bochner"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "43"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "Male"),
                      createVNode("td", { class: "border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400" }, "12/28/1979")
                    ])
                  ])
                ])
              ], 64)) : createCommentVNode("", true),
              createVNode(_component_Drawer, {
                title: "All Products",
                modelValue: productsModal.value,
                "onUpdate:modelValue": ($event) => productsModal.value = $event,
                closable: false,
                width: "82%"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-right mb-4" }, [
                    createVNode(_component_Button, {
                      type: "primary",
                      onClick: changeQuote
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Save Change")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_Table, {
                    columns,
                    data: products.value.products,
                    class: "border table-auto"
                  }, {
                    company_name: withCtx(({ row, index }) => [
                      createTextVNode(toDisplayString(row.provider.name), 1)
                    ]),
                    score: withCtx(({ row, index }) => [
                      createTextVNode(" 300 ")
                    ]),
                    cancellation: withCtx(({ row, index }) => []),
                    medical: withCtx(({ row, index }) => []),
                    pre_existing: withCtx(({ row, index }) => []),
                    cfar: withCtx(({ row, index }) => []),
                    select: withCtx(({ row, index }) => [
                      createVNode(_component_Select, {
                        "model-value": selectedProducts.indexOf(row.id),
                        onOnChange: (i) => changeSelected(row.id, i)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Option, { value: 0 }, {
                            default: withCtx(() => [
                              createTextVNode("Economy")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Option, { value: 1 }, {
                            default: withCtx(() => [
                              createTextVNode("Best Value")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Option, { value: 2 }, {
                            default: withCtx(() => [
                              createTextVNode("Premium")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["model-value", "onOnChange"])
                    ]),
                    checkout: withCtx(({ row, index }) => [
                      createVNode("button", { class: "mr-6" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          class: "w-5 h-5"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ]),
                      createVNode("button", {
                        onClick: ($event) => copyLink("//test.link")
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          class: "w-5 h-5"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z",
                            "clip-rule": "evenodd"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
