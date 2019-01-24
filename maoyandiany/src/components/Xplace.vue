<template>
    <div class="list-wrap" id="place" style="margin-top:0px;min-height:627px;margin-bottom: 55px;">
        <router-link :to="`/longdong/${idx}`" tag="div" v-for="(it,idx) in movieList" class="item mb-line-b" :key="idx"
         :data-id="it.id" data-bid="dp_wx_home_cinema_list" style="margin-bottom:20px;">
            <div class="title-block box-flex middle">
                <div class="title line-ellipsis">
                    <span>{{it.nm}}</span>
                    <span class="price-block">
                        <span class="price">{{it.sellPrice}}</span><span class="q">元起</span>
                    </span>
                </div>
                <div class="location-block box-flex">
                    <div class="flex line-ellipsis">{{it.addr}}</div>
                    <div class="distance">{{it.distance}}</div>
                </div>
                <div class="flex">
                </div>
                <div class="label-block">
                            <div class="endorse">改签</div>
                            <div class="snack">小吃</div>
                            <div class="vipTag">折扣卡</div>
                </div>
                <div class="discount-block">
                    <div>
                        <div class="discount-label normal platform">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAA0VJREFUSA3FV1tIVFEUXXccNc3RSsgMX6EooehHQZSZFWSaBPURSR9hQUSR/UT+9BEU/UgfQS8qehIUQgV99KKPLIugLIyMiuxFNEo+Ksu3Tmt75jLece7xkjhuOHPOfpy91z1n733nGiD5ziAFPtRwWcx5rsgmjQx8p+86GKg2tuGb4Q/eyMCzJi1oKMcGOgiiwD3y5OEOLoBUzBoXF8tDAQyLjLFdDJQclmChgyQLgP+nlBJAxgTIrd0bMQ0wNBjz96rtLfX2bnzDwFCvrd7wnWIW2FHFByA+007rTP67GbiaZWurP4G764CIaNvNKDyqdI+r7G2G+ux11OgBdL6mRSzb07nQTjzzlLzAfxXBVnVbgcHuYKmF1wMQU1ckkLkReHceaH9l2YzEAsW3Pg2S5wM5W4BH263yENz4AMxNXV+AjiAA/V1KGyyPSjB3jTs7B5DBfEhabHUYb15BtVUek2TlNZxzAC8OAJ9vWF2V3VH87VKrPGM9UHLdKrPhnANYeRkYHrC6cU9XfOVPq1zyxiGND0Du2a6Oi5mYQnVMOJOkea25BzTXAmaOmLoQsx5AQg6QvlZVgjyVi+YyG/7Zk67WCw+yXGPYMzikbKX75VQC3Xz1P9sXImxApAcQPQPI3sxaZisdZkORpiJtVWp7sAf4ekutB/4AMgY5+n8BfbwSAbviktK/PBSIGLTSt2IxdscBiazrH88BTwaQtQloPKwcF50EWp8A7y9a3ebuAjqbFKiuT0Bvm1U/itO8afxWebuB1TfV0SdkAwv2A1EeKnnM7Y3AsrNsVBWjXHI5exGw6po6CU1w2aQHEMlA+XuApuN84r/WIMK9OQE0EFDRaSA2ma9mlmPhMXbAHbz/FqCUwM1KGbt7RKIHkFtFB8zqJv9Lx3QSGW+uALnf2vkM6AXmLAVSy1Qu3N8AxKUBS44EbEOs9EmYyid6yyM2j1HuVaicZeZ9qNbmr5yW/Dn5yPITEtv6ncDMPDIGh0+kY0ifhK4odYT9nYGNkoRp5arkAlL6HwLaGvjSugD08Pgdkh6AQycTMdPnwEQ8O9wrAJg9U0ZeF/PjwZSFZ+wp/zRzGfxAlG80jis8iXBch3ckFmNK7H9lNNyRgjo67AAAAABJRU5ErkJggg==" alt="">
                        </div>
                        <div class="discount-label-text">飞驰人生等2部影片特惠</div>
                    </div>
                    <div>
                        <div class="discount-label normal card">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">     
                        </div>
                        <div class="discount-label-text">开卡特惠，首单2张立减3元</div>
                    </div>
                </div>
            </div>
         
    </router-link></div>
</template> 
<script type="text/javascript">
    import '../styles/all.css'
    import '../styles/place.css'
    export default {
        data(){
            return {
                movieList:[]
            }
        },
        //请求数据
        created(){
            let xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    if(xhr.status===200){
                        let res = JSON.parse(xhr.responseText);
                        console.log(res)
                        res=res.cinemas
                        this.movieList=res
                    }
                }
            xhr.open('get','http://localhost:4008/movie/ajax/cinemaList?day=2019-01-22&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1548155918452&cityId=20',true);
            xhr.send();
        }
    }
</script> 

<style scoped>
#place{padding-top: 150px;}
body,html{width: 100%;height: 100%;background: #fff;}
 .list-wrap{
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.list-wrap .title-block {
    display: block;
}
.list-wrap .title-block .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.line-ellipsis{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.list-wrap .title-block .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.list-wrap .price-block {
    padding-top: 9px;
    padding-left: 3px;
}
.list-wrap .price-block .price {
    font-size: 18px;
    color:#f03d37;line-height: 1.5;padding:9px 0 0 3px;
}
.list-wrap .price-block .q {
    margin-left: 3px;
    font-size: 11px;
    color: #f03d37;line-height: 1.5;
}
.page-wrap, .page.singleton-notab .page-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;font-size: 14px;
    color: #777;
}
.box-flex {
    display: flex;
}
.list-wrap .location-block {
    margin-top: 6px;
    font-size: 13px;
    color: #666;
}
.list-wrap .location-block .region {
    margin-left: 5px;
}
.list-wrap .title-block .label-block {
    height: 17px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
}
.list-wrap .title-block .label-block>div {
    position: relative;
    display: inline-block;
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: .6rem;
}
.list-wrap .endorse{
    color: #589daf;
    border: 1px solid #589daf;
}
.list-wrap .snack,.list-wrap .vipTag{
    color: #f90;
    border: 1px solid #f90;
    margin-left: 5px;
}
.discount-block {
    color: #999;
    margin-bottom: 4px;
}
.discount-block .discount-label {
    width: 15px;
    height: 14px;
    position: relative;
    top: 3px;
    display: inline-flex;
}
.discount-block .discount-label-text {
    margin-left: 0;
    font-size: 11px;
    display:inline-block;
}
.title-block {
    line-height: 1.5;
}
</style>