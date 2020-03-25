<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
              个人中心
        </div>
        <div class="nav">
            <div class="nav_top">
                <img src="./../../../common/imager/12.png" alt="" width="50" style="vertical-align: middle;">
                <div class="top_name">
                    <p>孟淑娴</p>
                </div>
            </div>
            <div class="nav_bottom">
                <div class="nav_child" @click="gonewOrder()">
                    <p>
                        <svg t="1584582665558" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5013" width="30" height="30"><path d="M975.238095 658.285714 585.142857 658.285714c-26.940952 0-48.761905-21.820952-48.761905-48.761905l0-195.047619c0-26.940952 21.820952-48.761905 48.761905-48.761905l390.095238 0c26.940952 0 48.761905 21.820952 48.761905 48.761905l0 195.047619C1024 636.464762 1002.179048 658.285714 975.238095 658.285714zM975.238095 414.47619 585.142857 414.47619l0 195.047619 390.095238 0L975.238095 414.47619zM682.666667 536.380952l-48.761905 0 0-48.761905 48.761905 0L682.666667 536.380952zM902.095238 146.285714c0-26.940952-21.820952-48.761905-48.761905-48.761905L97.52381 97.52381C70.582857 97.52381 48.761905 119.344762 48.761905 146.285714l0 731.428571c0 26.940952 21.820952 48.761905 48.761905 48.761905l755.809524 0c26.940952 0 48.761905-21.820952 48.761905-48.761905l0-170.666667 48.761905 0 0 170.666667c0 53.857524-43.666286 97.52381-97.52381 97.52381L97.52381 975.238095c-53.857524 0-97.52381-43.666286-97.52381-97.52381L0 146.285714c0-53.857524 43.666286-97.52381 97.52381-97.52381l755.809524 0c53.857524 0 97.52381 43.666286 97.52381 97.52381l0 170.666667-48.761905 0L902.095238 146.285714z" p-id="5014" fill="#ffffff"></path></svg>
                    </p>
                    <p>新订单</p>
                </div>
                <div class="nav_child" @click="gopresentOrder()">
                    <p>
                        <svg t="1584582838489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6291" width="30" height="30"><path d="M183.70224 828.917975V127.525842c0-26.733463 21.675781-48.589875 48.589875-48.589874h536.836832c26.733463 0 48.589875 21.675781 48.589875 48.589874v410.033516h65.388604v-410.033516c0-62.859764-51.118716-113.978479-113.978479-113.978479H232.111484c-62.859764 0-113.978479 51.118716-113.97848 113.978479V829.098606c0 62.859764 51.118716 113.978479 113.97848 113.97848h231.388957v-65.388605H232.111484c-26.733463-0.180632-48.409243-22.037044-48.409244-48.770506z" p-id="6292" fill="#ffffff"></path><path d="M732.099488 568.627977c-121.565003 0-220.551067 98.986065-220.551067 220.551067S610.534486 1009.730111 732.099488 1009.730111s220.551067-98.986065 220.551068-220.551067-98.986065-220.551067-220.551068-220.551067z m0 375.713529c-85.619333 0-155.162463-69.543129-155.162462-155.162462 0-85.619333 69.543129-155.162463 155.162462-155.162463s155.162463 69.543129 155.162463 155.162463c-0.180632 85.619333-69.723761 155.162463-155.162463 155.162462zM675.381196 217.119069H325.678603c-18.06315 0-32.694302 14.631152-32.694302 32.694302 0 18.06315 14.631152 32.694302 32.694302 32.694302h349.702593c18.06315 0 32.694302-14.631152 32.694302-32.694302 0-18.06315-14.631152-32.694302-32.694302-32.694302zM708.075498 478.131593c0-18.06315-14.631152-32.694302-32.694302-32.694302H325.678603c-18.06315 0-32.694302 14.631152-32.694302 32.694302 0 18.06315 14.631152 32.694302 32.694302 32.694302h349.702593c18.06315 0.180632 32.694302-14.631152 32.694302-32.694302zM325.678603 673.936144c-18.06315 0-32.694302 14.631152-32.694302 32.694302s14.631152 32.694302 32.694302 32.694303H420.871406c18.06315 0 32.694302-14.631152 32.694302-32.694303s-14.631152-32.694302-32.694302-32.694302h-95.192803z" p-id="6293" fill="#ffffff"></path><path d="M800.197566 775.270418h-57.260187v-35.945669c0-18.06315-14.631152-32.694302-32.694303-32.694303-18.06315 0-32.694302 14.631152-32.694302 32.694303v68.639971c0 18.06315 14.631152 32.694302 32.694302 32.694303H800.197566c18.06315 0 32.694302-14.631152 32.694302-32.694303 0-18.06315-14.631152-32.694302-32.694302-32.694302z" p-id="6294" fill="#ffffff"></path></svg>
                    </p>
                    <p>问诊中</p>
                </div>
                <div class="nav_child" @click="gooffOrder()">
                    <p>
                        <svg t="1584582749695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5832" width="30" height="30"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-930.909091a418.909091 418.909091 0 1 0 418.909091 418.909091A418.909091 418.909091 0 0 0 512 93.090909z m138.914909 575.301818L488.727273 575.650909a46.056727 46.056727 0 0 1-21.666909-52.037818A46.545455 46.545455 0 0 1 465.454545 512V232.727273a46.545455 46.545455 0 0 1 93.09091 0v275.781818l139.170909 79.569454a46.126545 46.126545 0 0 1 17.128727 63.348364 47.057455 47.057455 0 0 1-63.930182 16.965818zM208.081455 390.423273l-44.334546-14.592a373.061818 373.061818 0 0 1 250.205091-218.251637l14.778182 43.915637a326.656 326.656 0 0 0-220.648727 188.928z" p-id="5833" fill="#ffffff"></path></svg>
                    </p>
                    <p> 已完成</p>
                </div>
                <div class="nav_child nav_order" @click="goorderlist()">
                    <p>
                        <svg t="1584582872576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6730" width="30" height="30"><path d="M745.728252 496.746598c-1.548262-21.932522-18.755156-38.468127-40.031738-38.468127L313.372174 458.278471c-21.104667 0-38.940894 18.019399-38.940894 39.3451 0 21.321608 17.836227 39.336914 38.940894 39.336914l393.438721 0c21.11183 0 38.948057-18.015306 38.948057-39.336914L745.728252 496.746598z" p-id="6731" fill="#1296db"></path><path d="M419.259806 191.314257l182.786023 0c27.755134 0 51.205219-26.782993 51.205219-58.485019 0-32.247448-23.472598-58.481949-52.322669-58.481949L419.259806 74.347289c-28.850072 0-52.318576 26.233478-52.318576 58.481949S390.410758 191.314257 419.259806 191.314257z" p-id="6732" fill="#1296db"></path><path d="M706.809871 311.908846 313.372174 311.908846c-21.104667 0-38.940894 18.015306-38.940894 39.3451 0 21.325701 17.836227 39.341007 38.940894 39.341007l393.438721 0c21.11183 0 38.948057-18.015306 38.948057-39.341007C745.757928 329.924151 727.921701 311.908846 706.809871 311.908846z" p-id="6733" fill="#1296db"></path><path d="M705.696514 617.027032 313.372174 617.027032c-21.104667 0-38.940894 18.019399-38.940894 39.3451 0 21.321608 17.836227 39.336914 38.940894 39.336914l393.438721 0c21.11183 0 38.948057-18.015306 38.948057-39.336914l-0.030699-0.876973C744.17999 633.56366 726.972073 617.027032 705.696514 617.027032z" p-id="6734" fill="#1296db"></path><path d="M884.997156 134.834918c-20.917402-22.630417-50.930973-34.592866-86.793762-34.592866l-52.384068 0c-20.875446 0-43.402509 13.752212-43.402509 35.96205 0 20.99415 21.497617 41.59842 43.402509 41.59842l52.384068 0c24.410969 0 40.187281 15.932878 40.187281 40.59558l0 609.108688c0 24.662703-15.777335 40.59558-40.187281 40.59558L234.242975 868.102371c-25.28078 0-53.5578-17.359366-53.5578-40.59558L180.685175 218.399125c0-24.662703 15.773242-40.59558 40.187281-40.59558l65.757656 0c19.293415 0 32.255635-16.718777 32.255635-41.59842 0-22.518876-12.05864-35.96205-32.255635-35.96205l-65.757656 0c-73.240071 0-116.962875 44.592614-116.962875 119.281687l0 602.351797c0 75.196633 48.097438 123.786281 122.534777 123.786281l566.18304 0c79.021751 0 122.538871-43.963281 122.538871-123.786281L915.166269 219.523739C915.166269 185.472202 904.735709 156.187225 884.997156 134.834918z" p-id="6735" fill="#1296db"></path></svg>
                    </p>
                    <p>全部订单</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import http from '@/utils/http'
    export default {
        methods: {
            //返回上一层
            tobackdetail(){
                this.$router.push('/doctorListHome');
            },
            //查看全部订单
            goorderlist(){
                this.$router.push('/orderlist');
            },
            //查看新订单
            gonewOrder(){
                this.$router.push('/newOrder');
            },
            //查看已完成订单
            gooffOrder(){
                this.$router.push('/offOrder');
            },
            //查看正在咨询
            gopresentOrder(){
                this.$router.push('/presentOrder');
            },
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
                    // var url  = local.split('#')[0]
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect`
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
                var url = "system/doctorLogin";
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
                    that.$store.commit('setdoctor_id',res.data.doctor_id);
                     localStorage.setItem('token',res.data.token)
                    localStorage.setItem('doctor_id',res.data.doctor_id)
                }).catch(function (err) {
                    console.log(err);
                });
            },
        },
        created() {
            var that = this;
             var token  =localStorage.getItem('token'); 
            var doctor_id = localStorage.getItem('doctor_id'); 
            if(doctor_id==''||doctor_id==undefined||token==''||token==undefined){
                 //获取code
                that.getCode();
            }
            //判断有没有code有没有token去请求token
            if(that.code!=null&&that.code!==''){
                localStorage.setItem('code',that.code);
                if(doctor_id==''||doctor_id==undefined||token==''||token==undefined){
                    that.gettoken();
                }
            }
        },
    }
</script>

<style scoped>
.tittle {
  /* height: 50px; */
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-family: PingFangSC-regular;
  position: relative;
  
}
.arrow-icon{
  position: absolute;
  left: 5px;
  top: 0px;
}
.nav{
    background: #00bbbb;
    color:white;
    padding: 0px 5% 15px 5%;
}
.top_name{
    display: inline-block;
    font-size: 18px;
    font-weight: 800;
    vertical-align: middle;
}
.nav_top{
    padding: 10px 0;
}
.nav_bottom{
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    width:100%;
    flex-wrap: wrap;
    padding: 10px 0;
    font-size: 16px;
    overflow: auto;
    border-radius: 5px;
    margin:1.66667vw  0;
}
.nav_child{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:25%;
    padding-top: 10px;
    padding-bottom: 10px;
}
.nav_order{
       border-left: 1px solid;
       color:#1296db;
}
.sew{
    position: absolute;
    right: 5%;
    top: 0;
}
</style>