<style src="./CampaignsList.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import { CAMPAIGN } from '@/Utils/Router/Routes'

import { CAMPAIGN_NOT_FOUND } from '@/Utils/Texts/App.texts'

import CampaignsListStore from '@/Stores/CampaignsList.store'

import Link from '@/Components/Link/Link.component.vue'

let { isLoading, getCampaignsListData, campaignsListData } = CampaignsListStore

const route = useRoute()
await getCampaignsListData(Number(route.params.page))

onBeforeRouteUpdate(async (to) => {
  await getCampaignsListData(Number(to.params.page))
})
</script>

<template>
  <main
    class="campaigns-list"
    v-if="!isLoading && getCampaignsListData?.length"
  >
    <section class="campaigns-list-wrapper">
      <div v-for="campaignItem in campaignsListData">
        <Link :name="CAMPAIGN.name" :params="{ id: campaignItem.id }">{{
          campaignItem.title
        }}</Link>
      </div>
    </section>
  </main>

  <h1 v-if="!isLoading && !getCampaignsListData?.length">
    {{ CAMPAIGN_NOT_FOUND }}
  </h1>
</template>
