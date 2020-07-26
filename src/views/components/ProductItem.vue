<template>
    <v-card>
        <v-card-text>

            <p class="display-1 text--primary">{{ product.name }}</p>

            <div class="text--primary">{{ product.description }}</div>

            <br />

            <p>Категория: {{ categoryName }}</p>

            <br />

            <p><b>Цена: {{ product.price }}</b></p>

        </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col>
                        <v-btn
                                text
                                color="deep-purple accent-4"
                                @click="$emit('edit')"
                        >
                            Редкатировать
                        </v-btn>

                    </v-col>
                    <v-col class="text-right">
                        <btn-delete @delete="onDelete"></btn-delete>
                    </v-col>
                </v-row>
            </v-card-actions>
    </v-card>

</template>

<script>
    import BtnDelete from "../../components/BtnDelete";

    export default {
        name: "product-item",
        components: {
            BtnDelete
        },
        data() {
            return {
                buffer: Object,
            }
        },
        props: {
            product: {
                type: Object,
                required: true,
            }
        },
        methods: {
            onDelete() {
                this.$store.dispatch('crudProduct', {
                    method: 'delete',
                    url: '/admin/products/' + this.product.id
                }).then(() => { this.$emit('delete') })
            },
        },
        computed: {
            categoryName() {


                return this.product.category ? this.product.category.name : ''
            }
        }
    }
</script>

