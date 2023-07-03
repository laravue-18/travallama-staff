<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Quotes</h1>

        <div class="grid grid-cols-4 gap-4">
            <div><span class="font-bold"> Quote ID : </span> 12359879</div>
            <div><span class="font-bold"> Q-Type : </span> 12359879</div>
            <div><span class="font-bold"> Status : </span> Active</div>
            <div><span class="font-bold"> User Type : </span> Visitor</div>
        </div>

    </AuthenticatedLayout>
</template>