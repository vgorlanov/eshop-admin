import axios from 'axios';

const state = {
    orders: []
}

const actions = {
    initOrders({commit}) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.auth.token
        axios.get('/admin/order').then(response => commit('SET_ORDERS', response.data));
    }
}

const mutations = {
    SET_ORDERS(state, orders) {
        state.orders = orders
    }
}

export default {
    state,
    actions,
    mutations
}
