<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Page pour la modification du profil
******************************-->
<script setup>
import HeaderSite from '../components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import ModifProfil from '../components/DashboardUser/ModifProfil/ModifProfil.vue';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
    window.scrollTo({ top: 0 })
});
</script>

<template>
    <div class="interface">
        <HeaderSite />
        <ModifProfil />
    </div>
</template>

<style lang="scss"></style>