<style src="./CampaignMain.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import { CAMPAIGN_NOT_FOUND } from '@/Utils/Texts/App.texts'

import CampaignStore from '@/Stores/Campaign.store'

import Text from '@/Components/Text/Text.component.vue'

import CampaignBreadcrumbs from '@/Components/CampaignBreadcrumbs/CampaignBreadcrumbs.component.vue'
import CampaignBody from '@/Components/CampaignBody/CampaignBody.component.vue'
import CampaignSummary from '@/Components/CampaignSummary/CampaignSummary.component.vue'

let { isLoading, getCampaignData, campaignData } = CampaignStore

const route = useRoute()
await getCampaignData(String(route.params.id))

onBeforeRouteUpdate(async (to) => {
  await getCampaignData(String(to.params.id))
})
</script>

<template>
  <main class="campaign" v-if="!isLoading && campaignData?.id">
    <section class="campaign-wrapper">
      <header class="campaign-header">
        <CampaignBreadcrumbs />

        <section class="campaign-title">
          <Text as="h1">{{ campaignData.title }}</Text>
        </section>
      </header>

      <main class="campaign-main">
        <CampaignBody />
        <CampaignSummary />
      </main>
    </section>
  </main>

  <h1 v-if="!isLoading && !campaignData?.id">{{ CAMPAIGN_NOT_FOUND }}</h1>
</template>
