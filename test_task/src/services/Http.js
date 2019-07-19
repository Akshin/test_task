import http from 'axios'

const token = 'Bearer ecf439a6-f226-4dec-b201-4d1651a168ae';
http.defaults.headers.common['Authorization'] = token;


export default {
    getTransactions() {
        return http.get('https://api.stage.capusta.space/v1/cabinet/protected/transactions')
    }
}