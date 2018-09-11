<template>
    <div style="position:absolute; width: 100%;height: 100vh;">
        <BackGround></BackGround>
        <!--<back-object-layer></back-object-layer>-->
        <Stage></Stage>
        <character></character>
        <!--<div class="stage-floor"></div>-->
        <!--<div class="po-absolute" style="z-index: 9999">-->
        <!--<Character></Character>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        components:{
            'BackGround': ()=>import('@/components/BackGround.vue'),
            'Character': ()=>import('@/components/Character.vue'),
            'BackObjectLayer': ()=>import('@/components/BackObjectLayer.vue'),
            'Stage':  ()=>import('@/components/Stage.vue')
        },
        name: '',
        data(){
          return{
              moveRange:0
          }
        },
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
