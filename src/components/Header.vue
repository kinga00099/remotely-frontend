<template>
    <div class="header__background">
        <h1>Find a virtual job</h1>
        <h2>and start your remote career today</h2>
        <searchbar></searchbar>
    </div>
</template>

<script>
    import searchbar from '../components/Searchbar.vue'

    export default {
        name: "Header",
        components: {
            searchbar
        }
    }
</script>

<style lang="stylus" scoped>
    @import url('https://fonts.googleapis.com/css?family=Gentium+Basic');
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC');

    h1 {
        font-family: 'Gentium Basic', serif;
        font-size: 2rem;
        color: white;
        text-align: center;
        margin:0 0 0.3rem 0;
        padding-top: 2rem

    }

    h2 {
        font-family: 'Playfair Display SC', serif;
        font-size: 1rem;
        color: white;
        text-align: center;
        margin-bottom: 3rem;
    }


    @media only screen and (min-width: 600px) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 1.5rem;
            margin-bottom: 4rem;
        }
    }

    @media only screen and (min-width: 900px) {
        h1 {
            font-size: 6rem;
        }
        h2 {
            font-size: 2rem;
            margin-bottom: 6rem;
        }
    }

    div {
        margin: auto;
    }

    .header__background {
        background: #655b52 url(../assets/img/header_background.jpg) no-repeat left 12% bottom 86%;
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
