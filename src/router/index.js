import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import goodBuying from '@/components/goodBuying'
import goodService from '@/components/goodService'
import goodTesting from '@/components/goodTesting'
import goodMy from '@/components/goodMy'
import goodList from '@/components/goodList'
import detail from '@/components/detail'
import goodRegister from '@/components/goodRegister'
import goodCart from '@/components/goodCart'

Vue.use(Router)

export default new Router({
	mode: "hash",
  routes: [
  {							
      path: '/',
      name: 'shouye',
      component:shouye 
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
      path: '/detail/:fid', 
      name: 'detail',
      component: detail
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
