<template>
    <div v-if="!deleted">
        <v-text-field
                v-if="isEdit"
                v-model="name"
                @blur="apply"
                @keyup.enter="apply"
                @keyup.esc="cancel"
                autofocus
        ></v-text-field>
        <p
                v-else
                @click="edit"
                class="category-item headline"
        >
            {{ name }}

            <v-btn
                    icon
                    color="dark"
                    @click.stop="remove"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </p>

    </div>
</template>

<script>
    export default {
        name: "category-item",
        data() {
            return {
                id: this.category.id,
                name: this.category.name,
                isEdit: false,
                editing: '',
                deleted: false
            }
        },
        props: {
            category: {
                type: Object,
                required: true,
            }
        },
        methods: {
            edit() {
                this.isEdit = true;
                this.editing = this.name;
            },
            apply() {

                if(this.editing !== this.name && this.name !== '') {
                    this.$store.dispatch('crudCategory', {
                        url: '/admin/categories/' + this.id,
                        method: 'put',
                        id: this.id,
                        name: this.name
                    });
                    this.editing = this.name
                }

                this.isEdit = false;
            },
            cancel() {
                this.name = this.editing;
                this.isEdit = false;
            },
            remove() {
                this.$store.dispatch('crudCategory', {
                    url: '/admin/categories/' + this.id,
                    method: 'delete',
                    id: this.id
                }).then(() => this.deleted = true);
            },
        }
    }
</script>

<style scoped>
    .category-item {
        cursor: pointer;
    }
</style>
