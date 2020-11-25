<template v-if="this.$store.state.didLogin">
  <!-- <div class="DashBoard">
      <v-container class="my-5"> -->

        <v-div class="" v-if="this.$store.state.didLogin">
          <v-layout row wrap class='ml-6 mr-6 mt-3' >
              <v-flex class='pa-3 mt-4' xs12 sm6 md4 lg3 v-for="person in items" :key="person.stt">
                  <!-- <v-card flat class="text-center ma-3">
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
                  </v-card> -->
                <v-card elevation="8"
    class="mx-auto"
  >
    <v-list-item three-line>
      <v-list-item-content>
      <v-list-item-avatar
        tile class="rounded-lg"
        size="80"
        color="grey"
      ><v-img src="https://image.shutterstock.com/image-vector/letter-c-logo-designlinked-shape-600w-475245448.jpg"></v-img>
      </v-list-item-avatar>
        <v-list-item-title class="mb-1">
          {{ person.typeAcc }}
        </v-list-item-title>
        <div class="overline mb-2">
          Số acc có sẵn {{ person.remainingAmountAcc }}
        </div>
        <v-list-item-subtitle>
          {{ person.description }}</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text small
        color="green"
      >
        {{ person.price }} VNĐ / 1 ACC
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        outlined
        rounded small
        @click.stop="showDialog (person)"
        class="green white--text"
      >
        Mua
      </v-btn>
    </v-card-actions>
  </v-card>
              </v-flex>
          </v-layout>

<!-- <v-row justify="center"> -->

    <v-dialog
      v-model="dialog"
      max-width="350"
    >
      <v-card>

      <v-form ref="form">
        <v-card-title class="headline">
          Nhập số lượng cần mua
        </v-card-title>
          <!-- <v-text-field
            dense class="ml-4 mr-4"
            label="Nhập số lượng"
            clearable v-model="editedItem.amount"
          ></v-text-field> -->
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="12"
        >
          <v-text-field v-model="editedItem.amount" clearable
            label="Số lượng tài khoản" :rules="amount"
            placeholder="Nhập số lượng muốn mua" type="number"
            filled
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="closeEditingItem"
          >
            Hủy
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="addIntoCart"
          >
            Thêm vào giỏ hàng
          </v-btn>
        </v-card-actions>
      </v-form>
      </v-card>
    </v-dialog>
  <!-- </v-row> -->

        </v-div>
      <!-- </v-container>
  </div> -->
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator'

// @Component({
//   components: {
//   }
// })
// export default class DashBoard extends Vue {
export default {
  name: 'DashBoard',
  computed: {
    form () {
      return {
        dấdfasf: this.editedItem.amount
      }
    }
  },
  data () {
    return {
      dialog: false,
      loading: false,
      selection: 1,
      editedItem: {
        item: null,
        amount: 1,
        sumPrice: 0
      },
      cart: [],
      items: [
        { stt: '1', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '1', price: '50.000' },
        { stt: '2', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '2', price: '50.000' },
        { stt: '3', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '3', price: '50.000' },
        { stt: '4', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '4', price: '50.000' },
        { stt: '5', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '5', price: '50.000' },
        { stt: '6', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '6', price: '50.000' },
        { stt: '7', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '7', price: '50.000' },
        { stt: '8', remainingAmountAcc: '68', typeAcc: 'Via', description: 'VIA VIET 2008-2014 RANDOM 50-5K FRIEND', typeCode: '8', price: '50.000' }
      ],
      amount: [
        // v => (/[!@#$%^&*, `~'":;{}|)(+=._-]/.test(v) === false) || 'Chỉ nhập số!',
        v => !!v || 'Số lượng tài khoản không được để trống và chỉ được chứa số!'
        // v => (/[0123456789]/.test(v) === true)
      ]
    }
  },
  watch: {
    editedItem () {
      if (this.editedItem.amount < 1) {
        this.editedItem.amount = 1
      }
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
      return this.$refs.form.validate()
    },
    addIntoCart () {
      if (!this.validate()) {
        return
      }
      if (this.editedItem.amount === 0) {
        return
      }
      this.editedItem.sumPrice = this.editedItem.amount * this.editedItem.item.price
      console.log(this.editedItem.sumPrice)

      let j = 0
      this.cart = this.$store.state.cart
      // this.cart[this.cart.length] = this.editedItem
      // console.log(this.cart)
      if (this.cart === null) {
        const obj = Object.assign({}, this.editedItem)
        this.cart[0] = obj
      } else {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].item.typeCode === this.editedItem.item.typeCode) {
            console.log(this.editedItem.amount)
            console.log(this.cart[i].amount)
            this.cart[i].amount = 0 + +this.cart[i].amount + +this.editedItem.amount
            j = 1
            console.log(this.cart)
            break
          } else {
            console.log('-----')
          }
        }
        if (j === 0) {
          console.log(this.cart.length)
          const obj = Object.assign({}, this.editedItem)
          this.cart[this.cart.length] = obj
          console.log('-----')
        }
      }
      this.$store.dispatch('sendItem', null)
      this.$store.dispatch('sendItem', this.cart)
      j = 0
      this.editedItem.amount = 1
      this.dialog = false
    },
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    showDialog (item) {
      this.dialog = true
      this.editedItem.item = item
    },
    closeEditingItem () {
      this.dialog = false
      this.editedItem.amount = 1
    }
  }
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
