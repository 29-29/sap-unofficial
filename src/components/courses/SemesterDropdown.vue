<script setup lang="ts">
  import { ref } from 'vue';
  // import semesterJson from './semesters.json';
  import { useCoursesStore } from 'src/store/courses';
  import { storeToRefs } from 'pinia';
  import { Semester } from '../models';

  const coursesStore = useCoursesStore();
  const {semesters, currentSem} = storeToRefs(coursesStore);
  const currentSemLabel = ref(currentSem.value.semester)

  const selectSemester = (semester: Semester) => {
    coursesStore.setCurrentSem(semester);
    currentSemLabel.value = currentSem.value.semester;
    console.log(semester.semester, currentSem.value.semester, currentSemLabel.value);
  }

</script>

<template>
  <div class="q-py-sm">
    <q-btn-dropdown
      color="primary"
      unelevated
      rounded
      auto-close
    >
      <template v-slot:label>
        <div>
          <q-badge
            v-if="currentSemLabel"
            rounded
            color="white"
            text-color="primary"
          >{{ currentSem.year }}</q-badge>
          {{ currentSemLabel || 'Semester' }}
        </div>
      </template>
      <q-list
        separator
      >
        <q-item
          v-for="semester in semesters"
          clickable
          v-ripple
          @click="() => selectSemester(semester)"
          style="width: 100%;"
        >
          <q-item-section>{{ semester.year + ' ' + semester.semester }}</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>
