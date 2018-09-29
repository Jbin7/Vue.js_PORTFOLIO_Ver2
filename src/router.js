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
            {
                path: '/Projects',
                name: 'Projects',
                component: ()=>import('./views/Projects.vue')
            },
            {
                path: '/ProjectDetail',
                name: 'ProjectDetail',
                component: ()=>import('./views/ProjectDetail.vue')
            },
      ]
    }
  ]
})
