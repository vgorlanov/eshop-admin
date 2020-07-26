import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from "../views/MainLayout";
import ProductsList from "../views/pages/ProductsList";
import CategoryList from "../views/pages/CategoryList";
import OrderList from "../views/pages/OrderList";
import UserList from "../views/pages/UserList";
import PageNotFound from "../views/pages/PageNotFound";
import store from "../store/store";
import Login from "../views/pages/Login";
import Forbidden from "../views/pages/Forbidden";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            name: 'admin',
            redirect: '/admin/products',
            component: MainLayout,
            children: [
                {
                    path: 'products',
                    name: 'products',
                    component: ProductsList,
                },
                {
                    path: 'categories',
                    name: 'categories',
                    component: CategoryList
                },
                {
                    path: 'orders',
                    name: 'orders',
                    component: OrderList
                },
                {
                    path: 'users',
                    name: 'users',
                    component: UserList
                },
            ]
        },
        {
            path: '/admin/login',
            name: 'login',
            component: Login
        },
        {
            path: '/admin/forbidden',
            name: 'forbidden',
            component: Forbidden,
        },
        { path: "*", component: PageNotFound }
    ]
})

router.beforeEach((to, from, next) => {
    if(!store.getters.isAuth && to.name !== 'login') {
        next({name: 'login'})
    } else {
        next();
    }
})

export default router;
