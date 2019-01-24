<template>
    <div class="body" style="display:block;">
        <section class="topbar" style="">
          <div class="gray-bg topbar-bg ">
            <div class="city-entry">
              <span class="city-name">广州</span><i class="city-entry-arrow"></i>
            </div>
            <div class="search-entry search-input" data-type="cinema" @click="goto">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=">
              <span>搜影院</span>
            </div> 
          </div> 

        </section>
        <div class='list'>
            <div><span>全城<i></i></span></div>
            <div><span>品牌<i></i></span></div>
            <div><span class='last'>特色<i></i></span></div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            goto(){
                this.$router.push({name:'Detail'})
            }
            
        }
        //生命周期函数，请求数据
        // created(){
        //     this.$axios.get('http://localhost:3008/?id=1').then(res=>{
        //         let data=res.data.movieList
        //         this.movieList+=data
        //         console.log(data)
        //     })
        // }

    }


</script>
<style type="text/css">
.list{
    height: 40px;display:flex;background: #fff;
    position:fixed;width: 100%;z-index: 100;margin-top:94px;
}
.list>div{
    flex:1;height: 40px;border-bottom:1px solid #ccc;text-align: center;
    display:flex;justify-content: center;align-items: center;

}
.list>div span{
    display:block;height: 20px;border-right:1px solid #ccc;width:100%;
}
.list .last{border-right:1px solid #fff;}

    
.topbar {
     position:fixed;top: 51px;width: 100%;z-index: 100;
    border-bottom: 1px solid #e6e6e6;
    height: 44px;
    font-size: 14px;
    color: #777;
}
.topbar-bg {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: #f5f5f5;
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
.city-entry-arrow {
    margin-right: 5px;
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
}
.search-input {

    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    font-size: 13px;
    color: #b2b2b2;
    margin-left: 18px;
    border: .5px solid #e6e6e6;
    border-radius: 5px;
    margin-right: 15px;
    background: #fff;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.search-input img {
    width: 14px;
    height: 14px;
    margin-left: 3px;
    margin-right: 4px;
    display:block;
}
</style>