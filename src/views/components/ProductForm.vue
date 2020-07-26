<template>
    <v-card>
        <v-card-text>
            <p class="display-1 text--primary">{{ title }}</p>

            <v-text-field
                    label="Название"
                    placeholder="Введите название"
                    outlined
                    v-model="item.name"
                    :error-messages="errors.name"
            ></v-text-field>

            <v-textarea
                    outlined
                    name="input-7-4"
                    label="Описание"
                    v-model="item.description"
                    :error-messages="errors.description"
            ></v-textarea>

            <category-select :current="item.category_id" @category="onCategory"></category-select>

            <v-text-field
                    label="Цена"
                    placeholder="Укажите цену"
                    outlined
                    v-model.number="item.price"
                    :error-messages="errors.price"
            ></v-text-field>
        </v-card-text>

        <v-card-actions>
            <v-row>
                <v-col>
                    <v-btn
                            text
                            color="green"
                            @click="save"
                    >
                        Сохранить
                    </v-btn>
                </v-col>
            </v-row>

        </v-card-actions>

    </v-card>
</template>

<script>
    import CategorySelect from "../../components/CategorySelect";

    export default {
        name: "product-form",
        components: {
            CategorySelect
        },
        props: {
            product: {
                type: Object,
            },
            title: {
                type: String,
                default: 'Создание продукта'
            }
        },
        data: () => ({
            item: {},
            errors: {},
        }),
        created() {
            if(this.product !== undefined) {
                this.item = Object.assign({}, this.product);
            }
        },
        methods: {
            onCategory(value) {
                this.item.category_id = value
            },
            save() {
                let method = this.product === undefined ? 'post' : 'put';
                let url = this.product === undefined ? '/admin/products' : '/admin/products/' + this.product.id;

                this.$store.dispatch('crudProduct', {
                    method: method,
                    url: url,
                    product: this.item
                }).then(() => {
                    this.$emit('save')
                }).catch(error => {
                    this.errors = error.response.data.errors
                });
            }
        }
    }
</script>
