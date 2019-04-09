<template>
    <v-app>
        <navbar></navbar>
            <router-view></router-view>
        <foot></foot>
    </v-app>
</template>

<script>
    import navbar from './components/Navbar.vue'
    import foot from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            navbar,
            foot
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"
</style>
