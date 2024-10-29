<script setup lang="ts">
import { isLabeledStatement } from 'typescript';
import json from './courses.json'

const seed = json.courses

const handleClick = () => {
  console.log('clicked row!')
}
</script>

<template>
  <div class="q-pa-md">
    <q-list bordered separator
    >
      <q-item v-for="course in json.courses"
        clickable
        v-ripple
        v-on:click="handleClick"
      >
        <q-item-section>
          {{ course.course.code + ' ' + course.sectionCode }}
        </q-item-section>
        <q-item-section class="text-right text-caption">
          {{ course.adviser.name.first_name + ' ' + course.adviser.name.last_name }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>

</template>
