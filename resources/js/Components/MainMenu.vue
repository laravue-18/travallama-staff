<script setup>
import { Link, usePage } from "@inertiajs/vue3";
import Icon from "@/Shared/Icon.vue";

function isUrl(...urls) {
  let currentUrl = usePage().url.substr(1);
  if (urls[0] === "") {
    return currentUrl === "";
  }
  return urls.filter((url) => currentUrl.startsWith(url)).length;
}
</script>

<template>
  <div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/dashboard">
        <icon
          name="dashboard"
          class="mr-2 w-4 h-4"
          :class="isUrl('dashboard') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('dashboard') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Dashboard
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/products">
        <icon
          name="office"
          class="mr-2 w-4 h-4"
          :class="isUrl('products') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('products') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Products
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/users">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('users') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('users') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Users
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/quotes">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('quotes') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('quotes') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Quotes
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/new-quote">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('/new-quote') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('new-quote') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          New Quote
        </div>
      </Link>
    </div>
    
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/leads">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('leads') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('leads') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Leads
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/customers">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('customers') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('customers') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Customers
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/earnings">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('earnings') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('earnings') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Earnings
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/analytics">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('analytics') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('analytics') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Analytics
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/permissions">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('permissions') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('permissions') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Permissions
        </div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/chat">
        <icon
          name="users"
          class="mr-2 w-4 h-4"
          :class="isUrl('chat') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
        />
        <div :class="isUrl('chat') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">
          Chatroom
        </div>
      </Link>
    </div>
  </div>
</template>
