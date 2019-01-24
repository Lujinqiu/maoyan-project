<template>
      <section class="topbar" style="">
  <div class="white-bg topbar-bg ">
    <div class="city-entry">
      <span class="city-name">北京</span><i class="city-entry-arrow"></i>
    </div>
    
    <div class="switch-hot" data-active=".n-hot">
        <!-- <a href="javascript:void(0)" @click="componentName = 'demo1'">组件1</a> |
        <a href="javascript:void(0)" @click="componentName = 'demo2'">组件2</a> -->
       
      <!-- <component :is="currentView"></component> -->
      <div  class="hot-item active" data-tab=".n-hot">正在热映</div>
      <div  class="hot-item " data-tab=".f-hot">即将上映</div>
      
    </div>
    <div class="search-entry search-icon" data-type="movie"></div>
    
  </div>
 
</section>
</template>
<script>
 
    export default {
        data() {
        
			
		
            return {
                // isShow: false,
            //     list:[
            //         {name:'正在热播'},
            //         {name:'即将上映'}
            //     ],
            //     active:'正在热播'
                
            };
        },
        methods: {
          
        } 
    }
</script>
<style scoped>
.topbar-bg {
    
    /* display: flex; */
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}

.search-input, .white-bg {
    background-color: #fff;
}
.city-entry {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.switch-hot {
    display: -webkit-box;
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
}

.footerTab, a, div {
    -webkit-tap-highlight-color: transparent;
}
.search-icon {
    width: 20px;
    height: 20px;
    background: url(../assets/1.png) 10px no-repeat;
    background-size: 20px;
    padding: 10px 15px 10px 10px;
    color:#ef4238;
}

.footerTab, a, div {
    -webkit-tap-highlight-color: transparent;
}
.switch-hot .hot-item.active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
}
.switch-hot .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}

.footerTab, a, div {
    -webkit-tap-highlight-color: transparent;
}
.switch-hot .hot-item.active {
    color: #ef4238;
}
.switch-hot .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
.switch-hot .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
</style>


