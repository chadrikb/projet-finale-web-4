<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la connexion d'un compte
******************************-->
<script setup>
import ChampInputText from '../ComposantsCommuns/ChampInput/ChampInputText.vue';
import ChampInputMotDePasse from '../ComposantsCommuns/ChampInput/ChampInputMotDePasse.vue';
import { ref, onMounted } from 'vue';

const form = ref(null);
const nom = ref(null);
const courriel = ref(null);
const mdp = ref(null);

onMounted(() => {
    nom.value = document.getElementById('nom');
    courriel.value = document.getElementById('courriel');
    mdp.value = document.getElementById('mdp');

    form.value.addEventListener('submit', (e) => {
        e.preventDefault();
        Clear();
    });
});

function Clear() {
    const profil = {
        nom: nom.value.value,
        courriel: courriel.value.value,
        mdp: mdp.value.value
    }
    console.log(profil);
    nom.value.value = "";
    courriel.value.value = "";
    mdp.value.value = "";
}

</script>

<template>
    <form id="formulaire-connexion" ref="form">
        <ChampInputText :id="'nom'" ref="nom">Nom d'utilisateur</ChampInputText>
        <ChampInputText :id="'courriel'" ref="courriel">Courriel</ChampInputText>
        <ChampInputMotDePasse :id="'mdp'" ref="mdp">Mot de passe</ChampInputMotDePasse>
        <button type="submit" value="Se connecter" id="submit">Se connecter </button>

    </form>
</template>

<style lang="scss"></style>
