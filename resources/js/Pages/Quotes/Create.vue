<script setup>
import { onMounted, ref, reactive, computed, watch, watchEffect } from "vue";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Country, State, City } from "country-state-city";
import { Head, Link, useForm } from "@inertiajs/vue3";

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
    {title: 'Company Name', slot: 'company_name'},
    {title: 'Product Name', key: 'name'},
    {title: 'Price', key: 'price'},
]
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">New Quote</h1>

        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-3">
                <Table :columns="columns" :data="products.products">
                    <template #company_name="{row, index}">
                        {{ row.provider.name }}
                    </template>
                </Table>
            </div>
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
                <div class="mb-4">
                    <Checkbox v-model="form.different_costs_per_person">Checkbox</Checkbox>
                </div>
                <div v-if="form.different_costs_per_person">
                    <div v-for="traveler in form.travelers" class="mb-2 grid grid-cols-2 gap-4">
                        <div>
                            <label for="" class="mb-4">Age</label>
                            <Input v-model="traveler.age" />
                        </div>
                        <div>
                            <label for="" class="mb-4">Trip Cost</label>
                            <Input v-model="traveler.tripCost" />
                        </div>
                    </div>
                </div>
                <div v-else class="mb-4">
                </div>
                <div>
                    <button class="bg-indigo-500 text-white px-4 py-2 rounded" @click="submit">Submit</button>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>