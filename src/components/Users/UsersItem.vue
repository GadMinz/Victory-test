<script setup lang="ts">
import type { IUser } from "@/components/Users/User.interface";
import { RouterLink } from "vue-router";

defineProps<{
  user: IUser;
}>();
</script>
<template>
  <RouterLink :to="'/profile/' + user.id">
    <div class="subtitle">{{ user.name }}</div>
    <div class="users_item_username">@{{ user.username }}</div>
    <div class="users_item_email">{{ user.email }}</div>
    <div>{{ user.phone }}</div>
  </RouterLink>
</template>
