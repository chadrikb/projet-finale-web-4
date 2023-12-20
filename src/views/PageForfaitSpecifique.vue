<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Page pour un forfait
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
const num = route.params.num;
onBeforeMount(() => {
    window.scrollTo({ top: 0 })
    console.log(forfait[titre].Forfait[num - 1].titreForfait);
    console.log(num);
});
</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="forfait-categorie">
            <ForfaitFav :titre="forfait[titre].Forfait[num - 1].titreForfait" :typeCategorie="forfait[titre].titre"
                :nomActivite="forfait[titre].Forfait[num - 1].place" :descForfait="forfait[titre].Forfait[num - 1].descForfait"
                :prix="forfait[titre].Forfait[num - 1].prix" :valide="forfait[titre].Forfait[num - 1].valide"
                :img="forfait[titre].Forfait[num - 1].urlImage" />
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss"></style>