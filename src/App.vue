<template>
    <v-app>
        <navbar></navbar>
        <header-component></header-component>
        <filterbar></filterbar>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
        <footer-component></footer-component>
    </v-app>
</template>

<script>
    import header from './components/Header.vue'
    import navbar from './components/Navbar.vue'
    import filterbar from './components/Filterbar.vue'
    import footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            navbar,
            "footer-component": footer,
            "header-component": header,
            filterbar
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"
</style>
