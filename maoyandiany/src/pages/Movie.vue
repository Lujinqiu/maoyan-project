<template>
    <div id='app'>
        <Xheader></Xheader>
        <Xsearch></Xsearch>
        <Xpanel></Xpanel>
        <Xfooter></Xfooter>
    </div>
</template>
<script type="text/javascript"> 
    import Xheader from '../components/Xheader.vue';
    import Xsearch from '../components/Xsearch.vue';
    import Xfooter from '../components/Xfooter.vue';
    import Xpanel from '../components/Xpanel.vue';



    export default {

        components:{
            Xheader,
            Xsearch,
            Xfooter,
            Xpanel
        }
        
    }
</script>


