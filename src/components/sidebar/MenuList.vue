<template>
  <q-list
    padding
    class="rounded-borders text-white"
  >
    <q-item
      clickable
      v-ripple
      active-class="active-class"
      to="/student/profile/"
    >
      <q-item-section avatar>
        <q-icon
          name="sym_r_account_circle"
          size="md"
          class="q-pa-xs"
        />
      </q-item-section>
      <q-item-section class="text-weight-medium">
        Username
        <span class="text-caption">email@email.com</span>
      </q-item-section>
    </q-item>
    <menu-item v-for="option in menuOptions.options" :menu-options="option" />
  </q-list>
</template>

<script setup lang="ts">
  import menuOptions from './MenuOptions.json';
  import MenuItem from './MenuItem.vue';
</script>
