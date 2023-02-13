<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import {reactive} from 'vue';

const props = defineProps({
    providers: {
        type: Array,
        default: [],
    },
});

const columns = [
    {type: 'index', width: 60, align: 'center'},
    {title: "Name", key: 'name'},
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

        <Card>
            <Collapse>
                <template v-for="provider in props.providers">
                    <Panel class="" :name="`${provider.id}`">
                        <span> {{ provider.name }} </span>
                        <Switch :model-value="Boolean(provider.status)" size="large" class="ml-8" @click.stop @on-change="changeProviderStatus(provider.id, !provider.status)">
                            <template #open>
                                <span>ON</span>
                            </template>
                            <template #close>
                                <span>OFF</span>
                            </template>
                        </Switch>
                        <template #content>
                            <Table :columns="columns" :data="provider['products']">
                                <template #action="{row, index}">
                                    <Switch :model-value="Boolean(row.status)" size="large" class="ml-8" @click.stop @on-change="changeProductStatus(row.id, !row.status)">
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
                </template>
            </Collapse>
        </Card>
    </AuthenticatedLayout>
</template>
