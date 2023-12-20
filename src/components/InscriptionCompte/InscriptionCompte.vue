<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante l'inscription d'un compte
******************************-->
<script setup>
import ChampInputText from '../ComposantsCommuns/ChampInput/ChampInputText.vue';
import ChampInputNumero from '../ComposantsCommuns/ChampInput/ChampInputNumero.vue';
import ChampInputMotDePasse from '../ComposantsCommuns/ChampInput/ChampInputMotDePasse.vue';
import { ref, onMounted } from 'vue';

const form = ref(null);
const nom = ref(null);
const courriel = ref(null);
const adresse = ref(null);
const tel = ref(null);
const mdp = ref(null);

onMounted(() => {
    nom.value = form.value.querySelector('#nom');
    courriel.value = form.value.querySelector('#courriel');
    adresse.value = form.value.querySelector('#adresse');
    tel.value = form.value.querySelector('#tel');
    mdp.value = form.value.querySelector('#mdp');

    form.value.addEventListener('submit', (e) => {
        e.preventDefault();
        Clear();
    });
});

function Clear() {
    const profil = {
        nom: nom.value.value,
        courriel: courriel.value.value,
        adresse: adresse.value.value,
        tel: tel.value.value,
        mdp: mdp.value.value
    }
    console.log(profil);
    nom.value.value = "";
    courriel.value.value = "";
    adresse.value.value = "";
    tel.value.value = "";
    mdp.value.value = "";
}

</script>

<template>
    <form id="formulaire-connexion" ref="form">
        <ChampInputText :id="'nom'" ref="nom">Nom d'utilisateur</ChampInputText>
        <ChampInputText :id="'courriel'" ref="courriel">Courriel</ChampInputText>
        <ChampInputText :id="'adresse'" ref="adresse">Adresse complète</ChampInputText>
        <ChampInputNumero :id="'tel'" ref="tel">Téléphone</ChampInputNumero>
        <ChampInputMotDePasse :id="'mdp'" ref="mdp">Mot de passe</ChampInputMotDePasse>
        <button type="submit" value="S'inscrire" id="submit">S'inscrire</button>
    </form>
</template>

<style lang="scss"></style>