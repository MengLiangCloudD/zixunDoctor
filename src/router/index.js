import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "indexPage",
      redirect: "/home",
    },
    //首页
    {
      path: "/home",
      name: "homePage",
      component: resolve=>(require(["@/components/user/home"],resolve)),
    },
    //找医生
    {
      path: "/doctorListHome",
      name: "doctorListHome",
      component: resolve=>(require(["@/components/user/doctorVisits/doctorListHome"],resolve)),
    },
    //全部科室
    {
      path: "/alldept",
      name: "alldept",
      component: resolve=>(require(["@/components/user/doctorVisits/alldept"],resolve)),
    },
    //医生列表
    {
      path: "/doctorList",
      name: "doctorList",
      component: resolve=>(require(["@/components/user/doctorVisits/doctorList"],resolve)),
    },
  ]
})
