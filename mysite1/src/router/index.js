import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import notes from '@/components/notes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/notes',
      name: 'notes',
      component: notes
    },
  ]
})
