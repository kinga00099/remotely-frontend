<template>
    <v-app>
        <div class="header__background">
            <navbar></navbar>
            <header-component></header-component>
            <searchbar></searchbar>
        </div>
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
    import searchbar from './components/Searchbar.vue'
    import footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            navbar,
            "footer-component": footer,
            "header-component": header,
            searchbar
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/main.styl"

    .header__background {
        background: url("https://pixabay.com/get/e837b90f2df7093ed1534705fb0938c9bd22ffd41cb4154895f3c27da7/notebook-1280538_1920.jpg") left 5% bottom 98%/cover no-repeat border-box;
    }


    @media only screen and (min-width: 600px) and (max-width: 1264px) {
        .header__background{
            padding-bottom: 2rem;
        }
    }

    @media only screen and (min-width: 1264px) {
        .header__background {
            padding-bottom: 4rem;
        }
    }
</style>
