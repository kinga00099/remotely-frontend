<template>
    <v-container grid-list-md>
        <div v-for="company in companies" :key="company.id">
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
                            <v-btn flat icon color="red" @click="openDialogForCompany(company.id)">
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
                            nowrap
                    >
                        <v-card>
                            <v-card-title><h3>{{ props.item.jobTitle }}</h3>
                                <v-spacer></v-spacer>
                                <span v-if="props.item.open">Open</span>
                                <span v-else>Closed</span>
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
                                <v-divider></v-divider>

                                <v-list-tile>
                                    <v-list-tile-content class="aligned__buttons">
                                        <v-btn flat icon color="info" @click="toggleJobStatus(props.item.id)">
                                            <v-icon>cancel</v-icon>
                                        </v-btn>
                                    </v-list-tile-content>
                                    <v-list-tile-content class="aligned__buttons">
                                        <v-btn flat icon color="orange">
                                            <v-icon>edit</v-icon>
                                        </v-btn>
                                    </v-list-tile-content>
                                    <v-list-tile-content class="aligned__buttons">
                                        <v-btn flat icon color="red" @click.stop="openDialogForJob(props.item.id)">
                                            <v-icon>delete</v-icon>
                                        </v-btn>
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
        <v-dialog
                v-model="dialog"
                max-width="290"
                persistent
        >
            <v-card>
                <v-card-title class="headline">Are you sure?</v-card-title>
                <v-card-text>
                    It will be deleted permanently.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="red darken-1"
                            flat="flat"
                            @click="closeDialog"
                    >
                        No
                    </v-btn>
                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="deleteEntry"
                    >
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>
</template>
<script>
    import axios from '../services/axios.js';

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
                timeout: 2000,
                text: '',
                color: '',

                dialog: false,
                jobId: null,
                companyId: null
            }
        },

        methods: {
            async fetchList() {
                const user = await this.$auth.getUser();
                //const email = 'test1@test.com';
                axios.getCompaniesByUser(user.email)
                    .then(response => {
                        this.companies = response.data;
                    })
                    .catch(error => this.$log.debug(error))
            },
            deleteJob(id) {
                this.execute(axios.deleteJobById(id))
            },
            deleteCompany(id) {
                this.execute(axios.deleteCompanyById(id))
            },
            toggleJobStatus(id) {
                this.execute(axios.toggleJobStatus(id));
            },
            execute(func) {
                func.then(response => {
                    if (response.status === 200) {
                        this.expectedStatusCode();
                    } else {
                        this.wrongStatusCode();
                    }
                })
                    .catch(() => {
                        this.errorOccurred();
                    })
                    .finally(() => this.snackbar = true
                    );
                this.fetchList();
            },
            expectedStatusCode() {
                this.color = 'success';
                this.text = 'Operation successful';
            },
            wrongStatusCode() {
                this.color = 'warning';
                this.text = 'Something went wrong. Refresh the page, then try again.';
            },
            errorOccurred() {
                this.color = 'error';
                this.text = 'An error occurred. Try again!';
            },
            openDialogForJob(id) {
                this.dialog = true;
                this.jobId = id;
            },
            openDialogForCompany(id) {
                this.dialog = true;
                this.companyId = id;
            },
            closeDialog() {
                this.dialog = false;
                this.jobId = null;
                this.companyId = null;
            },
            deleteEntry() {
                if (this.jobId) {
                    this.deleteJob(this.jobId)
                } else if (this.companyId) {
                    this.deleteCompany(this.companyId)
                }
                this.closeDialog()
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

    @media only screen and (min-width: 1264px) {
        .container {
            max-width: 80%;
        }
    }

    .aligned__buttons {
        align-items: center;
    }

</style>
