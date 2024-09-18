<style src="./CampaignBreadcrumbs.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { HOME } from "@/Utils/Router/Routes";

import Text from "@/Components/Text/Text.component.vue";
import Link from "@/Components/Link/Link.component.vue";
import CampaignStore from "@/Stores/Campaign.store";

let { campaignData } = CampaignStore;
</script>

<template>
  <nav class="campaign-breadcrumbs">
    <ul>
      <li>
        <Link :name="HOME.name">{{ HOME.name }}</Link>
      </li>

      <li><span>/</span></li>

      <li class="campaign-category">
        <Text as="h3">{{ campaignData.category }}</Text>
      </li>
    </ul>
  </nav>
</template>
