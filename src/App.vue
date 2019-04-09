<template>
    <v-app>
        <navbar></navbar>
        <main>
            <router-view></router-view>
        </main>
    </v-app>
</template>

<script>
    import navbar from './components/Navbar.vue'

    export default {
        name: 'app',
        components: {
            navbar
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"
</style>
