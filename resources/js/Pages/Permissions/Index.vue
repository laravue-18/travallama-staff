<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

const props = defineProps({
    roles: Array,
    permissions: Array
})

const roleForm = useForm({ name: '' })
const permissionForm = useForm({ name: '' })

const submitNewRole = () => {
    roleForm.post(route(`roles.store`), {
        onFinish: () => roleForm.name = ''
    })
}

const submitNewPermission = () => {
    permissionForm.post(route(`permissions.store`), {
        onFinish: () => permissionForm.name = ''
    })
}
</script>

<template>
    <Head title="Roles and Permissions" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Roles and Permissions</h1>

        <div class="mb-4 flex">
            <form class="mr-8" @submit.prevent="submitNewRole">
                <Input v-model="roleForm.name" style="width: 300px;"/>
                <Button type="primary" class="ml-4" :class="{ 'opacity-25': roleForm.processing }" :disabled="roleForm.processing">Create Role</Button>
            </form>
            
            <form class="ml-8" @submit.prevent="submitNewPermission">
                <Input v-model="permissionForm.name" style="width: 300px;"></Input>
                <Button type="primary" class="ml-4" :class="{ 'opacity-25': permissionForm.processing }" :disabled="permissionForm.processing">Create Permission</Button>
            </form>
        </div>

        <div class="bg-white rounded-md shadow overflow-x-auto">
            <table class="w-full whitespace-nowrap">
                <tr class="text-left font-bold">
                    <th class="pb-4 pt-6 px-6"></th>
                    <th v-for="role in roles" class="pb-4 pt-6 px-6">{{ role.name }}</th>
                </tr>
                <tr v-for="perm in permissions">
                    <td class="px-6 py-2 border-t">{{ perm.name }}</td>
                    <td v-for="role in roles" class="px-6 py-2 border-t">
                        <Checkbox/>
                    </td>
                </tr>
            </table>
        </div>
    </AuthenticatedLayout>
</template>