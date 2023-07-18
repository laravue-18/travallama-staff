<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {ref, reactive, onMounted, getCurrentInstance} from 'vue'
import { router } from '@inertiajs/vue3'

const props = defineProps({
    row: Object,
});

const selectedProducts = reactive(props.row.quote && props.row.quote.product1 ? 
    [props.row.quote.product1.id, props.row.quote.product2.id, props.row.quote.product3.id]
    : [])

const productsModal = ref(false)

const viewAllProducts = () => {
    productsModal.value = true
    axios.post(route('quotes.store'), {quote_id: props.row.quote.id})
        .then(res => res.data)
        .then(data => {
            products.value.products = Object.values(data)
        })
}

const products = ref({ products: [] })

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

const changeSelected = (rowId, val) => {
    selectedProducts[val] = rowId
}

const changeQuote = () => {
    router.post(route('quotes.update', props.row.quote.id), 
        {selectedProducts}, 
        {
            onSuccess: () => {}
        })
}

let instance
onMounted(() => {
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
    <!-- <Head title="Dashboard" /> -->

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Quotes</h1>

        <!-- Overview -->
        <table class="bg-white border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Quote ID</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Q-Type</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">14/21</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Q-User</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Success</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Exit</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Status</th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                <tr>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.id : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.qtype : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">9/21</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Visitor</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Purchase</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Success</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Converted</td>
                </tr>
            </tbody>
        </table>

        <!-- Step1 -->
        <h4 class="text-xl font-bold mt-4 mb-2">Step 1</h4>
        <table class="bg-white border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Destination</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Leave Date</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Return Date</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Trip Duration</th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                <tr>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.destination : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.from : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.to : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">
                        {{ row.quote && row.quote.to && row.quote.from ? 
                            Math.ceil((new Date(row.quote.to).getTime() - new Date(row.quote.from).getTime()) / (1000 * 3600 * 24)) : ''}}
                    </td>
                </tr>
            </tbody>
        </table>
        
        <!-- Step2 -->
        <h4 class="text-xl font-bold mt-4 mb-2">Step 2</h4>
        <table class="bg-white border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Residence</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Zipcode</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Citizenship</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Travelers</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Ages</th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                <tr>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.country : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.zipcode : '' }}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.citizenship : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? (row.quote.travelers ? JSON.parse(row.quote.travelers).length : '') : '' }}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">
                        {{ row.quote ? (row.quote.travelers ? JSON.parse(row.quote.travelers).map(i => i.age) : '') : '' }}
                    </td>
                </tr>
            </tbody>
        </table>
        
        <!-- Step3 -->
        <h4 class="text-xl font-bold mt-4 mb-2">Step 3</h4>
        <table class="bg-white border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Type</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">CFAR</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Trip Cost</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">First Payment</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Remaing Payment</th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                <tr>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.coverage_type : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? ['No', 'Yes'][row.quote.cfar] : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.trip_cost : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? row.quote.first_payment : ''}}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote ? ['No', 'Yes'][row.quote.remaining_payment] : ''}}</td>
                </tr>
            </tbody>
        </table>
        
        <!-- Quote -->
        <template v-if="row.quote && row.quote.product1">
            <h4 class="text-xl font-bold mt-4 mb-2">Quote</h4>
            <table class="bg-white border-collapse border border-slate-400 w-full">
                <thead>
                    <tr>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Economy</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Best Value</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Premium</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white"></th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                    <tr>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote && row.quote.product1 ? row.quote.product1.name : '' }}</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote && row.quote.product2 ? row.quote.product2.name : '' }}</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ row.quote && row.quote.product3 ? row.quote.product3.name : '' }}</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">
                            <button class="bg-indigo-500 text-white px-4 py-1 rounded-full" @click="viewAllProducts">View All Products</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
       
        <!-- Checkout -->
        <template v-if="row.order">
            <h4 class="text-xl font-bold mt-4 mb-2">Checkout</h4>
            <table class="bg-white border-collapse border border-slate-400 w-full">
                <thead>
                    <tr>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Base Premium</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Policy Upgrades</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Total Premium</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Policy Number</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Policy Link</th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                    <tr>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">$200</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">$100</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">$300</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"></td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400"></td>
                    </tr>
                </tbody>
            </table>
        </template>
        
        <!-- Travelers -->
        <template v-if="row.order">
            <h4 class="text-xl font-bold mt-4 mb-2">Travelers</h4>
            <table class="bg-white border-collapse border border-slate-400 w-full">
                <thead>
                    <tr>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">First Name</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Last Name</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Age</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Gender</th>
                        <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">DOB</th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                    <tr>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Josh</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Bochner</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">43</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Male</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">12/28/1979</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Josh</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Bochner</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">43</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">Male</td>
                        <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">12/28/1979</td>
                    </tr>
                </tbody>
            </table>
        </template>

        <Drawer
            title="All Products"
            v-model="productsModal"
            :closable="false"
            :width="'82%'"
        >
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
        </Drawer>
    </AuthenticatedLayout>
</template>