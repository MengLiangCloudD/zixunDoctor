<template>
  <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;">
      <div class="tittle" style="background: #00bbbb;color:white">
              <div class="arrow-icon" >
                <span>互联网医院</span>
              </div>
      </div>
      <div class="content">
        <div class="consult" @click="goConsult">
          <p>
            <svg t="1584410442562" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6024" width="40" height="40"><path d="M709.7 375.6c-4.4 0-9-0.9-13.6-2.7-118.7-46.8-249.5-46.8-368.2 0-10.8 4.3-21.9 3.4-30.4-2.3-7.6-5.2-12.1-13.7-12.1-22.9V133.4c0-15.5 12.1-27.3 24.1-32C374.3 75.8 442.4 62.9 512 62.9s137.7 12.9 202.4 38.5c12 4.7 24.1 16.5 24.1 32v214.3c0 9.2-4.5 17.8-12.1 22.9-4.8 3.3-10.6 5-16.7 5zM512 287.9c60.4 0 119.7 9.7 176.6 29V145c-114.2-43-239-43-353.1 0v171.9c56.8-19.2 116.1-29 176.5-29zM851.7 957H173.2c-11.7 0-22.8-4.7-31.2-13.4-8.8-9-13.8-21.5-13.8-34.4-9.6-104.8 14.4-189.6 71.2-251.9 35.8-39.3 84.2-68.9 143.9-88 51.8-16.6 111.2-25 176.4-25 124 0 229.5 40 297.1 112.7 29 31.2 50.6 67.9 64.1 109.2 14.1 43 19.4 91.1 15.8 142.8 0 13.1-5 25.7-13.9 34.8-8.4 8.5-19.4 13.2-31.1 13.2z m-673.5-50h668.5v-0.8c6.3-88.5-16.1-160.9-66.6-215.2-58.1-62.4-150.6-96.8-260.6-96.8-89.1 0-210.5 16.8-283.3 96.7-47.1 51.8-66.7 124-58.2 214.7 0.2 0.5 0.2 1 0.2 1.4z" p-id="6025" fill="#fff"></path><path d="M511 588.3c-30.8 0-60.9-7.7-89.6-23-26.2-13.9-50-33.4-70.8-57.9-19.6-23.1-35.8-50.3-46.9-78.6-11.3-29-17.3-59.4-17.3-87.8h50c0 45.3 19.6 95.4 52.3 134.1 34.5 40.7 78 63.2 122.3 63.2 97.8 0 176.6-107.5 176.6-196.5h50c0 28.5-6.1 58.9-17.7 87.9-11.2 28.2-27.7 55.3-47.6 78.3-21 24.3-45 43.7-71.4 57.5-28.9 15.1-59.2 22.8-89.9 22.8zM591 915h-62L285 734.9 397 609z" p-id="6026" fill="#fff"></path><path d="M511.3 845l64.8 54L739 731.3 651 609zM576.4 175H537v-39.4h-50V175h-39.4v50H487v39.4h50V225h39.4z" p-id="6027" fill="#fff"></path></svg>
          </p>
          <p>网上咨询</p>
        </div>
        <div class="guahao">
          <p>
            <svg t="1584410503310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6336" width="40" height="40"><path d="M436.695053 450.382244a25.393676 25.393676 0 0 1 35.906658 0l71.813317 71.838711 83.44362-75.69855a37.303311 37.303311 0 0 1 55.866089 17.115338 27.933044 27.933044 0 0 1 0 35.906659l-71.813317 71.813317 71.813317 71.83871a25.393676 25.393676 0 0 1-35.906659 35.906658l-71.813317-71.813316-71.83871 71.813316a48.908221 48.908221 0 0 1-55.866088 1.853739 46.343459 46.343459 0 0 1-11.782666-51.015896l71.813317-71.813317-71.813317-71.83871a25.393676 25.393676 0 0 1 0.177756-35.906659z m570.74827 156.044142l-395.125604 395.049423a50.787353 50.787353 0 0 1-71.838711 0l-250.635586-250.45783 0.228543-0.203149c-0.203149-0.203149-0.48248-0.253937-0.685629-0.457087a25.393676 25.393676 0 0 1 35.906658-35.906658c0.203149 0.203149 0.27933 0.48248 0.457087 0.685629l3.707476-3.707477 196.343906 190.452573c19.832461 19.832461 65.668047 26.841116 85.500508 7.008655l257.237942-270.645803a63.027105 63.027105 0 0 0 13.204712-87.201885l-457.594048-477.401115-307.009548-11.554123c0 0.304724 0 0.711023 0.20315 1.04114a37.277917 37.277917 0 0 0-12.392115-2.539367 38.090515 38.090515 0 0 0-38.090514 38.090514 37.455673 37.455673 0 0 0 2.387005 11.80806c-0.863385-0.330118-1.777557-0.533267-2.539367-0.914172l7.034048 353.479975 73.4893 71.305443-0.888779 0.863385a25.393676 25.393676 0 0 1-35.906658 35.906658l-0.152362 0.177756-107.669188-107.567613 5.408853-408.990552c1.142715 0 2.107675 0.660236 3.275784 0.660236 0.330118 0 0.634842-0.177756 0.96496-0.20315a37.049374 37.049374 0 0 1-3.682083-15.718685A37.709609 37.709609 0 0 1 46.292672 1.802951c0.863385 0 1.574408 0.431692 2.539368 0.48248l422.322232-2.310825 536.289051 534.714644a50.787353 50.787353 0 0 1 0 71.737136z m-789.870304 0.27933c0.203149 0.203149 0.253937 0.48248 0.431693 0.685629l2.082281-2.082281 36.465319 35.373391-2.539367 2.539368a25.393676 25.393676 0 0 1-35.906659 35.906658v0.126968l-35.932052-35.906658 0.253937-0.253937a5.916727 5.916727 0 0 1-0.660235-0.431692 25.393676 25.393676 0 0 1 35.805083-35.957446z" fill="#fff" p-id="6337"></path><path d="M536.568382 1008.636826l-250.635586-250.432437 0.203149-0.203149c-0.203149-0.203149-0.457086-0.253937-0.660235-0.457086a25.393676 25.393676 0 0 1 35.906658-35.906659c0.203149 0.203149 0.253937 0.457086 0.457086 0.660236l214.728928 214.525778a50.787353 50.787353 0 0 0 71.813317 0l323.134532-323.210713a50.787353 50.787353 0 0 0 0-71.83871L452.489919 62.011358s-354.368754 1.879132-355.003595 2.539367a37.658822 37.658822 0 0 0-37.887366 37.150949l-3.351965 355.30832 85.09421 85.018028c0.304724 0.304724 0.736417 0.406299 1.04114 0.711023a25.393676 25.393676 0 0 1-35.906658 35.906659l-0.177756 0.177755-103.987104-108.278636S1.44744 99.238487 1.44744 47.003695A36.033627 36.033627 0 0 1 43.372399 9.674991L465.643844 8.836999l537.736491 533.038661a50.787353 50.787353 0 0 1 0 71.838711L608.381699 1008.7384a50.787353 50.787353 0 0 1-71.813317-0.101574zM213.636999 613.892126c0.253937 0.253937 0.330118 0.609448 0.584055 0.863385l35.119454 35.094061c0.228543 0.228543 0.558661 0.27933 0.787204 0.507874a25.393676 25.393676 0 1 1-35.932052 35.932052L178.289002 650.382839l0.253937-0.253936c-0.203149-0.203149-0.48248-0.253937-0.68563-0.457087a25.393676 25.393676 0 0 1 35.77969-35.77969z m286.745394-143.093366l71.813317 71.838711 71.83871-71.838711a25.393676 25.393676 0 0 1 35.906659 35.906658l-71.813317 71.838711 71.813317 71.813317a25.393676 25.393676 0 1 1-35.906659 35.932052l-71.83871-71.838711-71.813317 71.838711a25.393676 25.393676 0 0 1-35.906658-35.932052l71.813316-71.813317-71.813316-71.838711a25.393676 25.393676 0 0 1 35.906658-35.906658z" fill="#fff" p-id="6338"></path><path d="M192.560248 199.492722m-38.090515 0a38.090515 38.090515 0 1 0 76.18103 0 38.090515 38.090515 0 1 0-76.18103 0Z" fill="#fff" p-id="6339"></path></svg>
          </p>
          <p>预约挂号</p>
        </div>
      </div>
  </div>
