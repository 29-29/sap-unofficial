import { defineStore } from "pinia";
import { Semester, Student } from "src/components/models";
import json from 'src/db.json';

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    student: json.students[0] as Student,
    semesters: json.students[0].semesters as Semester[],
    currentSem: {} as Semester
  }),
  actions: {
    setCurrentSem(semester: Semester) {
      this.currentSem = semester
    }
  },
})
