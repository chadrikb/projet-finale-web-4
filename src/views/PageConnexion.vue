<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Page pour la connexion d'un compte
******************************-->
<script setup>
import { reactive, onBeforeMount } from 'vue';
import TitreCommun from '../components/ComposantsCommuns/Titre/TitreCommun.vue';
import ConnexionCompte from '../components/ConnexionCompte/ConnexionCompte.vue';
import BoutonCommun from '../components/ComposantsCommuns/Bouton/BoutonCommun.vue';
import InscriptionCompte from '../components/InscriptionCompte/InscriptionCompte.vue';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';

onBeforeMount(() => { window.scrollTo({ top: 0 }) })

const data = reactive({
    LabelTitre: "Connexion",
    textBtn: "Se connecter",
    btnRetour: "Retour à l'accueil"
});

function Connexion() {
    data.LabelTitre = "Connexion";
    data.textBtn = "Se connecter";
    console.log(data.LabelTitre);
}

function Inscription() {
    data.LabelTitre = "Inscription";
    data.textBtn = "S'inscrire";
    console.log(data.LabelTitre);
}
</script>

<template>
    <div class="connexion">

        <TitreCommun :titre="data.LabelTitre" />
        <ConnexionCompte v-if="data.LabelTitre == 'Connexion'" />
        <InscriptionCompte v-if="data.LabelTitre == 'Inscription'" />

        <div class="bouton">
            <BoutonCommun @click="Connexion" v-if="data.LabelTitre == 'Inscription'">Connexion</BoutonCommun>
            <BoutonCommun @click="Inscription" v-if="data.LabelTitre == 'Connexion'">Inscription</BoutonCommun>
            <RouterLink to="/">
                <BoutonCommun>Retour à l'accueil</BoutonCommun>
            </RouterLink>
        </div>
        <FooterCommun />
    </div>
</template>

<style lang="scss"></style>