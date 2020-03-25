<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;background: rgb(250, 250, 250);">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
              医生主页
        </div>
        <div class="content">
            <div class="nav">
                <div class="nav_top">
                    <img src="./../../../common/imager/avatar.png" alt="" width="70" style="border-radius: 50%;">
                    <div class="docxiang">
                        <div class="docNmae">
                            <p>{{docParticularslist.nickname}}</p>
                            <p>{{docParticularslist.title}}</p>
                            <!-- <p >
                                <img src="./../../../common/imager/zan.png" alt="" width="20" style="vertical-align: middle;">
                                <span class="baifen">{{item.reputation_num}}</span>
                            </p> -->
                             <p >
                                <span class="baifen">{{docParticularslist.class_name}}</span>
                            </p>
                        </div>
                        <div class="yuan">
                            <p>{{docParticularslist.hospital}}</p>
                        </div>
                    </div>
                </div>
                <div class="nav_bottom">
                    <div class="shuju">
                        <p>好评率</p>
                        <p>{{docParticularslist.reputation_rate}}</p>
                    </div>
                    <div class="shuju">
                        <p>接诊人数</p>
                        <p>{{docParticularslist.reputation_num}}</p>
                    </div>
                    <div class="shuju">
                        <p>平均响应</p>
                        <p>{{docParticularslist.respose_time}}</p>
                    </div>
                </div>
            </div>
            <div class="introduce">
                <div class="shancang">
                    <img src="./../../../common/imager/04.png" alt="" width="30">
                    <p class="shanc"><span></span><span class="neif" :class="{'neif1':type=='1'}"><span style="font-weight: 600;">擅长：</span> {{docParticularslist.good_at}}</span> </p>
                </div>
                <div class="shancang">
                    <img src="./../../../common/imager/05.png" alt="" width="30">
                    <p class="shanc"><span></span><span class="neif"  :class="{'neif1':type==true}"><span style="font-weight: 600;">简介：</span> {{docParticularslist.info}}</span> </p>
                </div>
                <div class="xiala" @click="dia">
                    <p v-if="!type"><Icon type="ios-arrow-down" /></p> 
                    <p v-if="type"><Icon type="ios-arrow-up" /></p> 
                </div>
                <div class="feature">
                    <div class="tuwn">
                        <div class="left">
                            <img src="./../../../common/imager/06.png" alt="" width="40" style="vertical-align: middle;">
                            <div class="left_ch">
                                <p>图文问诊</p>
                                <p>￥0.00/次</p>
                            </div>
                        </div>
                        <div class="right">
                            <Button type="primary" shape="circle" >去咨询<Icon size="20" type="ios-arrow-forward" style="vertical-align: middle;"/></Button>
                        </div>
                    </div>
                    <div class="tuwn">
                        <div class="left">
                            <img src="./../../../common/imager/07.png" alt="" width="40" style="vertical-align: middle;">
                            <div class="left_ch">
                                <p>电话问诊</p>
                                <p>￥0.00/次</p>
                            </div>
                        </div>
                        <div class="right">
                            <Button type="primary" shape="circle" >去咨询<Icon size="20" type="ios-arrow-forward" style="vertical-align: middle;"/></Button>
                        </div>
                    </div>
                    <div class="tuwn" @click="gopayment()">
                        <div class="left">
                            <img src="./../../../common/imager/08.png" alt="" width="40" style="vertical-align: middle;">
                            <div class="left_ch">
                                <p>视频问诊</p>
                                <p>￥{{docParticularslist.consult_price}}/次</p>
                            </div>
                        </div>
                        <div class="right">
                            <Button type="primary" shape="circle" >去咨询<Icon size="20" type="ios-arrow-forward" style="vertical-align: middle;"/></Button>
                        </div>
                    </div>
                </div>
                <div class="pingjia">
                    <div class="pingjia_top">
                        <div>
                            <span>患者评价</span>
                            <span>(762)</span>
                            <span>含开药门诊</span>
                        </div>
                        <div>
                            <span>
                                好评率
                            </span>
                            <span style="color:orange">
                               {{docParticularslist.reputation_rate}}
                            </span><Icon type="ios-arrow-forward" />
                        </div>
                    </div>
                    <div class="pingjia_nav">
                        <div class="nei">认真负责</div>
                        <div class="nei">耐心细致</div>
                        <div class="nei">帮助很大</div>
                    </div>
                </div>
                <div class="pingjia_conttent">
                    <div class="pingja_comm">
                        <p style="display:inline-block;vertical-align: middle;color:black">孟良</p>
                        <div class="xing"  style="display:inline-block;vertical-align: middle;margin-left:10px;" >
                            <img src="./../../../common/imager/09.png" alt="" width="20" style="display:inline-block;vertical-align: middle;">
                            <img src="./../../../common/imager/09.png" alt="" width="20" style="display:inline-block;vertical-align: middle;">
                            <img src="./../../../common/imager/09.png" alt="" width="20" style="display:inline-block;vertical-align: middle;">
                            <img src="./../../../common/imager/09.png" alt="" width="20" style="display:inline-block;vertical-align: middle;">
                            <img src="./../../../common/imager/09.png" alt="" width="20" style="display:inline-block;vertical-align: middle;">
                        </div>
                        <div class="neirong">
                            非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，非常好，
                        </div>
                        <div class="pingjia_bottom">
                        <div>
                            [图文问诊]
                        </div>
                        <div>
                            2020.03.03
                        </div>
                    </div>
                    </div>
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
                type:false,
                docParticularslist:{}
            }
        },
        methods: {
            //返回上一层
            tobackdetail(){
                this.$router.push('/doctorListHome')
            },
            //点击展开医生简介
            dia(){
                this.type=!this.type
            },
            //查询医生详细信息
            selectParticulars(){
                var that = this;
                var url = 'appt/doctorDetail';
                var doctor_id = localStorage.getItem('doctor_id');
                http({
                    method:'post',
                    url:url,
                    data:{
                        doctor_id:doctor_id
                    },
                    headers: {
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                    that.docParticularslist=[]
                    if(res.errcode==0){
                        that.docParticularslist=res.data[0]
                    }else{
                        that.docParticularslist=[]
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            //前往支付
            gopayment(){
                //存储医生id
                this.$store.commit('setdoctorid',this.docParticularslist.doctor_id);
                //存储支付费用
                this.$store.commit('settotal_fee',this.docParticularslist.consult_price);
                //存储咨询所需的部门编码
                this.$store.commit('setdept_Code',this.docParticularslist.class_id);
                //跳转到支付页面
                this.$router.push('/payment');
            }
        },
        created() {
            this.selectParticulars();
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
/* .content{
    
} */
.nav{
    padding: 15px 5% 15px 5%;
    background:#00bbbb;
    color: white;
}
.docxiang{
    display: inline-block;
    vertical-align: top;
}
.baifen{
    font-size:18px;
    display: inline-block;
    vertical-align: middle;
    margin: 2px;
    font-weight: 700;
}
.docNmae p,.yuan p{
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
.yuan p{
     margin-left: 15px;
    font-size: 16px;
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
.shuju{
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:33%;
    padding-top: 10px;
    padding-bottom: 10px;
}
.shuju p:nth-of-type(2){
    font-size: 18px;
}
.introduce{
    padding: 15px 5% 15px 5%;
    
}
.shancang{
    padding: 6px 0;
}
.shanc{
    display: inline-block;
    width:calc(100% - 45px);
    vertical-align: top;
    
}
.neif{
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;    
    overflow: hidden;
    margin-left: 15px;
}
.neif1{
 margin-left: 15px;
 display: inline-block;
}
.xiala{
    text-align: center;
    padding: 5px 0;
    color: #000;
}
.tuwn{
    display: flex;
    padding: 10px 10px 10px 10px;
    border-bottom: 1px solid rgb(245, 245, 245);
}
.left,.right,.left_ch{
    display: inline-block;
    vertical-align: middle;
}
.left{
    flex: 1;
}
.right{
    vertical-align: middle;
    line-height: 45px;
}
.left_ch{
    margin-left: 10px;
    text-align: center;
}
.left_ch p:nth-of-type(1){
    font-size: 14px;
    font-weight: 600;
}
.feature{
    background: #fff;
    padding: 10px 0 0 0;
    border-radius: 5px;
    box-shadow: rgb(240, 240, 240) 0px 0px 0px 0.5px;
}
.pingjia_top {
    display: flex;
    padding: 10px 0;
}
.pingjia_top div{
    display: inline-block;
}
.pingjia_top div:nth-of-type(1){
    flex: 1;
}
.pingjia_top div:nth-of-type(1) span:nth-of-type(1){
    font-size: 18px;
    font-weight: 900;
}
.pingjia_top div:nth-of-type(2){
    line-height: 8.33333vw;
}
.pingjia_nav{
    display: flex;
    align-items: center;
    width:100%;
    flex-wrap: wrap;
    padding: 10px 0;
    font-size: 16px;
    overflow: auto;
    border-radius: 5px;
    margin:1.66667vw  0;
    border-bottom: 1px solid rgb(230, 230, 230);
}
 
.nei{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:30%;
    padding: 5px 0;
    background: PowDerBlue;
    margin:0 1%;
    border-radius: 20px;
}
.pingja_comm{
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}
.pingja_comm p {
    font-size: 16px;
}
.neirong{
    padding: 5px 0;
}
.pingjia_bottom {
    display: flex;
    /* padding: 10px 0; */
    color: #ccc;
}
.pingjia_bottom div{
    display: inline-block;
}
.pingjia_bottom div:nth-of-type(1){
    flex: 1;
}
</style>