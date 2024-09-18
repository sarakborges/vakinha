<style src="./LoginForm.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { LOGIN_TEXTS } from "@/Utils/Texts/Login.texts.ts";
import { HOME } from "@/Utils/Router/Routes.ts";

import Text from "@/Components/Text/Text.component.vue";
import Link from "@/Components/Link/Link.component.vue";
import Button from "@/Components/Button/Button.component.vue";
import Input from "@/Components/Input/Input.component.vue";
</script>

<template>
  <main class="login_form-wrapper">
    <header>
      <Text as="h2">{{ LOGIN_TEXTS.TITLE }}</Text>
    </header>

    <form name="login-form">
      <Input name="username" :placeholder="LOGIN_TEXTS.FORM.USERNAME" />
      <Input name="password" :placeholder="LOGIN_TEXTS.FORM.PASSWORD" />
    </form>

    <section class="login-buttons">
      <Button form="login-form" type="submit">{{ LOGIN_TEXTS.CTA }}</Button>
      <Button secondary>{{ LOGIN_TEXTS.NO_ACCOUNT }}</Button>
    </section>

    <footer>
      <Link :name="HOME.name">{{ LOGIN_TEXTS.GO_BACK }}</Link>
    </footer>
  </main>
</template>
