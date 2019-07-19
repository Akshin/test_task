import moment from 'moment'

const currencys = {
    "RUB": "rubles",
    "EUR": "euro",
  }
const types = {
    "PURCHASE": "positive",
    "TRANSFER": "positive",
    "PAYOUT": "negative",
    "TRANSFEROUT": "negative",
}

export const getCurrencyClass = {
    methods: {
        getCurrencyClass(value) {
            return currencys[value];
        }   
    }
}

export const getTypeClass = {
    methods: {
        getTypeClass(value) {
            return types[value];
        }   
    }
}

// На выходе объект { date: [ArrayOfTransitions], }
export const sortedArray = {
    methods: {
        sortedArray(mas) {
            let sorted = mas.sort((a,b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
            let date = '';
            let newSorted = {};
            for(let i = 0; i < sorted.length; i++) {
                if(moment(sorted[i].date).format('DD.MM.YY') === moment(date).format('DD.MM.YY')) {
                    newSorted[date].push(sorted[i])
                } else {
                    date = sorted[i].date;
                    newSorted[date] = [];
                    newSorted[date].push(sorted[i]);
                }
            }
            return newSorted;
        }   
    }
}