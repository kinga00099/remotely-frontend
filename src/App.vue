<template>
    <v-app>
        <navbar></navbar>
        <v-content>
            <v-container fluid>
                <router-view :activeUser="activeUser"></router-view>
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
        data: () => {
            return {
                activeUser: null
            }
        },
        components: {
            navbar,
            "footer-component": footer,
        },
        async created() {
            await this.refreshActiveUser()
        },
        watch: {
            '$route': 'refreshActiveUser'
        },

        methods: {
            async refreshActiveUser() {
                this.activeUser = await this.$auth.getUser();
                this.$log.debug('activeUser', this.activeUser)
            },

            async handleLogout() {
                await this.$auth.logout();
                await this.refreshActiveUser();
                this.$router.go('/')
            }
        },
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"
    .container.fluid {
        padding: 0;
    }
</style>
