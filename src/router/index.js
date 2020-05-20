import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Profile from '@/views/Profile.vue';
// import Test from '@/views/Test.vue';
import Intro from '@/views/Intro.vue';
import Disclosure from '@/views/Disclosure.vue';
import Menu from '@/views/Menu.vue';
import Encounter from '@/views/Encounter.vue';
import Status from '@/views/Status.vue';
import DisplayQR from '@/views/DisplayQR.vue';
import Admin from '@/views/Admin.vue';
import NotFound from '@/views/404.vue';

import store from '@/store/index.js';

import { authGuard } from "@/auth/authGuard";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    //   // beforeEnter: (to, from, next) => {
    //   //   // if (store.state.user) {
    //   //   //   console.log("store.state.user.dateOfConsent", store.state.user.dateOfConsent);
    //   //   //   if (!store.state.user.dateOfConsent) return next('/disclosure');
    //   //   //   else return next('/menu');
    //   //   // }
    //   //   // return next();
    //   // }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: Profile,
    //   // beforeEnter: authGuard
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: Test,
    //   // beforeEnter: authGuard
    // }
    {
      path: '/',
      name: 'home',
      component: Intro,
      meta: {
        title: route => "Healthy Reentry: Welcome"
      },
      props: true
    },
    {
      path: '/disclosure',
      name: 'disclosure',
      component: Disclosure,
      // beforeEnter: (to, from, next) => {
      //   if (!store.state.user) return next('/home');
      //   else if (store.state.user.dateOfConsent) return next('/menu');
      //   else return next();
      // },
      props: true
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      // beforeEnter: authGuard,
      beforeEnter: (to, from, next) => {
        console.log("this", store.state);
        // if (!store.state.user) return next('/home');
        // else if (store.state.user.dateOfConsent) return next('/menu');
        // else return next();
      },
      meta: {
        title: route => "Healthy Reentry: Menu"
      },
      props: true
    },
    {
      path: '/encounter/:scannedUser?',
      name: 'encounter',
      component: Encounter,
      meta: {
        title: route => "Healthy Reentry: Record Your Encounter"
      },
      props: true
    },
    {
      path: '/:id/status',
      name: 'status',
      component: Status,
      meta: {
        title: route => "Healthy Reentry: Record Your Status"
      },
      props: true
    },
    {
      path: '/:id/displayqr',
      name: 'displayqr',
      component: DisplayQR,
      meta: {
        title: route => "Healthy Reentry: View Your QR Code"
      },
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        title: route => "Healthy Reentry: Admin View"
      },
      props: true
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
  ]
});
