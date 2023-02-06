<script setup lang="ts">
const emit = defineEmits(["update:value"]);
const props = defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  value: { type: String, default: "" },
  error: { type: Boolean, default: false },
});
const updateValue = (e: Event) => {
  emit("update:value", (e.target as HTMLTextAreaElement).value);
};
</script>

<template>
  <label
    >{{ label }}
    <input
      :type="type"
      :value="value"
      @input="updateValue"
      class="base_input"
      v-bind:class="error ? 'error' : ''"
    />
  </label>
</template>
