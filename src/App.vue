<template>
    <v-app>
        <navbar></navbar>
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

    export default {
        name: 'app',
        components: {
            navbar,
            "footer-component": footer
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"
</style>
