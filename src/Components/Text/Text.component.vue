<style src="./Text.style.scss" lang="sass" />

<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()
const children = slots.default?.()[0].children

const { as } = defineProps<{
  as?: 'h1' | 'h2' | 'h3' | 'p'
}>()

const asTags = {
  p: `<p>${children}</p>`,
  h1: `<h1>${children}</h1>`,
  h2: `<h2>${children}</h2>`,
  h3: `<h3>${children}</h3>`
}
</script>

<template><div class="text-wrapper" v-html="asTags[as || 'p']" /></template>
