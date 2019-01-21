<template>
    <div id='app'>
        <Xheader></Xheader>
        <Xsearch></Xsearch>
    </div>
</template>
<script type="text/javascript"> 
    import Xheader from '../components/Xheader.vue';
    import Xsearch from '../components/Xsearch.vue';


    export default {

        components:{
            Xheader,
            Xsearch
        }
        
    }
</script>