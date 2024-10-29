<template>
  <q-item
    clickable
    v-ripple
    active-class="active-class"
    :to="menuOptions.to"
  >
    <q-item-section avatar>
      <q-icon :name="menuOptions.icon" size="md" />
    </q-item-section>

    <q-item-section>{{ menuOptions.name }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">
  import MenuOption from './types';
  defineProps<{menuOptions: MenuOption}>();
</script>
