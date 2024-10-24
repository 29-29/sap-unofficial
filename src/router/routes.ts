import { RouteRecordRaw } from 'vue-router';
import StudentLayout from 'layouts/StudentLayout.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';

import DashboardPage from 'src/pages/DashboardPage.vue';
import StudentProfilePage from 'src/pages/student/StudentProfilePage.vue';
import CoursesPage from 'src/pages/student/CoursesPage.vue';
import HistoryPage from 'src/pages/student/HistoryPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/student/',
    component: StudentLayout,
    children: [
      {
        path: '/',
        component: DashboardPage,
      },
      {
        path: 'profile/',
        component: StudentProfilePage,
      },
      {
        path: 'courses/',
        component: CoursesPage,
      },
      {
        path: 'history/',
        component: HistoryPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
