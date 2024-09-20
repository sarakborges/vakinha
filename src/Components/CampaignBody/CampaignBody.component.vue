<style src="./CampaignBody.style.scss" lang="sass" scoped />

<script setup lang="ts">
import CampaignStore from '@/Stores/Campaign.store'

let { campaignData } = CampaignStore
</script>

<template>
  <section class="campaign-body">
    <picture class="campaign-picture">
      <img :src="`/assets/campaigns/${campaignData.id}.jpg`" />
    </picture>
  </section>
</template>
