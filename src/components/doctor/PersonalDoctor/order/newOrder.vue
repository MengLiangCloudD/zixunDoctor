<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;background: rgb(250, 250, 250);">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
            待接诊订单
        </div>
        <div class="content">
            <div class="content_text" v-for="(item,index) in orderList" :key="index">
                <div class="text_top">
                     <img src="./../../../../common/imager/avatar.png" alt="" width="30" style="vertical-align: middle;">
                    <div class="nei">
                        <div class="docNmae">
                            <p>孟良</p>
                            <p></p>
                            <p class="ta" v-if="item.order_status==3">
                               <span style="margin-right:10px">待咨询</span> 
                                <Switchs size="large" @on-change="updateOrder(item)" :value="swi">
                                    <span slot="open">开启</span>
                                    <span slot="close">关闭</span>
                                </Switchs>  
                                <!-- <div size="large" class="switchopen activeswitchopen" :class="{'activeswitchopen':item.visitstatus=='3'}" @click="updateOrder(item)">
                                    {{item.order_status=='1'?"接诊":"关闭"}}
                                    <div class="circle" :class="{'activecircle':item.order_status=='3'}"></div>
                                </div> -->
                            </p>
                            
                            <!-- <div class="sew">
                            
                        </div> -->
                        </div>
                    </div>
                    <div class="text_content">
                        <div class="xinx">
                            <p>病情描述：</p>
                            <p>感冒发烧无所不能</p>
                        </div>
                        <div class="xinx">
                            <p>就&nbsp;&nbsp;诊&nbsp;&nbsp;人：</p>
                            <p><span>孟良</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>22岁</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>男</span></p>
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
                <!-- <div class="text_bottom">
                    <Button class="btn" type="primary" shape="circle">去咨询</Button>
                </div> -->
                <div class="text_bottom" v-if="item.order_status==1&&item.order_code!=0">
                    <Button class="btn" type="primary" shape="circle">去咨询</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/utils/http'
    export default {
        data() {
            return {
                orderList:[],
                swi:false,
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
                    localStorage.setItem('doctor_id',res.data.doctor_id);
                    localStorage.setItem('token',res.data.token);
                    that.selectOrderList();
                }).catch(function (err) {
                    console.log(err);
                });
            },
            //返回上一层
            tobackdetail(){
                this.$router.push('/docCenter')
            },
            selectOrderList(){
                var that = this;
                var url = 'appt/queryInquiryRecordByDoctorId'
                var doctor_id =  localStorage.getItem('doctor_id');
                var token =   localStorage.getItem('token');
                http({
                    method:'post',
                    url:url,
                    data:{
                        order_status:'3',
                        doctor_id:doctor_id
                    },
                    headers: {
                        token:token,
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                    that.orderList=[]
                    if(res.errcode==0){
                        that.orderList=res.data;
                        that.swi=false
                    }else{
                        that.orderList=[]
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            //修改订单状态进行咨询
            updateOrder(item){
                var that = this;
                var url = 'appt/updateDoctorReceiveOrderStatus'
                var order_id =  item.order_id;
                var token =   localStorage.getItem('token');
                http({
                    method:'post',
                    url:url,
                    data:{
                        order_id
                    },
                    headers: {
                        token:token,
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                    that.selectOrderList();
                    that.$router.push('/docqbcard');
                    localStorage.setItem('docqbcard',res.data);
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
                if(doctor_id==''||doctor_id==undefined||token==''||token==undefined){
                    that.gettoken();
                }
            }
            if(doctor_id!==''&&doctor_id!==null&&doctor_id!==undefined){
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
/* 开关 */
.switchopen{
  height: 25px;
  width: 70px;
  border-radius: 15px;
  background: #2d8cf0;
  line-height: 25px;
  font-size: 12px;
  text-align: left;
  padding: 0 10px;
  position: absolute;
  top: 12px;
  right: 10px;
  color: white;
}
.circle{
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: rgb(255,255,255);
  position: absolute;
  top: 3px;
  right:4px;
}
.activecircle{
  left: 4px;
}
.activeswitchopen{
  text-align: right;
  background: rgb(160,165,170);
} 
</style>