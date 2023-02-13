<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

const props = defineProps({
    visitors: {
        type: Array,
        default: []
    }
});

const columns = [
    {type: 'index', width: 60, align: 'center'},
    {title: 'Date', key: 'created_at'},
    {title: 'Quote ID', key: 'id'},
    {title: 'Q-type', key: 'qtype'},
    {title: 'Destination', key: 'destination'},
    {title: 'Coverage Type', key: 'coverage_type'},
    {title: 'Selected', key: 'product_id'},
    {title: 'Leave', key: 'from'},
    {title: 'Return', key: 'to'},
    {title: 'Exit Page', key: 'exit_page'},
]
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Visitors</h1>

        <div class="flex">
            <div class="w-72 bg-white rounded shadow p-4">
                <h1 class="text-indigo-400 text-lg font-black mb-6"> Q-Type </h1>

                <p class="flex justify-between items-center mb-2">
                    <span class="text-gray-500 text-xl font-bold"> Individual</span>
                    <span class="text-green-500 text-xl font-bold"> 77% </span>
                </p>
                <p class="flex justify-between items-center mb-2">
                    <span class="text-gray-500 text-xl font-bold"> Family</span>
                    <span class="text-green-500 text-xl font-bold"> 10% </span>
                </p>
                <p class="flex justify-between items-center">
                    <span class="text-gray-500 text-xl font-bold"> Multi Family</span>
                    <span class="text-green-500 text-xl font-bold"> 8% </span>
                </p>
                
            </div>
            <div class="w-72 bg-white rounded shadow p-4 mx-12">
                <h1 class="text-indigo-400 text-lg font-black mb-6"> Coverage Type </h1>

                <p class="flex justify-between items-center mb-2">
                    <span class="text-gray-500 text-xl font-bold"> Medical</span>
                    <span class="text-green-500 text-xl font-bold"> 30% </span>
                </p>
                <p class="flex justify-between items-center">
                    <span class="text-gray-500 text-xl font-bold"> Comprehensive</span>
                    <span class="text-green-500 text-xl font-bold"> 70% </span>
                </p>
            </div>
            <div class="w-72 bg-white rounded shadow p-4">
                <h1 class="text-indigo-400 text-lg font-black mb-6"> Exit Page </h1>

                <p class="flex justify-between items-center mb-2">
                    <span class="text-gray-500 text-xl font-bold"> Step 1</span>
                    <span class="text-green-500 text-xl font-bold"> 10% </span>
                </p>
                <p class="flex justify-between items-center mb-2">
                    <span class="text-gray-500 text-xl font-bold"> Step 2</span>
                    <span class="text-green-500 text-xl font-bold"> 20% </span>
                </p>
                <p class="flex justify-between items-center">
                    <span class="text-gray-500 text-xl font-bold"> Step 3 </span>
                    <span class="text-green-500 text-xl font-bold"> 8% </span>
                </p>
                
            </div>
        </div>

        <div class="shadow mt-6">
            <Table :columns="columns" :data="visitors"/>
        </div>

    </AuthenticatedLayout>
</template>
