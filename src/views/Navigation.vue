<template>
    <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            fixed
            dark
    >
        <v-list
                dense
                nav
                class="py-0"
        >
            <v-list-item two-line :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/men/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Application</v-list-item-title>
                    <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "navigation",
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Продукты', icon: 'mdi-package-variant', link: '/admin/products' },
                    { title: 'Категории', icon: 'mdi-file-tree', link: '/admin/categories' },
                    { title: 'Заказы', icon: 'mdi-cart', link: '/admin/orders' },
                    { title: 'Пользователи', icon: 'mdi-account-group', link: '/admin/users' },
                ],
                color: 'primary',
                colors: [
                    'primary',
                    'blue',
                    'success',
                    'red',
                    'teal',
                ],
                right: true,
                miniVariant: false,
                expandOnHover: false,
                background: false,
            }
        },
    }
</script>

<style scoped>

</style>
