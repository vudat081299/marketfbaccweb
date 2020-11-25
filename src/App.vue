<template>
  <v-app>
    <NavigationDrawer v-if="this.$store.state.didLogin"></NavigationDrawer>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>

      <!-- If using vue-router -->

        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>

    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main> -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'

export default Vue.extend({
  name: 'App',
  // mounted() {
  //   window.onpopstate = event => {
  //     if (
  //       window.localStorage.getItem('info') !== null &&
  //       this.$route.path == '/login'
  //     ) {
  //       this.$router.push('/login'); // redirect to home, for example
  //     }
  //   }
  // },
  computed: {
    check () {
      console.log(this.$store.state.didLogin)
      return false
    }
  },
  watch: {
    check () {
      if (this.$store.state.didLogin === true) {
        this.test = true
      } else {
        this.$router.push('/')
        this.test = false
      }
    }
  },
  components: {
    // HelloWorld,
    NavigationDrawer
  },

  data: () => ({
    test: false
  })
})
</script>
