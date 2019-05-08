<template>
    <div>
            <header-component></header-component>
    <div>
        <filterbar></filterbar>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3 class="jobs">
                <v-card>
                    <v-list three-line>
                        <div v-if="jobs && jobs.length">
                            <div v-for="i in 5">
                                <template v-for="(job, index) in jobs">
                                    <v-list-tile
                                            :key="job.jobTitle"
                                            avatar
                                            ripple
                                            :to="'job/' + job.id"
                                    >
                                        <v-avatar>
                                            <img class="logo" :alt="job.company.title" :src="job.company.logo">
                                        </v-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title>{{ job.jobTitle }}</v-list-tile-title>
                                            <v-list-tile-sub-title class="text--primary">{{ job.company.title }}
                                            </v-list-tile-sub-title>
                                            <v-list-tile-sub-title>
                                                <v-item-group multiple>
                                                    <v-item v-for="tag in job.tags" :key="tag">
                                                        {{tag}}
                                                    </v-item>
                                                </v-item-group>
                                            </v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                                            <v-list-tile-action-text>{{ job.posted }}</v-list-tile-action-text>
                                            <v-chip outline :color="getChipOutline(job.category)">
                                                <v-avatar>
                                                    <v-icon>{{ getIcon(job.category)}}</v-icon>
                                                </v-avatar>
                                                <span class="category">{{job.category}}</span>

                                            </v-chip>
                                        </v-list-tile-action>

                                    </v-list-tile>
                                    <v-divider
                                            v-if="index < jobs.length"
                                            :key="index"
                                    ></v-divider>
                                </template>
                            </div>
                        </div>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>

    </div>
</template>


<script>
    import filterbar from '../components/Filterbar.vue'
    import header from '../components/Header.vue'


    import axios from 'axios';

    export default {
        data() {
            return {
                jobs: []
            }
        },
        components: {
            filterbar,
            "header-component": header,


        },
        methods: {
            getIcon: (category) => {
                switch (category) {
                    case "CUSTOMERSUPPORT":
                        return "contact_phone";
                    case "COPYWRITING":
                        return "create";
                    case "DESIGN":
                        return "format_color_fill";
                    case "DEVOPS":
                        return "cloud_done";
                    case "FINANCE":
                        return "attach_money";
                    case "LEGAL":
                        return "copyright";
                    case "MARKETING":
                        return "share";
                    case "MANAGEMENT":
                        return "how_to_reg";
                    case "OTHER":
                        return "devices_other";
                    case "PRODUCT":
                        return "store";
                    case "PROGRAMMING":
                        return "computer";
                }
            },
            getChipOutline: (category) => {
                switch (category) {
                    case "CUSTOMERSUPPORT":
                        return "pink";
                    case "COPYWRITING":
                        return "brown";
                    case "DESIGN":
                        return "purple";
                    case "DEVOPS":
                        return "darkblue";
                    case "FINANCE":
                        return "green";
                    case "LEGAL":
                        return "orange";
                    case "MARKETING":
                        return "cyan";
                    case "MANAGEMENT":
                        return "black";
                    case "OTHER":
                        return "grey";
                    case "PRODUCT":
                        return "red";
                    case "PROGRAMMING":
                        return "blue";
                }
            }
        },
        created() {
            axios.get("/jobs")
                .then(response => {
                    this.jobs = response.data;
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style scoped>
    .jobs {
        flex-basis: 0;
        margin: auto;
        flex-grow: 1;
        padding: 0 2rem 2rem 2rem;
    }

    .category {
        display: none;
    }

    .logo {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
    }

    @media only screen and (min-width: 600px) {
        .jobs {
            max-width: 100%;
        }

        .category {
            display: inline;
        }
    }

    @media only screen and (min-width: 1264px) {
        .jobs {
            max-width: 60%;
        }
    }



</style>
