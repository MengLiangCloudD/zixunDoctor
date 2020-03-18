import Vue from "vue";
import Vuex from "vuex";
import { decode } from "punycode";
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        // url:`http://www.yhtcs.cn/`,
        url:'http://47.94.4.179:8888/',
        // token值
        token:'',
        // userid
        user_id:'',
        //医生列表所需科室名称
        class_name:'',
        //医生列表所需科室编码
        class_id:''
    },
    getters:{
        //获取url请求头
        getUrl(state) {
            return state.url;
        },
        //获取token
        gettoken(state) {
            return state.token;
        },
        //获取user_id
        getuser_id(state) {
            return state.user_id;
        },
        // 获取医生列表所需科室名称
        getclass_name(state) {
            return state.class_name;
        },
        // 获取医生列表所需科室编码
        getclass_id(state) {
            return state.class_id;
        }
    },
    mutations:{
        //保存url请求头
        setUrl(state, url) {
            state.url = url;
        },
        //保存user_id
        setuser_id(state, user_id) {
            state.user_id = user_id;
        },
        //保存token
        settoken(state, token) {
            state.token = token;
        },
        // 保存医生列表所需科室名称
        setclass_name(state, class_name) {
            state.class_name = class_name;
        },
        // 保存医生列表所需科室编码
        setclass_id(state, class_id) {
            state.class_id = class_id;
        },
    }
})