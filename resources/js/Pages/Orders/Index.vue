<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

const props = defineProps({
    rows: {
        type: Array,
        default: []
    }
});

const columns = [
    {type: 'index', width: 60, align: 'center', fixed: 'left'},
    {title: 'Date', key: 'created_at', fixed: 'left'},
    {title: 'User ID', key: 'email', fixed: 'left'},
    {title: 'Phone', key: 'phone', fixed: 'left'},
    {title: 'Travellers', key: 'travellers'},
    {title: 'Sessions', key: 'sessions'},
    {title: 'Quotes', key: 'quotes'},
    {title: 'Saved Trips', key: 'trips'},
    {title: 'Policies', key: 'policies'},
    {title: 'Last Purchase Date', key: 'date'},
    {title: 'View', slot: 'view', width: 160, fixed: 'right'}
]
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Customers</h1>

        <div class="shadow mt-6">
            <Table :columns="columns" :data="rows" class="overflow-auto">
                <template #view="{row, index}">
                    <Button type="primary" size="small" style="margin-right: 5px">Detail</Button>
                    <Button type="primary" size="small">History</Button>
                </template>
            </Table>
        </div>

    </AuthenticatedLayout>
</template>
