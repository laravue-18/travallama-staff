<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import {reactive} from 'vue';

defineProps(['product']);

const changeCancellation = (e) => {
    router.post('', { cancellation: e.target.value })
}
const changeCfarLabel = (e) => { router.post('', { cfar_label: e.target.value })}
const changeCfarInfo = (e) => { router.post('', { cfar_info: e.target.value })}
const changeInterruption = (e) => { router.post('', { interruption: e.target.value })}
const changeIfarLabel = (e) => { router.post('', { ifar_label: e.target.value })}
const changeIfarInfo = (e) => { router.post('', { ifar_info: e.target.value })}

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Product Edit</h1>

        <table class="bg-white border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Provider</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Name</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Coverage Type</th>
                    <th class="border border-slate-400 p-1 pl-4 text-left bg-gray-500 text-white">Status</th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                <tr>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ product.provider_id }}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ product.name }}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ product.type }}</td>
                    <td class="border border-slate-400 p-1 pl-4 text-slate-500 dark:text-slate-400">{{ product.status }}</td>
                </tr>
            </tbody>
        </table>

        <template v-if="product.type == 'comprehensive'">
            <h4 class="mt-8 mb-4 text-xl font-extrabold">TRIP PROTECT</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">Cancellation</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="w-full text-sm border rounded px-2 py-1" 
                             :value="product.cancellation ? product.cancellation.label : ''"
                             @change="changeCancellation">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Cancel For Any Reason(CFAR)</td>
                        <td class="border border-gray-400 p-4">
                            <div class="mb-2">
                                <label for="">Label</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1" 
                                    :value="product.cfar ? product.cfar.label : ''"
                                    @change="changeCfarLabel">
                            </div>
                            <div>
                                <label for="">Additional Information</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1" 
                                    :value="product.cfar ? product.cfar.additional_info : ''"
                                    @change="changeCfarInfo">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Interruption</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="w-full text-sm border rounded px-2 py-1" 
                             :value="product.interruption ? product.interruption.label : ''"
                             @change="changeInterruption">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Interrupt For Any Reason (IFAR)</td>
                        <td class="border border-gray-400 p-4">
                            <div class="mb-2">
                                <label for="">Label</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1" 
                                    :value="product.ifar ? product.ifar.label : ''"
                                    @change="changeIfarLabel">
                            </div>
                            <div>
                                <label for="">Additional Information</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1" 
                                    :value="product.ifar ? product.ifar.additional_info : ''"
                                    @change="changeIfarInfo">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Trip Delay</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Missed Connection</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                </tbody>
            </table>

            <h4 class="mt-8 mb-4 text-xl font-extrabold">HEALTH & ACCIDENT</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">Medical</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Emergency Medical Evacuation</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Preexisting conditions waiver</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Accidental Death & Dismemberment (AD&D)</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="mt-8 mb-4 text-xl font-extrabold">PROPERTY COVERAGE</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">Baggage Loss</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Baggage Delay</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="mt-8 mb-4 text-xl font-extrabold">OTHER IMPORTANT COVERAGES</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">Cancellation for Work Reasons</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Electronic/Professional Equipment</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Poltical, Security, Natural Disaster Evacuation</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Car Rental Damage</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="mt-8 mb-4 text-xl font-extrabold">REFUND POLICY</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">REFUND POLICY</td>
                        <td class="border border-gray-400 p-4"></td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template v-else>
        </template>
    </AuthenticatedLayout>
</template>
