require("./bootstrap");

import Vue from "vue";
import App from "./App.vue"

import VueRouter from 'vue-router'
import {routes} from './router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: routes,
});


const app = new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});
