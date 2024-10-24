<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      class="bg-primary q-pa-lg"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
    >
      <q-icon
        class="absolute-top-right q-pa-md cursor-pointer"
        name="menu"
        size="md"
        color="white"
        @click="toggleLeftDrawer"
      />

      <div class="q-mt-xl">
        <q-icon name="account_circle" size="lg" color="white" />
        <span class="items-center text-white q-ml-">Home</span>
      </div>
    </q-drawer>

    <q-page-container>
      <q-icon
        v-if="!leftDrawerOpen"
        class="absolute-top-left q-pa-md cursor-pointer z-top"
        name="menu"
        size="md"
        color="blue"
        @click="toggleLeftDrawer"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
const leftDrawerOpen = ref(true);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
