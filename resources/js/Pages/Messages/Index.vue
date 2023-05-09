<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, useForm } from '@inertiajs/vue3'
import Chatbox from '@/Components/Chatbox.vue';

const props = defineProps({
    roles: Array,
    permissions: Array
})

</script>

<template>
    <Head title="Roles and Permissions" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Chatroom</h1>

        <Chatbox/>
    </AuthenticatedLayout>
</template>