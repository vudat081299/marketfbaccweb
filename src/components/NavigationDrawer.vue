<template>
  <div class="ma-12 pa-12">
    <!-- <v-card> -->
      <v-navigation-drawer
        app nav clipped width='300'
        v-model='show'
      >
        <v-list dense>
          <v-list-item class="px-3">
            <v-list-item-avatar>
              <v-img src="https://image.shutterstock.com/image-vector/letter-c-logo-designlinked-shape-600w-475245448.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Vu Quy Dat
              </v-list-item-title>
              <v-list-item-subtitle>vudat81299@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <!-- <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item> -->
          <v-list-item
          active-class="slectedRow blue--text text--darken-3"
          v-for="tab in tabs"
          :key="tab.text"
          :to="tab.route"
        >
          <v-list-item-action>
            <v-icon size="24">{{ tab.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ tab.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        </v-list>
      </v-navigation-drawer>

    <v-app-bar app clipped-left class="grey--text">
      <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class='font-weight-light'>Shopping</span>
        <span>Via</span>
      </v-toolbar-title>
    </v-app-bar>

    <!-- </v-card> -->
  </div>
</template>

<script>
export default {
  //
  data () {
    return {
      show: false, // show nav
      tabs: [
        { icon: 'mdi-cart', text: 'DashBoard', route: '/dashboard' }
      ]
    }
  }
}
</script>
