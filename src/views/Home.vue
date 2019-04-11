<template>
    <div>
    <filterbar></filterbar>

    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-list two-line>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                                :key="item.title"
                                avatar
                                ripple
                                @click="toggle(index)"
                        >
                            <v-list-tile-avatar>
                                <img :src="item.avatar">
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                                <v-icon
                                        v-if="selected.indexOf(index) < 0"
                                        color="grey lighten-1"
                                >
                                    star_border
                                </v-icon>

                                <v-icon
                                        v-else
                                        color="yellow darken-2"
                                >
                                    star
                                </v-icon>
                            </v-list-tile-action>

                        </v-list-tile>
                        <v-divider
                                v-if="index + 1 < items.length"
                                :key="index"
                        ></v-divider>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
    </div>
</template>

<script>
    import filterbar from '../components/Filterbar.vue'

    export default {
        data() {
            return {
                selected: [2],
                items: [
                    {
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nn747-1cEZASjjwVqwyyCnCZB023m1jVyJJI62ZCoiDqpEtm',
                        action: '15 min',
                        headline: 'Brunch this weekend?',
                        title: 'Ali Connors',
                        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nn747-1cEZASjjwVqwyyCnCZB023m1jVyJJI62ZCoiDqpEtm',
                        action: '2 hr',
                        headline: 'Summer BBQ',
                        title: 'me, Scrott, Jennifer',
                        subtitle: "Wish I could come, but I'm out of town this weekend."
                    },
                    {
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nn747-1cEZASjjwVqwyyCnCZB023m1jVyJJI62ZCoiDqpEtm',
                        action: '6 hr',
                        headline: 'Oui oui',
                        title: 'Sandra Adams',
                        subtitle: 'Do you have Paris recommendations? Have you ever been?'
                    },
                    {
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nn747-1cEZASjjwVqwyyCnCZB023m1jVyJJI62ZCoiDqpEtm',
                        action: '12 hr',
                        headline: 'Birthday gift',
                        title: 'Trevor Hansen',
                        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
                    },
                    {
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nn747-1cEZASjjwVqwyyCnCZB023m1jVyJJI62ZCoiDqpEtm',
                        action: '18hr',
                        headline: 'Recipe to try',
                        title: 'Britta Holt',
                        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
                    }
                ]
            }
        },
        components: {
            filterbar
        },

        methods: {
            toggle(index) {
                const i = this.selected.indexOf(index);

                if (i > -1) {
                    this.selected.splice(i, 1)
                } else {
                    this.selected.push(index)
                }
            }
        }
    }
</script>

<style scoped>

</style>
