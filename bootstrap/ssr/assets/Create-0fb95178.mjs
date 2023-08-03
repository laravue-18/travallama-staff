import { reactive, ref, watchEffect, onMounted, getCurrentInstance, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { Country, State } from "country-state-city";
import { useForm, Head } from "@inertiajs/vue3";
import { RadioGroup } from "view-ui-plus";
import "./ApplicationLogo-848ae812.mjs";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const countryList = Country.getAllCountries().map((country) => {
      return {
        label: country.name,
        value: country.isoCode
      };
    });
    let stateList = reactive([]);
    const form = useForm({
      destination: ["CN"],
      qtype: "individual",
      from: "08/01/2023",
      to: "08/15/2023",
      country: "US",
      state: "CA",
      different_costs_per_person: true,
      travelers: [{ age: 32, tripCost: 2e3 }],
      zipcode: "",
      citizenship: "",
      trip_cost: "",
      coverage_type: "basic",
      cfar: true,
      first_payment: null,
      remaining_payment: false
    });
    const selectedProducts = reactive([2, 3, 8]);
    const products = ref({
      products: []
    });
    watchEffect(() => {
      stateList = State.getStatesOfCountry(form.country).map((state) => {
        return {
          label: state.name,
          value: state.isoCode
        };
      });
      form.state = "";
    });
    const submit = (e) => {
      axios.post(route("quotes.store"), { ...form }).then((res) => res.data).then((data) => {
        products.value.products = Object.values(data);
        console.log(products);
      });
    };
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
    let productsTableHeight = ref(800);
    let instance;
    onMounted(() => {
      productsTableHeight.value = window.innerHeight * 0.8;
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
      const _component_Collapse = resolveComponent("Collapse");
      const _component_Panel = resolveComponent("Panel");
      const _component_Select = resolveComponent("Select");
      const _component_Option = resolveComponent("Option");
      const _component_DatePicker = resolveComponent("DatePicker");
      const _component_Radio = resolveComponent("Radio");
      const _component_Checkbox = resolveComponent("Checkbox");
      const _component_InputNumber = resolveComponent("InputNumber");
      const _component_Button = resolveComponent("Button");
      const _component_Table = resolveComponent("Table");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "New Quote" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>New Quote</h1>`);
            _push2(ssrRenderComponent(_component_Collapse, { class: "mb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Panel, null, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-4 gap-8 divide-x"${_scopeId3}><div${_scopeId3}><div class="mb-4"${_scopeId3}><label for="" class="mb-4"${_scopeId3}>Destination</label>`);
                        _push4(ssrRenderComponent(_component_Select, {
                          modelValue: unref(form).destination,
                          "onUpdate:modelValue": ($event) => unref(form).destination = $event,
                          filterable: "",
                          multiple: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(countryList), (item) => {
                                _push5(ssrRenderComponent(_component_Option, {
                                  value: item.value,
                                  key: item.value
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                  return openBlock(), createBlock(_component_Option, {
                                    value: item.value,
                                    key: item.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4"${_scopeId3}><label for="" class="mb-4"${_scopeId3}>Q-Type</label>`);
                        _push4(ssrRenderComponent(_component_Select, {
                          modelValue: unref(form).qtype,
                          "onUpdate:modelValue": ($event) => unref(form).qtype = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Option, { value: "individual" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Individual`);
                                  } else {
                                    return [
                                      createTextVNode("Individual")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Option, { value: "family" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Family`);
                                  } else {
                                    return [
                                      createTextVNode("Family")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Option, { value: "multi-family" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Multi Family`);
                                  } else {
                                    return [
                                      createTextVNode("Multi Family")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Option, { value: "group" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Group`);
                                  } else {
                                    return [
                                      createTextVNode("Group")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Option, { value: "individual" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Individual")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: "family" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Family")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: "multi-family" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Multi Family")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: "group" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Group")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4"${_scopeId3}><label for="" class="mb-4"${_scopeId3}>Leaving Home</label><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_DatePicker, {
                          modelValue: unref(form).from,
                          "onUpdate:modelValue": ($event) => unref(form).from = $event,
                          format: "MM/dd/yyyy",
                          placeholder: "Select date",
                          onOnChange: (date) => unref(form).from = date
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="mb-4"${_scopeId3}><label for="" class="mb-4"${_scopeId3}>Returning Home</label><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_DatePicker, {
                          modelValue: unref(form).to,
                          "onUpdate:modelValue": ($event) => unref(form).to = $event,
                          format: "MM/dd/yyyy",
                          placeholder: "Select date",
                          onOnChange: (date) => unref(form).to = date
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div></div><div class="pl-8"${_scopeId3}><div class="mb-4"${_scopeId3}><label for="" class="mb-4"${_scopeId3}>Country</label>`);
                        _push4(ssrRenderComponent(_component_Select, {
                          modelValue: unref(form).country,
                          "onUpdate:modelValue": ($event) => unref(form).country = $event,
                          filterable: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(countryList), (item) => {
                                _push5(ssrRenderComponent(_component_Option, {
                                  value: item.value,
                                  key: item.value
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                  return openBlock(), createBlock(_component_Option, {
                                    value: item.value,
                                    key: item.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4"${_scopeId3}><label for="" class="mb-4"${_scopeId3}>State</label>`);
                        _push4(ssrRenderComponent(_component_Select, {
                          modelValue: unref(form).state,
                          "onUpdate:modelValue": ($event) => unref(form).state = $event,
                          filterable: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(stateList), (item) => {
                                _push5(ssrRenderComponent(_component_Option, {
                                  value: item.value,
                                  key: item.value
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.label)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(stateList), (item) => {
                                  return openBlock(), createBlock(_component_Option, {
                                    value: item.value,
                                    key: item.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div><div class="pl-8"${_scopeId3}><div class="mb-4"${_scopeId3}><label for=""${_scopeId3}>Coverage Type</label><div class="mt-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(RadioGroup), {
                          modelValue: unref(form).coverage_type,
                          "onUpdate:modelValue": ($event) => unref(form).coverage_type = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Radio, { label: "basic" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Basic`);
                                  } else {
                                    return [
                                      createTextVNode("Basic")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Radio, { label: "comprehensive" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Comprehensive`);
                                  } else {
                                    return [
                                      createTextVNode("Comprehensive")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Radio, { label: "basic" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Basic")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Radio, { label: "comprehensive" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Comprehensive")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div><div class="mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Checkbox, {
                          modelValue: unref(form).cfar,
                          "onUpdate:modelValue": ($event) => unref(form).cfar = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`CFAR`);
                            } else {
                              return [
                                createTextVNode("CFAR")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Checkbox, {
                          modelValue: unref(form).different_costs_per_person,
                          "onUpdate:modelValue": ($event) => unref(form).different_costs_per_person = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Different Cost per Person`);
                            } else {
                              return [
                                createTextVNode("Different Cost per Person")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div class="mb-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(form).travelers, (traveler) => {
                          _push4(`<div class="mb-2 flex gap-4"${_scopeId3}><div${_scopeId3}><label for="" class="mr-3"${_scopeId3}>Age</label>`);
                          _push4(ssrRenderComponent(_component_InputNumber, {
                            max: 100,
                            min: 1,
                            modelValue: traveler.age,
                            "onUpdate:modelValue": ($event) => traveler.age = $event,
                            style: { "width": "60px" }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                          if (unref(form).different_costs_per_person) {
                            _push4(`<div${_scopeId3}><label for="" class="mr-3"${_scopeId3}>Trip Cost</label>`);
                            _push4(ssrRenderComponent(_component_InputNumber, {
                              modelValue: traveler.tripCost,
                              "onUpdate:modelValue": ($event) => traveler.tripCost = $event,
                              formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                              parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                              style: { "width": "100px" }
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        });
                        _push4(`<!--]--></div>`);
                        if (!unref(form).different_costs_per_person) {
                          _push4(`<div${_scopeId3}><label for="" class="mr-3"${_scopeId3}>Total Trip Cost</label>`);
                          _push4(ssrRenderComponent(_component_InputNumber, {
                            modelValue: unref(form).trip_cost,
                            "onUpdate:modelValue": ($event) => unref(form).trip_cost = $event,
                            formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                            parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                            style: { "width": "100px" }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="my-4"${_scopeId3}><label for=""${_scopeId3}>Fist Payment</label><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_DatePicker, {
                          modelValue: unref(form).first_payment,
                          "onUpdate:modelValue": ($event) => unref(form).first_payment = $event,
                          format: "MM/dd/yyyy",
                          placeholder: "Select date",
                          onOnChange: (date) => unref(form).first_payment = date
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Checkbox, {
                          modelValue: unref(form).remaining_payment,
                          "onUpdate:modelValue": ($event) => unref(form).remaining_payment = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Remaining Payment`);
                            } else {
                              return [
                                createTextVNode("Remaining Payment")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div><div class="pl-8"${_scopeId3}><div class="mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Checkbox, {
                          modelValue: unref(form).saveQuote,
                          "onUpdate:modelValue": ($event) => unref(form).saveQuote = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Save Quote`);
                            } else {
                              return [
                                createTextVNode("Save Quote")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div><div${_scopeId3}><button class="bg-indigo-500 text-white px-4 py-2 rounded"${_scopeId3}>Submit</button></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-4 gap-8 divide-x" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", {
                                  for: "",
                                  class: "mb-4"
                                }, "Destination"),
                                createVNode(_component_Select, {
                                  modelValue: unref(form).destination,
                                  "onUpdate:modelValue": ($event) => unref(form).destination = $event,
                                  filterable: "",
                                  multiple: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                      return openBlock(), createBlock(_component_Option, {
                                        value: item.value,
                                        key: item.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", {
                                  for: "",
                                  class: "mb-4"
                                }, "Q-Type"),
                                createVNode(_component_Select, {
                                  modelValue: unref(form).qtype,
                                  "onUpdate:modelValue": ($event) => unref(form).qtype = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Option, { value: "individual" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Individual")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Option, { value: "family" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Family")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Option, { value: "multi-family" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Multi Family")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Option, { value: "group" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Group")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", {
                                  for: "",
                                  class: "mb-4"
                                }, "Leaving Home"),
                                createVNode("div", null, [
                                  createVNode(_component_DatePicker, {
                                    modelValue: unref(form).from,
                                    "onUpdate:modelValue": ($event) => unref(form).from = $event,
                                    format: "MM/dd/yyyy",
                                    placeholder: "Select date",
                                    onOnChange: (date) => unref(form).from = date
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                                ])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", {
                                  for: "",
                                  class: "mb-4"
                                }, "Returning Home"),
                                createVNode("div", null, [
                                  createVNode(_component_DatePicker, {
                                    modelValue: unref(form).to,
                                    "onUpdate:modelValue": ($event) => unref(form).to = $event,
                                    format: "MM/dd/yyyy",
                                    placeholder: "Select date",
                                    onOnChange: (date) => unref(form).to = date
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "pl-8" }, [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", {
                                  for: "",
                                  class: "mb-4"
                                }, "Country"),
                                createVNode(_component_Select, {
                                  modelValue: unref(form).country,
                                  "onUpdate:modelValue": ($event) => unref(form).country = $event,
                                  filterable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                      return openBlock(), createBlock(_component_Option, {
                                        value: item.value,
                                        key: item.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", {
                                  for: "",
                                  class: "mb-4"
                                }, "State"),
                                createVNode(_component_Select, {
                                  modelValue: unref(form).state,
                                  "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                  filterable: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(stateList), (item) => {
                                      return openBlock(), createBlock(_component_Option, {
                                        value: item.value,
                                        key: item.value
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "pl-8" }, [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { for: "" }, "Coverage Type"),
                                createVNode("div", { class: "mt-2" }, [
                                  createVNode(unref(RadioGroup), {
                                    modelValue: unref(form).coverage_type,
                                    "onUpdate:modelValue": ($event) => unref(form).coverage_type = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Radio, { label: "basic" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Basic")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Radio, { label: "comprehensive" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Comprehensive")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode(_component_Checkbox, {
                                  modelValue: unref(form).cfar,
                                  "onUpdate:modelValue": ($event) => unref(form).cfar = $event
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("CFAR")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode(_component_Checkbox, {
                                  modelValue: unref(form).different_costs_per_person,
                                  "onUpdate:modelValue": ($event) => unref(form).different_costs_per_person = $event
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Different Cost per Person")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).travelers, (traveler) => {
                                  return openBlock(), createBlock("div", { class: "mb-2 flex gap-4" }, [
                                    createVNode("div", null, [
                                      createVNode("label", {
                                        for: "",
                                        class: "mr-3"
                                      }, "Age"),
                                      createVNode(_component_InputNumber, {
                                        max: 100,
                                        min: 1,
                                        modelValue: traveler.age,
                                        "onUpdate:modelValue": ($event) => traveler.age = $event,
                                        style: { "width": "60px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    unref(form).different_costs_per_person ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode("label", {
                                        for: "",
                                        class: "mr-3"
                                      }, "Trip Cost"),
                                      createVNode(_component_InputNumber, {
                                        modelValue: traveler.tripCost,
                                        "onUpdate:modelValue": ($event) => traveler.tripCost = $event,
                                        formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                                        parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                                        style: { "width": "100px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "formatter", "parser"])
                                    ])) : createCommentVNode("", true)
                                  ]);
                                }), 256))
                              ]),
                              !unref(form).different_costs_per_person ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("label", {
                                  for: "",
                                  class: "mr-3"
                                }, "Total Trip Cost"),
                                createVNode(_component_InputNumber, {
                                  modelValue: unref(form).trip_cost,
                                  "onUpdate:modelValue": ($event) => unref(form).trip_cost = $event,
                                  formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                                  parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                                  style: { "width": "100px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "formatter", "parser"])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "my-4" }, [
                                createVNode("label", { for: "" }, "Fist Payment"),
                                createVNode("div", null, [
                                  createVNode(_component_DatePicker, {
                                    modelValue: unref(form).first_payment,
                                    "onUpdate:modelValue": ($event) => unref(form).first_payment = $event,
                                    format: "MM/dd/yyyy",
                                    placeholder: "Select date",
                                    onOnChange: (date) => unref(form).first_payment = date
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                                ])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode(_component_Checkbox, {
                                  modelValue: unref(form).remaining_payment,
                                  "onUpdate:modelValue": ($event) => unref(form).remaining_payment = $event
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Remaining Payment")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "pl-8" }, [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode(_component_Checkbox, {
                                  modelValue: unref(form).saveQuote,
                                  "onUpdate:modelValue": ($event) => unref(form).saveQuote = $event
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Save Quote")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode("button", {
                                  class: "bg-indigo-500 text-white px-4 py-2 rounded",
                                  onClick: submit
                                }, "Submit")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Quote Form `);
                      } else {
                        return [
                          createTextVNode(" Quote Form ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Panel, null, {
                      content: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-4 gap-8 divide-x" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", {
                                for: "",
                                class: "mb-4"
                              }, "Destination"),
                              createVNode(_component_Select, {
                                modelValue: unref(form).destination,
                                "onUpdate:modelValue": ($event) => unref(form).destination = $event,
                                filterable: "",
                                multiple: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      value: item.value,
                                      key: item.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", {
                                for: "",
                                class: "mb-4"
                              }, "Q-Type"),
                              createVNode(_component_Select, {
                                modelValue: unref(form).qtype,
                                "onUpdate:modelValue": ($event) => unref(form).qtype = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Option, { value: "individual" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Individual")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Option, { value: "family" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Family")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Option, { value: "multi-family" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Multi Family")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Option, { value: "group" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Group")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", {
                                for: "",
                                class: "mb-4"
                              }, "Leaving Home"),
                              createVNode("div", null, [
                                createVNode(_component_DatePicker, {
                                  modelValue: unref(form).from,
                                  "onUpdate:modelValue": ($event) => unref(form).from = $event,
                                  format: "MM/dd/yyyy",
                                  placeholder: "Select date",
                                  onOnChange: (date) => unref(form).from = date
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                              ])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", {
                                for: "",
                                class: "mb-4"
                              }, "Returning Home"),
                              createVNode("div", null, [
                                createVNode(_component_DatePicker, {
                                  modelValue: unref(form).to,
                                  "onUpdate:modelValue": ($event) => unref(form).to = $event,
                                  format: "MM/dd/yyyy",
                                  placeholder: "Select date",
                                  onOnChange: (date) => unref(form).to = date
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "pl-8" }, [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", {
                                for: "",
                                class: "mb-4"
                              }, "Country"),
                              createVNode(_component_Select, {
                                modelValue: unref(form).country,
                                "onUpdate:modelValue": ($event) => unref(form).country = $event,
                                filterable: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      value: item.value,
                                      key: item.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", {
                                for: "",
                                class: "mb-4"
                              }, "State"),
                              createVNode(_component_Select, {
                                modelValue: unref(form).state,
                                "onUpdate:modelValue": ($event) => unref(form).state = $event,
                                filterable: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(stateList), (item) => {
                                    return openBlock(), createBlock(_component_Option, {
                                      value: item.value,
                                      key: item.value
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "pl-8" }, [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { for: "" }, "Coverage Type"),
                              createVNode("div", { class: "mt-2" }, [
                                createVNode(unref(RadioGroup), {
                                  modelValue: unref(form).coverage_type,
                                  "onUpdate:modelValue": ($event) => unref(form).coverage_type = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Radio, { label: "basic" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Basic")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Radio, { label: "comprehensive" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Comprehensive")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode(_component_Checkbox, {
                                modelValue: unref(form).cfar,
                                "onUpdate:modelValue": ($event) => unref(form).cfar = $event
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("CFAR")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode(_component_Checkbox, {
                                modelValue: unref(form).different_costs_per_person,
                                "onUpdate:modelValue": ($event) => unref(form).different_costs_per_person = $event
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Different Cost per Person")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).travelers, (traveler) => {
                                return openBlock(), createBlock("div", { class: "mb-2 flex gap-4" }, [
                                  createVNode("div", null, [
                                    createVNode("label", {
                                      for: "",
                                      class: "mr-3"
                                    }, "Age"),
                                    createVNode(_component_InputNumber, {
                                      max: 100,
                                      min: 1,
                                      modelValue: traveler.age,
                                      "onUpdate:modelValue": ($event) => traveler.age = $event,
                                      style: { "width": "60px" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(form).different_costs_per_person ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("label", {
                                      for: "",
                                      class: "mr-3"
                                    }, "Trip Cost"),
                                    createVNode(_component_InputNumber, {
                                      modelValue: traveler.tripCost,
                                      "onUpdate:modelValue": ($event) => traveler.tripCost = $event,
                                      formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                                      parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                                      style: { "width": "100px" }
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "formatter", "parser"])
                                  ])) : createCommentVNode("", true)
                                ]);
                              }), 256))
                            ]),
                            !unref(form).different_costs_per_person ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("label", {
                                for: "",
                                class: "mr-3"
                              }, "Total Trip Cost"),
                              createVNode(_component_InputNumber, {
                                modelValue: unref(form).trip_cost,
                                "onUpdate:modelValue": ($event) => unref(form).trip_cost = $event,
                                formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                                parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                                style: { "width": "100px" }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "formatter", "parser"])
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "my-4" }, [
                              createVNode("label", { for: "" }, "Fist Payment"),
                              createVNode("div", null, [
                                createVNode(_component_DatePicker, {
                                  modelValue: unref(form).first_payment,
                                  "onUpdate:modelValue": ($event) => unref(form).first_payment = $event,
                                  format: "MM/dd/yyyy",
                                  placeholder: "Select date",
                                  onOnChange: (date) => unref(form).first_payment = date
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                              ])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode(_component_Checkbox, {
                                modelValue: unref(form).remaining_payment,
                                "onUpdate:modelValue": ($event) => unref(form).remaining_payment = $event
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Remaining Payment")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "pl-8" }, [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode(_component_Checkbox, {
                                modelValue: unref(form).saveQuote,
                                "onUpdate:modelValue": ($event) => unref(form).saveQuote = $event
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Save Quote")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode("button", {
                                class: "bg-indigo-500 text-white px-4 py-2 rounded",
                                onClick: submit
                              }, "Submit")
                            ])
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" Quote Form ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-right mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "primary",
              onClick: changeQuote
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Save Change`);
                } else {
                  return [
                    createTextVNode("Save Change")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Table, {
              columns,
              data: products.value.products,
              class: "border table-auto"
            }, {
              company_name: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.provider.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.provider.name), 1)
                  ];
                }
              }),
              score: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 300 `);
                } else {
                  return [
                    createTextVNode(" 300 ")
                  ];
                }
              }),
              cancellation: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              medical: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              pre_existing: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              cfar: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              select: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Select, {
                    "model-value": selectedProducts.indexOf(row.id),
                    onOnChange: (i) => _ctx.changeSelected(row.id, i)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Option, { value: 0 }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Economy`);
                            } else {
                              return [
                                createTextVNode("Economy")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Option, { value: 1 }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Best Value`);
                            } else {
                              return [
                                createTextVNode("Best Value")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Option, { value: 2 }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Premium`);
                            } else {
                              return [
                                createTextVNode("Premium")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Select, {
                      "model-value": selectedProducts.indexOf(row.id),
                      onOnChange: (i) => _ctx.changeSelected(row.id, i)
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
              checkout: withCtx(({ row, index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="mr-6"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"${_scopeId2}><path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"${_scopeId2}></path></svg></button><button${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"${_scopeId2}><path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd"${_scopeId2}></path></svg></button>`);
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "New Quote"),
              createVNode(_component_Collapse, { class: "mb-8" }, {
                default: withCtx(() => [
                  createVNode(_component_Panel, null, {
                    content: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-4 gap-8 divide-x" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "",
                              class: "mb-4"
                            }, "Destination"),
                            createVNode(_component_Select, {
                              modelValue: unref(form).destination,
                              "onUpdate:modelValue": ($event) => unref(form).destination = $event,
                              filterable: "",
                              multiple: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                  return openBlock(), createBlock(_component_Option, {
                                    value: item.value,
                                    key: item.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "",
                              class: "mb-4"
                            }, "Q-Type"),
                            createVNode(_component_Select, {
                              modelValue: unref(form).qtype,
                              "onUpdate:modelValue": ($event) => unref(form).qtype = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Option, { value: "individual" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Individual")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: "family" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Family")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: "multi-family" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Multi Family")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Option, { value: "group" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Group")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "",
                              class: "mb-4"
                            }, "Leaving Home"),
                            createVNode("div", null, [
                              createVNode(_component_DatePicker, {
                                modelValue: unref(form).from,
                                "onUpdate:modelValue": ($event) => unref(form).from = $event,
                                format: "MM/dd/yyyy",
                                placeholder: "Select date",
                                onOnChange: (date) => unref(form).from = date
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "",
                              class: "mb-4"
                            }, "Returning Home"),
                            createVNode("div", null, [
                              createVNode(_component_DatePicker, {
                                modelValue: unref(form).to,
                                "onUpdate:modelValue": ($event) => unref(form).to = $event,
                                format: "MM/dd/yyyy",
                                placeholder: "Select date",
                                onOnChange: (date) => unref(form).to = date
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "pl-8" }, [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "",
                              class: "mb-4"
                            }, "Country"),
                            createVNode(_component_Select, {
                              modelValue: unref(form).country,
                              "onUpdate:modelValue": ($event) => unref(form).country = $event,
                              filterable: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(countryList), (item) => {
                                  return openBlock(), createBlock(_component_Option, {
                                    value: item.value,
                                    key: item.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", {
                              for: "",
                              class: "mb-4"
                            }, "State"),
                            createVNode(_component_Select, {
                              modelValue: unref(form).state,
                              "onUpdate:modelValue": ($event) => unref(form).state = $event,
                              filterable: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(stateList), (item) => {
                                  return openBlock(), createBlock(_component_Option, {
                                    value: item.value,
                                    key: item.value
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "pl-8" }, [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { for: "" }, "Coverage Type"),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode(unref(RadioGroup), {
                                modelValue: unref(form).coverage_type,
                                "onUpdate:modelValue": ($event) => unref(form).coverage_type = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Radio, { label: "basic" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Basic")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Radio, { label: "comprehensive" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Comprehensive")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode(_component_Checkbox, {
                              modelValue: unref(form).cfar,
                              "onUpdate:modelValue": ($event) => unref(form).cfar = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("CFAR")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode(_component_Checkbox, {
                              modelValue: unref(form).different_costs_per_person,
                              "onUpdate:modelValue": ($event) => unref(form).different_costs_per_person = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Different Cost per Person")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).travelers, (traveler) => {
                              return openBlock(), createBlock("div", { class: "mb-2 flex gap-4" }, [
                                createVNode("div", null, [
                                  createVNode("label", {
                                    for: "",
                                    class: "mr-3"
                                  }, "Age"),
                                  createVNode(_component_InputNumber, {
                                    max: 100,
                                    min: 1,
                                    modelValue: traveler.age,
                                    "onUpdate:modelValue": ($event) => traveler.age = $event,
                                    style: { "width": "60px" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                unref(form).different_costs_per_person ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("label", {
                                    for: "",
                                    class: "mr-3"
                                  }, "Trip Cost"),
                                  createVNode(_component_InputNumber, {
                                    modelValue: traveler.tripCost,
                                    "onUpdate:modelValue": ($event) => traveler.tripCost = $event,
                                    formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                                    parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                                    style: { "width": "100px" }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "formatter", "parser"])
                                ])) : createCommentVNode("", true)
                              ]);
                            }), 256))
                          ]),
                          !unref(form).different_costs_per_person ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("label", {
                              for: "",
                              class: "mr-3"
                            }, "Total Trip Cost"),
                            createVNode(_component_InputNumber, {
                              modelValue: unref(form).trip_cost,
                              "onUpdate:modelValue": ($event) => unref(form).trip_cost = $event,
                              formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                              parser: (value) => value.replace(/\$\s?|(,*)/g, ""),
                              style: { "width": "100px" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "formatter", "parser"])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "my-4" }, [
                            createVNode("label", { for: "" }, "Fist Payment"),
                            createVNode("div", null, [
                              createVNode(_component_DatePicker, {
                                modelValue: unref(form).first_payment,
                                "onUpdate:modelValue": ($event) => unref(form).first_payment = $event,
                                format: "MM/dd/yyyy",
                                placeholder: "Select date",
                                onOnChange: (date) => unref(form).first_payment = date
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onOnChange"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode(_component_Checkbox, {
                              modelValue: unref(form).remaining_payment,
                              "onUpdate:modelValue": ($event) => unref(form).remaining_payment = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Remaining Payment")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "pl-8" }, [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode(_component_Checkbox, {
                              modelValue: unref(form).saveQuote,
                              "onUpdate:modelValue": ($event) => unref(form).saveQuote = $event
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save Quote")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode("button", {
                              class: "bg-indigo-500 text-white px-4 py-2 rounded",
                              onClick: submit
                            }, "Submit")
                          ])
                        ])
                      ])
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Quote Form ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
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
                    onOnChange: (i) => _ctx.changeSelected(row.id, i)
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Quotes/Create.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
export {
  _sfc_main as default
};
