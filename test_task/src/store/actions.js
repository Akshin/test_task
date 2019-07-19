import http from '../services/Http'

export default {
    GET_TRANSACTIONS({ commit }) {
        return http.getTransactions().then(resp => {
            commit('SET_TRANSACTIONS', resp.data)
        })
        .catch(err => alert('Данные не подгружены'))
    }
}