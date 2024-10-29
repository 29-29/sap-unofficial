export interface Name {
  first_name: string
  middle_name: string
  last_name: string
}

export interface Course {
  code: string
  units: number
  name: string
}

export interface Faculty {
  name: Name
}

export interface CourseSection {
  course: Course
  adviser: Faculty
  sectionCode: string
}

export interface Student {
  name: Name
  institutional_email: string
  courses: CourseSection[]
}
