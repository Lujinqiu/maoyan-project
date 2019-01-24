import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
import './styles/app.css'
import 'weui'
// import '../font/iconfont.css';
//引入axios挂载到Vue原型上
import axios from 'axios'
import $ from 'jquery'
Vue.prototype.$axios = axios;
Vue.prototype.$ = $;



//1.引入路由插件2.使用路由,3.实例化一个路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Mint from "mint-ui";
Vue.use(Mint);

//第一层陆由
//首页的App
import App from './App.vue'
//store引入

// import CityList from './components/CityList.vue';
//详情页的路由
import Detail from './components/Detail.vue'
import Xlongdong from './components/Xlongdong.vue'



//第二层路由
import Movie from './pages/Movie.vue';
import Cinema from './pages/Cinema.vue';
import Mine from './pages/Mine.vue';



const routes = [
    {
        name: 'App', path: '/app', component: App, children: [
            //嵌套路由里面的的path后面的‘/’要去掉，注意注意了，大坑来的，别跳
            { name: 'Movie', path: 'movie', component: Movie},
            { name: 'Cinema', path: 'cinema', component: Cinema },
            { name: 'Mine', path: 'mine', component: Mine }
        ]
    },

    {name:'Movie',path:'/',component:Movie},
    {name:'Detail',path:'/detail',component:Detail},
    {name:'Xlongdong',path:'/longdong/:id',component:Xlongdong}

    
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

Vue.config.productionTip = false





new Vue({
    el: '#app',
    router,
    // stort,
    render: h => h('router-view')
})
