<template>
    <div id="backObjectLayer" :style="'margin-left:'+left+'px;'" class="activeClass">
        <div class="backObject"><div class="title"></div></div>
        <div class="backObject"><div class="pannel1"></div></div>
        <div class="backObject"><div class="pannel2"></div></div>
        <div class="backObject"><div class="pannel3"></div></div>
        <div class="backObject"><div class="razer-blade"></div></div>
        <div class="backObject"><div class="mac"></div></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components:{},
        props: [
            'state'
        ],
        data(){
            return{
                activeClass: 'BackObject-container-paused-right',
                lastDirection: 'right',
                left: 0,
                interval:{}
            }
        },
        methods:{

        },
        watch:{
            state(newState){
                switch (newState) {
                    case 'default' :
                        // this.activeClass = 'BackObject-container-paused-' + this.lastDirection
                        window.clearInterval(this.interval);
                        break;
                    case 'left' :
                        // this.lastDirection = 'left'
                        // this.activeClass = 'BackObject-container-move-' + this.lastDirection
                        window.clearInterval(this.interval);
                        var self=this
                        this.interval = window.setInterval(function () {
                            self.left = self.left + 2
                        },10)
                        break;
                    case 'right' :
                        // this.lastDirection = 'right'
                        // this.activeClass = 'BackObject-container-move-' + this.lastDirection
                        window.clearInterval(this.interval);
                        var self=this
                        this.interval = window.setInterval(function () {
                            self.left = self.left - 2
                        },10)
                        break;
                }
                var ele = document.getElementById('backObjectLayer')
                // console.log(window.getComputedStyle(ele).left)
                console.log(ele.style.getPropertyValue('--left'))
            }
        },
        mounted: function () {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    :root{
        --left:1000px;
        --duration:20;
        --finalLeft:3600;
    }


    .BackObject-container-move-right{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom:0;
        z-index: 1;

        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-name: backObject-move;
        animation-timing-function: linear;
        animation-play-state: paused;

        -webkit-animation-duration: 20s;
        -webkit-animation-iteration-count: 1;
        -webkit-animation-name: backObject-move-right;
        -webkit-animation-timing-function: linear;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-play-state: running;
    }

    .BackObject-container-paused-right{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom:0;
        z-index: 1;
        left:0px;

        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-name: backObject-move;
        animation-timing-function: linear;
        animation-play-state: paused;

        -webkit-animation-duration: 20s;
        -webkit-animation-iteration-count: 1;
        -webkit-animation-name: backObject-move-right;
        -webkit-animation-timing-function: linear;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-play-state: paused;
    }

    .BackObject-container-move-left{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom:0;
        z-index: 1;

        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-name: backObject-move-left;
        animation-timing-function: linear;
        animation-play-state: paused;

        -webkit-animation-duration: 20s;
        -webkit-animation-iteration-count: 1;
        -webkit-animation-name: backObject-move-left;
        -webkit-animation-timing-function: linear;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-play-state: running;
    }

    .BackObject-container-paused-left{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom:0;
        z-index: 1;

        animation-duration: 20s;
        animation-iteration-count: infinite;
        animation-name: backObject-move-left;
        animation-timing-function: linear;
        animation-play-state: paused;

        -webkit-animation-duration: 20s;
        -webkit-animation-iteration-count: 1;
        -webkit-animation-name: backObject-move-left;
        -webkit-animation-timing-function: linear;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-play-state: paused;
    }

    @keyframes backObject-move-right {
        0%   {top:0px; left:0px;}
        100%   {top: 0px; left: -3600px;}
    }

    @keyframes backObject-move-left {
        0%   {top:0px;left:-3600px;}
        100%   {top: 0px; left: 0px;}
    }



    .backObject {
        width: 100%;
        height: 100%;
        display:inline-block;
        position: absolute;
        bottom:0
    }

    .backObject .title{
        background:url('../../public/profile_img/backObject/title.png') no-repeat center top;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 400px;
        height: 250px;
        position: absolute;
        left: 400px;
        bottom:200px;
    }

    .backObject .pannel1{
        background:url('../../public/profile_img/backObject/pannel1.png') no-repeat center top;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 800px;
        height: 500px;
        position: absolute;
        left: 1400px;
        bottom:200px;
    }

    .backObject .pannel2{
        background:url('../../public/profile_img/backObject/pannel2.png') no-repeat center top;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 800px;
        height: 500px;
        position: absolute;
        left: 2400px;
        bottom:200px;
    }

    .backObject .pannel3{
        background:url('../../public/profile_img/backObject/pannel3.png') no-repeat center top;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 800px;
        height: 500px;
        position: absolute;
        left: 3400px;
        bottom:200px;
    }

    .backObject .razer-blade{
        background:url('../../public/profile_img/backObject/razer_blade.png') no-repeat center top;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 1200px;
        height: 805px;
        position: absolute;
        left: 4500px;
        bottom:-100px;
        z-index: 9999;
    }

    .backObject .mac{
        background:url('../../public/profile_img/backObject/mac.png') no-repeat center top;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        width: 800px;
        height: 600px;
        position: absolute;
        left: 100px;
        bottom: 100px;
        z-index: 9999;
    }



</style>
