<template>
    <div>
        <div>
            <v-container grid-list-md text-xs-center>

                <v-layout row wrap>
                    <v-flex xs12>

                        <div style="background-color: white; padding:10px; border: solid 1px #E7E7E7">
                            <v-layout row wrap>

                                <v-flex xs12>
                                    <div class="about-title">
                                        Projects
                                    </div>

                                    <div class="about-area">
                                        <div @click="selYear('')" class="project-selector">ALL</div>
                                        <div @click="selYear('2018')" class="project-selector">2018</div>
                                        <div @click="selYear('2017')" class="project-selector">2017</div>
                                    </div>

                                    <div style="text-align: left">
                                        <transition-group name="list-complete" tag="div">
                                            <div v-for="(item, index) in computedList" v-bind:key="index"
                                                 class="project-wrapper list-complete-item"
                                                 style="padding: 10px;"
                                                 @click="selProject(item.id)"
                                            >
                                                <img :src="'/portfolio/img/projects/'+item.path+'/1.png'" style="width: 100%;">
                                                <div style="display: inline-block; font-size: 10pt;">{{item.name}}</div>
                                            </div>
                                        </transition-group>
                                    </div>


                                </v-flex>


                            </v-layout>
                        </div>

                    </v-flex>
                </v-layout>


            </v-container>
        </div>
    </div>
</template>

<script>
    import projects from '../assets/projects'
    export default {
        name: '',
        components:{},
        data(){
            return{
                query: '',
                projectList: []
            }
        },
        props: {

        },
        methods:{
            selYear(query){
                this.query = query
            },
            selProject(id){
                this.$store.commit('selProjectId',id)
                this.$router.push('ProjectDetail')
            }
        },
        computed:{
          computedList(){
              var vm = this
              return this.projectList.filter(function (item) {
                  return item.year.indexOf(vm.query) !== -1
              })
          }
        },
        mounted: function () {
            this.projectList = projects.projectList;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .about-title{
        text-align: left; border-left:5px solid #1565C0; padding-left:10px; margin-bottom: 10px;
    }

    .about-title-sub{
        color:gray; font-size: 14pt;
    }

    .about-area{
        text-align: left; padding-left:10px;
    }

    .project-selector{
        font-size: 10pt;
        font-weight: bold;
        display: inline-block;
        margin: 8px;
        cursor: pointer;
        user-select: none;
    }

    .project-selector:hover{
        font-size: 10pt;
        font-weight: bold;
        display: inline-block;
        margin: 8px;
        cursor: pointer;
        color: darkgrey;
        user-select: none;
    }

    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }

    @media screen and (min-width: 300px) and (max-width: 800px) {
        .project-wrapper{
            display: inline-block;
            width: 100%;
            text-align: center;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 800px) {
        .project-wrapper{
            display: inline-block;
            width: 30%;
            text-align: center;
            cursor: pointer;
        }
    }

</style>
