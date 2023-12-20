<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour les activités favorites
******************************-->
<script setup>
import VignetteActiviteFav from '@/components/DashboardUser/VignetteActiviteFav/VignetteActiviteFav.vue';
import objCat from '@/assets/database/obj-categorie-list.json';

// import { reactive } from 'vue';

// const data = reactive({

// });
console.log(objCat.Agriculture.sousCategories[0]);

</script>

<template>
    <div class="liste-activite-fav">
        <VignetteActiviteFav :objSousCategorie="objCat.Agriculture.sousCategories[0]" />
        <VignetteActiviteFav :objSousCategorie="objCat.Agriculture.sousCategories[1]" />
        <VignetteActiviteFav :objSousCategorie="objCat.Agriculture.sousCategories[2]" />
    </div>
</template>

<style lang="scss"></style>