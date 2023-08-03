<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps(['product']);

const changeHandler = (e, id = null) => {
    router.post('', { 
        [e.target.name]: e.target.value,
        id
    }, {
        preserveScroll: true,
        onSuccess: () => {
            if(id == 0) e.target.value = ''
        }
    })
}

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
                                name="cancellation"
                                :value="product.cancellation ? product.cancellation.label : ''"
                                @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Cancel For Any Reason(CFAR)</td>
                        <td class="border border-gray-400 p-4">
                            <div class="mb-2">
                                <label for="">Label</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                    name="cfar_label"
                                    :value="product.cfar ? product.cfar.label : ''"
                                    @change="changeHandler">
                            </div>
                            <div>
                                <label for="">Additional Information</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                    name="cfar_info"
                                    :value="product.cfar ? product.cfar.additional_info : ''"
                                    @change="changeHandler">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Interruption</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                name="interruption"
                                :value="product.interruption ? product.interruption.label : ''"
                                @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Interrupt For Any Reason (IFAR)</td>
                        <td class="border border-gray-400 p-4">
                            <div class="mb-2">
                                <label for="">Label</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                    name="ifar_label"
                                    :value="product.ifar ? product.ifar.label : ''"
                                    @change="changeHandler">
                            </div>
                            <div>
                                <label for="">Additional Information</label>
                                <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                    name="ifar_info" 
                                    :value="product.ifar ? product.ifar.additional_info : ''"
                                    @change="changeHandler">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Trip Delay</td>
                        <td class="border border-gray-400 p-4">
                            <template v-if="product.trip_delays">
                                <div v-for="item in product.trip_delays" class="flex gap-4 mb-2">
                                    <input type="text" class="text-sm border rounded px-2 py-1"
                                        name="trip_delay_label" 
                                        :value="item.label"
                                        @change="(e) => changeHandler(e, item.id)"
                                        placeholder="Label">
                                    <input type="text" class="w-full text-sm border rounded px-2 py-1" 
                                        name="trip_delay_info"
                                        :value="item.additional_info"
                                        @change="(e) => changeHandler(e, item.id)"
                                        placeholder="Addional Information">
                                </div>
                            </template>
                            <div class="flex gap-4">
                                <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="trip_delay_label"
                                    @change="e => changeHandler(e, 0)"
                                    placeholder="Label for New">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Missed Connection</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                name="missed_connection"
                                :value="product.missed_connection ? product.missed_connection.label : ''"
                                @change="changeHandler">
                        </td>
                    </tr>
                </tbody>
            </table>

            <h4 class="mt-8 mb-4 text-xl font-extrabold">HEALTH & ACCIDENT</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">Medical</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                name="medical"
                                :value="product.medical ? product.medical.label : ''"
                                @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Emergency Medical Evacuation</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                name="emergency_medical"
                                :value="product.emergency_medical ? product.emergency_medical.label : ''"
                                @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Preexisting conditions waiver</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="w-full text-sm border rounded px-2 py-1"
                                name="preexisting_condition"
                                :value="product.preexisting_condition ? product.preexisting_condition.label : ''"
                                @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Accidental Death & Dismemberment (AD&D)</td>
                        <td class="border border-gray-400 p-4">
                            <template v-if="product.adds">
                                <div v-for="item in product.adds" class="flex gap-4 mb-2">
                                    <input type="text" class="text-sm border rounded px-2 py-1"
                                        name="add_label" 
                                        :value="item.label"
                                        @change="(e) => changeHandler(e, item.id)"
                                        placeholder="Label">
                                </div>
                            </template>
                            <div class="flex gap-4">
                                <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="add_label"
                                    @change="e => changeHandler(e, 0)"
                                    placeholder="Label for New">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="mt-8 mb-4 text-xl font-extrabold">PROPERTY COVERAGE</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">Baggage Loss</td>
                        <td class="border border-gray-400 p-4">
                            <template v-if="product.baggage_losses">
                                <div v-for="item in product.baggage_losses" class="flex gap-4 mb-2">
                                    <input type="text" class="text-sm border rounded px-2 py-1"
                                        name="baggage_loss_label" 
                                        :value="item.label"
                                        @change="(e) => changeHandler(e, item.id)"
                                        placeholder="Label">
                                </div>
                            </template>
                            <div class="flex gap-4">
                                <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="baggage_loss_label"
                                    @change="e => changeHandler(e, 0)"
                                    placeholder="Label for New">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Baggage Delay</td>
                        <td class="border border-gray-400 p-4">
                            <template v-if="product.baggage_delaies">
                                <div v-for="item in product.baggage_delaies" class="flex gap-4 mb-2">
                                    <input type="text" class="text-sm border rounded px-2 py-1"
                                        name="baggage_delay_label" 
                                        :value="item.label"
                                        @change="(e) => changeHandler(e, item.id)"
                                        placeholder="Label">
                                </div>
                            </template>
                            <div class="flex gap-4">
                                <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="baggage_delay_label"
                                    @change="e => changeHandler(e, 0)"
                                    placeholder="Label for New">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="mt-8 mb-4 text-xl font-extrabold">OTHER IMPORTANT COVERAGES</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">Cancellation for Work Reasons</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="cancellation_for_work_reason"
                                    :value="product.cancellation_for_work_reason ? product.cancellation_for_work_reason.label : ''"
                                    @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Electronic/Professional Equipment</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="equipment"
                                    :value="product.equipment ? product.equipment.label : ''"
                                    @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Poltical, Security, Natural Disaster Evacuation</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="disaster_evacuation"
                                    :value="product.disaster_evacuation ? product.disaster_evacuation.label : ''"
                                    @change="changeHandler">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4">Car Rental Damage</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="car_rental_damage"
                                    :value="product.car_rental_damage ? product.car_rental_damage.label : ''"
                                    @change="changeHandler">
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="mt-8 mb-4 text-xl font-extrabold">REFUND POLICY</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr>
                        <td class="font-bold border border-gray-400 p-4 w-96">REFUND POLICY</td>
                        <td class="border border-gray-400 p-4">
                            <input type="text" class="text-sm border rounded px-2 py-1"
                                    name="refund_policy"
                                    :value="product.refund_policy ? product.refund_policy.label : ''"
                                    @change="changeHandler">
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template v-else>
        </template>
    </AuthenticatedLayout>
</template>

<style>
::-webkit-input-placeholder {
   font-style: italic;
}
:-moz-placeholder {
   font-style: italic;  
}
::-moz-placeholder {
   font-style: italic;  
}
:-ms-input-placeholder {  
   font-style: italic; 
}
</style>