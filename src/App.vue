<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
    import Home from "./views/Home";
    export default {
        components: {Home},
        comments:{
            'Home': ()=>import('./views/Home.vue')
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

<style>
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  body        { font: 24px/30px 'Noto Sans KR', sans-serif; }
  .thin       { font-weight: 100 }
  .light      { font-weight: 300 }
  .regular    { font-weight: 400 }
  .medium     { font-weight: 500 }
  .bold       { font-weight: 700 }
  .bolder     { font-weight: 900 }

  html, body { height:100%; overflow:hidden }

</style>
