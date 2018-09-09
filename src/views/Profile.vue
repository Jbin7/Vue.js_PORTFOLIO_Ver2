<template>
    <div>
        <BackGround></BackGround>
    </div>
</template>

<script>
    export default {
        components:{
            'BackGround': ()=>import('@/components/BackGround.vue')
        },
        name: '',
        props: {
            msg: String
        },
        methods:{
            
        },
        mounted: function () {
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
