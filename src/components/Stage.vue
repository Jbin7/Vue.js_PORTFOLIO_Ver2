<template>
    <div>
        <div class="stage-floor"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components:{},
        data(){
            return{

            }
        },
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
    .stage-floor {
        z-index:1;
        position: absolute; bottom:0;
        width:100%; height:200px;
        background: url('../../public/profile_img/backObject/floor.png') 0 0 repeat-x;

        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: stage-floor-move;
        animation-timing-function: linear;

        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-floor-move;
        -webkit-animation-timing-function: linear;

    }

    @-webkit-keyframes stage-floor-move {

        0%		    { background-position:600px 0; }
        100%			{ background-position:0px 0; }

    }


</style>
