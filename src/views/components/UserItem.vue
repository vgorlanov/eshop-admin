<template>
    <v-col cols="3">

        <v-card
                class="mx-auto"
                max-width="434"
                tile
        >
            <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            >
                <v-row
                        align="end"
                        class="fill-height"
                >
                    <v-col
                            align-self="start"
                            class="pa-0"
                            cols="12"
                    >
                        <v-avatar
                                class="profile"
                                color="grey"
                                size="164"
                                tile
                        >
                            <v-img :src="user.images"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                        <v-list-item
                                color="rgba(0, 0, 0, .4)"
                                dark
                        >
                            <v-list-item-content>
                                <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
                                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-img>
        </v-card>










<!--        <v-card>-->

<!--            <v-avatar-->
<!--                    class="profile"-->
<!--                    color="grey"-->
<!--                    size="164"-->
<!--                    tile-->
<!--            >-->
<!--                <img-->
<!--                        src="https://cdn.vuetifyjs.com/images/john.jpg"-->
<!--                        alt="John"-->
<!--                >-->
<!--            </v-avatar>-->

<!--            <v-card-title>-->
<!--                <div>{{ this.user.name }}</div>-->
<!--            </v-card-title>-->
<!--            <v-card-text>-->



<!--                <p>{{ this.user.email }}</p>-->
<!--            </v-card-text>-->
<!--        </v-card>-->

    </v-col>

</template>

<script>
    export default {
        name: "user-item",
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>

