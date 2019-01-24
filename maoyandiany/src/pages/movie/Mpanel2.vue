<template>
    <div id='app'>
        <Xheader></Xheader>
        <Xsearch></Xsearch>
        <Xpanel2></Xpanel2>
        <Xfooter></Xfooter>
    </div>
</template>
<script type="text/javascript"> 
    import Xheader from '../../components/Xheader.vue';
    import Xsearch from '../../components/Xsearch.vue';
    import Xfooter from '../../components/Xfooter.vue';
    import Xpanel2 from '../../components/Xpanel2.vue';

    export default {
        data(){
           return{ 
            // currentView:Xpanel
           }
        },
        components:{
            Xheader,
            Xsearch,
            Xfooter,
            Xpanel2
        }
        
    }
</script>