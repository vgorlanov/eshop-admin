<template>
    <v-select
            :items="categories"
            label="Категории"
            outlined
            @change="$emit('category', $event)"
            v-model="current"
    >
    </v-select>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: "category-select",
        props: {
            current: {
                default: null
            }
        },
        created() {
            this.$store.dispatch('initCategories');
        },
        computed: mapGetters([
            'categories'
        ]),
    }
</script>

<style scoped>

</style>
