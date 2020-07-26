<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col
                        md="6"
                        offset-md="3"
                >
                    <v-card>
                        <v-card-title>
                            sign in
                        </v-card-title>
                        <v-card-text>

                            <v-form @submit.prevent="login">

                                <v-text-field
                                        label="Логин"
                                        outlined
                                        v-model="username"
                                ></v-text-field>

                                <v-text-field
                                        label="Пароль"
                                        outlined
                                        type="password"
                                        v-model="password"
                                ></v-text-field>



                                <v-row>
                                    <v-col>
                                        <p>login: admin@admin.ru</p>
                                        <p>pass: admin</p>
                                    </v-col>
                                    <v-col
                                            align="right"
                                    >
                                        <v-btn color="primary" type="submit">Войти</v-btn>
                                    </v-col>
                                </v-row>


                            </v-form>

                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data:() => ({
            username: null,
            password: null
        }),
        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password
                })
                .then(() => {
                    this.$router.push({name : 'admin'})
                })
                .catch(error => {
                    console.log(error);

                    // this.$flash({
                    //     message: error.response.data,
                    //     type: 'error',
                    // });
                })
            }
        }
    }
</script>
