<template>
  <div>
    <v-container grid-list-md text-xs-center>

      <v-layout row wrap>
        <v-flex xs12>

          <div style="background-color: white; padding:10px; border: solid 1px #E7E7E7">
            <v-layout row wrap>

              <v-flex xs12>
                <div class="about-title">
                  About
                </div>
              </v-flex>

              <v-flex xs12 sm6>
                <div>
                  <img src="/img/profile.jpg" width="100%;">
                </div>
              </v-flex>

              <v-flex xs12 sm6>
                <div style="text-align: left; font-size:20pt; font-weight: 600">김 정빈</div>
                <div style="text-align:left; font-size:12pt; padding: 5px;">
                  <div>모던한 스택의 웹 개발을 좋아하는 개발자 입니다.</div>
                  <div>프론트엔드는 Vue.js, React 를 선호하고 SPA로 개발하는 것을 좋아합니다. </div>
                  <div>백엔드 개발은 주로 Spring Framework를 사용합니다.</div>
                  <div>공장 설비관리, 생산관리, 스마트팩토리 관련 프로젝트를 주로 많이 참여하였습니다.</div>
                </div>
                <div style="margin-top: 30px;">
                  <div style="display: inline-block; margin: 10px; cursor: pointer">
                    <a href="https://github.com/Jbin7" target="_blank"><img src="/img/github.png" style="width: 50px;"></a>
                  </div>
                  <div style="display: inline-block; margin: 10px; cursor: pointer">
                    <a href="http://jhonnywest.tistory.com/" target="_blank"><img src="/img/tistory.png" style="width: 50px;"></a>
                  </div>
                  <div style="font-size: 14pt">kakao: jbin7</div>
                </div>
              </v-flex>

              <v-flex xs12>
                <div class="about-title">
                  Experience
                </div>
                <div class="about-area">

                  <div class="about-title-sub">Language</div>
                  <div style="font-size: 10pt;padding: 10px;">
                    <ul>
                      <li>Java</li>
                      <li>Java Script, ES6</li>
                      <li>HTML / CSS</li>
                    </ul>
                  </div>

                  <div class="about-title-sub">Frontend</div>
                  <div style="font-size: 10pt;padding: 10px;">
                    <ul>
                      <li>Vue.js / vue-cli / vue-router / vuex / nuxt.js</li>
                      <li>React / Redux</li>
                      <li>jQuery</li>
                    </ul>
                  </div>

                  <div class="about-title-sub">Backend</div>
                  <div style="font-size: 10pt;padding: 10px;">
                    <ul>
                      <li>Srping Framework</li>
                      <li>Node.js / Express</li>
                      <li>DBMS - Oracle / Mysql</li>
                    </ul>
                  </div>

                  <div class="about-title-sub">ETC</div>
                  <div style="font-size: 10pt;padding: 10px;">
                    <ul>
                      <li>Version Control - Git / SVN</li>
                      <li>Cross Platform - Electron / Cordova</li>
                      <li>Graphic - PhotoShop / Illustrator</li>
                    </ul>
                  </div>

                  <div class="about-title-sub">IDE & Editor & DEV Tools</div>
                  <div style="font-size: 10pt;padding: 10px;">
                    <ul>
                      <li>Inteli J</li>
                      <li>Web Storm</li>
                      <li>Visual Studio Code</li>
                      <li>Eclipse</li>
                      <li>Toad</li>
                    </ul>
                  </div>


                </div>
              </v-flex>


              <v-flex xs12>
                <div class="about-title">
                  Projects
                </div>
                <div class="about-area">

                  <div class="about-title-sub">2018</div>
                  <div style="font-size: 10pt;">
                    <div>청주 정식품 베지밀 FSP(식품안전 플랫폼)</div>
                    <div>연변 농심 백산수 PMS(공장 모니터링)</div>
                  </div>

                  <div class="about-title-sub">2017</div>
                  <div style="font-size: 10pt;">
                    <div>선진 OEE 통합모니터링</div>
                    <div>선진 필리핀 블라칸 OEE(설비종합효율)</div>
                    <div>선진 입출고 자동화 시스템 바코드스캐너 앱(안드로이드 하이브리드)</div>
                    <div>선진 입출고 자동화 시스템 키오스크</div>
                  </div>

                </div>
              </v-flex>



            </v-layout>
          </div>

        </v-flex>
      </v-layout>


    </v-container>
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

  .about-title{
    text-align: left; border-left:5px solid #1565C0; padding-left:10px; margin-bottom: 10px;
  }

  .about-title-sub{
    color:gray; font-size: 14pt;
  }

  .about-area{
    text-align: left; padding-left:10px;
  }

</style>
