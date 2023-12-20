<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour le dashboard de l'utilisateur
******************************-->
<script setup>
import HeaderPageDashboard from '@/components/DashboardUser/HeaderPageDashboard/HeaderPageDashboard.vue';
import NavDashboard from '@/components/DashboardUser/NavDashboard/Navdashboard.vue'
import ActiviteFav from '@/components/DashboardUser/ActiviteFav/ActiviteFav.vue';
import ForfaitFav from '@/components/DashboardUser/ForfaitsFav/ForfaitFav.vue';
import EvenementFav from '@/components/DashboardUser/EvenementFav/EvenementFav.vue';
import Calendrier from '@/components/CoucheCalendrier/CoucheCalendrier.vue'
import forfait from '@/assets/database/forfaits.json';
import { ref, onBeforeMount } from 'vue';
import CoucheCalendrier from '../CoucheCalendrier/CoucheCalendrier.vue';

let dataComposant = ref(null)


onBeforeMount(() => {
    dataComposant.value = 'Favoris'
    console.log(forfait.EscapadeGourmande.url)
})

function getComposantData(menu) {
    dataComposant.value = menu;
    console.log(menu);
    console.log(dataComposant.value);
    console.log("/////////////////////////");
}

const liste = ref(
    [
        {
            nom: "Favoris",
            actif: false,
        },
        {
            nom: "Forfait Fav",
            actif: false,
        },
        {
            nom: "Calendrier",
            actif: false,
        },

    ]
)
</script>

<template>
    <div>
        <HeaderPageDashboard />
        <NavDashboard ref="menu" @changer-menu="getComposantData($refs.menu.valeur)" :nav="liste" />
        <ActiviteFav v-if="dataComposant == 'Favoris'" />
        <ForfaitFav v-if="dataComposant == 'Forfait Fav'" :titre="forfait.EscapadeGourmande.Forfait[1].titreForfait"
            :typeCategorie="forfait.EscapadeGourmande.titre" :nomActivite="forfait.EscapadeGourmande.Forfait[1].place"
            :descForfait="forfait.EscapadeGourmande.Forfait[1].descForfait"
            :prix="forfait.EscapadeGourmande.Forfait[1].prix" :valide="forfait.EscapadeGourmande.Forfait[1].valide"
            :url="forfait.EscapadeGourmande.Forfait[1].id" :urlTitre="forfait.EscapadeGourmande.url"
            :urlNomActivite="forfait.EscapadeGourmande.Forfait[1].urlTitreForfait"
            :img="forfait.EscapadeGourmande.Forfait[1].urlImage" />
        <CoucheCalendrier v-if="dataComposant == 'Calendrier'" />
    </div>
</template>

<style lang="scss"></style>