<script setup>
import TitreCommun from "../../ComposantsCommuns/Titre/TitreCommun.vue";
import PointilleSvgCommun from "../../ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue";
import BoutonCommun from "../../ComposantsCommuns/Bouton/BoutonCommun.vue";
import LocalisationSvgCommun from "../../ComposantsCommuns/LocalisationSvg/LocalisationSvgCommun.vue";
import ParagrapheCommunSlot from "../../ComposantsCommuns/Paragraphe/ParagrapheCommunSlot.vue";
import FlecheSvgCommun from "../../ComposantsCommuns/FlecheSvg/FlecheSvgCommun.vue";
import CercleSvgCommun from "../../ComposantsCommuns/CercleSvg/CercleSvgCommun.vue";
import { ref } from "vue";

const props = defineProps({
  Evenement: {
      type: Object,
      required: true,
      },
});

console.log(props.Evenement);

const index = ref(0);
function changerForfait() {
index.value += 1;
console.log(index.value);
  if (index.value >= props.Evenement.length) {
    index.value = 0;
  }
}
</script>

<template>
  <div class="inspiration-categorie">
    <div class="deco-inspi">
      <PointilleSvgCommun />
      <CercleSvgCommun  />
      <CercleSvgCommun :circleSmall="42" :circleMedium="69" :circleLarge="80" :circleXLarge="200" />
    </div>
    <div class="contenu-inspi">
      <div class="wrapper-infos">
      <TitreCommun :titre="'Inspiration'" />
      <PointilleSvgCommun />
        <div class="localisation">
          <LocalisationSvgCommun />
          <h3 v-text="props.Evenement[index].place"></h3>
        </div>
        <h2 v-text="props.Evenement[index].titreForfait"></h2>
        <ParagrapheCommunSlot>
          <p v-text="props.Evenement[index].descForfait"></p>
        </ParagrapheCommunSlot>
        <ParagrapheCommunSlot>
          <p v-text="'Prix: ' + props.Evenement[index].prix"></p>
        </ParagrapheCommunSlot>
        <ParagrapheCommunSlot>
          <p v-text="'Valide: ' + props.Evenement[index].valide"></p>
        </ParagrapheCommunSlot>
        <BoutonCommun> Réserver </BoutonCommun>
      </div>
      <div class="imageInspiration">
        <img :src="props.Evenement[index].urlImage" alt="Placeholder" />
        <PointilleSvgCommun />
        <FlecheSvgCommun @click="changerForfait()" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
