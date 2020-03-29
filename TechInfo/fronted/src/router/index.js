import Vue from 'vue'
import VueRouter from 'vue-router'
import assistantInformation from '../component/biz/assistantInformation'
import fieldInformation from '../component/biz/fieldInformation'
import technicalInformation from '../component/biz/technicalInformation'
import tableDisplay from '../component/biz/tableDisplay'
import body from '../component/body'
import home from '../component/home'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/lotus', component:home
    },
    {
      path: '/', component:home
    },
    
    {
      path: '/lotus', component:body,
      children:[
        {
          path: 'ai',
          component:assistantInformation,
          name: 'AI',
        },  
        {
          path: 'fi',
          component:fieldInformation,
          name: 'FI',
        },  
        {
          path: 'ti',
          component:technicalInformation,
          name: 'TI',
        },  
        {
          path: 'td',
          component:tableDisplay,
          name: 'TD',
        }
      ]
    },
  ]
})
export default router