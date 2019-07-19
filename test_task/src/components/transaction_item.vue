<template>
    <li class="transaction">
        <details>
        <summary>
            <div class="order"> {{ transaction.type | orderType }} <b> {{ transaction.public_id }} </b></div>
            <div class="time"><time :datetime="transaction.date"> {{ transaction.date | moment('h:mm') }} </time></div>
            <div class="account"> {{ transaction.account_number | accauntNumber }} </div>
            <div class="amount" :class="[getCurrencyClass(transaction.currency), getTypeClass(transaction.type)]">
                {{ transaction.amount - transaction.commission | currency }}
            </div>
        </summary>
        <p class="description">
            {{ transaction.description || "Нет информации" }}
        </p>
        </details>
    </li>
</template>

<script>
import { getCurrencyClass, getTypeClass } from '../services/mixins'

export default {
  name: 'transaction_item',
  props: {
      transaction: Object
  },
  mixins: [getCurrencyClass, getTypeClass],
  
}
</script>


<style scoped>

li {
  position: relative;
  background: #27283C;
  margin-top: 10px;
  padding: 10px;
}
li:before {
  width: 40px;
  height: 40px;
  left: 10px;
  top: 16px;
  border-radius: 50%;
  background-color: #24A84D;
}
li:after {
  width: 36px;
  height: 36px;
  left: 12px;
  top: 18px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3207673/credit-card--white.svg);
}
li summary {
  padding-left: 50px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}
li summary::-webkit-details-marker {
  display: none;
}
li div {
  line-height: 26px;
}
li p {
  text-align: left;
  color: #587d6c;
}
li .order {
  order: 1;
  flex-basis: 55%;
  text-align: left;
}
li .amount {
  order: 2;
  font-size: 18px;
  font-weight: 800;
  flex-basis: 45%;
  text-align: right;
  color: #FFF;
}
li .amount.negative {
  color: #D87822;
}
li .amount.negative:before {
  content: "- ";
}
li .amount.positive {
  color: #39b27c;
}
li .amount.positive:before {
  content: "+ ";
}
li .amount.rubles:after {
  content: " ₽";
}
li .time {
  order: 3;
  flex-basis: 30%;
  text-align: left;
}
li .account {
  order: 4;
  flex-basis: 70%;
  text-align: right;
}
.description {
  margin-top: 10px;
  padding-bottom: 10px;
  padding: 10px;
  background-color: #CCC;
  border-radius: 4px;
  overflow: hidden;
  color: #212121;
}
.description div {
  padding: 10px;
}
.description div:first-child {
  background-color: #58B4B4;
}
.description a {
  color: #9B51E0;
}


</style>
