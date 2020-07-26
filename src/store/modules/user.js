import axios from 'axios';

const state = {
    users: [],
}

const actions = {
    initUsers({commit}) {
        axios.get('/admin/user').then(response => commit('SET_USERS', response.data))
    }
}

const mutations = {
    SET_USERS(state, users) {
        state.users = users
    }
}


export default {
    state,
    actions,
    mutations
}
