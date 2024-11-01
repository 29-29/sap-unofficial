export interface Name {
  first_name: string
  middle_name: string
  last_name: string
}

export interface Faculty {
  id: number
  name: Name
}

export interface Student {
  name: Name | string
  // name: Name
  // email: string
  semesters: Semester[]
}

export interface Semester {
  year: number
  semester: string
  courses: CourseSection[]
}

export interface StudentSemester {
  semester: Semester
  courses: CourseSection[]
}

export interface FacultySemester {
  semester: Semester
  load: CourseSection[]
}

export interface Course {
  code: string
  units: number
  name: string
}

export default interface CourseSection {
  course: Course | string
  instructor: Faculty | string
  sectionCode: string
}
