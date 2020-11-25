<template>
  <div class="">
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
              <v-list-item-title class="title mb-2">
                Ho va Ten
              </v-list-item-title>
              <v-list-item-subtitle>myemail@gmail.com</v-list-item-subtitle>
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

      <v-spacer></v-spacer>
            <!-- <v-menu
              bottom
              left min-width="450"
            > -->
              <!-- <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on" class="mr-4"
                > -->
<v-btn icon class="mr-4" @click="showCart">
        <v-badge
          color="green"
        :content="countCart"
        :value="countCart"
        >

                  <v-icon>mdi-cart</v-icon>
        </v-badge>
                </v-btn>
              <!-- </template>
              <v-list>
                <v-list-item
                  v-for="item in cart"
                  :key="item.type"
                  @click="() => {}"
                >
                  <v-list-item-subtitle>
                    {{ item.item.description }}
                  </v-list-item-subtitle>
                    {{ item.amount }}
                </v-list-item>
              </v-list> -->
            <!-- </v-menu> -->
      <div class="mr-9">Liên hệ: <strong class="grey--text text--darken-2">{{ phonenumber }}</strong></div>
      <!-- <router-link to='/login' style="text-decoration: none;">Đăng xuất</router-link> -->
      <v-btn @click="logout">Đăng xuất</v-btn>
    </v-app-bar>

    <!-- </v-card> -->
  </div>
</template>

<script>
import VueSession from 'vue-session'
export default {
  //
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  methods: {
    logout () {
      this.didLogin = false
      // this.$session.destroy()
      this.$router.push('/')
      this.$store.state.didLogin = !this.$store.state.didLogin
    },
    showCart () {
      this.$router.push('/cart')
    }

  },
  watch: {
    // cart () {
    //   this.countCart = this.cart.length
    // }
  },
  computed: {
    cart () {
      console.log(this.$store.state.cart)
      return this.$store.state.cart
    },
    countCart () {
      if (this.cart.length === null) {
        return 0
      } else {
        return this.cart.length
      }
    }
  },
  data () {
    return {
      didLogin: false,
      show: false, // show nav
      phonenumber: '0123456789',
      items: [
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me'
        },
        {
          title: 'Click Me 2'
        }
      ],
      tabs: [
        { icon: 'mdi-view-dashboard', text: 'Via / BM', route: '/dashboard' },
        { icon: 'mdi-cash-usd', text: 'Thanh toán', route: '/paymenthistory' },
        // { icon: 'mdi-currency-usd', text: 'Nạp tiền', route: '/topup' },
        { icon: 'mdi-cart', text: 'Giỏ hàng', route: '/cart' },
        { icon: 'mdi-key', text: 'Mật khẩu', route: '/password' }
      ]
    }
  }
}
</script>
