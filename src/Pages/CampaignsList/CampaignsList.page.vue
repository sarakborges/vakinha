<script setup lang="ts">
import Topbar from '@/Components/Topbar/Topbar.component.vue'
import CampaignsList from '@/Components/CampaignsList/CampaignsList.component.vue'
</script>

<template>
  <Topbar />

  <Suspense>
    <CampaignsList />
  </Suspense>
</template>
