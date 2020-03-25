<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;background: rgb(250, 250, 250);">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
             全部订单
        </div>
        <div class="content">
            <div class="content_text" v-for="(item,index) in orderList" :key="index">
                <div class="text_top">
                     <img src="./../../../../common/imager/avatar.png" alt="" width="30" style="vertical-align: middle;">
                    <div class="nei">
                        <div class="docNmae">
                            <p>孟良</p>
                            <p></p>
                             <p class="ta" v-if="item.order_status==0">
                                已完成
                            </p>
                             <p class="ta" v-if="item.order_status==1" style="color:#00bb00">
                                 <span style="margin-right:10px">正在咨询</span> 
                                <Switchs size="large" v-model="swi">
                                    <span slot="open">开启</span>
                                    <span slot="close">关闭</span>
                                </Switchs>
                            </p>
                            <p class="ta" v-if="item.order_status==3">
                               <span style="margin-right:10px">待咨询</span> 
                                <Switchs size="large">
                                    <span slot="open">开启</span>
                                    <span slot="close">关闭</span>
                                </Switchs>  
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
                swi:true
            }
        },
        methods: {
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
                        order_status:'',
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
                    }else{
                        that.orderList=[]
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        },
        created() {
            this.selectOrderList()
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
</style>