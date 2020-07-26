<template>
    <v-row>
        <v-col cols="6">
            <v-card>
                <v-card-title>Заказы</v-card-title>
                <v-card-text>
                    <v-data-table
                            class="order-table"
                            :headers="headers"
                            :items="orders"
                            hide-default-footer
                            @click:row="show"
                    >
                        <template v-slot:item.created_at="{ item }">
                            {{ dataFormat(item.created_at) }}
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="4">
            <v-card v-if="products">
                <v-card-title>Заказ # {{ number }}</v-card-title>
                <v-card-text>

                    <v-card-text>
                        <v-data-table
                                :items="products"
                                :headers="headersDetail"
                                hide-default-footer
                        >
                            <template v-slot:item.data.images="{ item }">
                                <v-img
                                        max-height="128"
                                        max-width="128"
                                        :src="item.data.images"
                                ></v-img>
                            </template>
                        </v-data-table>
                    </v-card-text>

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>


</template>

<script>

    import {mapState} from 'vuex'
    import mixins from "../../mixins";

    const headers = [
        {
            text: 'ID',
            value: 'id',
        },
        {
            text: 'Пользователь',
            value: 'user.name'
        },
        {
            text: 'E-mail',
            value: 'user.email'
        },
        {
            text: 'Цена',
            value: 'price'
        },
        {
            text: 'Дата создания',
            value: 'created_at'
        }
    ]

    const headersDetail = [
        {
            text: 'ID',
            value: 'data.id'
        },
        {
            text: 'Изображение',
            value: 'data.images'
        },
        {
            text: 'Цена',
            value: 'data.price'
        },
        {
            text: 'Количество',
            value: 'count'
        }
    ]

    export default {
        name: "order-list",
        mixins: [mixins],
        data: () => ({
            headers,
            headersDetail,
            products: null,
            number: null
        }),
        created() {
            this.$store.dispatch('initOrders');
        },
        computed: mapState({
            orders: state => state.order.orders
        }),
        methods: {
            show(row) {
                let result = [];
                for (let i in row.products) {
                    result.push(row.products[i])
                }

                this.products = result
                this.number = row.id
            }
        }
    }
</script>

<style scoped>
    .order-table {
        cursor: pointer;
    }
</style>
