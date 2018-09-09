<template>
    <div class="profile_background_img">
        <Character></Character>
    </div>
</template>

<script>
    export default {
        components:{
            'Character': ()=>import('@/components/Character.vue')
        },
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

    .profile_background_img{
        background:url('../../public/profile_img/background/1.png') no-repeat center top;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        witdh:100%;
        height: 100vh;
    }
</style>
