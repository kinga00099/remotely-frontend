<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                        aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        <div> {{ card_text }}</div>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from '../axios.js';

    export default {
        data() {
            return {
                jobs: []
            }
        },
        async mounted() {
            const email = await this.$auth.getUser().email;
            axios.getCompaniesByUser(email)
                .then(response => {
                    this.jobs = response.data;
                })
                .catch(error => this.$log.debug(error))
        }
    }
</script>


<style scoped>

</style>
