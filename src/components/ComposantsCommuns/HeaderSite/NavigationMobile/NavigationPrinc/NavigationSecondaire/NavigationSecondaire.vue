<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante la navigation secondaire mobile
******************************-->
<script setup>
const props = defineProps({
    liste: {},
    index: String
})
</script>

<template>
    <li>
        {{ props.liste.nom }}
        <RouterLink :to="'/' + props.liste.nom">
            <ul v-text="sousMenu" v-for="sousMenu in props.liste.sousMenu" :key="sousMenu"></ul>
        </RouterLink>
    </li>
</template>

<style lang="scss"></style>