<script setup lang="ts">
  import CoursesTable from 'src/components/courses/CoursesTable.vue';
  import SemesterDropdown from 'src/components/courses/SemesterDropdown.vue';
</script>

<template>
  <div class="q-pa-md">
    <span class="text-h4 text-weight-bold">
      Courses
    </span>
    <SemesterDropdown />
    <CoursesTable />
  </div>


</template>
