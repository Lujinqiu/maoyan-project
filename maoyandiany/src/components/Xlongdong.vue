<template>
    <div>
        影院详情
    </div>
    
</template>
<script type="text/javascript">
    export default {
       created(){
            console.log(this.$route.params.id)
            //请求数据
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