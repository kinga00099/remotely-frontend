<template>
    <v-input>
        <v-text-field class="search" v-model="search" label="Search" dark color="#fff" align-center :append-icon="icon">
        </v-text-field>
    </v-input>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                icon: 'search',
                search: ''
            }
        }
    }
</script>

<style scoped>

    .search {
        padding: 0 1rem;
        margin: auto;
        max-width: 80%;
    }

    @media only screen and (min-width: 600px) {
        .search {
            max-width: 50%;
        }
    }

    @media only screen and (min-width: 1264px) {
        .search {
            max-width: 30%;
        }
    }
</style>
