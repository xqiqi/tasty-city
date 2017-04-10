import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Header from '@/components/Header'
import Hello from '@/components/Hello'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        header: Header,
        main: Hello
      }
    }
  ]
})
