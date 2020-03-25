<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
             找医生
        </div>
        <img src="./../../../common/imager/13.jpg" alt="" width="100%" height="150px" @click="goleadHome">
        <div class="content">
            <p class="selectdep">选择科室</p>
            <p class="alldep" @click="goalldept()">查看全部科室<Icon size="30" type="ios-arrow-forward" style="vertical-align: middle;"/>
            <div class="content1">
                <div class="division"  v-for="(item,index) in deplist" :key="index" @click="godocList(item)">
                    <p>
                        <svg t="1566376948291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4462" width="40" height="40"><path d="M819.2 556.8 819.2 556.8c9.6-32 19.2-64 25.6-89.6 16-86.4-3.2-131.2-12.8-169.6-12.8-38.4-51.2-76.8-73.6-96-22.4-19.2-67.2-19.2-76.8-19.2-6.4 0-12.8-12.8-25.6-12.8s-12.8 12.8-12.8 12.8-12.8-6.4-25.6-25.6S601.6 128 563.2 89.6s-80-41.6-140.8-41.6S316.8 64 259.2 99.2 204.8 172.8 195.2 192C185.6 211.2 185.6 243.2 188.8 256 192 268.8 182.4 278.4 172.8 294.4 163.2 310.4 150.4 320 140.8 332.8c-9.6 9.6-6.4 22.4 0 25.6C150.4 364.8 153.6 368 160 371.2c6.4 3.2 0 12.8-3.2 16s-3.2 16 0 19.2c6.4 6.4 0 12.8 0 19.2s0 12.8 6.4 16 6.4 16 3.2 28.8 0 25.6 9.6 38.4c9.6 9.6 32 6.4 44.8 6.4s41.6 3.2 54.4 6.4c6.4 0 16 38.4 25.6 54.4 6.4 16 16 38.4 25.6 51.2s19.2 32 19.2 44.8c0 9.6-35.2 73.6-67.2 118.4-28.8 48-51.2 76.8-64 99.2-9.6 12.8 92.8 89.6 268.8 89.6 54.4 0 96-3.2 128-12.8 22.4 6.4 48 12.8 73.6 12.8 128 0 233.6-105.6 233.6-233.6C915.2 668.8 876.8 598.4 819.2 556.8zM569.6 428.8c12.8-9.6 28.8-25.6 48-54.4C633.6 348.8 640 326.4 640 304c-3.2-19.2-6.4-48 0-54.4C646.4 236.8 652.8 256 659.2 256s9.6-19.2 16-22.4c6.4-3.2 32 51.2 28.8 73.6s-3.2 54.4-22.4 96-86.4 99.2-86.4 99.2 86.4-25.6 89.6-6.4c0 3.2 0 9.6 0 16 0 0 0 0-3.2 0-51.2 0-99.2 16-137.6 44.8l0 0c0-3.2-3.2-3.2-6.4-6.4-19.2-22.4-16-64-19.2-83.2C518.4 448 556.8 438.4 569.6 428.8zM681.6 960c-118.4 0-211.2-96-211.2-211.2 0-118.4 96-211.2 211.2-211.2 118.4 0 211.2 96 211.2 211.2S800 960 681.6 960zM681.6 572.8c-64 0-118.4 51.2-118.4 118.4 0 60.8 44.8 108.8 102.4 115.2l0 35.2-44.8 0 0 35.2 44.8 0 0 44.8 35.2 0 0-44.8 44.8 0 0-35.2-44.8 0 0-35.2c54.4-9.6 96-57.6 96-115.2C800 624 745.6 572.8 681.6 572.8zM681.6 774.4c-44.8 0-83.2-38.4-83.2-83.2s38.4-83.2 83.2-83.2 83.2 38.4 83.2 83.2S726.4 774.4 681.6 774.4z" p-id="4463" fill="#00BBBB"></path></svg>
                    </p>
                    <p>{{item.class_name}}</p> 
                </div>
            </div>
            <p style="text-align: left;font-size:22px;padding: 10px 5%;padding-left:5%;font-weight: 900">名医推荐 <span style="text-align: left;font-size:16px;padding: 10px 0;padding-left:15px;font-weight: 100">获取更多诊疗建议</span></p>
            <div class="content2">
                <div class="docctor" v-for="(item,index) in docList" :key="index" @click="goDocparticular(item)">
                    <img src="./../../../common/imager/avatar.png" alt=""  style="width:60px">
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
                            <p>{{item.hospital}}</p>
                        </div>
                        <div class="shanchang">
                            <p style="width:285px;">擅长：{{item.info}}</p>
                            <!-- <p >擅长：呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等</p> -->
                        </div>
                    </div>
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
                deplist:[
                    {
                       dept_Name:'内二科',
                       dept_Code:'10101',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                    {
                       dept_Name:'治未病',
                       dept_Code:'10102',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                    {
                       dept_Name:'内三科',
                       dept_Code:'10103',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                    {
                       dept_Name:'内四科',
                       dept_Code:'10104',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                    {
                       dept_Name:'内二科',
                       dept_Code:'10101',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                    {
                       dept_Name:'治未病',
                       dept_Code:'10102',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                    {
                       dept_Name:'内三科',
                       dept_Code:'10103',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                    {
                       dept_Name:'内四科',
                       dept_Code:'10104',
                       class_info:'呼吸系统疾病、消化系统疾病、新生儿黄疸、过敏性疾病、手足口病、疱疹性口炎、疱疹性咽峡炎、猩红热、川崎病、传单等'
                    },
                ],
                docList:[]
            }
        },
        methods: {
            //进入医生介绍页
            goDocparticular(item){
                //存储医生id
                this.$store.commit('setdoctor_id',item.doctor_id);
                this.$router.push('/docparticular');
            },
            goleadHome(){
                this.$router.push('/leadHome');
            },
            //返回上一层
            tobackdetail(){
                this.$router.push('/home');
            },
            //请求科室
            getdept(){
                var  that = this;
                var url  = 'appt/classList'
                http({
                    //这里是你自己的请求方式、url和data参数
                    method: 'post',
                    url: url,
                    data: {},
                    //假设后台需要的是表单数据这里你就可以更改
                    headers: {
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function (res) {
                    that.deplist=[]
                    if(res.errcode==0){
                        for(var i=0;i<8;i++){
                            that.deplist.push(res.data[i]);
                        }
                        
                    }else{
                        that.deplist=[]
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            // 全部科室
            goalldept(){
                this.$router.push('/alldept');
            },
            //查询医生接口
            selectdoc(){
                 var  that = this;
                var url  = 'appt/doctorList';
                http({
                    method:'post',
                    url:url,
                    data:{
                        class_id:'10101'
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
            //点击查找医生列表
            godocList(item){
                // 存储科室名与科室编码
                this.$store.commit('setclass_name',item.class_name);
                this.$store.commit('setclass_id',item.class_id);
                this.$router.push('/doctorList');
            }
        },
        created(){
            this.getdept();
            this.selectdoc();
        }
    }
</script>

<style scoped>
.pubtabbar {
  position: fixed;
  bottom: 0;
}
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
.content{
    position: relative;
}
.content1{
    display: flex;
    align-items: center;
    width:100%;
    flex-wrap: wrap;
    padding: 10px 0;
    font-size: 14px;
    overflow: auto;
    /* height: 150px; */
}
.division{
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:25%;
    padding-top: 10px;
    padding-bottom: 10px;
}
.selectdep{
    text-align: left;
    font-size:22px;
    padding: 10px 5%;
    padding-left:5%;
    font-weight: 900;
    display: inline-block;
}
.alldep{
    display: inline-block;
    position: absolute;
    right: 8%;
    top:4.66667vw;
    color: #aaa;
    font-size: 16px;
    font-weight: 500;

}
.docxiang{
        width: calc(100% - 90px);
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