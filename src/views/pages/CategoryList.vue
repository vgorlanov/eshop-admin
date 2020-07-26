<template>
    <v-row>
        <v-col cols="3">

            <v-text-field
                    label="Добавить категорию"
                    outlined
                    v-model="name"
                    @keyup.enter="create"
            ></v-text-field>

            <category-item :key="category.id" :category="category" v-for="category of categories"></category-item>
        </v-col>
    </v-row>
</template>

<script>
    import CategoryItem from "../components/CategoryItem";
    import { mapState } from 'vuex';

    export default {
        name: "category-list",
        data() {
            return {
                name: ''
            }
        },
        components: {
            CategoryItem
        },
        created() {
            this.$store.dispatch('initCategories');
        },
        computed: mapState({
            categories: state => state.category.categories
        }),
        methods: {
            create(event){
                if(this.name !== '') {
                    this.$store.dispatch('crudCategory', {
                        url: '/admin/categories',
                        method: 'post',
                        name: this.name
                    }).then(() => {
                        event.target.blur();
                        this.name = '';
                        this.$store.dispatch('initCategories');
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
