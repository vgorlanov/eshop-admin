<template>

    <v-row>
        <user-item
                v-for="user of users"
                :user="user"
                :key="user.id"
        ></user-item>
    </v-row>

</template>

<script>

    import {mapState} from 'vuex';
    import UserItem from "../components/UserItem";

    export default {
        name: "user-list",
        components: {
            UserItem
        },
        created() {
            this.$store.dispatch('initUsers');
        },
        computed:mapState({
            users: state => state.user.users
        })
    }
</script>
