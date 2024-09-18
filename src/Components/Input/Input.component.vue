<style src="./Input.style.scss" lang="sass" scoped />

<script setup lang="ts">
const { type, disabled } = defineProps<{
  type?: "text" | "number";
  placeholder?: string;
  disabled?: boolean;
  name: string;
}>();
</script>

<template>
  <input
    class="input"
    :type="type || 'text'"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>
