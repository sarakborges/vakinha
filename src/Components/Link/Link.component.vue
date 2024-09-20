<style src="./Link.style.scss" lang="sass" scoped />

<script setup lang="ts">
const { name, params } = defineProps<{
  name: string
  params?: any
}>()
</script>

<template>
  <RouterLink class="link" :to="{ name, params }"><slot></slot></RouterLink>
</template>
