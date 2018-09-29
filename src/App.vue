<template>
  <div id="app">
    <router-view/>
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
            this.$router.push('about')
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

  html, body { width:100%; height:100%; overflow:auto;}

</style>
