<script setup lang="ts">
import Topbar from '@/Components/Topbar/Topbar.component.vue'
import CampaignMain from '@/Components/CampaignMain/CampaignMain.component.vue'
</script>

<template>
  <Topbar />

  <Suspense>
    <CampaignMain />
  </Suspense>
</template>
