<template>
    <div style="position:absolute; width: 100%;height: 100vh;">
        <div class="profile-app">

            <BackGround></BackGround>
            <back-object-layer :state="state"></back-object-layer>
            <Stage :state="state"></Stage>
            <character :state="state"></character>

            <!--방향전환 이벤트 핸들-->
            <div class="handle-left" @mousedown="handleLeft" @mouseup="handleDefault" @touchstart="handleLeft" @touchend="handleDefault"></div>
            <div class="handle-right" @mousedown="handleRight" @mouseup="handleDefault" @touchstart="handleRight" @touchend="handleDefault"></div>

        </div>

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
              state: 'default'
          }
        },
        props: {
            msg: ''
        },
        methods:{
            handleRight(){
                this.state = 'right'
            },
            handleLeft(){
                this.state = 'left'
            },
            handleDefault(){
                this.state = 'default'
            }
        },
        mounted: function () {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .profile-app{
        width:100%; height:100%; overflow:hidden; position: fixed;
    }
    .handle-right{
        width: 50%;
        height: 100%;
        background-color: blue;
        position:absolute;
        left:50%;
        top:0px;
        z-index: 9999;
        opacity: 0;
    }
    .handle-left{
        width: 50%;
        height: 100%;
        background-color: red;
        position:absolute;
        left:0px;
        top:0px;
        z-index: 9999;
        opacity: 0;
    }

</style>
