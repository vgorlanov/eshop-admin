<template>
    <v-container fluid>
        <navigation></navigation>
        <router-view class="main"></router-view>
    </v-container>
</template>

<script>
    import Navigation from "./Navigation";

    export default {
        name: "main-layout",
        components: {
            Navigation
        }
    }
</script>

<style scoped>
    .main {
        padding-left: 300px;
    }
</style>
