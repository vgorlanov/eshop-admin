<template>

    <div>
        <v-btn
                text
                color="error"
                @click="dialog = true"
        >
            Удалить
        </v-btn>

        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <v-card>
                <v-card-title class="headline">Удаление</v-card-title>

                <v-card-text>
                    Вы действительно хотите удалить?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                    >
                        Отменить
                    </v-btn>

                    <v-btn
                            color="red darken-1"
                            text
                            @click="apply"
                    >
                        Удалить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>

</template>

<script>
    export default {
        name: "btn-delete",
        data: () => ({
            dialog: false
        }),
        methods: {
            apply() {
                this.dialog = false;
                this.$emit('delete')
            }
        }
    }
</script>
