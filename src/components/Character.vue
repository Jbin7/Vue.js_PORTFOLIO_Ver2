<template>
    <div>
        <div class="character-container">
            <div :class="activeClass"></div>
        </div>
        <div class="character-selector">
            <div class="hitokage" @click="chnageCharacter('hitokage')" @touchstart="chnageCharacter('hitokage')"></div>
            <div class="charizard" @click="chnageCharacter('charizard')" @touchstart="chnageCharacter('charizard')"></div>
            <div class="squirtle" @click="chnageCharacter('squirtle')" @touchstart="chnageCharacter('squirtle')"></div>
            <div class="blastoise" @click="chnageCharacter('blastoise')" @touchstart="chnageCharacter('blastoise')"></div>
            <div class="bulbasaur" @click="chnageCharacter('bulbasaur')" @touchstart="chnageCharacter('bulbasaur')"></div>
            <div class="venusaur" @click="chnageCharacter('venusaur')" @touchstart="chnageCharacter('venusaur')"></div>
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
    width:500px;
    height: 100px;
}

.character-selector .hitokage{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/selector/hitokage.png");background-size: 100% 100%;
}

.character-selector .charizard{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/selector/charizard.png");background-size: 100% 100%;
}

.character-selector .squirtle{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/selector/squirtle.png");background-size: 100% 100%;
}

.character-selector .blastoise{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/selector/blastoise.png");background-size: 100% 100%;
}

.character-selector .bulbasaur{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/selector/bulbasaur.png");background-size: 100% 100%;
}

.character-selector .venusaur{
    display: inline-block;
    cursor: pointer;
    z-index: 9999;
    width:50px;
    height: 50px;
    background: url("../../public/profile_img/selector/venusaur.png");background-size: 100% 100%;
}


/* ----------- hitokage -----------  */

