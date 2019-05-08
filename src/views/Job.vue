<template>
    <v-container grid-list-xl>
        <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg3>
            <v-card class="elevation-5">
                <v-layout  align-center row fill-height>
                    <v-flex xs8>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{job.jobTitle}}</div>
                                <div><span>Category: {{job.category}}, Type: {{job.type}}, Level: {{job.level}}</span>
                                </div>
                                <div>{{company.title}}</div>
                                <div>Industry: {{company.industry}}</div>
                                <div>Headquarter: {{company.headquarter}}</div>
                                <div>Must be located: {{job.mustBeLocated}}</div>
                                <div>Start date: {{job.startDate}}</div>
                                <div>{{company.website}}</div>
                            </div>
                        </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                        <v-img
                                :src="company.logo"
                                height="20vh"
                                contain>
                        </v-img>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg3>
                <v-timeline dense>
                    <v-timeline-item
                            color="deep-purple lighten-3"
                            fill-dot
                            right
                    >
                        <v-card>
                            <v-card-title class="deep-purple lighten-3">
                                <h2 class="display-1 white--text font-weight-light">The Company</h2>
                            </v-card-title>
                            <v-container>
                                <v-layout>
                                    <v-flex xs11>
                                        <h2>About us</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        <h2>What we do</h2>
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-timeline-item>

                    <v-timeline-item
                            color="amber lighten-2"
                            fill-dot
                            left
                    >
                        <v-card>
                            <v-card-title class="amber lighten-2">
                                <h2 class="display-1 white--text font-weight-light">The Job</h2>
                            </v-card-title>
                            <v-container>
                                <v-layout>
                                    <v-flex xs11>
                                        <h2>Work-time</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        <h2>Daily tasks</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        <h2>Technology stack</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        <h2>Project members</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-timeline-item>

                    <v-timeline-item
                            color="cyan lighten-2"
                            fill-dot
                            right
                    >
                        <v-card>
                            <v-card-title class="cyan lighten-2">
                                <h2 class="display-1 white--text font-weight-light">The Candidate</h2>
                            </v-card-title>
                            <v-container>
                                <v-layout>
                                    <v-flex xs11>
                                        <h2>The ideal candidate</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        <h2>Required hard skills</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        <h2>Required soft skills</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        <h2>Good to have...</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-timeline-item>

                    <v-timeline-item
                            color="red lighten-2"
                            fill-dot
                            left
                    >
                        <v-card>
                            <v-card-title class="red lighten-2">
                                <h2 class="display-1 white--text font-weight-light">Benefits</h2>
                            </v-card-title>
                            <v-container>
                                <v-layout>
                                    <v-flex xs11>
                                        <h2>Salary</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit. <h2>
                                        Why you should choose us</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-timeline-item>

                    <v-timeline-item
                            color="green lighten-2"
                            fill-dot
                            right
                    >
                        <v-card>
                            <v-card-title class="green lighten-2">
                                <h2 class="display-1 white--text font-weight-light">Application</h2>
                            </v-card-title>
                            <v-container>
                                <v-layout>
                                    <v-flex xs11>
                                        <h2>Our hiring process</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                        <h2>How to apply</h2>
                                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
                                        nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import axios from 'axios';

    export default {
        name: "Job",
        data() {
            return {
                job: {},
                company: {}
            }
        },
        created() {
            const id = this.$route.params.id;
            axios.get("/job/" + id)
                .then(response => {
                    this.job = response.data;
                    this.company = response.data.company;
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style scoped>

</style>
