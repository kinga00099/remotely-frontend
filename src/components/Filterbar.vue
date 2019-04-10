<template>

        <v-container grid-list-xl>

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
    import axios from 'axios';

    export default {
        data() {
            return {
                labels: ["Category", "Level", "Type"],
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
                types: [],
                categories: [],
                levels: [],
                search: ''
            }
        },

        created() {
            axios.get("/types")
                .then(response => {
                    this.types = response.data.types;
                    this.categories = response.data.categories;
                    this.levels = response.data.levels;
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style scoped>

    .container {
        flex: none;
        padding-bottom: 0;
    }

    @media only screen and (min-width: 600px) {
        .container {
            background-color: #eceff1;
        }
    }

    @media only screen and (min-width: 1264px) {
        .container {
            max-width: 66%;
        }
    }
</style>
