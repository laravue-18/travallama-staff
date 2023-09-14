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
                    'fields': [{'label': 'Label', 'slug': 'label'}, {'label': 'Eligible Days', 'slug': 'eligible_days'}, {'label': 'Additional Info', 'slug': 'additional_info'}]
                },
                {
                    'name': 'Interruption',
                    'slug': 'interruption',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Interrupt For Any Reason (IFAR)',
                    'slug': 'ifar',
                    'fields': [{'label': 'Label', 'slug': 'label'}, {'label': 'Eligible Days', 'slug': 'eligible_days'}, {'label': 'Additional Info', 'slug': 'additional_info'}],
                    'optional': true,
                    'icon': true
                },
                {
                    'name': 'Trip Delay',
                    'slug': 'trip_delays',
                    'fields': [{'label': 'Label', 'slug': 'label'}, {'label': 'Additional Info', 'slug': 'additional_info'}],
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
                    'fields': [{'label': 'Label', 'slug': 'label'}, {'label': 'Eligible Days', 'slug': 'eligible_days'}]
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
                    'slug': 'cancellation_for_work_reason',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Electronic/Professional Equipment',
                    'slug': 'equipment',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Poltical, Security, Natural Disaster Evacuation',
                    'slug': 'disaster_evacuation',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Car Rental Damage',
                    'slug': 'car_rental_damage',
                    'fields': [{'label': 'Label', 'slug': 'label'}, {'label': 'Additional Info', 'slug': 'additional_info'}]
                }
            ]
        },
        {
            'title': 'REFUND POLICY',
            'rows': [
                {
                    'name': 'REFUND POLICY',
                    'slug': 'refun_policy',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                }
            ]
        },
        // {
        //     'title': 'OPTIONAL BENEFITS',
        //     'optional': true,
        //     'rows': [
        //         {
        //             'name': 'Baggage Delay',
        //             'slug': 'baggage_delaies'
        //         },
        //         {
        //             'name': 'Trip Delay Upgrade',
        //             'slug': 'trip_delays'
        //         },
        //         {
        //             'name': '24-Hour AD&D',
        //             'slug': 'adds'
        //         },
        //         {
        //             'name': 'Rental Car Damage',
        //             'slug': 'car_rental_damage'
        //         }
        //     ]
        // }
    ],
    'basic': [
        {
            'title': 'MEDICAL COVERAGE',
            'rows': [
                {
                    'name': 'Medical Limits',
                    'slug': 'policy_maxes',
                    'fields': [
                        {'label': 'Price', 'slug': 'value', 'type': 'price'},
                        {'label': 'Min Age', 'slug': 'min_age', 'type': 'age'},
                        {'label': 'Max Age', 'slug': 'max_age', 'type': 'age'},
                        {'label': 'Included', 'slug': 'is_included', 'type': 'checkbox'},
                        {'label': 'Recommended', 'slug': 'is_recommended', 'type': 'checkbox'},
                    ]
                },
                {
                    'name': 'Deductible options',
                    'slug': 'deductibles',
                    'fields': [
                        {'label': 'Price', 'slug': 'value', 'type': 'price'},
                        {'label': 'Min Age', 'slug': 'min_age', 'type': 'age'},
                        {'label': 'Max Age', 'slug': 'max_age', 'type': 'age'},
                        {'label': 'Included', 'slug': 'is_included', 'type': 'checkbox'},
                        {'label': 'Recommended', 'slug': 'is_recommended', 'type': 'checkbox'},
                    ]
                },
                {
                    'name': 'Primary/Secondary',
                    'slug': 'primary',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Preexisting Conditions Look-back period',
                    'slug': 'preexisting_conditions_look_back_period',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Acute onset of preexisting condition',
                    'slug': 'acute_onset_of_preexisting_condition',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                },
                {
                    'name': 'Prescription Benefit',
                    'slug': 'prescription_benefit',
                    'fields': [{'label': 'Label', 'slug': 'label'}]
                }
            ]
        },
        // {
        //     'title': 'OPTIONAL BENEFITS',
        //     'optional': true,
        //     'rows': [
        //         {
        //             'name': 'Trip Delay Upgrade',
        //             'slug': 'trip_delays'
        //         },
        //         {
        //             'name': '24-Hour AD&D',
        //             'slug': 'adds'
        //         }
        //     ]
        // }
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

        <template v-for="(benefit, i) in benefits[product.type]" :key="i">
            <h4 class="mt-8 mb-4 text-xl font-extrabold">{{ benefit.title }}</h4>
            <table class="w-full bordered">
                <tbody>
                    <tr v-for="(row, j) in benefit.rows" :key="j">
                        <td class="font-bold border border-gray-400 p-4 w-96">{{ row.name }}</td>
                        <td class="border border-gray-400 p-4">
                            <template v-if="Array.isArray(product[row.slug])">
                                <div v-for="item in product[row.slug]" class="flex items-center gap-4 mb-2">
                                    <div v-for="field in row.fields">
                                        <label for="" v-if="field.type != 'checkbox'" class="mr-4">{{ field.label }}:</label>
                                        <template v-if="field.type == 'price'">
                                            <InputNumber
                                                :model-value="item.value"
                                                @change="e => changeHandler(e, row.slug, field.slug, item.id)"
                                                placeholder="Price"
                                                :formatter="value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')" 
                                                style="width: 120px;"
                                                required
                                            />
                                        </template>
                                        <template v-else-if="field.type == 'age'">
                                            <InputNumber
                                                :model-value="item[field.slug]"
                                                @change="e => changeHandler(e, row.slug, field.slug, item.id)"
                                                style="width: 120px;"
                                            />
                                        </template>
                                        <template v-else-if="field.type == 'checkbox'">
                                            <Checkbox 
                                                :model-value="!!item[field.slug]"
                                                @change="e => changeHandler(e, row.slug, field.slug, item.id, true)"
                                            >
                                                {{field.label}}
                                            </Checkbox>
                                        </template>
                                        <template v-else>
                                            <Input
                                                :model-value="item[field.slug]"
                                                @change="e => changeHandler(e, row.slug, field.slug, item.id)"
                                            />
                                        </template>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4 border-t pt-2">
                                    <label for="">Add New Item: </label>
                                    <template v-if="row.fields[0].type == 'price'">
                                        <InputNumber
                                            :model-value="0"
                                            @change="e => changeHandler(e, row.slug, row.fields[0].slug, 0)"
                                            placeholder="Price"
                                            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')" 
                                            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                            style="width: 120px;"
                                        />
                                    </template>
                                    <template v-else>
                                        <Input
                                            @change="e => changeHandler(e, row.slug, row.fields[0].slug, 0)"
                                        />
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