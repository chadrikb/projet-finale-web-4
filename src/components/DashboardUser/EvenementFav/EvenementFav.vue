<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour afficher les evénements favoris
******************************-->
<script setup>
import { ref } from 'vue';
import TitreCommun from '../../ComposantsCommuns/Titre/TitreCommun.vue';
import ParagrapheCommun from '../../ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
import DateCalendrier from './DateCalendrier/DateCalendrier.vue';
import BoutonCommun from '../../ComposantsCommuns/Bouton/BoutonCommun.vue';

const Janvier = ref("Janvier");
const Fevrier = ref("Février");
const Mars = ref("Mars");
</script>

<template>
    <div class="evenement-fav">
        <TitreCommun class="titre-entete-evenement-fav" titre="Callendrier des Événemenents" />
        <div class="mois">
            <ParagrapheCommun :paragraphe="Janvier" />
            <b>
                <ParagrapheCommun :paragraphe="Fevrier" />
            </b>
            <ParagrapheCommun :paragraphe="Mars" />
        </div>
        <div class="liste-date">
            <DateCalendrier />
        </div>
        <ParagrapheCommun class="sous-titre-evenement"/>
        <ParagrapheCommun class="titre-evenement"/>
        <ParagrapheCommun class="location-evenement"/>
        <ParagrapheCommun class="desc-evenement"/>
        <BoutonCommun class="bouton-evenement">Réserver ma place</BoutonCommun>
    </div>
</template>

<style lang="scss"></style>