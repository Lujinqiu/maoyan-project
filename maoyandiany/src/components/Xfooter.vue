<template>
  <div class="bottom-nav-bar">
    <router-link to="../app/movie" tag="div" class="nav-icon-wrapper current " >
        <div @click="goto('a')" :class="{'lulu':color==='a'}" > 
            <p class="iconfont icon-movie"></p>
            <div class="nav-text">电影</div>
        </div>
    </router-link>

    <router-link to="../app/cinema" tag="div" class="nav-icon-wrapper" >
        <div @click="goto('b')" :class="{'lulu':color==='b'}">
            <div class="iconfont icon-yingyuana"></div>
            <div class="nav-text"@click="goto('b')">影院</div>
        </div>
    </router-link>
 
    <router-link to="../app/mine" tag="div" class="nav-icon-wrapper" >
        <div @click="goto('c')" :class="{'lulu':color==='c'}">
            <div class="iconfont icon-shouye"@click="goto('c')"></div>
            <div class="nav-text ">我的</div>
        </div>
    </router-link>
</div>
</template>
<script>
import '../../font/iconfont.css'
export default {
    data() {
        return {
            color:'a'
        }
    },
    methods:{
        goto(name){
            this.color=name
        }
    }   
};
</script>
<style scoped>
.lulu{color:red;}
.bottom-nav-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: .5px solid #d8d8d8;
    display: -webkit-box;
    display: flex;
    justify-content: space-around;
    padding-bottom: env(safe-area-inset-bottom);
}
.iconfont{
    font-size: 22px;
    padding:3px 0 0 5px;
    line-height: 30px;
}
.nav-text{margin:-2px 0  3px 0;}
</style>


