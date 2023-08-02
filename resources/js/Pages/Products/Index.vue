<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import {reactive} from 'vue';

const props = defineProps({
    providers: {
        type: Array,
        default: [],
    },
    products: {
        type: Array,
        default: [],
    },
});

const providerColumns = [
    {type: 'index', width: 60, align: 'center'},
    {title: "Name", key: 'name'},
    {title: 'Action', slot: 'action'}
]

const columns = [
    {type: 'index', width: 60, align: 'center'},
    {title: "Provider", slot: 'provider'},
    {title: "Name", key: 'name'},
    {title: "Coverage Type", key: 'type'},
    {title: 'Status', slot: 'status'},
    {title: 'Action', slot: 'action'}
]

function changeProviderStatus(id, status){
    router.post(route('providers.update', id), { status })
}
function changeProductStatus(id, status){
    router.post(route('products.update', id), { status })
}
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Products</h1>

        <Collapse>
            <Panel>
                Providers
                <template #content>
                    <Table :columns="providerColumns" :data="props.providers">
                        <template #action="{row, index}">
                            <Switch :model-value="Boolean(row.status)" size="large" class="ml-8" @click.stop @on-change="changeProviderStatus(row.id, !row.status)">
                                <template #open>
                                    <span>ON</span>
                                </template>
                                <template #close>
                                    <span>OFF</span>
                                </template>
                            </Switch>
                        </template>
                    </Table>
                </template>
            </Panel>
        </Collapse>
        
        <Table class="mt-8" :columns="columns" :data="props.products">
            <template #provider="{row, index}">
                <span>{{ row.provider.name }}</span>
            </template>
            <template #status="{row, index}">
                <Switch :model-value="Boolean(row.status)" size="large" class="" @click.stop @on-change="changeProductStatus(row.id, !row.status)">
                    <template #open>
                        <span>ON</span>
                    </template>
                    <template #close>
                        <span>OFF</span>
                    </template>
                </Switch>
            </template>
            <template #action="{row, index}">
                <Link :href="`/products/${row.id}`">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                </Link>
            </template>
        </Table>
        
    </AuthenticatedLayout>
</template>
