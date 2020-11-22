<template class="bgC" v-if="this.$store.state.didLogin">
  <v-container class="template" v-if="this.$store.state.didLogin">
      <v-toolbar dense class="">
        <v-toolbar-title>Giỏ hàng ({{this.countCart}} sản phẩm)</v-toolbar-title>
      </v-toolbar>
      <!-- <v-div>
        <v-row>
          <v-col cols="4">
            <v-subheader>Họ và Tên</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field v-model="item.name" :rules="nameRules"
              label="nhập họ và tên của bạn"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-div> -->
        <v-row>
          <v-col cols="8">
            <!-- <v-card-text>
              <v-select
                v-model="selection"
                :items="items"
                multiple
                label="Select an option"
              ></v-select>
            </v-card-text> -->
            <v-card flat class="mb-3" v-for="object in this.cart" :key="object.item.stt" elevation="6" height="120">
              <v-row class="ml-3 mr-3 mb-6 pt-1">
                <v-col cols="7" class="">
                  <v-row class="mb-6 pt-3">
                    {{ object.item.description }}
                  </v-row>
                </v-col>

                <v-col cols="5" class="">
                  <v-row>
                    <v-col class="" cols="7">
                      <h4 class="pr-2 text-right">{{ object.sumPrice }}.000đ</h4>
                    </v-col>
                    <v-col cols="5">
                      <div class="text-center">
                        <v-row>
                          <v-btn
                            class="mt-n1"
                            elevation="3"
                            small icon
                            color=""
                            @click="minus(object)"
                          >
                            <v-icon>
                              mdi-minus
                            </v-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <span class="text-center">{{ object.amount }}</span>
                          <v-spacer></v-spacer>
                          <v-btn
                            class="mt-n1"
                            elevation="3"
                            small icon
                            color=""
                            @click="add(object)"
                          >
                            <v-icon>
                              mdi-plus
                            </v-icon>
                          </v-btn>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="4">
            <!-- <v-card-text>
              <v-select
                v-model="selection"
                :items="items"
                multiple
                label="Select an option"
              ></v-select>
            </v-card-text> -->
            <v-row>
              <v-col cols="12">
                <v-card flat class="mb-3" elevation="6" height="100">
                  <v-row class="ml-3 mr-3 mb-6 pt-1">
                    <v-col class='mt-1' cols="5">
                      <span class="font-weight-light">Thành tiền</span>
                    </v-col>

                    <v-col cols="7">
                      <span class="text-right red--text"><p class="text-xl-h4 text-right">{{ sumBillPrice }}.000đ</p></span>
                      <span wrap class="text-right"><p class="font-weight-light mt-n5 text--darken-1 text-right">(Đã bao gồm VAT nếu có)</p></span>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="mt-n6">
              <v-col cols="12">
                <v-btn color="#FF424E" class="white--text fillWidthOfParent">Thanh toán
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      <!-- <v-card-text>
      <v-select
        v-model="selection"
        :items="items"
        multiple
        label="Select an option"
      ></v-select>
    </v-card-text> -->
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      countCart: 0,
      array: []
    }
  },
  computed: {
    cart () {
      if (this.$store.state.cart.length === null || this.$store.state.cart.length === 0) {
        return null
      } else {
        console.log(this.$store.state.cart)
        return this.$store.state.cart
      }
    },
    sumBillPrice () {
      let total = 0
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].amount * this.cart[i].item.price
      }
      return total
    }
  },
  watch: {
    cart () {
      if (this.cart.length === null) {
        this.countCart = 0
      } else {
        this.countCart = this.cart.length
      }
    }
  },
  methods: {
    minus (object) {
      if (object.amount === 0) {
        return
      }
      this.array = this.cart
      // const array = Object.assign({}, this.cart)
      console.log(this.array[0])
      console.log(this.array)
      console.log(this.array.length)
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].item.stt === object.item.stt) {
          const subObject = Object.assign({}, object)
          subObject.amount = +subObject.amount - 1
          subObject.sumPrice = subObject.amount * subObject.item.price
          this.array[i] = subObject

          console.log(this.array)
          console.log(this.array[i].amount)
          console.log(this.array[i].sumPrice)
        }
      }
      this.$store.dispatch('sendItem', null)
      this.$store.dispatch('sendItem', this.array)
      console.log(this.$store.state.cart)
    },
    add (object) {
      this.array = this.cart
      // const array = Object.assign({}, this.cart)
      console.log(this.array[0])
      console.log(this.array)
      console.log(this.array.length)
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].item.stt === object.item.stt) {
          const subObject = Object.assign({}, object)
          subObject.amount = +subObject.amount + 1
          subObject.sumPrice = subObject.amount * subObject.item.price
          this.array[i] = subObject

          console.log(this.array)
          console.log(this.array[i].amount)
          console.log(this.array[i].sumPrice)
        }
      }
      this.$store.dispatch('sendItem', null)
      this.$store.dispatch('sendItem', this.array)
      console.log(this.$store.state.cart)
    }
  }
}
</script>
<style scoped>
.template {
    /* position:fixed; */
    /* top: 50%; */
    left: 15%;
    right: 15%;
    min-width: 600px;
    width:70%;
    /* height:18em; */
    /* margin-top: -9em; /*set to a negative number 1/2 of your height*/
    /* margin-left: -15em; set to a negative number 1/2 of your width */
    /* border: 1px solid #ccc; */
    /* background-color: #f3f3f3; */
}
.bgC {
  background-color: #ededed;
}
.fillWidthOfParent {
    left: 0%;
    right: 0%;
    width:100%;
}
</style>
