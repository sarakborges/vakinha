<style src="./Topbar.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { TOPBAR_MENU, CREATE_CAMPAIGN } from "@/Utils/Data/Topbar.data";

import Text from "@/Components/Text/Text.component.vue";
import Link from "@/Components/Link/Link.component.vue";
import Button from "@/Components/Button/Button.component.vue";
</script>

<template>
  <nav class="topbar">
    <section class="topbar-body">
      <section class="logo">
        <Text as="p">Hope Campaign</Text>
      </section>

      <ul>
        <li v-for="menu_item in TOPBAR_MENU">
          <Link :name="menu_item.TO" :params="menu_item.PARAMS">{{
            menu_item.TEXT
          }}</Link>
        </li>

        <li>
          <Button secondary>{{ CREATE_CAMPAIGN.TEXT }}</Button>
        </li>
      </ul>
    </section>
  </nav>
</template>
