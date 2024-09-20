<style src="./Button.style.scss" lang="sass" scoped />

<script setup lang="ts">
const { type, disabled } = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  primary?: boolean
  secondary?: boolean
  disabled?: boolean
  form?: string
}>()
</script>

<template>
  <button
    :class="
      [
        'button',
        Boolean(primary) || !Boolean(secondary) ? 'primary' : '',
        Boolean(secondary) && !Boolean(primary) ? 'secondary' : ''
      ].join(' ')
    "
    :type="type || 'button'"
    :form="form"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
