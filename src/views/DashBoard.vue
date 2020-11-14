<template>
  <div class="DashBoard">
      <v-container class="my-5">
          <v-layout row wrap>
              <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                  <v-card flat class="text-center ma-3">
                      <v-responsive class="pt-4 black-text">
                          Test
                      </v-responsive>
                      <v-card-text>
                        <div class="subheading">{{person.name}}</div>
                        <div class="grey-text">{{person.role}}</div>
                      </v-card-text>
                      <v-card-actions>
                          <v-btn flat color="grey">
                              <v-icon small left>Message</v-icon>
                              <span>Test</span>
                          </v-btn>
                      </v-card-actions>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class DashBoard extends Vue {
  data () {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer' },
        { name: 'Ryu', role: 'Graphic designer' },
        { name: 'Chun Li', role: 'Web developer' },
        { name: 'Gouken', role: 'Social media maverick' },
        { name: 'Yoshi', role: 'Sales guru' }
      ]
    }
  }
}
</script>
