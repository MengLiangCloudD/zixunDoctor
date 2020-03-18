<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
             {{class_name}}科医生列表
        </div>
         <p style="text-align: left;font-size:22px;padding: 10px 5%;padding-left:5%;font-weight: 900">选择医生</p>
        <div class="content">
            <div class="content2">
                <div class="docctor" v-for="(item,index) in docList" :key="index">
                    <img src="./../../../common/imager/avatar.png" alt="" width="60">
                    <div class="docxiang">
                        <div class="docNmae">
                            <p>{{item.nickname}}</p>
                            <p>{{item.title}}</p>
                            <!-- <p >
                                <img src="./../../../common/imager/zan.png" alt="" width="20" style="vertical-align: middle;">
                                <span class="baifen">{{item.reputation_num}}</span>
                            </p> -->
                             <p >
                                <img src="./../../../common/imager/zan.png" alt="" width="20" style="vertical-align: middle;">
                                <span class="baifen">99%</span>
                            </p>
                        </div>
                        <div class="yuan">
                            <p>中国人民解放军总医院301医院</p>
                            <p>内科</p>
                        </div>
                        <div class="shanchang">
                            <p style="width:285px;">擅长：{{item.info}}</p>
                            <p style="width:285px;">擅长：呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等</p>
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
                docList:[],
                class_name:''
            }
        },
        methods: {
             //返回上一层
            tobackdetail(){
                this.$router.push('/doctorListHome')
            },
            //查询医生接口
            selectdoc(){
                 var that = this;
                 var class_id = that.$store.getters.getclass_id;
                var url  = 'appt/doctorList';
                http({
                    method:'post',
                    url:url,
                    data:{
                        class_id:class_id
                    },
                    headers: {
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                    that.docList=[]
                    if(res.errcode==0){
                        that.docList=res.data
                    }else{
                        that.docList=[]
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
        },
        created() {
            this.selectdoc();
            this.class_name=this.$store.getters.getclass_name;
        },
    }
</script>

<style scoped>
.tittle {
  height: 50px;
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
.docxiang{
    display: inline-block;
    vertical-align: top;
}
.baifen{
    color:#FF7F00;
    font-size:17px;
    display: inline-block;
    vertical-align: middle;
    margin: 2px;
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
.yuan p:nth-of-type(1){
     margin-left: 15px;
    font-size: 16px;
    color: black;
}
.yuan p:nth-of-type(1){
    font-size: 16px;
    color: black;
}
.yuan p:nth-of-type(2){
    font-size: 16px;
    color: black;
}
.shanchang{
    margin: 3px;
      margin-left: 15px;
      font-size: 16px;
      
}
.shanchang p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
}
.docctor{
    padding: 10px 5%;
    border-bottom: 1px solid #eee;
}
</style>