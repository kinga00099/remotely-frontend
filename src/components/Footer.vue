<template>
    <v-footer height="auto" color="primary lighten-1">
        <v-layout justify-center row wrap>
            <v-btn v-for="link in links" :key="link" color="white" flat round>
                {{ link }}
            </v-btn>
            <v-flex primary lighten-2 py-3 text-xs-center black--text xs12 >
                <span class="copyright"> &copy; 2019 — Máté Kinga </span>
            </v-flex>
        </v-layout>
    </v-footer>
</template>
<script>
    export default {
        data: () => ({
            links: [
                'Home',
                'About Us',
                'Team',
                'Services',
                'Blog',
                'Contact Us'
            ]
        })
    }
</script>
<style scoped>
    .copyright {
        color: white;
    }
</style>
