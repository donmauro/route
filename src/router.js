import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import authAPI from './auth';
import Login from './views/Login';
import Users from './views/Users';
import A from './views/A';
import B from './views/B';
import FiglioA from './views/FiglioA'
import HelloWorld from "./views/HelloWorld.vue";

Vue.use(Router);


const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: "/helloworld",
        name: "helloworld",
        component: HelloWorld,
        beforeEnter: (to, from, next) => {
            if (authAPI.isAuthenticated() === false) {
              next('/login');
            } else {
              next();
            }
          },
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/a',
        component: A,
        children: [
          {
            path: 'figlioA',
            component: FiglioA
          }
        ]
      },
      {
        path: '/b',
        components: {
          default: A,
          b:  B,
        } 
      },
      {
        name: 'user',
        path: '/users/:userId',
        component: Users,
        beforeEnter: (to, from, next) => {
          if (authAPI.isAuthenticated() === false) {
            next('/login');
          } else {
            next();
          }
        },
      },
    ],
  });
  
  export default router;