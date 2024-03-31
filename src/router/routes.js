const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'HomePage',
        path: '',
        component: () => import('src/pages/HomePage.vue')
      },
      {
        name: 'CoursePage',
        path: '/course',
        component: () => import('src/pages/course/Index.vue')
      },

      {
        name: 'VideoCoursePage',
        path: '/video-course',
        component: () => import('src/pages/videoCourse/Index.vue')
      }
    ]
  },
  {
    path: '/course/detail',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        name: 'CourseDetailPage',
        path: '',
        component: () => import('src/pages/course/Detail.vue')
      }
    ]
  },
  {
    path: '/video-course/detail',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        name: 'VideoCourseDetailPage',
        path: '',
        component: () => import('src/pages/videoCourse/Detail.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        name: 'LoginPage',
        path: '',
        component: () => import('src/pages/auth/Login.vue')
      }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        name: 'RegisterPage',
        path: '',
        component: () => import('src/pages/auth/Register.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
