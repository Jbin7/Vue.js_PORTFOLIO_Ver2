<template>
    <div style="width:250px; height: 250px; position: absolute; top:65%;">
        <div class="hitokage-run-left"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {

        },
        methods:{

        },
        mounted: function () {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hitokage-normal{
    width:100%;
    height: 100%;
    position: relative;
    animation: hitokage-normal 1s infinite;
    background-repeat: no-repeat;
}

@keyframes hitokage-normal {
    0%   {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_1.png");background-size: 100% 100%;}
    10%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_1.png");background-size: 100% 100%;}
    20%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_1.png");background-size: 100% 100%;}
    30%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_2.png");background-size: 100% 100%;}
    40%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_2.png");background-size: 100% 100%;}
    50%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_2.png");background-size: 100% 100%;}
    60%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_2.png");background-size: 100% 100%;}
    70%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_3.png");background-size: 100% 100%;}
    80%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_3.png");background-size: 100% 100%;}
    90%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_3.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/normal_right_3.png");background-size: 100% 100%;}
}

.hitokage-run-right{
    width:100%;
    height: 100%;
    position: relative;
    animation: hitokage-run-right 1s infinite;
}

@keyframes hitokage-run-right {
    0%   {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_1.png");background-size: 100% 100%;}
    10%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_1.png");background-size: 100% 100%;}
    20%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_2.png");background-size: 100% 100%;}
    30%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_2.png");background-size: 100% 100%;}
    40%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_3.png");background-size: 100% 100%;}
    50%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_3.png");background-size: 100% 100%;}
    60%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_4.png");background-size: 100% 100%;}
    70%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_4.png");background-size: 100% 100%;}
    80%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_5.png");background-size: 100% 100%;}
    90%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_right_6.png");background-size: 100% 100%;}
}

.hitokage-run-left{
    width:100%;
    height: 100%;
    position: relative;
    animation: hitokage-run-left 1s infinite;
}

@keyframes hitokage-run-left {
    0%   {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_1.png");background-size: 100% 100%;}
    10%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_1.png");background-size: 100% 100%;}
    20%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_2.png");background-size: 100% 100%;}
    30%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_2.png");background-size: 100% 100%;}
    40%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_3.png");background-size: 100% 100%;}
    50%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_3.png");background-size: 100% 100%;}
    60%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_4.png");background-size: 100% 100%;}
    70%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_4.png");background-size: 100% 100%;}
    80%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_5.png");background-size: 100% 100%;}
    90%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_5.png");background-size: 100% 100%;}
    100%  {top: 0px; left: 0px; background: url("../../public/profile_img/hitokage/run_left_6.png");background-size: 100% 100%;}
}

</style>
