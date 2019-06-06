<template>

        <v-container grid-list-xl >
            <v-layout wrap align-center>
                <v-flex xs12 sm4 d-flex>
                    <v-select
                            :items="categories"
                            label="Category"
                            solo
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm4 d-flex>
                    <v-select
                            :items="levels"
                            label="Level"
                            solo
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm4 d-flex>
                    <v-select
                            :items="types"
                            label="Type"
                            solo
                    ></v-select>
                </v-flex>
            </v-layout>
        </v-container>

</template>

<script>
    import axios from '../services/axios.js';

    export default {
        data() {
            return {
                types: [],
                categories: [],
                levels: [],
            }
        },
        mounted() {
            axios.getFilters()
                .then(response => {
                    this.types = response.data.types;
                    this.categories = response.data.categories;
                    this.levels = response.data.levels;
                })
                .catch(error => this.$log.debug(error))
        }
    }
</script>

<style scoped>

    .container {
        flex: none;
    }

    @media only screen and (min-width: 1264px) {
        .container {
            max-width: 65%;
        }
    }


</style>
