import { createRouter, createWebHistory } from 'vue-router'
import authMiddleware from '../middleware/middleware'

const routes = [
  {
    path: '/',
    meta: {
      middleware: [authMiddleware]
    },
    component: () => import('@/modules/main/main-module.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/statistics-page.vue')
      },
      {
        path: 'Banners&Sliders',
        component: () => import('@/pages/banners-sliders-page.vue')
      },
      {
        path: 'Films',
        component: () => import('@/pages/films-page.vue')
      },
      {
        path: 'Cinemas',
        children: [
          {
            path: '',
            component: () => import('@/pages/cinemas-page.vue')
          },
          {
            path: ':cinemaId',
            children: [
              {
                path: '',
                component: () => import('@/pages/add-cinema-page.vue'),
                name: 'cinema'
              }
            ]
          }
        ]
      },
      {
        path: 'News',
        component: () => import('@/pages/news-page.vue')
      },
      {
        path: 'Promotions',
        component: () => import('@/pages/promotions-page.vue')
      },
      {
        path: 'AllPages',
        component: () => import('@/pages/all-pages-page.vue')
      },
      {
        path: 'Users',
        component: () => import('@/pages/users-page.vue')
      },
      {
        path: 'Mailings',
        component: () => import('@/pages/mailings-page.vue')
      },
      {
        path: 'Profile',
        component: () => import('@/pages/profile-page.vue')
      },
      {
        path: 'Films/:id',
        component: () => import('@/pages/add-film-page.vue')
      }
    ]
  },

  {
    path: '/Login',
    name: 'login',
    component: () => import('@/pages/sign-in-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next
  }

  return middleware[0](context, next)
})

export default router
