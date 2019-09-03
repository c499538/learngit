import Vue from "vue";
import VueRouter from "vue-router";

//Bootstrap 路由
import bootSP from "./components/bootstrap-paginator.vue";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",
    routes:[
        { path: '/', redirect: "/HelloWorld"},
        { path: '/HelloWorld',component:HelloWorld,name:'HelloWorld'},
        { path: '/bootSP',component:bootSP,name:'bootSP'}
    ]
})
export default router;