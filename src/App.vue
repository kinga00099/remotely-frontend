<template>
    <v-app class="fade-in">
        <navbar></navbar>
        <v-content>
            <v-container fluid>
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
            "footer-component": footer,
        },
        created() {
            this.isAuthenticated();
        },
        watch: {
            // Everytime the route changes, check for auth status
            '$route': 'isAuthenticated'
        },
        methods: {
            isAuthenticated() {
                this.$store.dispatch('checkIfAuthenticated', this.$auth)
            }
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"
    .container.fluid {
        padding: 0;
    }

    .fade-in {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;
    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
