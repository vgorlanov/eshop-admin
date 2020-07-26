import axios from 'axios';

const state = {
    categories: [],
};

const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },
};

const actions = {
    initCategories(context) {
        axios.get('/admin/categories').then(response => {
            context.commit('SET_CATEGORIES', response.data);
        });
    },

    crudCategory(context, payload) {
        return axios[payload.method](payload.url, payload);
    },

};

const getters = {
    categories: state => {
        let results = state.categories.map(function (item) {
            return {value: item.id, text: item.name}
        });

        results.unshift({value: null, text: 'Все'});

        return results;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
