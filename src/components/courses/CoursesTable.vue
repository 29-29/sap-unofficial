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
    	<q-item v-if="!currentSem.courses">
        <q-item-section class="text-caption">No courses in this semester.</q-item-section>
      </q-item>
      <q-expansion-item v-for="course in currentSem.courses"
        :label="course.course.toString()"
        group="courses"
      >
        <q-card flat>
          <q-card-section>
            <div class="text-h6">
              {{ `${course.course} ${course.sectionCode}` }}
            </div>
            <div class="text-caption">Course Descriptive Name</div>
            <q-item
            clickable
            v-ripple
            style="max-width: 300px;"
            >
              <q-item-section side>
                <q-icon
                name="sym_r_account_circle"
                color="primary"
                />
              </q-item-section>
              <q-item-section>
                {{ course.instructor }}
              </q-item-section>
            </q-item>
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
