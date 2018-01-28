import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import goodBuying from '@/components/goodBuying'
import goodService from '@/components/goodService'
import goodTesting from '@/components/goodTesting'
import goodMy from '@/components/goodMy'
import goodList from '@/components/goodList'
import goodRegister from '@/components/goodRegister'
import goodCart from '@/components/goodCart'

Vue.use(Router)

export default new Router({
	mode: "hash",
  routes: [
  {							
      path: '/',
      name: 'top',
      component:top 
    },
    {							
      path: '/goodBuying',
      name: 'goodBuying',
      component:goodBuying 
    },
    {							
      path: '/goodService',
      name: 'goodService',
      component:goodService 
    },
    {							
      path: '/goodTesting', 
      name: 'goodTesting',
      component:goodTesting 
    },
    {							
      path: '/goodMy', 
      name: 'goodMy',
      component:goodMy 
    },
    {							
      path: '/goodList', 
      name: 'goodList',
      component: goodList
    },
    {							
      path: '/goodRegister', 
      name: 'goodRegister',
      component:goodRegister 
    },
    {							
      path: '/goodCart', 
      name: 'goodCart',
      component:goodCart 
    }
  
  ]
})
