import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import isUserLoggedInGuard from '@/modules/landing/guards/is-user-logged-in.guard';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing
    {
      path: '/',
      beforeEnter: [isUserLoggedInGuard],
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/modules/landing/pages/HomePage.vue'),
        },
      ],
    },
    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' },
      beforeEnter: [isAuthenticatedGuard],
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/shared/pages/NotFoundPage.vue'),
    },
  ],
});

export default router;
