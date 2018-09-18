<template>
    <div>
        <div class="character-container">
            <div :class="activeClass"></div>
        </div>
        <div class="character-selector">
            <div class="hitokage" @click="chnageCharacter('hitokage')" @touchstart="chnageCharacter('hitokage')"></div>
            <div class="charizard" @click="chnageCharacter('charizard')" @touchstart="chnageCharacter('charizard')"></div>
        </div>
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
                selCharacter: 'charizard',
                activeClass: 'charizard-normal'
            }
        },
        methods:{
            chnageCharacter(character){
                this.selCharacter = character;
                this.activeClass = this.selCharacter+'-normal'

            }
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
        z-index: 8000;
        width:300px;
        height: 300px;
    }
}

@media screen and (min-width: 800px) and (max-width: 2920px) {
    .character-container{
        position: absolute;
        bottom:0;
        margin-left:42%;
        z-index: 8000;
        width:300px;
        height: 300px;
    }
}

.character-selector{
    position: absolute;
    top:0;
    margin-left:0%;
    z-index: 9999;
    width:300px;
    height: 100px;
}

.character-selector .hitokage{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/hitokage.png");background-size: 100% 100%;
}

.character-selector .charizard{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/charizard.png");background-size: 100% 100%;
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

/* ----------- charizard -----------  */

.charizard-normal{
    width:100%;
    height: 100%;
    animation: charizard-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes charizard-normal {
    0%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_1.png");background-size: 100% 100%;}
    10%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_2.png");background-size: 100% 100%;}
    20%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_2.png");background-size: 100% 100%;}
    30%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_3.png");background-size: 100% 100%;}
    40%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_3.png");background-size: 100% 100%;}
    50%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_4.png");background-size: 100% 100%;}
    60%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_4.png");background-size: 100% 100%;}
    70%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_5.png");background-size: 100% 100%;}
    80%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_5.png");background-size: 100% 100%;}
    90%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_6.png");background-size: 100% 100%;}
    100%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/normal_right_7.png");background-size: 100% 100%;}
}

.charizard-run-right{
    width:100%;
    height: 100%;
    animation: charizard-run-right 1s infinite;
}

@keyframes charizard-run-right {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_right_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_right_1.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_right_2.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_right_3.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_right_4.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_right_4.png");background-size: 100% 100%;}
}

.charizard-run-left{
    width:100%;
    height: 100%;
    animation: charizard-run-left 1s infinite;
}

@keyframes charizard-run-left {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_left_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_left_1.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_left_2.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_left_3.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_left_4.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/charizard/run_left_4.png");background-size: 100% 100%;}
}



</style>
