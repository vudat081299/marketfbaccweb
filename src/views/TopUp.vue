<template v-if="this.$store.state.didLogin">
  <v-card
    :loading="loading" v-if="this.$store.state.didLogin"
    class="mx-auto my-12 pb-1" elevation="10"
    max-width="600"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://images.pexels.com/photos/9660/business-money-pink-coins.jpg?cs=srgb&dl=pexels-skitterphoto-9660.jpg&fm=jpg"
    ></v-img>

    <v-card-title class="green--text text--accent-4">Ngân hàng {{ bank }}</v-card-title>

    <v-card-text>

      <div class="my-4 subtitle-1">
        Tên tài khoản:
      </div>
      <div class="my-4 subtitle-1">
        Số tài khoản:
      </div>
      <div class="my-4 subtitle-1">
        Ngân hàng:
      </div>
      <div class="my-4 subtitle-1">
        Nội dung:
      </div>

      <div>Lưu ý: Nạp ít nhất 100.000đ. Bạn phải gửi đúng nội dung chuyển khoản như hướng dẫn. Nếu quá 5 - 10 phút tiền vẫn chưa được cộng vào tài khoản vui lòng Chat Facebook: {{ connectFB }} hoặc gọi {{ hotline }} để được hỗ trợ.</div>
      <div>Nạp tiền vui lòng giữ nguyên tab này trong 30 giây để hệ thống tự nạp.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-alert
      border="left"
      color="red"
      dark class="ml-2 mr-2 mt-4 mb-2"
    >
      Lưu ý: Từ 22h - 24h không nên nạp tiền vì thời gian này {{ bankForShort }} sẽ bị delay.
    </v-alert>

    <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      bank: 'VietcomBank',
      bankForShort: 'VCB',
      hotline: '0123456789',
      connectFB: 'myFB'
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
