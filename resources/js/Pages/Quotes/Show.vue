<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {ref} from 'vue'

const props = defineProps({
    row: Object,
});

const productsModal = ref(false)

const viewAllProducts = () => {
    productsModal.value = true
    axios.post(route('quotes.store'), {quote_id: props.row.quote.id})
        .then(res => res.data)
        .then(data => {
            products.value.products = Object.values(data)
            console.log(products)
        })
}

const saveQuotes = ref(false)

const products = ref({ products: [] })

const columns = [
    {title: 'Company Name', slot: 'company_name'},
    {title: 'Product Name', key: 'name'},
    {title: 'Score', slot: 'score'},
    {title: 'Price', key: 'price'},
    {title: 'Cancellation', slot: 'cancellation'},
    {title: 'Medical', slot: 'medical'},
    {title: 'Pre-existing', slot: 'pre_existing'},
    {title: 'CFAR', slot: 'cfar'},
    {title: 'Select', slot: 'select'},
    {title: 'Checkout', slot: 'checkout'},
    {title: 'Checkout Link', slot: 'link'},
]
</script>

<template>
    <!-- <Head title="Dashboard" /> -->

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Quotes</h1>

        <div class="grid grid-cols-4 gap-4">
            <div><span class="font-bold"> Quote ID : </span> {{ row.quote ? row.quote.id : ''}}</div>
            <div><span class="font-bold"> Q-Type : </span> {{ row.quote ? row.quote.q_type : ''}}</div>
            <div><span class="font-bold"> Status : </span> Active</div>
            <div><span class="font-bold"> User Type : </span> {{ row.order ? 'Customer' : ( row.quote ? (row.quote.email ? 'Lead' : 'Visitor') : 'Visitor') }}</div>
        </div>
        
        <div class="grid grid-cols-4 gap-4">
            <div><span class="font-bold"> Email : </span> {{ row.quote ? row.quote.email : ''}}</div>
            <div><span class="font-bold"> Phone : </span> {{ row.quote ? row.quote.phone : ''}}</div>
        </div>
        
        <div class="grid grid-cols-4 gap-4">
            <div><span class="font-bold"> First Name : </span> {{ row.order ? row.order.f_name : ''}}</div>
            <div><span class="font-bold"> Last Name : </span> {{ row.order ? row.order.l_name : ''}}</div>
            <div><span class="font-bold"> Age : </span> {{ row.order ? row.order.age : ''}}</div>
            <div><span class="font-bold"> DOB : </span> {{ row.order ? row.order.birthday : ''}}</div>
        </div>

        <div class="divide-y">
            <div class="my-4">
                <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Step 1</h1>
                <div class="grid grid-cols-4 gap-4">
                    <div><span class="font-bold"> Destination : </span> {{ row.quote ? row.quote.destination : ''}}</div>
                    <div><span class="font-bold"> Leave Date : </span> {{ row.quote ? row.quote.from : ''}}</div>
                    <div><span class="font-bold"> Return Date : </span> {{ row.quote ? row.quote.to : ''}}</div>
                    <div><span class="font-bold"> Trip Duration : </span> 
                        {{ row.quote && row.quote.to && row.quote.from ? 
                            Math.ceil((new Date(row.quote.to).getTime() - new Date(row.quote.from).getTime()) / (1000 * 3600 * 24)) : ''}}</div>
                </div>
            </div>
            <div class="my-4">
                <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Step 2</h1>
                <div class="grid grid-cols-4 gap-4">
                    <div><span class="font-bold"> Residence : </span> {{ row.quote ? row.quote.country : ''}}</div>
                    <div><span class="font-bold"> Citizenship : </span> {{ row.quote ? row.quote.citizenship : ''}}</div>
                    <div><span class="font-bold"> Travelers : </span> {{ row.quote ? (row.quote.ages ? JSON.parse(row.quote.ages).length : '') : '' }}</div>
                    <div><span class="font-bold"> Ages : </span> 
                        {{ row.quote ? row.quote.ages : '' }}
                    </div>
                    <div><span class="font-bold"> Zipcode : </span> 
                        {{ row.quote ? row.quote.zipcode : '' }}
                    </div>
                </div>
            </div>
            <div class="my-4">
                <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Step 3</h1>
                <div class="grid grid-cols-4 gap-4">
                    <div><span class="font-bold"> Coverage Type : </span> {{ row.quote ? row.quote.coverage_type : ''}}</div>
                    <div><span class="font-bold"> CFAR : </span> {{ row.quote ? ['No', 'Yes'][row.quote.cfar] : ''}}</div>
                    <div><span class="font-bold"> Trip Cost : </span> {{ row.quote ? row.quote.trip_cost : ''}}</div>
                    <div><span class="font-bold"> First Payment : </span> {{ row.quote ? row.quote.first_payment : ''}}</div>
                    <div><span class="font-bold"> Remaining Payments : </span> {{ row.quote ? ['No', 'Yes'][row.quote.remaining_payment] : ''}}</div>
                </div>
            </div>
            <div class="my-4">
                <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Quote</h1>
                <div class="grid grid-cols-4 gap-4">
                    <div>{{ row.quote ? (row.quote.product1 ? row.quote.product1.name : '') : '' }}</div>
                    <div>{{ row.quote ? (row.quote.product2 ? row.quote.product2.name : '') : '' }}</div>
                    <div>{{ row.quote ? (row.quote.product3 ? row.quote.product3.name : '') : '' }}</div>
                    <div>
                        <button class="bg-indigo-500 text-white px-4 py-1 rounded-full" @click="viewAllProducts">View All Products</button>
                    </div>
                </div>
            </div>
            <div class="my-4">
                <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Checkout</h1>
                <div class="grid grid-cols-4 gap-4">
                    
                </div>
            </div>
        </div>
        <Drawer
            title="All Products"
            v-model="productsModal"
            :closable="false"
            :width="'80%'"
        >
            <Collapse class="mb-8">
                <Panel>
                    Quote Form
                    <template #content>
                        <div class="my-4">
                            <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Step 1</h1>
                            <div class="grid grid-cols-4 gap-4">
                                <div><span class="font-bold"> Destination : </span> {{ row.quote ? row.quote.destination : ''}}</div>
                                <div><span class="font-bold"> Leave Date : </span> {{ row.quote ? row.quote.from : ''}}</div>
                                <div><span class="font-bold"> Return Date : </span> {{ row.quote ? row.quote.to : ''}}</div>
                                <div><span class="font-bold"> Trip Duration : </span> 
                                    {{ row.quote && row.quote.to && row.quote.from ? 
                                        Math.ceil((new Date(row.quote.to).getTime() - new Date(row.quote.from).getTime()) / (1000 * 3600 * 24)) : ''}}</div>
                            </div>
                        </div>
                        <div class="my-4">
                            <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Step 2</h1>
                            <div class="grid grid-cols-4 gap-4">
                                <div><span class="font-bold"> Residence : </span> {{ row.quote ? row.quote.country : ''}}</div>
                                <div><span class="font-bold"> Citizenship : </span> {{ row.quote ? row.quote.citizenship : ''}}</div>
                                <div><span class="font-bold"> Travelers : </span> {{ row.quote ? (row.quote.ages ? JSON.parse(row.quote.ages).length : '') : '' }}</div>
                                <div><span class="font-bold"> Ages : </span> 
                                    {{ row.quote ? row.quote.ages : '' }}
                                </div>
                                <div><span class="font-bold"> Zipcode : </span> 
                                    {{ row.quote ? row.quote.zipcode : '' }}
                                </div>
                            </div>
                        </div>
                        <div class="my-4">
                            <h1 class="text-2xl text-indigo-500 mt-8 mb-4">Step 3</h1>
                            <div class="grid grid-cols-4 gap-4">
                                <div><span class="font-bold"> Coverage Type : </span> {{ row.quote ? row.quote.coverage_type : ''}}</div>
                                <div><span class="font-bold"> CFAR : </span> {{ row.quote ? ['No', 'Yes'][row.quote.cfar] : ''}}</div>
                                <div><span class="font-bold"> Trip Cost : </span> {{ row.quote ? row.quote.trip_cost : ''}}</div>
                                <div><span class="font-bold"> First Payment : </span> {{ row.quote ? row.quote.first_payment : ''}}</div>
                                <div><span class="font-bold"> Remaining Payments : </span> {{ row.quote ? ['No', 'Yes'][row.quote.remaining_payment] : ''}}</div>
                            </div>
                        </div>
                        <div class="my-4 flex justify-between">
                            <Checkbox v-model="saveQuotes">Save Quotes</Checkbox>
                            <Button type="primary">Submit</Button>
                        </div>
                    </template>
                </Panel>
            </Collapse>
            <Table :columns="columns" :data="products.products">
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
                    <Select>
                        <Option value="1">Basic</Option>
                        <Option value="2">Best</Option>
                        <Option value="3">Premium</Option>
                    </Select>
                </template>
                <template #checkout="{row, index}">
                    <Button type="primary">Checkout</Button>
                </template>
                <template #link="{row, index}">
                    <a :href="row.link" target="_blank">View</a>
                </template>
            </Table>
        </Drawer>
    </AuthenticatedLayout>
</template>