.hitokage-normal{
    width:100%;
    height: 100%;
    animation: hitokage-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes hitokage-normal {
    0%,10%,20%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/normal_right_1.png");background-size: 100% 100%;}
    30%,40%,50%,60%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/normal_right_2.png");background-size: 100% 100%;}
    70%,80%,90%,100%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/normal_right_3.png");background-size: 100% 100%;}
}

.hitokage-run-right{
    width:100%;
    height: 100%;
    animation: hitokage-run-right 1s infinite;
}

@keyframes hitokage-run-right {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_right_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_right_2.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_right_3.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_right_4.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_right_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_right_6.png");background-size: 100% 100%;}
}

.hitokage-run-left{
    width:100%;
    height: 100%;
    animation: hitokage-run-left 1s infinite;
}

@keyframes hitokage-run-left {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_left_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_left_2.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_left_3.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_left_4.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_left_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/hitokage/run_left_6.png");background-size: 100% 100%;}
}

/* ----------- charizard -----------  */

.charizard-normal{
    width:100%;
    height: 100%;
    animation: charizard-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes charizard-normal {
    0%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_1.png");background-size: 100% 100%;}
    10%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_2.png");background-size: 100% 100%;}
    20%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_2.png");background-size: 100% 100%;}
    30%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_3.png");background-size: 100% 100%;}
    40%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_3.png");background-size: 100% 100%;}
    50%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_4.png");background-size: 100% 100%;}
    60%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_4.png");background-size: 100% 100%;}
    70%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_5.png");background-size: 100% 100%;}
    80%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_5.png");background-size: 100% 100%;}
    90%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_6.png");background-size: 100% 100%;}
    100%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/normal_right_7.png");background-size: 100% 100%;}
}

.charizard-run-right{
    width:100%;
    height: 100%;
    animation: charizard-run-right 1s infinite;
}

@keyframes charizard-run-right {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_right_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_right_1.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_right_2.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_right_3.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_right_4.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_right_4.png");background-size: 100% 100%;}
}

.charizard-run-left{
    width:100%;
    height: 100%;
    animation: charizard-run-left 1s infinite;
}

@keyframes charizard-run-left {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_left_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_left_1.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_left_2.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_left_3.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_left_4.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/charizard/run_left_4.png");background-size: 100% 100%;}
}

/* ----------- squirtle -----------  */

.squirtle-normal{
    width:100%;
    height: 100%;
    animation: squirtle-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes squirtle-normal {
    0%,10%,20%,30%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/normal_right_1.png");background-size: 100% 100%;}
    40%,50%,60%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/normal_right_2.png");background-size: 100% 100%;}
    70%,80%,90%,100%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/normal_right_3.png");background-size: 100% 100%;}
}

.squirtle-run-right{
    width:100%;
    height: 100%;
    animation: squirtle-run-right 1s infinite;
}

@keyframes squirtle-run-right {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_right_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_right_2.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_right_3.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_right_4.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_right_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_right_6.png");background-size: 100% 100%;}
}

.squirtle-run-left{
    width:100%;
    height: 100%;
    animation: squirtle-run-left 1s infinite;
}

@keyframes squirtle-run-left {
    0%,10%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_left_1.png");background-size: 100% 100%;}
    20%,30%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_left_2.png");background-size: 100% 100%;}
    40%,50%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_left_3.png");background-size: 100% 100%;}
    60%,70%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_left_4.png");background-size: 100% 100%;}
    80%,90%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_left_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/character/squirtle/run_left_6.png");background-size: 100% 100%;}
}

/* ----------- blastoise -----------  */

.blastoise-normal{
    width:100%;
    height: 100%;
    animation: blastoise-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes blastoise-normal {
    0% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_1.png");background-size: 100% 100%;}
    10% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_1.png");background-size: 100% 100%;}
    20% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_2.png");background-size: 100% 100%;}
    30% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_2.png");background-size: 100% 100%;}
    40% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_3.png");background-size: 100% 100%;}
    50% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_4.png");background-size: 100% 100%;}
    60% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_5.png");background-size: 100% 100%;}
    70% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_6.png");background-size: 100% 100%;}
    80% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_6.png");background-size: 100% 100%;}
    90% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_7.png");background-size: 100% 100%;}
    100% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/normal_right_7.png");background-size: 100% 100%;}

}

.blastoise-run-right{
    width:100%;
    height: 100%;
    animation: blastoise-run-right 1s infinite;
}

@keyframes blastoise-run-right {
    0% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_1.png");background-size: 100% 100%;}
    10% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_1.png");background-size: 100% 100%;}
    20% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_2.png");background-size: 100% 100%;}
    30% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_3.png");background-size: 100% 100%;}
    40% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_4.png");background-size: 100% 100%;}
    50% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_5.png");background-size: 100% 100%;}
    60% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_6.png");background-size: 100% 100%;}
    70% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_7.png");background-size: 100% 100%;}
    80% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_7.png");background-size: 100% 100%;}
    90% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_8.png");background-size: 100% 100%;}
    100% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_right_8.png");background-size: 100% 100%;}
}

.blastoise-run-left{
    width:100%;
    height: 100%;
    animation: blastoise-run-left 1s infinite;
}

@keyframes blastoise-run-left {
    0% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_1.png");background-size: 100% 100%;}
    10% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_1.png");background-size: 100% 100%;}
    20% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_2.png");background-size: 100% 100%;}
    30% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_3.png");background-size: 100% 100%;}
    40% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_4.png");background-size: 100% 100%;}
    50% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_5.png");background-size: 100% 100%;}
    60% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_6.png");background-size: 100% 100%;}
    70% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_7.png");background-size: 100% 100%;}
    80% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_7.png");background-size: 100% 100%;}
    90% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_8.png");background-size: 100% 100%;}
    100% {top: 0px; left: 0px; background: url("../../public/profile_img/character/blastoise/run_left_8.png");background-size: 100% 100%;}
}

/* ----------- bulbasaur -----------  */

.bulbasaur-normal{
    width:100%;
    height: 100%;
    animation: bulbasaur-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes bulbasaur-normal {
    0%,10%,20%,30%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/normal_right_1.png");background-size: 100% 100%;}
    40%,50%,60%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/normal_right_2.png");background-size: 100% 100%;}
    70%,80%,90%,100%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/normal_right_3.png");background-size: 100% 100%;}
}

.bulbasaur-run-right{
    width:100%;
    height: 100%;
    animation: bulbasaur-run-right 1s infinite;
}

@keyframes bulbasaur-run-right {
    0%,10% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_right_1.png");background-size: 100% 100%;}
    20%,30% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_right_2.png");background-size: 100% 100%;}
    40%,50% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_right_3.png");background-size: 100% 100%;}
    60%,70% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_right_4.png");background-size: 100% 100%;}
    80%,90%,100% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_right_5.png");background-size: 100% 100%;}
}

.bulbasaur-run-left{
    width:100%;
    height: 100%;
    animation: bulbasaur-run-left 1s infinite;
}

@keyframes bulbasaur-run-left {
    0%,10% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_left_1.png");background-size: 100% 100%;}
    20%,30% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_left_2.png");background-size: 100% 100%;}
    40%,50% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_left_3.png");background-size: 100% 100%;}
    60%,70% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_left_4.png");background-size: 100% 100%;}
    80%,90%,100% {top: 0px; left: 0px; background: url("../../public/profile_img/character/bulbasaur/run_left_5.png");background-size: 100% 100%;}
}

/* ----------- venusaur -----------  */

.venusaur-normal{
    width:100%;
    height: 100%;
    animation: venusaur-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes venusaur-normal {
    0%,10%,20%,30%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/normal_right_1.png");background-size: 100% 100%;}
    40%,50%,60%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/normal_right_2.png");background-size: 100% 100%;}
    70%,80%,90%,100%   {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/normal_right_3.png");background-size: 100% 100%;}
}

.venusaur-run-right{
    width:100%;
    height: 100%;
    animation: venusaur-run-right 1s infinite;
}

@keyframes venusaur-run-right {
    0%,10% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_right_1.png");background-size: 100% 100%;}
    20%,30% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_right_2.png");background-size: 100% 100%;}
    40%,50% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_right_3.png");background-size: 100% 100%;}
    60%,70% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_right_4.png");background-size: 100% 100%;}
    80%,90%,100% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_right_5.png");background-size: 100% 100%;}
}

.venusaur-run-left{
    width:100%;
    height: 100%;
    animation: venusaur-run-left 1s infinite;
}

@keyframes venusaur-run-left {
    0%,10% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_left_1.png");background-size: 100% 100%;}
    20%,30% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_left_2.png");background-size: 100% 100%;}
    40%,50% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_left_3.png");background-size: 100% 100%;}
    60%,70% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_left_4.png");background-size: 100% 100%;}
    80%,90%,100% {top: 0px; left: 0px; background: url("../../public/profile_img/character/venusaur/run_left_5.png");background-size: 100% 100%;}
}

</style>
