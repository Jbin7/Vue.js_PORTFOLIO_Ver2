<template>
    <div>
        <div :class="activeClass"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components:{},
        data(){
            return{
                activeClass: 'stage-floor-paused-right',
                lastDirection: 'right'
            }
        },
        props: [
            'state'
        ],
        methods:{

        },
        watch:{
            state(newState){
                switch (newState) {
                    case 'default' :
                        this.activeClass = 'stage-floor-paused-' + this.lastDirection
                        break;
                    case 'left' :
                        this.lastDirection = 'left'
                        this.activeClass = 'stage-floor-move-' + this.lastDirection
                        break;
                    case 'right' :
                        this.lastDirection = 'right'
                        this.activeClass = 'stage-floor-move-' + this.lastDirection
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

    .stage-floor-paused-left {
        z-index:2;
        position: absolute; bottom:0;
        width:100%; height:200px;
        background: url('../../public/profile_img/backObject/floor.png') 0 0 repeat-x;

        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: stage-floor-move-left;
        animation-timing-function: linear;
        animation-play-state: paused;

        -webkit-animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-floor-move-left;
        -webkit-animation-timing-function: linear;
        -webkit-animation-play-state: paused;

    }


    .stage-floor-move-left {
        z-index:2;
        position: absolute; bottom:0;
        width:100%; height:200px;
        background: url('../../public/profile_img/backObject/floor.png') 0 0 repeat-x;

        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: stage-floor-move-left;
        animation-timing-function: linear;
        animation-play-state: running;

        -webkit-animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-floor-move-left;
        -webkit-animation-timing-function: linear;
        -webkit-animation-play-state: running ;

    }

    @-webkit-keyframes stage-floor-move-left {

        0%		    { background-position:0px 0; }
        100%			{ background-position:600px 0; }

    }

    .stage-floor-paused-right {
        z-index:2;
        position: absolute; bottom:0;
        width:100%; height:200px;
        background: url('../../public/profile_img/backObject/floor.png') 0 0 repeat-x;

        animation-direction: reverse;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: stage-floor-move-left;
        animation-timing-function: linear;
        animation-play-state: paused;

        -webkit-animation-direction: reverse;
        -webkit-animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-floor-move-left;
        -webkit-animation-timing-function: linear;
        -webkit-animation-play-state: paused ;

    }

    .stage-floor-move-right {
        z-index:2;
        position: absolute; bottom:0;
        width:100%; height:200px;
        background: url('../../public/profile_img/backObject/floor.png') 0 0 repeat-x;

        animation-direction: reverse;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-name: stage-floor-move-left;
        animation-timing-function: linear;
        animation-play-state: revert;

        -webkit-animation-direction: reverse;
        -webkit-animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-floor-move-left;
        -webkit-animation-timing-function: linear;
        -webkit-animation-play-state: revert ;

    }



</style>
