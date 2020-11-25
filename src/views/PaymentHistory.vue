<template v-if="this.$store.state.didLogin">
  <div>
    <v-data-table v-if="this.$store.state.didLogin"
      :headers="headers"
      :items="desserts"
      item-key="id"
      class="elevation-1"
      :search="search"
      multi-sort
      :custom-filter="filterOnlyCapsText"
      :footer-props="{
        'items-per-page-text':'Số giao dịch hiển thị trên 1 trang',
        'items-per-page-all-text':'Tất cả',
        'items-per-page-options':[20, 40, -1]
      }"
    >

      <template v-slot:[`item.state`]="{ item, attrs }">
        <v-btn
          depressed
          x-small
          class="white--text"
          v-bind="attrs"
          width="120px"
          :color="getStyle(item.state)"
        >
        {{ getStateText(item.state) }}
        </v-btn>
      </template>

      <template v-slot:top>
        <v-col cols="4">
        <v-text-field
          v-model="search"
          label="Tìm kiếm giao dịch"
          class="mx-4"
        ></v-text-field>
        </v-col>
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
          date: '15/10/2020',
          state: 'new',
          action: 'undefined'
        },
        {
          id: '5',
          saler: 'Hoàng',
          itemName: 'Via',
          type: '1.000 like',
          price: '500.000',
          amount: '50',
          cost: '25.000.000 VNĐ',
          date: '12/10/2020',
          state: 'fail',
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
        { text: 'Mã giao dịch', value: 'code', sortable: false },
        // {
        //   text: 'Người bán',
        //   value: 'saler',
        //   filter: value => {
        //     if (!this.calories) return true

        //     return value < parseInt(this.calories)
        //   }
        // },
        { text: 'Ngân hàng', value: 'bank' },
        { text: 'Số lượng', value: 'amount' },
        { text: 'Thành tiền', value: 'cost' },
        { text: 'Ngày mua', value: 'date' },
        { text: 'Ghi chú', value: 'note', sortable: false },
        { text: 'Trạng thái', value: 'state', sortable: false }
      ]
    }
  },
  methods: {
    getStyle: function (state) {
      if (state === 'success') {
        return 'color: green'
      } else if (state === 'fail') {
        return 'color: red'
      } else if (state === 'new') {
        return 'color: blue'
      }
    },
    getStateText: function (state) {
      if (state === 'success') {
        return 'Successful'
      } else if (state === 'fail') {
        return 'Error'
      } else if (state === 'new') {
        return 'New'
      }
    }
    // filterOnlyCapsText (value, search, item) {
    //   return value != null &&
    //     search != null &&
    //     typeof value === 'string' &&
    //     value.toString().toLocaleUpperCase().indexOf(search) !== -1
    // }
  }
}
</script>
