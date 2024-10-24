<template>
  <q-layout view="hHh LpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-btn
          flat
          padding="sm"
          to="/"
        >
          Student Advising Portal
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      class="bg-primary"
    >
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
        <q-item
          clickable
          v-ripple
          active-class="active-class"
          to="/student/courses/"
        >
          <q-item-section avatar>
            <q-icon name="sym_r_list_alt" size="md" />
          </q-item-section>

          <q-item-section>Courses</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          active-class="active-class"
          to="/student/history/"
        >
          <q-item-section avatar>
            <q-icon name="sym_r_history" size="md" />
          </q-item-section>

          <q-item-section>History</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="sass">
.active-class
  border-left: 5px solid #fff
</style>
