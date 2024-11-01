<script setup lang="ts">
import {  ref } from 'vue';
// import json from './courses.json';
import AppointmentDialog from './appointment/AppointmentDialog.vue';
import CourseSection from '../models';
import { useCoursesStore } from 'src/store/courses';
import { storeToRefs } from 'pinia';

// const seed = json.courses;
const coursesStore = useCoursesStore();
const {currentSem} = storeToRefs(coursesStore)

const appointmentDialog = ref(false);
const openAppointmentDialog = () => {
  appointmentDialog.value = true;
};

const closeAppointmentDialog = () => {
  appointmentDialog.value = false;
};
</script>

<template>
  <div class="q-py-sm">
    <q-list
      bordered
      separator
    >
      <q-item v-for="course in currentSem.courses"
        clickable
        v-ripple
        @click="openAppointmentDialog"
      >
        <q-item-section
          class="text-h6"
        >
          {{ course.course + ' ' + course.sectionCode }}
        </q-item-section>
        <q-item-section class="text-right text-bold">
          {{ course.instructor }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <AppointmentDialog
    :activate="appointmentDialog"
    @close="closeAppointmentDialog"
  />
</template>
