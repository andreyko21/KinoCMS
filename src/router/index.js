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
        children: [
          {
            path: '',
            component: () => import('@/pages/news/news-page.vue')
          },
          {
            path: ':NewsId',
            component: () => import('@/pages/news/add-news-page.vue'),
            name: 'News_Element'
          }
        ]
      },
      {
        path: 'Promotions',
        children: [
          {
            path: '',
            component: () => import('@/pages/promotions/promotions-page.vue')
          },
          {
            path: ':PromotionsId',
            component: () => import('@/pages/promotions/add-promotions-page.vue'),
            name: 'Promotions_Element'
          }
        ]
      },
      {
        path: '/Pages',
        children: [
          {
            path: '',
            component: () => import('@/pages/all-pages/all-pages.vue')
          },
          {
            path: 'Main',
            component: () => import('@/pages/all-pages/main-page.vue'),
            name: 'Main_page'
          },
          {
            path: 'About',
            component: () => import('@/pages/all-pages/about-cinema-page.vue'),
            name: 'About_page'
          },
          {
            path: 'Cafe_Bar',
            component: () => import('@/pages/all-pages/cafe-bar-page.vue'),
            name: 'Cafe_Bar_page'
          },
          {
            path: 'Vip_Hall',
            component: () => import('@/pages/all-pages/vip-hall-page.vue'),
            name: 'Vip_Hall_page'
          },
          {
            path: 'Advertising',
            component: () => import('@/pages/all-pages/advertising-page.vue'),
            name: 'Advertising_page'
          },
          {
            path: 'Children_Room',
            component: () => import('@/pages/all-pages/children-room-page.vue'),
            name: 'Children_page'
          },
          {
            path: 'Contacts',
            component: () => import('@/pages/all-pages/contact-page.vue'),
            name: 'Contacts_page'
          },
          {
            path: ':PagesId',
            component: () => import('@/pages/all-pages/add-new-page'),
            name: 'Pages_Element'
          }
        ]
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
