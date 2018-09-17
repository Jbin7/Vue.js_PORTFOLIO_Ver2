<template>
    <div class="character-container">
        <div :class="activeClass"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: [
            'state'
        ],
        data(){
            return{
                selCharacter: 'hitokage',
                activeClass: 'hitokage-normal'
            }
        },
        methods:{

        },
        watch:{
          state(newState){
              switch (newState) {
                  case 'default' :
                    this.activeClass = this.selCharacter+'-normal'
                    break;
                  case 'left' :
                    this.activeClass = this.selCharacter+'-run-left'
                    break;
                  case 'right' :
                    this.activeClass = this.selCharacter+'-run-right'
                    break;
              }
          }
        },
        mounted: function () {
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 400px) and (max-width: 800px) {
    .character-container{
        position: absolute;
        bottom:0;
        margin-left:17%;
        z-index: 9999;
        width:300px;
        height: 300px;
    }
}

@media screen and (min-width: 800px) and (max-width: 2920px) {
    .character-container{
        position: absolute;
        bottom:0;
        margin-left:42%;
        z-index: 9999;
        width:300px;
        height: 300px;
    }
}



.hitokage-normal{
    width:100%;
    height: 100%;
    animation: hitokage-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes hitokage-normal {
    0%,10%,20%   {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_1.png");background-size: 100% 100%;}
    30%,40%,50%,60%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_2.png");background-size: 100% 100%;}
    70%,80%,90%,100%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_3.png");background-size: 100% 100%;}
}

.hitokage-run-right{
    width:100%;
    height: 100%;
    animation: hitokage-run-right 1s infinite;
}

@keyframes hitokage-run-right {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_2.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_3.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_4.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_6.png");background-size: 100% 100%;}
}

.hitokage-run-left{
    width:100%;
    height: 100%;
    animation: hitokage-run-left 1s infinite;
}

@keyframes hitokage-run-left {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_2.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_3.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_4.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_6.png");background-size: 100% 100%;}
}

</style>
