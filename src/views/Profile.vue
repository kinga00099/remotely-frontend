<template>
    <v-container grid-list-md>
        <div v-for="(company,index) in companies">
            <v-data-iterator
                    :items="company.jobs"
                    :rows-per-page-items="rowsPerPageItems"
                    :pagination.sync="pagination"
                    content-tag="v-layout"
                    row
                    wrap
            >
                <template v-slot:header>
                    <v-toolbar
                            class="mb-2"
                            color="cyan lighten-2"
                            dark
                            flat
                    >
                        <v-toolbar-title>{{company.title}}
                            <v-btn flat icon color="orange">
                                <v-icon>edit</v-icon>
                            </v-btn>
                            <v-btn flat icon color="red">
                                <v-icon>delete</v-icon>
                            </v-btn>
                        </v-toolbar-title>
                    </v-toolbar>
                </template>

                <template v-slot:item="props">
                    <v-flex
                            xs12
                            sm6
                            md4
                            lg3
                    >
                        <v-card>
                            <v-card-title><h3>{{ props.item.jobTitle }}</h3>
                                <v-spacer></v-spacer>
                                <v-btn flat icon color="info">
                                    <v-icon>cancel</v-icon>
                                </v-btn>
                                <v-btn flat icon color="orange">
                                    <v-icon>edit</v-icon>
                                </v-btn>
                                <v-btn flat icon color="red" v-on:click="deleteJob(props.item.id)">
                                    <v-icon>delete</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-list dense>
                                <v-list-tile>
                                    <v-list-tile-content>Category:</v-list-tile-content>
                                    <v-list-tile-content>{{ props.item.category }}
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-content>Type:</v-list-tile-content>
                                    <v-list-tile-content>{{ props.item.type }}</v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-content>Level:</v-list-tile-content>
                                    <v-list-tile-content>{{ props.item.level }}</v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-content>Posted:</v-list-tile-content>
                                    <v-list-tile-content>{{ props.item.posted }}
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-content>Viewed:</v-list-tile-content>
                                    <v-list-tile-content>{{ props.item.viewCounter }}
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-content>Status:</v-list-tile-content>
                                    <v-list-tile-content v-if="props.item.open">Open
                                    </v-list-tile-content>
                                    <v-list-tile-content v-else>Closed
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </template>
            </v-data-iterator>
            <hr>
        </div>
        <v-snackbar
                v-model="snackbar"
                :bottom="y === 'bottom'"
                :left="x === 'left'"
                :multi-line="mode === 'multi-line'"
                :right="x === 'right'"
                :timeout="timeout"
                :color="color"
                :top="y === 'top'"
                :vertical="mode === 'vertical'"
        >
            {{ text }}
            <v-btn
                    color="black"
                    flat
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>
<script>
    import axios from '../axios.js';

    export default {
        data() {
            return {
                companies: [],
                jobs: [],
                rowsPerPageItems: [4, 8, 12],
                pagination: {
                    rowsPerPage: 4
                },
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 1500,
                text: '',
                color: ''
            }
        },

        methods: {
            deleteJob(id) {
                axios.deleteJobById(id)
                    .then(response => {
                        if (response.status === 200) {
                            this.color = 'success';
                            this.text = 'Successfully deleted';
                        } else {
                            this.color = 'warning';
                            this.text = 'Something went wrong. Refresh the page, then try again.';
                        }
                    })
                    .catch(() => {
                            this.color = 'error';
                            this.text = 'An error occured. Try again.';
                        }
                    )
                    .finally(() => this.snackbar = true
                    );
                this.fetchList();
            },

            async fetchList() {
                const user = await this.$auth.getUser();
                this.$log.debug(user.email);
                //const email = 'test1@test.com';
                axios.getCompaniesByUser(user.email)
                    .then(response => {
                        this.companies = response.data;
                    })
                    .catch(error => this.$log.debug(error))
            }
        },

        mounted() {
            this.fetchList();
        }
    }
</script>


<style scoped>
    .v-list__tile__content {
        flex: 1;
    }
</style>
