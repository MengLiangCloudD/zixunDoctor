<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;background: rgb(250, 250, 250);">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
             我的问诊
        </div>
        <div class="content">
            <div class="content_text" v-for="(item,index) in orderList" :key="index">
                <div class="text_top">
                     <img src="./../../../common/imager/avatar.png" alt="" width="30" style="vertical-align: middle;">
                    <div class="nei">
                        <div class="docNmae">
                            <p>{{item.doctorname}}</p>
                            <p>{{item.class_name}}</p>
                             <p class="ta" v-if="item.order_status==0">
                                已完成
                            </p>
                             <p class="ta" v-if="item.order_status==1" style="color:#00bb00">
                                正在咨询
                            </p>
                            <p class="ta" v-if="item.order_status==2">
                                未支付
                            </p>
                            <p class="ta" v-if="item.order_status==3">
                                待接诊
                            </p>
                        </div>
                    </div>
                    <div class="text_content">
                        <div class="xinx">
                            <p>病情描述：</p>
                            <p>{{item.illness_info}}</p>
                        </div>
                        <div class="xinx">
                            <p>就&nbsp;&nbsp;诊&nbsp;&nbsp;人：</p>
                            <p><span>{{item.username}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{age}}岁</span>&nbsp;&nbsp;&nbsp;&nbsp;<span v-if="item.gender==1">男</span><span v-if="item.gender==2">女</span></p>
                        </div>
                        <div class="xinx">
                            <p>订单费用：</p>
                            <p style="color:red;">{{item.total_fee}}</p>
                        </div>
                        <div class="xinx">
                            <p>预约时间：</p>
                            <p style=" color: darkturquoise;">{{item.created_at}}</p>
                        </div>
                        <div class="xinx">
                            <p>下单时间：</p>
                            <p>2020.03.19</p>
                        </div>
                    </div>
                </div>
                <div class="text_bottom" v-if="item.order_status==2">
                    <Button class="btn" shape="circle" >取消</Button>
                    <Button class="btn" type="primary" shape="circle">去支付</Button>
                </div>
                <div class="text_bottom" v-if="item.order_status==1">
                    <Button class="btn" type="primary" shape="circle" @click="gocard(item)">去咨询</Button>
                </div>
            </div>
        </div>
        <tabbar class="pubtabbar"></tabbar>
    </div>
</template>

<script>
import http from '@/utils/http'
import tabbar from "./../../../common/tabbar";
    export default {
        components: {
            tabbar,
        },
        data() {
            return {
                orderList:[],
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
                localStorage.setItem('token',res.data.token);
                that.$store.commit('setuser_id',res.data.user_id);
                localStorage.setItem('user_id',res.data.user_id);
                     that.selectOrderList();
                }).catch(function (err) {
                console.log(err);
                });
            },
            //跳转网上咨询
            goConsult(){
                this.$router.push('/doctorListHome')
            },
            //返回上一层
            tobackdetail(){
                this.$router.push('/home')
            },
            gocard(item){
                this.$router.push('/Qrcode')
                localStorage.setItem('qrcode',item.patienturl);
            },
            selectOrderList(){
                var that = this;
                var url = 'appt/patientQueryOrders'
                var user_id =  localStorage.getItem('user_id');
                var token =   localStorage.getItem('token');
                var order_status=that.order_status;
                http({
                    method:'post',
                    url:url,
                    data:{
                        order_status:'',
                        userid:user_id,
                    },
                    headers: {
                        token:token,
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                    that.orderList=[]
                    if(res.errcode==0){
                        
                        that.orderList=res.data;
                        
                    }else{
                        that.orderList=[]
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        },
        created() {
           
            var that = this;
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
            if(user_id!==''&&user_id!==null&&user_id!==undefined){
                that.selectOrderList();
            }
             
        },
    }
</script>

<style  scoped>
.ta{
    color:#f00; 
    font-size:15px;
    display: block; 
    margin: 2px;
    position: absolute;
    right: 10px;
    top: 10px;
}
.pubtabbar {
  position: fixed;
  bottom: 0;
}
.tittle {
    width: 100%;
    z-index: 999;
    position: fixed;
     top: 0;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-family: PingFangSC-regular;
  /* position: relative; */
}
.arrow-icon{
  position: absolute;
  left: 5px;
  top: 0px;
}
.content{
    padding:  50px 5% 50px 5%;
}
.nei{
    display: inline-block;
} 
.content_text{
    position: relative;
    background: #fff;
    padding: 10px 0 0 0;
    border-radius: 5px;
    margin: 10px 0;
}
.text_top{
     padding: 0 10px;
    border-bottom: 1px solid #ccc;
}
.docNmae p{
    display: inline-block;
    vertical-align: middle;
    margin: 2px;
}
.docNmae p:nth-of-type(1){
     margin-left: 15px;
    font-size: 18px;
    font-weight: 700;
}
.docNmae p:nth-of-type(2){
    font-size: 18px;
    font-weight: 700;
}
.text_content{
    padding: 10px;
}
.text_content .xinx p{
    display: inline-block
}
.text_content .xinx{
    padding: 2px 0;
}
.text_content .xinx p:nth-of-type(1){
    color: #000;
}
.text_content .xinx p:nth-of-type(2){
    color:#bbb;
   
}
.text_bottom{
    text-align: right;
    /* padding: 10px; */
}
.text_bottom .btn{
    margin: 13px 10px;
}
</style>