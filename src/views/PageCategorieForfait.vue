<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Page pour les catégorie de forfaits
******************************-->
<script setup>
import ForfaitFav from '../components/DashboardUser/ForfaitsFav/ForfaitFav.vue';
import HeaderSite from '../components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import forfait from '@/assets/database/forfaits.json';
import { useRoute } from 'vue-router';
import { onBeforeMount } from 'vue';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';
const route = useRoute();

const titre = route.params.titre;
onBeforeMount(() => {
    window.scrollTo({ top: 0 })
    console.log(forfait);
});

// console.log(forfait.EscapadeGourmande.Forfait);
</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="forfait-categorie">
            <ForfaitFav v-for="(element) in forfait[titre].Forfait" :key="element.titre" :titre="element.titreForfait"
                :typeCategorie="forfait[titre].titre" :nomActivite="element.place" :descForfait="element.descForfait"
                :prix="element.prix" :valide="element.valide" :urlTitre="forfait.EscapadeGourmande.url" :url="element.id"
                :urlNomActivite="element.urlTitreForfait" :img="element.urlImage" />
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss"></style>