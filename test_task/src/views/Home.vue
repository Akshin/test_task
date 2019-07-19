<template>
  <div id="report">
    <div>
      <template v-for="(transactionArray, dateKey) in transactionsSorted">
        
        <div>
          <span> {{ dateKey | moment('calendar') }} </span>
        </div>

        <ul>
          <TransactionItem v-for="transaction in transactionArray"
                           :key="transaction.id"
                           :transaction='transaction'/>
        </ul>
        
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { sortedArray } from '../services/mixins'
import TransactionItem from '../components/transaction_item'

export default {
  name: 'home',
  mixins: [ sortedArray ],
  components: { TransactionItem },
  methods: {
    ...mapActions(['GET_TRANSACTIONS']),
  },
  computed: {
    ...mapState(['TRANSACTIONS']),
    transactionsSorted() {
      return this.sortedArray(this.TRANSACTIONS)
    }
  },
  created() {
    this.GET_TRANSACTIONS()
  }
}
</script>

<style scoped> 

#report {
  margin: 40px 0;
}
#report div > div {
  padding: 0 10px;
  text-align: left;
  color: #848497;
}




</style>
