<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <h1 class="mb-8 text-3xl font-bold">Quotes</h1>

        <!-- Quick Stats -->
        <Disclosure v-slot="{open}">
            <DisclosureButton class="flex w-full justify-between rounded bg-white px-4 py-2 border">
                <span>Quick Stats</span>
                <ChevronUpIcon
                    :class="open ? 'rotate-180 transform' : ''"
                    class="h-5 w-5 text-purple-500"
                />
            </DisclosureButton>
            <DisclosurePanel>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-12 py-4">
                    <!-- Total Quotes -->
                    <div class="col-span-3 p-2">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="text-indigo-400 font-normal text-lg px-2 pb-2"> Total Visits </th>
                                    <th class="text-indigo-400 font-normal text-lg px-2 pb-2"> Total Quotes </th>
                                    <th class="text-indigo-400 font-normal text-lg px-2 pb-2"> Coversion Rate </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2 border-b text-gray-500">Month To Date</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_visits.month_to_date }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_quotes.month_to_date }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">
                                        {{ stats.total_visits.month_to_date ? (stats.total_quotes.month_to_date / stats.total_visits.month_to_date * 100).toFixed(2) : 0}} %
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 border-b text-gray-500">Last Month</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_visits.last_month }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_quotes.last_month }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">
                                        {{ stats.total_visits.last_month ? (stats.total_quotes.last_month / stats.total_visits.last_month * 100).toFixed(2) : 0}} %
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 border-b text-gray-500">Last 30 Days</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_visits.last_30_days }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_quotes.last_30_days }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">
                                        {{ stats.total_visits.last_30_days ? (stats.total_quotes.last_30_days / stats.total_visits.last_30_days * 100).toFixed(2) : 0}} %
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 border-b text-gray-500">Week To Day</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_visits.week_to_day }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_quotes.week_to_day }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">
                                        {{ stats.total_visits.week_to_day ? (stats.total_quotes.week_to_day / stats.total_visits.week_to_day * 100).toFixed(2) : 0}} %
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2 border-b text-gray-500">Last 7 Days</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_visits.last_7_days }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">{{ stats.total_quotes.last_7_days }}</td>
                                    <td class="py-2 border-b text-green-500 text-center">
                                        {{ stats.total_visits.last_7_days ? (stats.total_quotes.last_7_days / stats.total_visits.last_7_days * 100).toFixed(2) : 0}} %
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Success Rate -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Success Rate </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Exit </span>
                                <span class="text-green-500"> 
                                    {{stats.success_rate.exit}} | {{ (stats.success_rate.exit / (stats.success_rate.exit + stats.success_rate.lead + stats.success_rate.purchase) * 100).toFixed(2) }} % 
                                </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Lead </span>
                                <span class="text-green-500"> 
                                    {{stats.success_rate.lead}} | {{ (stats.success_rate.lead / (stats.success_rate.exit + stats.success_rate.lead + stats.success_rate.purchase) * 100).toFixed(2) }} % 
                                </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Purchase </span>
                                <span class="text-green-500"> 
                                    {{stats.success_rate.purchase}} | {{ (stats.success_rate.purchase / (stats.success_rate.exit + stats.success_rate.lead + stats.success_rate.purchase) * 100).toFixed(2) }} %  
                                </span>
                            </p>
                        </div>
                    </div>
                    <!-- Repeat -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Repeat </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Lead </span>
                                <span class="text-green-500"> {{ stats.repeat.lead }} </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Customer </span>
                                <span class="text-green-500"> {{ stats.repeat.customer}} </span>
                            </p>
                        </div>
                    </div>
                    <!-- Coverage Type -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Coverage Type </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Medical </span>
                                <span class="text-green-500"> {{stats.coverage_type.medical}} % </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Comprehensive </span>
                                <span class="text-green-500"> {{stats.coverage_type.comprehensive}} % </span>
                            </p>
                        </div>
                    </div>
                    <!-- Q Type -->
                    <div class="p-2">
                        <h1 class="text-indigo-400 text-lg mb-2"> Q-Type </h1>
                        <div class="divide-y">
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Individual </span>
                                <span class="text-green-500"> {{stats.q_type.individual}}% </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Family </span>
                                <span class="text-green-500"> {{stats.q_type.family}}% </span>
                            </p>
                            <p class="flex justify-between py-2">
                                <span class="text-gray-500"> Multi Family </span>
                                <span class="text-green-500"> {{stats.q_type.multi_family}}% </span>
                            </p>
                        </div>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <!-- Filter -->
        <div class="bg-white rounded p-4 my-4">
            <input type="text" v-model="form.search" placeholder="Search..." class="border border-gray-200 rounded px-4 py-2">
        </div>

        <Vable :columns="columns" :data="rows.data" border
            @on-sort-change="onSortableChange"
            @on-filter-change="onFilterChange"
        >
            <template #date="{ row, index }">
                {{ (new Date(row.created_at)).getFullYear() }}-{{ (new Date(row.created_at)).getMonth() + 1 }}-{{ (new Date(row.created_at)).getDate() }}
            </template>
            <template #timestamp="{ row, index }">
                {{ (new Date(row.created_at)).getHours() }}:{{ (new Date(row.created_at)).getMinutes() }}
            </template>
            <template #q_user="{ row, index }">
                {{ row.order ? 'Customer' : ( row.quote ? (row.quote.email ? 'Lead' : 'Visitor') : 'Visitor') }}
            </template>
            <template #quote_id="{ row, index }">
                {{ row.quote ? row.quote.id : '' }}
            </template>
            <template #q_type="{ row, index }">
                {{ row.quote ? row.quote.qtype : '' }}
            </template>
            <template #destination="{ row, index }">
                {{ row.quote ? row.quote.destination : '' }}
            </template>
            <template #from="{ row, index }">
                {{ row.quote ? row.quote.from : '' }}
            </template>
            <template #to="{ row, index }">
                {{ row.quote ? row.quote.to : '' }}
            </template>
            <template #travelers="{ row, index }">
                {{ row.quote ? (row.quote.ages ? JSON.parse(row.quote.ages).length : '') : '' }}
            </template>
            <template #coverage_type="{ row, index }">
                {{ row.quote ? row.quote.coverage_type : '' }}
            </template>
            <template #selected="{ row, index }">
                {{ row.order ? row.order.product.name : '' }}
            </template>
            <template #residence="{ row, index }">
                {{ row.order ? row.order.country : '' }}
            </template>
            <template #success="{ row, index }">
                {{ row.order ? 'Purchase' : (row.quote ? ( row.quote.email ? 'Lead' : 'Exit') : 'Exit') }}
            </template>
            <template #exit_page="{ row, index }">
                {{ row.quote ? row.quote.exit_page : '' }}
            </template>
            <template #status="{ row, index }">
                Active
            </template>
            <template #action="{ row, index }">
                <Link :href="route('quotes.show', row.id)"><button class="text-white bg-indigo-500 px-3 py-1 rounded">View</button></Link>
            </template>
        </Vable>

        <!-- Paginator -->
        <Pagination class="mt-4" :links="rows.links"/>

    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import Vable from '@/Components/src/components/table/table.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    AuthenticatedLayout,
    Head,
    Link,
    Pagination,
    Disclosure, DisclosureButton, DisclosurePanel,
    ChevronUpIcon,
    SelectInput,
    Vable,
    draggable,
  },
  props: {
    filters: Object,
    rows: Object,
    stats: Object
  },
  data() {
    return {
        columns: [
            {title: 'Date', slot: 'date', width: 200, resizable: true, sortable: 'custom', sortType: this.filters.date_sort},
            {title: 'Timestamp', slot: 'timestamp', width: 200, resizable: true},
            {title: 'OS', key: 'device', width: 200, resizable: true,
                filters: [
                        {
                            label: 'Web',
                            value: 'web'
                        },
                        {
                            label: 'Mobile',
                            value: 'mobile'
                        },
                    ],
                [this.filters.device_filter ? 'filteredValue' : '']: this.filters.device_filter,
                filterRemote(){}
            },
            {
                title: 'Q-User', slot: 'q_user', width: 200, resizable: true, sortable: 'custom',
                filters: [
                    {
                        label: 'Customer',
                        value: 'Customer'
                    },
                    {
                        label: 'Lead',
                        value: 'Lead'
                    },
                    {
                        label: 'Visitor',
                        value: 'Visitor'
                    },
                ],
                [this.filters.q_user_filter ? 'filteredValue' : '']: this.filters.q_user_filter,
                filterRemote () {}
            },
            {title: 'Quote ID', slot: 'quote_id', width: 200, resizable: true, sortable: 'custom' },
            {title: 'Q-type', slot: 'q_type', width: 200, resizable: true, sortable: 'custom',
                filters: [
                    {
                        label: 'Individual',
                        value: 'individual'
                    },
                    {
                        label: 'Family',
                        value: 'family'
                    },
                    {
                        label: 'Multi Family',
                        value: 'multi-family'
                    },
                ],
                filterMethod (value, row) {
                    const val = row.price ? 'Customer' : ( row.email ? 'Lead' : 'Visitor')
                    return val.indexOf(value) > -1;
                }
        
            },
            {title: 'Destination', slot: 'destination', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Leave', slot: 'from', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Return', slot: 'to', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Travelers', slot: 'travelers', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Coverage Type', slot: 'coverage_type', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Selected', slot: 'selected', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Residence', slot: 'residence', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Success', slot: 'success', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Exit Page', slot: 'exit_page', width: 200, resizable: true, sortable: 'custom'},
            {title: 'Status', slot: 'status', width: 200, resizable: true, sortable: 'custom'},
            {title: 'View Details', slot: 'action', fixed: 'right', align: 'center', width: 200, resizable: true, sortable: 'custom'},
        ],
        form: {
            search: this.filters.search,
            country: ''
        },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        this.$inertia.get('/quotes', pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
    onSortableChange(col){
        if(col.order == 'asc' || col.order == 'desc') {
            this.form[(col.column.key ? col.column.key : col.column.slot) + '_sort'] = col.order
        } else {
            this.form[(col.column.key ? col.column.key : col.column.slot) + '_sort'] = null
        }
    },
    onFilterChange(val) {
        if(val._filterChecked.length){
            this.form[(val.key ? val.key : val.slot) + '_filter'] = val._filterChecked
        }else{
            this.form[(val.key ? val.key : val.slot) + '_filter'] = null
        }
    }
  },
}
</script>