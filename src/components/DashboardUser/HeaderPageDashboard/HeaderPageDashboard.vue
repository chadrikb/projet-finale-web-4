<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour l'entête du dashboard
******************************-->
<script setup>
import Titre from '@/components/ComposantsCommuns/Titre/TitreCommun.vue';

const props = defineProps({
    titre: {
        type: String,
        required: true,
        default: "// Nom de l'usager //"
    }
});
</script>

<template>
    <div class="entete-dashboard">
        <div class="rectangle-gauche"></div>
        <div class="profil">
            <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="white" />
            </svg>
            <div class="info-user">
                <Titre :titre="props.titre" />
                <RouterLink to="/modificationprofil">
                <img src="src/assets/img/svg/edit_FILL0_wght400_GRAD0_opsz48.svg" width="30" height="30">
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>