</template>

<script>
import http from '@/utils/http'
  export default {
    data() {
        return {
          code:''
        }
      },
    methods: {
      //非静默授权，第一次有弹框 获取code
      getCode () {
        this.code = ''
        // 获取页面url
        var local = window.location.href
        var appid = 'wxa3223fdf1ee1ebc1'
        // 截取code
        this.code = this.getUrlCode().code 
        // 如果没有code，则去请求
        if (this.code == null || this.code === '') { 
            var url  = local.split('#')[0]
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect`
        } else {
              // 你自己的业务逻辑
        }
      },
      // 截取url中的code方法
      getUrlCode() { 
        var url = location.search
        this.winUrl = url
        var theRequest = new Object()
        if (url.indexOf("?") != -1) {
          var str = url.substr(1)
          var strs = str.split("&")
          for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1])
          }
        }
        return theRequest
      },
      // 获取token
      gettoken(){
        var that = this;
        var url = "system/userLogin";
        var code = that.code;
        
        http({
          //这里是你自己的请求方式、url和data参数
          method: 'post',
          url: url,
          data: {
            code:code
          },
          //假设后台需要的是表单数据这里你就可以更改
          headers: {
            
            "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
          }
        }).then(function (res) {
          //将token存到vuex
          that.$store.commit("settoken", res.data.token);
          that.$store.commit('setuser_id',res.data.user_id);
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('user_id',res.data.user_id)
        }).catch(function (err) {
          console.log(err);
        });
      },
      //跳转网上咨询
      goConsult(){
        this.$router.push('/doctorListHome')
      }
    },
    mounted() {
      var that = this;
      //获取code
      
      var token  = localStorage.getItem('token');
      var user_id =localStorage.getItem('user_id');
      if(user_id==''||user_id==undefined||token==''||token==undefined){
        that.getCode();
      }
      //判断有没有code有没有token去请求token
      if(that.code!=null&&that.code!==''){
        if(user_id==''||user_id==undefined||token==''||token==undefined){
          that.gettoken();
        }
      }
    },
  }
</script>

<style  scoped>
.tittle {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-family: PingFangSC-regular;
  position: relative;
}
.content{
  text-align: center;
  margin: 100px auto 0 auto;
}
.consult,.guahao{
  background: #00bbbb;
  color: #fff;
  border: 1px solid #ccc;
  width: 60%;
  display: inline-block;
  margin: 20px 0;;
  border-radius: 10px;
}
.consult p,.guahao p{
  
  display: inline-block;
  vertical-align: middle;
  padding: 10px 0;
  font-size: 18px;
  
}
</style>