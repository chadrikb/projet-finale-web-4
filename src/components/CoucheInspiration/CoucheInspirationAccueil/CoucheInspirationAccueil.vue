<script setup>
    import { ref } from 'vue';
    import TitreCommun from '../../ComposantsCommuns/Titre/TitreCommun.vue';
    import PointilleSvgCommun from '../../ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
    import ParagrapheCommunSlot from '../../ComposantsCommuns/Paragraphe/ParagrapheCommunSlot.vue';
    import ParagrapheCommun from '../../ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
    import ImagesBackground from '../../ComposantsCommuns/ImageBackground/ImagesBackground.vue';
    import BoutonCommun from '../../ComposantsCommuns/Bouton/BoutonCommun.vue';
    import FlecheSvgCommunOrangeVue from '../../ComposantsCommuns/FlecheSvg/FlecheSvgCommunOrange.vue';
    const props = defineProps ({
        Famille: {
            type: Object,
            required: true,
        },
    });

const index = ref(0);
function changerForfait() {
index.value += 1;
console.log(index.value);
  if (index.value >= props.Famille.length) {
    index.value = 0;
  }
}
</script>

<template>
    <div class="inspiration-accueil">
        <div class="inspi-gauche">
            <TitreCommun :titre ="'Inspiration'"/>
            <PointilleSvgCommun />
            <ParagrapheCommunSlot>
                <p>Découvrez des activités et expériences gourmandes à vivre au rythme des saisons.</p>
            </ParagrapheCommunSlot>
            <ImagesBackground />
        </div>
        <div class="inspi-droit">
        <div class="carre-numero">            
            <h4  v-text="props.Famille[index].id"></h4> 
            <h4 v-text="props.Famille.length"></h4> 
        </div>
            <ParagrapheCommun :paragraphe="props.Famille[index].place" />
            <ParagrapheCommun :paragraphe="props.Famille[index].location" />
            <ParagrapheCommun :paragraphe="props.Famille[index].titreForfait" />
            <ParagrapheCommun :paragraphe="props.Famille[index].descForfait" />
            <BoutonCommun> Réserver </BoutonCommun>
            <FlecheSvgCommunOrangeVue @click="changerForfait()" />
        </div>
    </div>
</template>

<style lang="scss"></style>