<template>
  <v-app id="inspire" style="background-color: #f5f5f5">
    <v-navigation-drawer
            :clipped="$vuetify.breakpoint.lgAndUp"
            v-model="drawer"
            fixed
            app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
                  v-if="item.heading"
                  :key="item.heading"
                  row
                  align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
                  v-else-if="item.children"
                  v-model="item.model"
                  :key="item.text"
                  :prepend-icon="item.model ? item.icon : item['icon-alt']"
                  append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
                    v-for="(child, i) in item.children"
                    :key="i"
                    @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon color="blue darken-3">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title @click="route(item.text)">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="white"
            height="50"
            app
            fixed
            style="box-shadow:none;"
    >
      <v-toolbar-title class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <div style="width: 100%; text-align: center; margin-left:-20px; color:#1565C0;">Jbin Portfolio</div>
      <!--<v-spacer></v-spacer>-->
      <!--<span style="color:#1565C0">Jbin</span>-->
      <!--<v-spacer></v-spacer>-->
    </v-toolbar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
    import router from "../router";

    export default {
        data: () => ({
            dialog: false,
            drawer: null,
            items: [
                { icon: 'contacts', text: 'About' },
                { icon: 'contacts', text: 'Profile' },
                { icon: 'content_copy', text: 'Project' },
                // {
                //     icon: 'keyboard_arrow_up',
                //     'icon-alt': 'keyboard_arrow_down',
                //     text: 'Labels',
                //     model: true,
                //     children: [
                //         { icon: 'add', text: 'Create label' }
                //     ]
                // },
                // {
                //     icon: 'keyboard_arrow_up',
                //     'icon-alt': 'keyboard_arrow_down',
                //     text: 'More',
                //     model: false,
                //     children: [
                //         { text: 'Import' },
                //         { text: 'Export' },
                //         { text: 'Print' },
                //         { text: 'Undo changes' },
                //         { text: 'Other contacts' }
                //     ]
                // },
                // { icon: 'settings', text: 'Settings' },
                // { icon: 'chat_bubble', text: 'Send feedback' },
                // { icon: 'help', text: 'Help' },
                // { icon: 'phonelink', text: 'App downloads' },
                // { icon: 'keyboard', text: 'Go to the old version' }
            ]
        }),
        props: {
            source: String
        },
        methods:{
            route(text){
                router.push(text)
            }
        }
    }
</script>

<style>
  .toolbar__content, .toolbar__extension {
    border-bottom: 1px solid #e5e5e5;
  }
</style>