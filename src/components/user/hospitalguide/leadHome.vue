<template>
    <div style="height:100%;overflow: auto;-webkit-overflow-scrolling: touch;background: rgb(250, 250, 250);">
        <div class="tittle" style="background: #00bbbb;color:white">
            <div class="arrow-icon" @click="tobackdetail">
                <Icon size="30" type="ios-arrow-back" />
            </div>
            智能导诊
        </div>
        <div class="content">
            <div class="tent" v-for="(item,index) in selectList" :key="index" @click="clickquery(item)">
                <p class="sss">{{item.illness_info}}</p>
                <p style="color:#aaa"><Icon size="25" type="ios-arrow-forward" style="vertical-align: middle;"/></p>
            </div>
        </div>
    </div>
</template>
<script>
import http from '@/utils/http'
    export default {
        data() {
            return {
                selectList:[]
            }
        },
        methods: {
            //返回上一层
            tobackdetail(){
                this.$router.push('/doctorListHome')
            },
            //查询病情种类
            selectqueryList(){
                var that = this;
                var url  = 'appt/queryAllIllness';
                http({
                    method:'post',
                    url:url,
                    data:{},
                    headers: {
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                    that.orderList=[]
                    if(res.errcode==0){
                        that.selectList=res.data;
                    }else{
                        that.selectList=[]
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            // 点击查找科室
            clickquery(item){
                var that = this;
                var url  = 'appt/queryClassByIllness';
                var illness_info = item.illness_info;
                http({
                    method:'post',
                    url:url,
                    data:{illness_info},
                    headers: {
                        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                    }
                }).then(function(res){
                    that.orderList=[]
                    if(res.errcode==0){
                        // 存储科室名与科室编码
                        that.$store.commit('setclass_name',res.data[0].class_name);
                        that.$store.commit('setclass_id',res.data[0].class_id);
                        that.$router.push('/doctorList');
                        // debugger
                    }else{

                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        },
        created() {
            this.selectqueryList()
        },
    }
</script>

<style scoped> 
.tittle {
    width: 100%;
    z-index: 999;
    /* position: fixed;
     top: 0; */
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
.tent{
    display: flex;
    padding: 6px 3%;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    color: #000;
}
.sss{
    flex: 1;
    line-height: 7.66667vw;
}
.tent p{
    vertical-align: middle;
}
</style>