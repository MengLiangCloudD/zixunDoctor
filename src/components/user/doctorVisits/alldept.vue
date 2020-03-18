<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
             全部科室
        </div>
        <div class="content">
            <p class="selectdep">按科室找医生</p>
            <div class="content1">
                <div class="depter" v-for="(item,index) in depList" :key="index" @click="godocList(item)">
                    <div class="depname">
                        <img src="./../../../common/imager/01.png" alt="" width="40" style=" vertical-align: middle;">
                        <p style="font-size:20px;display: inline-block; vertical-align: middle;">{{item.class_name}}</p>
                    </div>
                    <div class="debjies">
                        <p>糖尿病，高血压，高血脂，胃炎，冠心病等</p>
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
                depList:[]
            }
        },
        methods: {
            //返回上一层
            tobackdetail(){
                this.$router.push('/doctorListHome')
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
                    that.depList=[]
                    if(res.errcode==0){
                        that.depList=res.data;
                        
                    }else{
                        that.depList=[]
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
        mounted() {
            this.getdept();
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
.arrow-icon{
  position: absolute;
  left: 5px;
  top: 0px;
}
.selectdep{
    text-align: left;
    font-size:22px;
    padding: 10px 5%;
    padding-left:5%;
    font-weight: 900;
    display: inline-block;
}
.content1{
    display: flex;
    flex-wrap: wrap;
    padding: 5%;
    margin-right: -5%;
        }
.depter{
    width: 45%;
    margin-right: 5%;
    margin-bottom: 20px;
    background-color: rgb(250, 250, 250);
    padding: 10px;
    border-radius: 5px;
}
</style>