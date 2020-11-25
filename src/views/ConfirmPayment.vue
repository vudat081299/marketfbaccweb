<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn class="white--text"
            color="green darken-1" large
            v-bind="attrs"
            v-on="on" @click="this.$emit('hideParent')"
          >
            Tạo giao dịch
          </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Đã tạo giao dịch thành công</span>
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

    <div class="ma-4 mt-8 mb-n4 font-weight-light">Vui lòng chuyển khoản với nội dung sau</div>
    <div class="ma-4">
      <v-row>
          <v-col
            cols="12"
          >
          <v-text-field solo-inverted
            v-model="code"
            label="Mã giao dịch"
            dense disabled
          ></v-text-field>
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

        <div class="ma-4 font-weight-light"><p>
            Sau khi chuyển khoản thành công vui lòng ấn "Xác nhận"
Lưu ý: Chúng tôi nhận hàng ngàn lệnh gửi tiền mỗi ngày. Bạn phải gửi đúng nội dung chuyển khoản như hướng dẫn để chúng tôi có thể ghi có cho bạn.
Bất cứ sai sót nào cũng có thể dẫn đến mất tiền (Giao dịch sẽ được xử lý từ 1-3 phút)</p>
        </div>

        <v-card-actions class="pb-4 mr-4">
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
          >
            Hủy
          </v-btn>
          <v-btn class="white--text"
            color="green darken-1" large
            @click="dialog = false"
          >
            Xác nhận
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
      note: '',
      message: '',
      copiedText: ''
    }
  },

  methods: {
    genCode () {
      this.code = Math.random().toString(36).substring(2, 8)
    },
    onCopy: function (e) {
      console.log('successful')
      this.copiedText = e.text
    },
    onError: function (e) {
      console.log('Failed to copy texts')
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
