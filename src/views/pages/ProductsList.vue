<template>
    <v-row>
        <v-col cols="8">
            <v-card>
                <v-card-title>
                    Продукты
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Поиск"
                                    single-line
                                    hide-details
                            ></v-text-field>
                        </v-col>

                        <v-col>
                            <category-select v-on:category="onChange"></category-select>
                        </v-col>

                        <v-col>
                            <v-btn x-large block color="primary" @click="add">Добавить</v-btn>
                        </v-col>
                    </v-row>

                </v-card-text>
                <v-data-table
                        :headers="headers"
                        :items="products.data"
                        :options.sync="options"
                        :server-items-length="products.total"
                        :loading="loading"
                        :search="search"
                        :items-per-page="products.per_page"
                        @click:row="click"
                        class="product-table"
                >
                </v-data-table>
            </v-card>
        </v-col>

        <v-col>
            <product-item @delete="onDelete" @edit="onEdit" v-if="show.item" :product="product"></product-item>
            <product-form :key="'edit'" @save="onSave" :title="'Редактирование продукта'" v-if="show.edit" :product="product"></product-form>
            <product-form :key="'create'" @save="onSave" v-if="show.create"></product-form>
        </v-col>
    </v-row>
</template>

<script>
    import {mapState} from 'vuex';
    import CategorySelect from "../../components/CategorySelect";
    import ProductItem from "../components/ProductItem";
    import ProductForm from "../components/ProductForm";

    const headers = [
        {
            text: 'ID',
            value: 'id',
        },
        {
            text: 'Название',
            value: 'name',
            sortable: false,
        },
        {
            text: 'Категория',
            value: 'category.name',
            sortable: false,
        },
        {
            text: 'Цена',
            value: 'price',
        }
    ];

    const short = [];

    export default {
        name: "products-list",
        components: {
            CategorySelect,
            ProductItem,
            ProductForm
        },
        data() {
            return {
                headers,
                short,
                product: {},
                search: null,
                loading: false,
                category: null,
                options: {},
                show: {
                    edit: false,
                    create: false,
                    item: false,
                }
            }
        },
        computed: {
            ...mapState({
                products: state => state.product.products,
            }),
        },
        methods: {
            onChange(value) {
                this.category = value;
                this.options.page = 1;
                this.initProducts();
            },
            initProducts() {

                let field = this.options.sortBy[0];
                let order = this.options.sortDesc[0] ? 'desc' : 'asc';
                let orderBy = field ? `${field}_${order}` : null;

                this.loading = true;
                this.$store.dispatch('initProducts', {
                    per: this.options.itemsPerPage,
                    page: this.options.page,
                    category: this.category,
                    search: this.search,
                    order: orderBy
                }).then(() => this.loading = false);
            },
            click(row) {
                this.product = row;
                this.toggleShow('item');
            },
            add() {
                this.toggleShow('create');
            },

            onEdit() {
                this.toggleShow('edit');
            },

            onSave() {
                this.toggleShow('all');
                this.initProducts();
            },

            onDelete() {
                this.toggleShow('all');
                this.initProducts();
            },

            toggleShow(show) {
                for(let item in this.show) {
                    this.show[item] = item === show
                }
            },
        },
        watch: {
            options: {
                handler() {
                    this.initProducts();
                },
            },
            search(value) {
                if(value === '') {
                    this.search = null
                } else {
                    this.initProducts()
                }
            }
        },

    }
</script>

<style scoped>
    .product-table {
        cursor: pointer;
    }
</style>
