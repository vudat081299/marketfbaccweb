<template>
  <v-container id="signinup-form" class="fill-height">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="8" md="8" class="">
        <v-card class="evelation-12 card">
            <!--SignIn-->
              <v-row class="">
                <v-col cols="12" md="12" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form" @submit.prevent="signin">
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                       ĐĂNG NHẬP
                      </h1>
                      <v-text-field
                        v-model="email"
                        label="username"
                        append-icon="mdi-account"
                        type="text"
                        :color="bgColor"
                      />
                      <v-text-field
                        v-model="password"
                        label="password"
                        append-icon="mdi-lock"
                        type="password"
                        :color="bgColor"
                      />
                      <v-layout justify-center>
                        <p style="color: red;"> {{ messenger }} </p>
                      </v-layout>
                      <div class="text-center">
                        <!-- <a
                          class="mt-3 overline no-text-decoration"
                          :class="`${bgColor}--text`"
                          @click="forgetPass"
                        >
                          Quên mật khẩu?
                        </a> -->
                      </div>
                      <div class="text-center mt-6">
                        <v-btn large :color="bgColor" dark @click="login"
                          >Đăng nhập</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
                <!-- <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">No User?</h1>
                      <h5 class="text-center overline mb-3">
                        Please Sign Up to continue
                      </h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 2">Sign Up</v-btn>
                    </div>
                  </div>
                </v-col> -->
              </v-row>
            <!--SignUp-->
            <!-- <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">Already a user?</h1>
                      <h5 class="text-center overline mb-3">Please Sign In</h5>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 1">Sign In</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="8" class=" pt-6 pb-6">
                  <v-card-text>
                    <h1
                      class="text-center display-1 mb-10"
                      :class="`${bgColor}--text`"
                    >
                      Sign Up
                    </h1>
                    <v-form class="signup-form-form" @submit.prevent="signup">
                      <v-text-field
                        id="username"
                        v-model="username"
                        label="Username"
                        name="username"
                        append-icon="person"
                        type="text"
                      />
                      <v-text-field
                        id="email"
                        v-model="email"
                        label="eMail"
                        name="email"
                        append-icon="email"
                        type="email"
                      />
                      <v-text-field
                        id="password"
                        v-model="password"
                        label="Password"
                        name="password"
                        append-icon="lock"
                        type="password"
                      />
                      <div class="text-center mt-6">
                        <v-btn type="submit" large :color="bgColor" dark>
                          Sign Up</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Signupform',
  components: {
  },
  props: {
    source: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'indigo'
    },
    fgColor: {
      type: String,
      default: 'white'
    }
  },
  data: () => ({
    email: '',
    password: '',
    messenger: ''
  }),
  methods: {
    forgetPass () {
      this.$router.push({ path: '/ForgetPass' })
    },
    // login () {
    //   this.$router.push('/')
    //   this.$store.state.name = 'Đăng xuất'
    // },
    login () {
      //   this.$http.post('http://somehost/user/login', {
      //     password: this.password,
      //     email: this.email
      //   }).then(function (response) {
      //     if (response.status === 200 && response.data.status === true) {
      // this.$store.state.didLogin = true

      this.$store.state.didLogin = !this.$store.state.didLogin
      this.$router.push('/dashboard')
      //   this.$router.push('/dashboard')
      //     }
      //   }, function (err) {
      //     console.log('err', err)
      //   })
    }
  }
}
</script>

<style scoped lang="scss">
.v-input__icon--double .v-input__icon {
  margin-left: -4.25rem !important;
}
a.no-text-decoration {
  text-decoration: none;
}
#signinup-form {
  max-width: 75rem;
}
.signup-form-form {
  max-width: 23rem;
  margin: 0 auto;
}
.card {
  overflow: hidden;
}
.vcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
