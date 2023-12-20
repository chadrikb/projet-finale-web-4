<script setup>
    import PointilleSvgCommun from '../ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
    import TitreCommun from '../ComposantsCommuns/Titre/TitreCommun.vue';
    import ParagrapheCommun from '../ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
    import DateCalendrier from '../DashboardUser/EvenementFav/DateCalendrier/DateCalendrier.vue';
    import BoutonCommun from '../ComposantsCommuns/Bouton/BoutonCommun.vue';
    const props = defineProps({
        titre: {
            type: null,
            required: true,
            default: "Festival de la cabane à sucre des Monts"
        },
        paragraphe: {
            type: String,
            required: true,
            default: "Une visite guidée de la cabane à sucre traditionnelle avec la dégustation de bonbons à l'érable et d'un repas traditionnel de cabane à sucre."
        },
        localisation: {
            type: String,
            required: true,
            default: "Érablière des Monts"
        },
        ville: {
            type: String,
            required: true,
            default: "Val-David"
        },
        image: {
            type: String,
            required: true,
            default: "/src/assets/img/png/imgplaceholder.png"
        },
    });

    
</script>

<template>
  <div class="couche-calendrier">
    <div class="carousel-calendier">  </div>
    <div class="flex-calendrier">
        <div class="wrapper-infos-cal">
            <TitreCommun :titre="'Calendrier des évènements'" />
            <PointilleSvgCommun />
            <div class="bordure-gauche"></div>
            <TitreCommun  :titre="props.titre" />
            <TitreCommun  :titre="props.localisation" />
            <TitreCommun  :titre="props.ville" />
            <ParagrapheCommun :paragraphe="props.paragraphe" />
        </div>
        <div class="img-bouton">
            <img :src="props.image" :alt="props.nom">
            <div class="faux-bouton"><h3>Réserver ma place</h3></div>
        </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
