<script setup lang="ts">
  import CoursesTable from 'src/components/courses/CoursesTable.vue';
  import SemesterDropdown from 'src/components/courses/SemesterDropdown.vue';
</script>

<template>
  <div class="q-pa-md text-h4 text-bold">
    Courses
  </div>

  <SemesterDropdown />

  <CoursesTable />
</template>
