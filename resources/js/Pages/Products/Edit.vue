<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import Modal from '@/Components/Modal.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const confirmingUserDeletion = ref(false);

const props = defineProps({
    user: Object
})

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    password: '',
    password_confirmation: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
};

const update = () => {
    form.put(route(`users.update`, props.user.id), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const destroy = () => {
    form.delete(route(`users.destroy`, props.user.id), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};

</script>

<template>
    <div>
        <Head title="Create User" />

        <AuthenticatedLayout>
            <h1 class="mb-8 text-3xl font-bold">
                <Link class="text-indigo-400 hover:text-indigo-600" href="/users">Users</Link>
                <span class="text-indigo-400 font-medium">/</span> Edit
            </h1>
            <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden p-6">
                <form @submit.prevent="update">
                    <div>
                        <InputLabel for="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="mt-4">
                        <InputLabel for="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full"
                            v-model="form.email"
                            required
                            autocomplete="username"
                        />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="mt-4">
                        <InputLabel for="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password"
                            autocomplete="new-password"
                        />

                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <div class="mt-4">
                        <InputLabel for="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            class="mt-1 block w-full"
                            v-model="form.password_confirmation"
                            autocomplete="new-password"
                        />

                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <DangerButton
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click.prevent="confirmUserDeletion"
                        >
                            Delete User
                        </DangerButton>
                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Update User
                        </PrimaryButton>
                    </div>
                </form>
            </div>

            <Modal :show="confirmingUserDeletion" @close="closeModal">
                <div class="p-6">
                    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete this user?
                    </h2>

                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once this user is deleted, all of its resources and data will be permanently deleted. 
                    </p>

                    <div class="mt-6 flex justify-end">
                        <SecondaryButton @click="closeModal"> Cancel </SecondaryButton>

                        <DangerButton
                            class="ml-3"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="destroy"
                        >
                            Delete User
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    </div>
</template>