<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
              支付提交
        </div>
        <div class="top">
            <div class="jine">支付金额</div>
            <div class="payment-money">￥{{fee}}</div>
        </div>
        <div class="payment-mode">
            <img class="payment-img" src="./../../../common/imager/10.png" alt>
            <span>微信支付</span>
            <img class="duihao-img" src="./../../../common/imager/11.png" alt>
        </div>
        <div class="btn">
            <Button type="success" class="add-btn" @click="payment">立即支付</Button>
        </div>
        <div class="wen">
            <p>温馨提示：请立即支付，支付成功，注意查收微信模板消息，等待医生接诊</p>
        </div>
        <Modal
            v-model="modal1"
            title="Common Modal dialog box title"
            @on-ok="ok">
            <p>支付成功，注意查收微信模板消息，等待医生接诊</p>
    </Modal>
    </div>
</template>

<script>
import http from '@/utils/http';
    export default {
        data() {
            return {
                fee:'',
                modal1:false
            }
        },
        methods: {
            ok(){
                this.$router.push('/inquiryList')
            },
            //返回上一层
            tobackdetail(){
                this.$router.push('/docparticular')
            },
            //点击立即支付
            payment(){
                var that = this;
                var url = 'appt/generateOrder'
                //费用
                var total_fee = localStorage.getItem("total_fee");
                //科室编码
                var dept_Code =localStorage.getItem("dept_Code"); 
                //医生编码
                var doctor_id =localStorage.getItem("doctorid");
                var user_id = localStorage.getItem("user_id");
                var token =localStorage.getItem("token");
                http({
                    method:'post',
                    url:url,
                    data:{
                        userid:user_id,
                        doctor_id:doctor_id,
                        dept_Code:dept_Code,
                        total_fee:total_fee
                    },
                    headers: {
                        'token':token,
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                   that.onBridgeReady(res.data)
                }).catch(function (err) {
                    console.log(err);
                });
            },
            onBridgeReady(json){
                WeixinJSBridge.invoke(
                "getBrandWCPayRequest",
                {
                    appId: json.appId, //公众号名称，由商户传入
                    timeStamp: json.timeStamp, //时间戳，自1970年以来的秒数
                    nonceStr: json.nonceStr, //随机串
                    package: json.package,
                    signType: json.signType, //微信签名方式：
                    paySign: json.paySign //微信签名
                },
                function(e) {
                    if(e.err_msg == "get_brand_wcpay_request:ok"){
                        window.location.href ='https://guahao.zhangxin66.com/#/inquiryList';
                    }else{
                        alert('支付失败');
                    }
                }
                );
            }
        },
        mounted() {
            this.fee = this.$store.getters.gettotal_fee;
        },
    }
</script>

<style  scoped>
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
.top{
        padding-top: 5.33333vw;
    text-align: center;
    border-bottom: 5.33333vw solid rgb(204, 204, 204);
    line-height: 16vw;

}
.jine{
    font-family: PingFangSC;
    font-weight: 400;
    font-size: 4.8vw;
    color: rgb(16, 16, 16);
}
.payment-money{
    font-weight: 400;
    font-size: 8vw;
    color: rgba(255, 152, 0, 1);
}
.payment-mode{
        font-family: PingFangSC;
    font-weight: 400;
    font-size: 5.33333vw;
    color: rgb(16, 16, 16);
    border-bottom: 1px solid rgb(204, 204, 204);
    border-top: 1px solid rgb(204, 204, 204);
    height: 26.66667vw;
    line-height: 26.66667vw;
    text-align: center;
    position: relative;
}
.payment-img{
        width: 10.66667vw;
    height: 10.66667vw;
    position: absolute;
    top: 50%;
    left: 5%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.duihao-img{
        width: 5.33333vw;
    height: 5.33333vw;
    position: absolute;
    top: 50%;
    right: 5%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 100;
}
.btn{
        width: 100%;
    /* position: fixed; */
    text-align: center;
    margin-top: 26.66667vw;
}
    
.add-btn{
    width: 60%;
    border-radius: 10.66667vw;
    text-align: center;
    background-color: rgb(40, 184, 161);
    font-family: PingFangSC;
    font-weight: 400;
    font-size: 4.26667vw;
    color: rgba(255, 255, 255, 1);
    display: inline-block;
    padding: 0.86667vw 0;
    border: 0;
    outline: none;
}
.wen{
    padding: 15px 10%;
    color: #ccc;
}
</style>