<script setup>
import { onMounted, ref, reactive, computed, watch, watchEffect, getCurrentInstance } from "vue";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Country, State, City } from "country-state-city";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { RadioGroup } from "view-ui-plus";

const countryList = Country.getAllCountries().map((country) => {
    return {
        label: country.name,
        value: country.isoCode,
    };
})

let stateList = reactive([]);

const form = useForm({
  destination: ['CN'],
  qtype: 'individual',
  from: '08/01/2023',
  to: '08/15/2023',
  country: 'US',
  state: 'CA',
  different_costs_per_person: true,
  travelers: [{age: 32, tripCost: 2000}],
  zipcode: "",
  citizenship: "",
  trip_cost: '',
  coverage_type: "basic",
  cfar: true,
  first_payment: null,
  remaining_payment: false
});

const selectedProducts = reactive([2, 3, 8])

const products = ref({
    products: []
})

watchEffect(() => {
  // if (form.country == 'US') {
    stateList = State.getStatesOfCountry(form.country).map((state) => {
      return {
        label: state.name,
        value: state.isoCode,
      };
    });
    form.state = ""
});

const submit = (e) => {
  axios.post(route('quotes.store'), {...form})
    .then(res => res.data)
    .then(data => {
        products.value.products = Object.values(data)
        console.log(products)
    })
};

const columns = [
    {title: 'Company', slot: 'company_name'},
    {title: 'Product', key: 'name'},
    {title: 'Score', slot: 'score'},
    {title: 'Price', key: 'price'},
    {title: 'Cancellation', slot: 'cancellation'},
    {title: 'Medical', slot: 'medical'},
    {title: 'Pre-existing', slot: 'pre_existing'},
    {title: 'CFAR', slot: 'cfar'},
    {title: 'Select', slot: 'select'},
    {title: 'Checkout', slot: 'checkout'},
]

const changeQuote = () => {
    router.post(route('quotes.update', props.row.quote.id), 
        {selectedProducts}, 
        {
            onSuccess: () => {}
        })
}

let productsTableHeight = ref(800)
let instance
onMounted(() => {
    productsTableHeight.value = window.innerHeight * 0.8
    instance = getCurrentInstance();
})

const copyLink = (val) => {
    navigator.clipboard.writeText(val)
    instance.proxy.$Notice.success({
        title: 'Link copied to clipboard',
        desc: val
    })
}
</script>

<template>
    <Head title="New Quote" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">New Quote</h1>

        <Collapse class="mb-8">
            <Panel>
                Quote Form
                <template #content>
                    <div class="grid grid-cols-4 gap-8 divide-x">
                        <div>
                            <div class="mb-4">
                                <label for="" class="mb-4">Destination</label>
                                <Select v-model="form.destination" filterable multiple>
                                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                            <div class="mb-4">
                                <label for="" class="mb-4">Q-Type</label>
                                <Select v-model="form.qtype">
                                    <Option value="individual">Individual</Option>
                                    <Option value="family">Family</Option>
                                    <Option value="multi-family">Multi Family</Option>
                                    <Option value="group">Group</Option>
                                </Select>
                            </div>
                            <div class="mb-4">
                                <label for="" class="mb-4">Leaving Home</label>
                                <div>
                                    <DatePicker v-model="form.from" format="MM/dd/yyyy" placeholder="Select date" @on-change="date => form.from = date"/>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label for="" class="mb-4">Returning Home</label>
                                <div>
                                    <DatePicker v-model="form.to" format="MM/dd/yyyy" placeholder="Select date" @on-change="date => form.to = date"/>
                                </div>
                            </div>
                        </div>
                        <div class="pl-8">
                            <div class="mb-4">
                                <label for="" class="mb-4">Country</label>
                                <Select v-model="form.country" filterable>
                                    <Option v-for="item in countryList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                            <div class="mb-4">
                                <label for="" class="mb-4">State</label>
                                <Select v-model="form.state" filterable>
                                    <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                        </div>
                        <div class="pl-8">
                            <div class="mb-4">
                                <label for="">Coverage Type</label>
                                <div class="mt-2">
                                    <RadioGroup v-model="form.coverage_type">
                                        <Radio label="basic">Basic</Radio>
                                        <Radio label="comprehensive">Comprehensive</Radio>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div class="mb-4">
                                <Checkbox v-model="form.cfar">CFAR</Checkbox>
                            </div>
                            <div class="mb-4">
                                <Checkbox v-model="form.different_costs_per_person">Different Cost per Person</Checkbox>
                            </div>
                            <div  class="mb-4">
                                <div v-for="traveler in form.travelers" class="mb-2 flex gap-4">
                                    <div>
                                        <label for="" class="mr-3">Age</label>
                                        <InputNumber :max="100" :min="1" v-model="traveler.age" style="width: 60px"/>
                                    </div>
                                    <div v-if="form.different_costs_per_person">
                                        <label for="" class="mr-3">Trip Cost</label>
                                        <InputNumber
                                            v-model="traveler.tripCost"
                                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                            :parser="value => value.replace(/\$\s?|(,*)/g, '')" 
                                            style="width: 100px"/>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!form.different_costs_per_person">
                                <label for="" class="mr-3">Total Trip Cost</label>
                                <InputNumber
                                    v-model="form.trip_cost"
                                    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                    :parser="value => value.replace(/\$\s?|(,*)/g, '')" 
                                    style="width: 100px"/>
                            </div>
                            <div class="my-4">
                                <label for="">Fist Payment</label>
                                <div>
                                    <DatePicker v-model="form.first_payment" format="MM/dd/yyyy" placeholder="Select date" @on-change="date => form.first_payment = date"/>
                                </div>
                            </div>
                            <div class="mb-4">
                                <Checkbox v-model="form.remaining_payment">Remaining Payment</Checkbox>
                            </div>
                        </div>
                        <div class="pl-8">
                            <div class="mb-4">
                                <Checkbox v-model="form.saveQuote">Save Quote</Checkbox>
                            </div>
                            <div>
                                <button class="bg-indigo-500 text-white px-4 py-2 rounded" @click="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </template>
            </Panel>
        </Collapse>

        <div class="text-right mb-4">
            <Button type="primary" @click="changeQuote">Save Change</Button>
        </div>

        <Table :columns="columns" :data="products.products" class="border table-auto">
            <template #company_name="{row, index}">
                {{ row.provider.name }}
            </template>
            <template #score="{row, index}">
                300
            </template>
            <template #cancellation="{row, index}">
            </template>
            <template #medical="{row, index}">
            </template>
            <template #pre_existing="{row, index}">
            </template>
            <template #cfar="{row, index}">
            </template>
            <template #select="{row, index}">
                <Select :model-value="selectedProducts.indexOf(row.id)" @on-change="i => changeSelected(row.id, i)">
                    <Option :value="0">Economy</Option>
                    <Option :value="1">Best Value</Option>
                    <Option :value="2">Premium</Option>
                </Select>
            </template>
            <template #checkout="{row, index}">
                <button class="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button @click="copyLink('//test.link')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd" />
                    </svg>
                </button>
            </template>
        </Table>

    </AuthenticatedLayout>
</template>