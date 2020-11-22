<template v-if="this.$store.state.didLogin">
  <div>
    <v-data-table v-if="this.$store.state.didLogin"
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Tìm kiếm giao dịch"
          class="mx-4"
        ></v-text-field>
      </template>
      <!-- <template v-slot:[`body.append`]>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      calories: '',
      desserts: [
        {
          id: '1',
          saler: 'Hoàng',
          itemName: 'Via',
          type: '1.000 like',
          price: '500.000',
          amount: '50',
          cost: '25.000.000 VNĐ',
          date: '12/10/2020',
          state: 'success',
          action: 'undefined'
        },
        {
          id: '2',
          saler: 'Hoàng',
          itemName: 'Via',
          type: 'BM',
          price: '500.000',
          amount: '50',
          cost: '25.000.000 VNĐ',
          date: '12/10/2020',
          state: 'success',
          action: 'undefined'
        },
        {
          id: '3',
          saler: 'Hoàng',
          itemName: 'Via',
          type: '1.000 like',
          price: '500.000',
          amount: '50',
          cost: '25.000.000 VNĐ',
          date: '12/10/2020',
          state: 'success',
          action: 'undefined'
        },
        {
          id: '4',
          saler: 'Hoàng',
          itemName: 'BM',
          type: '5.000 like',
          price: '500.000',
          amount: '50',
          cost: '25.000.000 VNĐ',
          date: '12/10/2020',
          state: 'success',
          action: 'undefined'
        }
      ]
    }
  },
  computed: {
    headers () {
      return [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        {
          text: 'Người bán',
          value: 'saler',
          filter: value => {
            if (!this.calories) return true

            return value < parseInt(this.calories)
          }
        },
        { text: 'Tên sản phẩm', value: 'itemName' },
        { text: 'Loại sản phẩm', value: 'type' },
        { text: 'Giá', value: 'price' },
        { text: 'Số lượng', value: 'amount' },
        { text: 'Thành tiền', value: 'cost' },
        { text: 'Ngày mua', value: 'date' },
        { text: 'Trạng thái', value: 'state' },
        { text: 'Hành động', value: 'action' }
      ]
    }
  },
  methods: {
    // filterOnlyCapsText (value, search, item) {
    //   return value != null &&
    //     search != null &&
    //     typeof value === 'string' &&
    //     value.toString().toLocaleUpperCase().indexOf(search) !== -1
    // }
  }
}
</script>
