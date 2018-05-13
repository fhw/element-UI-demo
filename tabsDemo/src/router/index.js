import Vue from 'vue'
import Router from 'vue-router'
import NavLeft from '@/components/NavLeft'
import TabDetail from '@/components/TabDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavLeft',
      component: NavLeft
    },
    {
      path: '/NavLeft',
      name: 'NavLeft',
      component: NavLeft,
      children: [
        {
          path: '/TabDetail',
          name: 'TabDetail',
          component: TabDetail
        }
      ]
    }
  ]
})
