<template>
    <v-app>
        <navbar></navbar>
        <header-component></header-component>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
        <footer-component></footer-component>
    </v-app>
</template>

<script>
    import navbar from './components/Navbar.vue'
    import footer from './components/Footer.vue'
    import header from './components/Header.vue'

    export default {
        name: 'app',
        components: {
            navbar,
            "footer-component": footer,
            "header-component": header
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"
</style>
