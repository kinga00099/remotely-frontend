<template>
    <div>

        <v-navigation-drawer absolute temporary v-model="sideNav">
            <v-list>
                <v-list-tile :to="profile.link">
                    <v-list-tile-action>
                        <v-icon>{{ profile.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{ profile.title }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-if="isAuthenticated" v-on:click="logout()">
                    <v-list-tile-action>
                        <v-icon>{{ logoutElement.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{ logoutElement.title }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-if="!isAuthenticated" v-on:click="login()">
                    <v-list-tile-action>
                        <v-icon>{{ loginElement.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{ loginElement.title }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar dark>
            <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up "></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer" id="main-title">Remote.ly</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat :to="profile.link">
                    <v-icon left dark>{{ profile.icon }}</v-icon>
                    {{ profile.title }}
                </v-btn>
                <v-btn flat v-if="isAuthenticated" v-on:click="logout()">
                    <v-icon left dark>{{ logoutElement.icon }}</v-icon>
                    {{ logoutElement.title }}
                </v-btn>
                <v-btn flat v-if="!isAuthenticated" v-on:click="login()">
                    <v-icon left dark>{{ loginElement.icon }}</v-icon>
                    {{ loginElement.title }}
                </v-btn>
            </v-toolbar-items>

        </v-toolbar>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                sideNav: false,
                profile: {icon: 'person', title: 'Profile', link: '/profile'},
                register: {icon: 'face', title: 'Sign up', link: '/signup'},
                loginElement: {icon: 'lock_open', title: 'Sign in', link: '/login'},
                logoutElement: {icon: 'exit_to_app', title: 'Logout'}
            }
        },
        methods: {
            login() {
                this.$auth.loginRedirect('/')
            },
            async logout() {
                await this.$auth.logout();
                await this.$store.dispatch('checkIfAuthenticated', this.$auth);
                this.$router.replace('/')
            }
        },
        computed: {
            isAuthenticated() {
                const auth = this.$store.getters.getAuthStatus;
                this.$log.info('authenticated navbar:', auth);
                return auth
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import url('https://fonts.googleapis.com/css?family=Damion');

    .v-btn:hover, .v-btn__content:hover {
        color: black;
        background-color: #FFC107
    }

    #main-title {
        font-family: 'Damion', cursive;
        font-size: 3rem;
    }
</style>
