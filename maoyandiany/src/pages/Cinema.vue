<template>
    <div>
        
            <Xheader></Xheader>
            <Xsearchccity></Xsearchccity>
       
        
        <Xplace></Xplace>
    </div>
</template>
<script type="text/javascript">
    import Xsearchccity from '../components/Xsearchcity.vue';
    import Xheader from '../components/Xheader.vue';
    import Xplace from '../components/Xplace.vue';


    export default {
        components:{
            Xsearchccity,
            Xheader,
            Xplace
        }
    }



</script>
<style scoped>
</style>