import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('./views/Home.vue'),
        children:[
          {
              path: '/About',
              name: 'About',
              component: ()=>import('./views/About.vue')
          },
      ]
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: ()=>import('./views/Profile.vue')
    },
  ]
})
