<template v-if="this.$store.state.didLogin">
  <v-card v-if="this.$store.state.didLogin"
    :loading="loading"
    class="mx-auto my-12 pb-1"
    max-width="600"
  >

    <v-card-title class="">Chỉnh sửa thông tin cá nhân</v-card-title>

      <v-form ref="form">
  <v-container fluid>
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

    <v-row>
      <v-col cols="4">
        <v-subheader>ID Facebook</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field v-model="item.idFacebook" :rules="idFacebookRules"
          label="nhập ID Facebook"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Mật khẩu (để trống nếu không đổi)</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field v-model="item.password" :rules="idFacebookRules"
          label="nhập mật khẩu"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>Số dư</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field v-model="item.budget"
          label="số dư tài khoản" disabled
          suffix="vnđ"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
      </v-form>
  <v-card-actions>
      <v-spacer></v-spacer>
    <v-btn class='green accent-4 white--text' @click="submit">Cập nhật</v-btn>
  </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      item: {
        name: '',
        idFacebook: '',
        password: '',
        budget: ''
      },
      nameRules: [
        v => !!v || 'Họ và Tên không được để trống!',
        v => (/[!@#$%^&*, `~')(+=._-]/.test(v) === false) || "Họ và Tên không được chứa các ký tự đặc biệt /[!@#$%^&*, `~')(+=._-]/"
      ],
      idFacebookRules: [
        v => !!v || 'ID Facebook không được để trống!',
        v => (/[!@#$%^&*, `~')(+=._-]/.test(v) === false) || "ID Facebook không được chứa các ký tự đặc biệt /[!@#$%^&*, `~')(+=._-]/"
      ],
      passwordRules: [
        // v => (/[!@#$%^&*, `~')(+=._-]/.test(v) === false) || "Họ và Tên không được chứa các ký tự đặc biệt /[!@#$%^&*, `~')(+=._-]/"
      ]
    }
  },
  computed: {
    form () {
      return {
        name: this.item.name,
        idFacebook: this.item.idFacebook,
        password: this.item.password,
        budget: this.item.budget
      }
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
      return this.$refs.form.validate()
    },
    submit () {
      console.log(this.item)
    }
  }
}
</script>
