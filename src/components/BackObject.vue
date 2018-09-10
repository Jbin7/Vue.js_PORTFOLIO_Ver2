<template>
    <div class="backobject-container">
        <div class="profile_backobject_img"></div>
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

    @media screen and (min-width: 400px) and (max-width: 800px) {
        .backobject-container{
            position: relative;
            bottom:0%;
        }

        .profile_backobject_img{
            background:url('../../public/profile_img/background/test.png') no-repeat center top;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            witdh:100%;
            height: 100vh;
        }

    }

    @media screen and (min-width: 800px) and (max-width: 1920px) {
        .backobject-container{
            position: relative;
            bottom:0%;
        }

        .profile_backobject_img{
            background:url('../../public/profile_img/background/test.png') no-repeat center top;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            witdh:100%;
            height: 100vh;
        }
    }


</style>
