<script setup lang="ts">
import { computed, onMounted } from "vue";
import UsersItem from "@/components/Users/UsersItem.vue";
import { store } from "@/store";
import Loading from "@/components/Loading.vue";
import { RouterLink } from "vue-router";
onMounted(() => {
  store.dispatch("users/getUsers");
});
const loading = computed(() => store.state.users.loading);
const users = computed(() => store.state.users.all);
</script>

<template>
  <div class="users">
    <div class="users_header">
      <h1>Users</h1>
      <RouterLink to="/create-user" tag="button" class="btn"
      >Create user</RouterLink
      >
    </div>
    <Loading v-if="loading" />
    <ul class="users_list" v-else>
      <li class="users_item" :key="user.id" v-for="user in users">
        <UsersItem :user="user" />
      </li>
    </ul>
  </div>
</template>
