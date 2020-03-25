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


    /**=======================================================咨询医生 ===============================================*/
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
    //医生介绍
    {
      path: "/docparticular",
      name: "docparticular",
      component: resolve=>(require(["@/components/user/doctorVisits/docparticular"],resolve)),
    },
    //问诊列表
    
    {
      path: "/inquiryList",
      name: "inquiryList",
      component: resolve=>(require(["@/components/user/doctorVisits/inquiryList"],resolve)),
    },
    //二维码
    
    {
      path: "/Qrcode",
      name: "Qrcode",
      component: resolve=>(require(["@/components/user/doctorVisits/Qrcode"],resolve)),
    },
     /**=======================================================支付 ===============================================*/
    //支付界面
    {
      path: "/payment",
      name: "payment",
      component: resolve=>(require(["@/components/user/payment/payment"],resolve)),
    },
    
    /**====================================================== 患者个人中心 ===============================================*/
    
    //主界面
    {
      path: "/HomePage",
      name: "HomePage",
      component: resolve=>(require(["@/components/user/Personalcenter/HomePage"],resolve)),
    },


     /**====================================================== 导诊 ===============================================*/
    //  导诊首页
    {
      path: "/leadHome",
      name: "leadHome",
      component: resolve=>(require(["@/components/user/hospitalguide/leadHome"],resolve)),
    },
     
    
    /**====================================================== 医生 ===============================================*/
    //个人中心
    
    {
      path: "/docCenter",
      name: "docCenter",
      component: resolve=>(require(["@/components/doctor/PersonalDoctor/docCenter"],resolve)),
    },
    //订单列表
    
    {
      path: "/orderlist",
      name: "orderlist",
      component: resolve=>(require(["@/components/doctor/PersonalDoctor/order/orderlist"],resolve)),
    },
    //新订单
    {
      path: "/newOrder",
      name: "newOrder",
      component: resolve=>(require(["@/components/doctor/PersonalDoctor/order/newOrder"],resolve)),
    },
    //已完成
    {
      path: "/offOrder",
      name: "offOrder",
      component: resolve=>(require(["@/components/doctor/PersonalDoctor/order/offOrder"],resolve)),
    },
    
    //正在咨询
    {
      path: "/presentOrder",
      name: "presentOrder",
      component: resolve=>(require(["@/components/doctor/PersonalDoctor/order/presentOrder"],resolve)),
    },

    //二维码
    {
      path: "/docqbcard",
      name: "docqbcard",
      component: resolve=>(require(["@/components/doctor/PersonalDoctor/order/docqbcard"],resolve)),
    },
    
  ]
})
