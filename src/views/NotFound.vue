<template>
    <v-container grid-list-xl class="fade-in">
        <v-layout class="text-xs-center" row>
            <v-flex>
                <h1>OOps. This page does not exist.</h1>
                <div class="text-xs-center">
                    <v-btn round
                           color="amber"
                           large
                           :to="'/'"
                    >Take me home</v-btn>
                </div>
                <v-img contain
                       max-height="50vh"
                       src="https://cdn.pixabay.com/photo/2016/02/18/07/11/social-1206612_960_720.png"></v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>

</style>
