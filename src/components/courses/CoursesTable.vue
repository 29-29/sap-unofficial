<script setup lang="ts">
import {  reactive, ref } from 'vue';
// import json from './courses.json';
import AppointmentDialog from './appointment/AppointmentDialog.vue';
import CourseSection from '../models';
import { useCoursesStore } from 'src/store/courses';
import { storeToRefs } from 'pinia';

const coursesStore = useCoursesStore();
const {currentSem} = storeToRefs(coursesStore)

const dialogIsOpen = ref(false);
const selectedCourse = ref({} as CourseSection);

const openAppointmentDialog = (course: CourseSection) => {
  dialogIsOpen.value = true;
  selectedCourse.value = course;
};

const closeAppointmentDialog = () => {
  dialogIsOpen.value = false;
};
</script>

<template>
  <div class="q-py-sm">
    <q-list
    	bordered
      separator
    >
      <q-expansion-item v-for="course in currentSem.courses"
        :label="course.course.toString()"
        group="courses"
      >
        <q-card>
          <q-card-section>
            <q-field
              label="Course"
              stack-label
              style="max-width: 300px;"
            >
              {{ course.course }}
            </q-field>
            <q-field
              label="Section"
              stack-label
              style="max-width: 300px;"
            >
              {{ course.sectionCode }}
            </q-field>
            <q-field
              label="Instructor"
              stack-label
              style="max-width: 300px;"
            >
              {{ course.instructor }}
            </q-field>
          </q-card-section>
          <q-card-actions>
            <q-btn
              label="Set appointment"
              flat
              text-color="primary"
              @click="openAppointmentDialog(course)"
            />
          </q-card-actions>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>

  <AppointmentDialog
    :activate="dialogIsOpen"
    :course="selectedCourse"
    @close="closeAppointmentDialog"
  />
</template>
