import Vue from 'vue'
import Router from 'vue-router'

import Myself from '@/components/Myself'
import Index from '@/components/Index'
import Hongbao from '@/components/hongbao'
import Hongbaoguize from '@/components/Hongbaoguize'
import Duihuan from '@/components/Duihuan'
import Shouhuodz from '@/components/Shouhuodz'
import Addadress from '@/components/Addadress'
import Zhuanti from '@/components/Zhuanti'
import Lidong from '@/components/Lidong'
import Changjing from '@/components/Changjing'
import Meifood from '@/components/Meifood'
import Tuijian from '@/components/Tuijian'
import Jiankang from '@/components/Jiankang'
import Xuanji from '@/components/Xuanji'
import Bofang from '@/components/Bofang'
import Shicai from '@/components/Shicai'
import Wandao from '@/components/Wandao'
import Oneperson from '@/components/Oneperson'
import Today from '@/components/Today'
import Shequ from '@/components/Shequ'
import Zan from '@/components/Zan'
import Xinwen from '@/components/Xinwen'
import Huodong from '@/components/Huodong'
import Huobottom from '@/components/Huobottom'
import Xinshou from '@/components/Xinshou'
import Shipin from '@/components/Shipin'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      redirect: '/index'
    }, {
      path: '/myself',
      component: Myself
    },{
      path:'/index',
      component:Index
    },{
      path:'/hongbao',
      component:Hongbao
    },{
      path:'/hongbaoguize',
      component:Hongbaoguize
    },{
      path:'/duihuan',
      component:Duihuan
    },{
      path:'/shouhuodz',
      component:Shouhuodz
    },{
      path:'/addadress',
      component:Addadress
    },{
      path:'/zhuanti',
      component:Zhuanti
    },{
      path:'/lidong',
      component:Lidong
    },{
      path:'/changjing',
      component:Changjing
    },{
      path:'/meifood',
      component:Meifood
    },{
      path:'/tuijian',
      component:Tuijian
    },{
      path:'/jiankang',
      component:Jiankang
    },{
      path:'/xuanji',
      component:Xuanji
    },{
      path:'/bofang',
      component:Bofang
    },{
      path:'/shicai',
      component:Shicai
    },{
      path:'/wandao',
      component:Wandao
    },{
      path:'/oneperson',
      component:Oneperson
    },{
      path:'/today',
      component:Today
    },{
      path:'/shequ',
      component:Shequ
    },{
      path:'/zan',
      component:Zan
    },{
      path:'/xinwen',
      component:Xinwen
    },{
      path:'/huodong',
      component:Huodong
    },{
      path:'/huobottom',
      component:Huobottom
    },{
      path:'/xinshou',
      component:Xinshou
    },{
      path:'/shipin',
      component:Shipin
    }
  ],
  scrollBehavior (to, from, savedPosition) {  
    //滚动行为。让所有的路由页面滚蛋到顶部
    return { x: 0, y: 0 }
  }
})
