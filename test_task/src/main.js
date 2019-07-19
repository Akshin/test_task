import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueCurrencyFilter from 'vue-currency-filter'
import moment from 'moment'
import vueMoment from 'vue-moment'
import filters from './services/filters'

import('moment/locale/ru')

moment.updateLocale('ru', {
  calendar: {
      lastDay: '[Вчера]',
      sameDay: '[Сегодня]',
      nextDay: '[Завтра]',
      lastWeek: 'DD.MM.YY',
      nextWeek: 'DD.MM.YY',
      sameElse: 'DD.MM.YY'
  }
});

Vue.config.productionTip = false
Vue.prototype.$moment = vueMoment;

Vue.use(vueMoment, { moment })
Vue.use(VueCurrencyFilter, {
    thousandsSeparator: ' ',
    fractionSeparator: ' ',
    symbolPosition: 'back',
    symbolSpacing: true
})


for(let filter of filters) {
  Vue.filter(filter.name, filter.func)
}



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
