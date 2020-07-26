import axios from 'axios';

const state = {
    products: [],
};

const actions = {

    initProducts({commit}, payload) {
        return axios.get('/admin/products', {
            params: {
                page: payload.page,
                per: payload.per,
                category: payload.category,
                search: payload.search,
                order: payload.order
            }
        }).then(response => commit('SET_PRODUCTS', response.data));
    },

    crudProduct(context, payload) {
        return axios[payload.method](payload.url, payload.product);
    }
};

const mutations = {

    SET_PRODUCTS(state, products) {
        state.products = products;
    }

};

const getters = {
    product: state => id => {
        return state.products.data.find(products => products.id === id);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}
