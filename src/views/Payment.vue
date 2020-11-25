<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="700px"
    >
      <template v-slot:activator="{ on, attrs }">

        <v-btn color="#FF424E" class="white--text fillWidthOfParent"
          v-bind="attrs"
          v-on="on"
        >
          Thanh toán
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Thanh toán</span>
        </v-card-title>

        <v-divider></v-divider>

<v-alert
      text
      color="info"
      class="ma-4"

      border="left"
    >
      <h3 class="headline">
        Thông tin ngân hàng
      </h3>
      <div>Phương thức thanh toán: Chuyển khoản - Thanh toán tự động</div>
      <div>Ngân hàng: VCB</div>
      <div>Tên chủ thẻ: Vũ Đức Thiện</div>
      <div>Số tài khoản: 0123456789</div>

    </v-alert>

    <div class="text-xl-h8 ma-4 font-weight-regular">Mã giao dịch</div>
    <div class="ma-4 mt-n3 font-weight-light">Hãy chuyển khoản với nội dung giao dịch là mã bên dưới</div>
    <div class="ma-4">
      <v-row>
          <v-col
            cols="8"
          >
          <v-text-field
            v-model="code"
            label="Mã giao dịch"
            outlined dense disabled
          ></v-text-field>
          </v-col>

          <v-col cols="1">
            <div>
              <v-btn v-clipboard:copy="this.code" icon><v-icon>mdi-content-copy</v-icon></v-btn>
            </div>
          </v-col>

          <v-col cols="1">
            <div>
              <v-btn @click="genCode">
                <v-icon left>
                    mdi-cached
                </v-icon>
                Tạo mã mới
                </v-btn>
            </div>
          </v-col>

      </v-row>
          </div>

        <v-alert dense
      class="ma-4 mt-n6 white--text"
  border="left"
  color="red"
>
<v-row>
        <span class="text-xl-h6 ml-6">Tổng tiền</span> <v-spacer></v-spacer><span class="text-xl-h6 mr-4">{{ sumPrice }} 000 (VNĐ)</span>
</v-row>
        </v-alert>
        <div class="ma-1">
            <v-container fluid>
            <v-textarea
            clearable :rules="[v => (v || '' ).length <= 200 || 'Description must be 200 characters or less']"
            clear-icon="mdi-close-circle"
            label="Ghi chú"
            :value="note"
            ></v-textarea>
          </v-container>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Hủy
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Tạo giao dịch
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ['sumPrice'],
  data () {
    return {
      dialog: false,
      code: 'ABCDEF',
      note: ''
    }
  },

  methods: {
    genCode () {
      this.code = Math.random().toString(36).substring(2, 8)
    }
    // copyCode (e) {
    // //   const textToCopy = this.$refs.textToCopy.$el.querySelector('v-text-field')
    //   const textToCopy = (e.target).parents('.input-group').find('.copyLinkInput')[0]
    //   textToCopy.select()
    //   document.execCommand('copy')
    // }
  }
}
</script>
