<template>
    <div>
        <div class="stages">
            <div class="stage">
                <div class="stage-floor"></div>
                <img class="logo" src="http://i48.tinypic.com/9k6oae.png" alt="Megaman X">
                <img class="life" src="http://i47.tinypic.com/9tj3bo.png" alt="Life bar">
                <div class="megaman"></div>
            </div>
            <div class="stage-2"></div>
        </div>
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
    body {background: #000;}

    .stage {z-index:1; position: absolute; width:100%; height:700px; background: url('http://oi45.tinypic.com/1z706dd.jpg') 0 0 repeat-x;

        animation-duration: 7000ms;
        animation-iteration-count: infinite;
        animation-name: stage-move;
        animation-timing-function: linear;

        -webkit-animation-duration: 7000ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-move;
        -webkit-animation-timing-function: linear;

    }


    .stage-2 {z-index:-1; position: absolute; width:100%; height:700px; background: url('http://oi49.tinypic.com/25ptzb5.jpg') 0 0 repeat-x;

        animation-duration: 7500ms;
        animation-iteration-count: infinite;
        animation-name: stage-move-2;
        animation-timing-function: linear;

        -webkit-animation-duration: 7500ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-move-2;
        -webkit-animation-timing-function: linear;

    }

    .stage-floor {z-index:999; position:absolute; top:0px; width:100%; height:331px; background: url('http://oi45.tinypic.com/bxv2u.jpg') 0 0 repeat-x;

        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-name: floor-move;
        animation-timing-function: linear;

        -webkit-animation-duration: 5000ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: stage-move;
        -webkit-animation-timing-function: linear;

    }

    .logo {z-index:1000; position:absolute; width:400px; height:127px;  margin-left:50%;  margin-top:3%; left:-200px;

        opacity: 1;

        transition: opacity .3s ease-in-out;
        animation-fill-mode:forwards;
        animation-delay:3s;
        animation-duration:3s ;
        animation-name: fade-logo;

        -webkit-transition: opacity 3s ease-in-out;
        -webkit-animation-fill-mode:forwards;
        -webkit-animation-delay:3s;
        -webkit-animation-duration:3s ;
        -webkit-animation-name: fade-logo;

    }

    .life {z-index:9999; position:absolute; width:35px; height:129px; margin-left:10px; margin-top:20px;}

    .megaman {
        z-index:100;
        position: relative;
        top:155px;
        left:300px;
        width: 90px;
        height: 88px;
        background: url('http://i50.tinypic.com/9jdu88.png') 0 0;

        animation-duration: 700ms;
        animation-iteration-count: infinite;
        animation-timing-function: step-start;
        animation-name: run;

        -webkit-animation-duration: 700ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: step-start;
        -webkit-animation-name: run;

    }
    @-webkit-keyframes run {

        0%			{ background-position:0px 0; }
        10%		{ background-position:98px 0; }
        20%		{ background-position:196px 0; }
        30%		{ background-position:293px 0; }
        40%		{ background-position:390px 0; }
        50%		{ background-position:488px 0; }
        60%		{ background-position:584px 0; }
        70%		{ background-position:861px 0; }
        80%		{ background-position:778px 0; }
        90%		{ background-position:876px 0; }
        100%		{ background-position: 0px 0; }
    }

    @-webkit-keyframes stage-move {

        0%		    { background-position:1596px 0; }
        100%			{ background-position:0px 0; }

    }

    @-webkit-keyframes stage-move-2 {

        0%		    { background-position:368px 0; }
        100%			{ background-position:0px 0; }

    }

    @-webkit-keyframes floor-move {

        0%		    { background-position:1596px 0; }
        100%			{ background-position:0px 0; }

    }

    @-webkit-keyframes fade-logo { from { opacity:1; } to { opacity:0; } }



</style>
