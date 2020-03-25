import Vue from "vue";
import Vuex from "vuex";
import { decode } from "punycode";
Vue.use(Vuex);
var token;
var class_name;
var class_id;
var doctor_id;
var total_fee;
var dept_Code;
if (localStorage.getItem("token") != "") {
    token = localStorage.getItem("token");
} else {
    token = "";
}
if (localStorage.getItem("class_name") != "") {
    class_name = localStorage.getItem("class_name");
} else {
    class_name = "";
}
if (localStorage.getItem("class_id") != "") {
    class_id = localStorage.getItem("class_id");
} else {
    class_id = "";
}
if (localStorage.getItem("doctor_id") != "") {
    doctor_id = localStorage.getItem("doctor_id");
} else {
    doctor_id = "";
}
if (localStorage.getItem("total_fee") != "") {
    total_fee = localStorage.getItem("total_fee");
} else {
    total_fee = "";
}
if (localStorage.getItem("dept_Code") != "") {
    dept_Code = localStorage.getItem("dept_Code");
} else {
    dept_Code = "";
}

export default new Vuex.Store({
    state:{
        // url:`http://www.yhtcs.cn/`,
        url:'https://guahao.zhangxin66.com/',
        // token值
        token:'',
        // userid
        user_id:'',
        //医生列表所需科室名称
        class_name:'',
        //医生列表所需科室编码
        class_id:'',
        //查询医生详情的医生id
        doctor_id:'',
        //咨询支付费用
        total_fee:'',
        // 咨询所需的部门编码
        dept_Code:'',
        //咨询所需的医生编码
        doctorid:''
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
        },
        // 获取医生详情的医生id
        getdoctor_id(state) {
            return state.doctor_id;
        },
        // 获取咨询支付费用
        gettotal_fee(state) {
            return state.total_fee;
        },
        // 获取咨询所需的部门编码
        getdept_Code(state) {
            return state.dept_Code;
        },
        // 获取咨询所需的医生编码
        getdoctorid(state) {
            return state.doctorid;
        },
    },
    mutations:{
        //保存url请求头
        setUrl(state, url) {
            state.url = url;
        },
        //保存user_id
        setuser_id(state, user_id) {
            localStorage.setItem("user_id", user_id);
            state.user_id = user_id;
            
        },
        //保存token
        settoken(state, token) {
            localStorage.setItem("token", token);
            state.token = token;
        },
        // 保存医生列表所需科室名称
        setclass_name(state, class_name) {
            localStorage.setItem("class_name", class_name);
            state.class_name = class_name;
        },
        // 保存医生列表所需科室编码
        setclass_id(state, class_id) {
            localStorage.setItem("class_id", class_id);
            state.class_id = class_id;
        },
        // 保存医生详情的医生id
        setdoctor_id(state, doctor_id) {
            localStorage.setItem("doctor_id", doctor_id);
            state.doctor_id = doctor_id;
        },
        // 保存咨询支付费用
        settotal_fee(state, total_fee) {
            localStorage.setItem("total_fee", total_fee);
            state.total_fee = total_fee;
        },
        // 保存咨询所需的部门编码
        setdept_Code(state, dept_Code) {
            localStorage.setItem("dept_Code", dept_Code);
            state.dept_Code = dept_Code;
        },
        // 保存咨询所需的医生编码
        setdoctorid(state, doctorid) {
            localStorage.setItem("doctorid", doctorid);
            state.doctorid = doctorid;
        },
    }
})