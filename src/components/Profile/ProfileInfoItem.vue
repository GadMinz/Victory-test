<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
}>();
</script>

<template>
  <div>
    <div class="subtitle">{{ title[0].toUpperCase() + title.slice(1) }}</div>
    <div>{{ desc }}</div>
  </div>
</template>
