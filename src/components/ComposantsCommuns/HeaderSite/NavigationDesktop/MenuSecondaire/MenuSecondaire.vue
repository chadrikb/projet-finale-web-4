<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour le menu secondaire
******************************-->
<script setup>
const props = defineProps({
    navSec: {
        type: Object,
        required: true
    },
    indexActif: {
        type: String,
        default: "agriculture"
    },
})

console.log(props.navSec.Activites);

</script>

<template>
    <div class="menu-secondaire" v-for="(element, key) in props.navSec" :key="key" v-show="indexActif == key">
        <!-- [ lien vers les pages de sous-catégories ] -->
        <RouterLink :to="'/sous-categories/' + SousElement.pathname" v-for="(SousElement) in element.sousCategories" :key="SousElement.name">
            <p v-text="SousElement.name"></p>
        </RouterLink>
    </div>
</template>

<style lang="scss"></style>