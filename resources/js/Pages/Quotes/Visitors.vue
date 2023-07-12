<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import Pagination from '@/Shared/Pagination.vue';
import { reactive, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({ rows: Object });

const columns = [
    {title: 'Date', key: 'created_at'},
    {title: 'Timestamp', key: 'created_at'},
    {title: 'User Type', key: 'created_at'},
    {title: 'Quote ID', key: 'id'},
    {title: 'Q-type', key: 'qtype'},
    {title: 'Destination', key: 'destination'},
    {title: 'Coverage Type', key: 'coverage_type'},
    {title: 'Selected', key: 'product_id'},
    {title: 'Residence', key: 'product_id'},
    {title: 'Leave', key: 'from'},
    {title: 'Return', key: 'to'},
    {title: 'Success', key: 'to'},
    {title: 'Exit Page', key: 'exit_page'},
    {title: 'View Details', key: 'exit_page'},
]

const filter = reactive({
    search: '',
});

watch(filter, val => {
    Inertia.get('/visitors', {
        search: 'ak',
    }, {
        preserveState: true
    })
})
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Visitors</h1>

        <!-- Quick Stats -->
        <Disclosure v-slot="open">
            <DisclosureButton class="flex w-full justify-between rounded bg-white px-4 py-2 border">
                <span>Quick Stats</span>
                <ChevronUpIcon
                    :class="open ? 'rotate-180 transform' : ''"
                    class="h-5 w-5 text-purple-500"
                />
            </DisclosureButton>
            <DisclosurePanel>
                <div class="grid grid-cols-3 lg:grid-cols-5 gap-12 py-4">
                    <!-- Total Quotes -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Total Quotes </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Month To Date </span>
                                <span class="text-green-500"> 511 </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Last Month</span>
                                <span class="text-green-500"> 233 </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Last 30 Days</span>
                                <span class="text-green-500"> 254 </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Week To Day</span>
                                <span class="text-green-500"> 77 </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Last 7 Days</span>
                                <span class="text-green-500"> 101 </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Duration </span>
                                <span class="text-green-500"> --- </span>
                            </p>
                        </div>
                    </div>
                    <!-- Success Rate -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Success Rate </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Exit </span>
                                <span class="text-green-500"> 350 | 80% </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Lead </span>
                                <span class="text-green-500"> 150 | 20% </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Purchase </span>
                                <span class="text-green-500"> 8% </span>
                            </p>
                        </div>
                    </div>
                    <!-- Repeat -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Repeat </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Lead </span>
                                <span class="text-green-500"> 101 </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Customer </span>
                                <span class="text-green-500"> 54 </span>
                            </p>
                        </div>
                    </div>
                    <!-- Coverage Type -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Coverage Type </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Medical </span>
                                <span class="text-green-500"> 30% </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Comprehensive </span>
                                <span class="text-green-500"> 70% </span>
                            </p>
                        </div>
                    </div>
                    <!-- Q Type -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Q-Type </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Individual </span>
                                <span class="text-green-500"> 77% </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Family </span>
                                <span class="text-green-500"> 10% </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Multi Family </span>
                                <span class="text-green-500"> 8% </span>
                            </p>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </DisclosurePanel>
        </Disclosure>

        <!-- Filter -->
        <div class="bg-white rounded p-4 my-4">
            <input type="text" v-model="filter.search" placeholder="Search..." class="border border-gray-200 rounded px-4 py-2">
        </div>

        <!-- Data Table -->
        <div class="shadow mt-6">
            <Table :columns="columns" :data="rows.data"/>
        </div>

        <!-- Paginator -->
        <Pagination class="mt-4" :links="rows.links"/>

    </AuthenticatedLayout>
</template>
