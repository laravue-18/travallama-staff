<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';

const props = defineProps(['product']);

const benefits = {
    'comprehensive': [
        {
            'title': 'TRIP PROTECTION',
            'rows': [
                {
                    'name': 'Cancellation',
                    'slug': 'cancellation',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Cancel For Any Reason (CFAR)',
                    'slug': 'cfar',
                    'optional': true,
                    'icon': true,
                    'fields': [{'label': 'Label', 'slug': 'label'}, {'label': 'Additional Info', 'slug': 'additional_info'}]
                },
                {
                    'name': 'Interruption',
                    'slug': 'interruption',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Interrupt For Any Reason (IFAR)',
                    'slug': 'ifar',
                    'optional': true,
                    'icon': true
                },
                {
                    'name': 'Trip Delay',
                    'slug': 'trip_delays',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Missed Connection',
                    'slug': 'missed_connection',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
            ]
        },
        {
            'title': 'HEALTH & ACCIDENT',
            'rows': [
                {
                    'name': 'Medical',
                    'slug': 'medical',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Emergency Medical Evacuation',
                    'slug': 'emergency_medical',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Preexisting conditions waiver',
                    'slug': 'preexisting_condition',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Accidental Death & Dismemberment (AD&D)',
                    'slug': 'adds',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                
            ]
        },
        {
            'title': 'PROPERTY COVERAGE',
            'rows': [
                {
                    'name': 'Baggage Loss',
                    'slug': 'baggage_losses',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Baggage Delay',
                    'slug': 'baggage_delaies',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                }
            ]
        },
        {
            'title': 'OTHER IMPORTANT COVERAGES',
            'rows': [
                {
                    'name': 'Cancellation for Work Reasons',
                    'slug': 'cancellation_for_work_reason'
                },
                {
                    'name': 'Electronic/Professional Equipment',
                    'slug': 'equipment'
                },
                {
                    'name': 'Poltical, Security, Natural Disaster Evacuation',
                    'slug': 'disaster_evacuation'
                },
                {
                    'name': 'Car Rental Damage',
                    'slug': 'car_rental_damage'
                }
            ]
        },
        {
            'title': 'REFUND POLICY',
            'rows': [
                {
                    'name': 'REFUND POLICY',
                    'slug': 'refun_policy'
                }
            ]
        },
        {
            'title': 'OPTIONAL BENEFITS',
            'optional': true,
            'rows': [
                {
                    'name': 'Baggage Delay',
                    'slug': 'baggage_delaies'
                },
                {
                    'name': 'Trip Delay Upgrade',
                    'slug': 'trip_delays'
                },
                {
                    'name': '24-Hour AD&D',
                    'slug': 'adds'
                },
                {
                    'name': 'Rental Car Damage',
                    'slug': 'car_rental_damage'
                }
            ]
        }
    ],
    'basic': [
        {
            'title': 'MEDICAL COVERAGE',
            'rows': [
                {
                    'name': 'Medical Limits',
                    'slug': 'policy_maxes',
                    'type': 'dropdown'
                },
                {
                    'name': 'Primary/Secondary',
                    'slug': 'emergency_medical',
                },
                {
                    'name': 'Deductible options',
                    'slug': 'deductibles',
                    'type': 'price'
                },
                {
                    'name': 'Preexisting Conditions Look-back period',
                    'slug': 'adds',
                },
                {
                    'name': 'Acute onset of preexisting condition',
                    'slug': 'adds',
                },
                {
                    'name': 'Prescription Benefit',
                    'slug': 'adds',
                }
            ]
        },
        {
            'title': 'OPTIONAL BENEFITS',
            'optional': true,
            'rows': [
                {
                    'name': 'Trip Delay Upgrade',
                    'slug': 'trip_delays'
                },
                {
                    'name': '24-Hour AD&D',
                    'slug': 'adds'
                }
            ]
        }
    ]
}

const changeHandler = (e, relationship, field, id = null, checkbox = false) => {
    let value = e.target.value
    if(e.target.placeholder == 'Price') value = value.replace(/\$\s?|(,*)/g, '') 
    if(checkbox) value = e.target.checked

    router.post('', {
        relationship,
        field,
        value,
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

        <template v-for="(benefit, i) in benefits[product.type]" :key="i">
            <h4 class="mt-8 mb-4 text-xl font-extrabold">{{ benefit.title }}</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr v-for="(row, j) in benefit.rows" :key="j">
                        <td class="font-bold border border-gray-400 p-4 w-96">{{ row.name }}</td>
                        <td class="border border-gray-400 p-4">
                            <template v-if="Array.isArray(product[row.slug])">
                                <div v-for="item in product[row.slug]" class="flex items-center gap-4 mb-2">
                                    <template v-if="row.type == 'dropdown'">
                                        <label for="">Price:</label>
                                        <InputNumber
                                            :model-value="item.value"
                                            @change="e => changeHandler(e, row.slug, 'value', item.id)"
                                            placeholder="Price"
                                            :formatter="value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')" 
                                            style="width: 120px;"
                                            required
                                        />
                                        <label for="">Min Age:</label>
                                        <InputNumber
                                            :model-value="item.min_age"
                                            @change="e => changeHandler(e, row.slug, 'min_age', item.id)"
                                            placeholder="Min Age"
                                            style="width: 120px;"
                                        />
                                        <label for="">Max Age:</label>
                                        <InputNumber
                                            :model-value="item.max_age"
                                            :name="`${row.slug}_max_age`" 
                                            @change="e => changeHandler(e, row.slug, 'max_age', item.id)"
                                            placeholder="Max Age"
                                            style="width: 120px;"
                                        />
                                        <Checkbox 
                                            :model-value="!!item.is_included"
                                            @change="e => changeHandler(e, row.slug, 'is_included', item.id, true)"
                                        >
                                            Included
                                        </Checkbox>
                                        <Checkbox 
                                            :model-value="!!item.is_recommended"
                                            @change="e => changeHandler(e, row.slug, 'is_recommended', item.id, true)"
                                        >
                                            Recommended
                                        </Checkbox>
                                    </template>
                                </div>
                                <div class="flex items-center gap-4 border-t pt-2">
                                    <label for="">Add New Item: </label>
                                    <template v-if="row.type == 'dropdown'">
                                        <InputNumber
                                            :model-value="0"
                                            @change="e => changeHandler(e, row.slug, 'value', 0)"
                                            placeholder="Price"
                                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')" 
                                            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                            style="width: 120px;"
                                        />
                                    </template>
                                    <template v-else>
                                    </template>
                                </div>
                            </template>
                            <template v-else>
                                <div class="flex gap-4">
                                    <div v-for="field in row.fields">
                                        <label for="">{{ field.label }}:</label>
                                        <Input
                                            :model-value="product[row.slug] ? product[row.slug][field.slug] : ''"
                                            @change="e => changeHandler(e, row.slug, field.slug)"
                                        />
                                    </div>
                                </div>
                            </template>
                        </td>
                    </tr>
                </tbody>
            </table>
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