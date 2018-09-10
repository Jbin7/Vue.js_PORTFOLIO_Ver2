<template>
    <div style="width:100%;">
        <BackGround></BackGround>
        <div class="object-container">
            <Character></Character>
        </div>
        <div class="object-container" :style="'left:'+moveRange+'px;'">
            <Character></Character>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
            'BackGround': ()=>import('@/components/BackGround.vue'),
            'Character': ()=>import('@/components/Character.vue'),
            'BackObject': ()=>import('@/components/BackObject.vue')
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
            var self = this
            window.setInterval(function () {
                self.moveRange = self.moveRange+2
            },10)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .object-container{
        position: absolute;
        bottom:10%;
    }
</style>
