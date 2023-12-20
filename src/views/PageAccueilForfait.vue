<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Page pour l'accueil des forfaits
******************************-->
<script setup>
import HeaderSite from '../components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import VignettesForfait from '../components/VignetteForfait/VignettesForfait.vue';
import { onBeforeMount } from 'vue';
import forfaits from '@/assets/database/forfaits.json'
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';
// import axios from 'axios';

// const dataAxios = reactive({
//     forfaits: [],
// });

// onBeforeMount(async () => {
//     const response = await axios.get('http://localhost:8000/api/forfait/list');
//     dataAxios.forfaits.push(response.data);
//     // console.log(dataAxios.forfaits[0]);
// });
onBeforeMount(() => {
    window.scrollTo({ top: 0 })
})
console.log(forfaits.Famille);
</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="vignettes">
            <VignettesForfait :Evenement="forfaits.EscapadeGourmande" />
            <VignettesForfait :Evenement="forfaits.Famille" />
            <VignettesForfait :Evenement="forfaits.Decouverte" />
            <VignettesForfait :Evenement="forfaits.Detente" />
            <!-- <VignettesForfait :Evenement="dataAxios.forfaits[0]['Escapade Gourmande']" />
            <VignettesForfait :Evenement="dataAxios.forfaits[0]['Famille']" />
            <VignettesForfait :Evenement="dataAxios.forfaits[0]['Détente']" />
            <VignettesForfait :Evenement="dataAxios.forfaits[0]['Découverte']" /> -->
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss"></style>