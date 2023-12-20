<script setup>
  import { ref } from 'vue';
  import PointilleSvgCommun from '../ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
  import BoutonCommun from '../ComposantsCommuns/Bouton/BoutonCommun.vue';
  import LocalisationSvgCommun from '../ComposantsCommuns/LocalisationSvg/LocalisationSvgCommun.vue';
  import TitreCommun from '../ComposantsCommuns/Titre/TitreCommun.vue';
  import ParagrapheCommunVue from '../ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
  import ParagrapheCommunSlot from '../ComposantsCommuns/Paragraphe/ParagrapheCommunSlot.vue';
import FlecheSvgCommunOrange from '../ComposantsCommuns/FlecheSvg/FlecheSvgCommunOrange.vue';
  const props = defineProps({
  urlImg: {
    type: String,
    required: true,
    default: "/src/assets/img/png/imgplaceholder.png",
  },
  Hebergement: {
    type: Object,
    required: true,
    }
  });

const index = ref(0);
function changerForfait() {
index.value += 1;
console.log(index.value);
  if (index.value >= props.Hebergement.length) {
    index.value = 0;
  }
}

</script>

<template>
  <div class="hebergements">
    <div class="bloc-gauche">
      <TitreCommun :titre="'Hébergements'" />
      <PointilleSvgCommun />
      <div class="nomAuberge">
        <LocalisationSvgCommun />
        <h3 v-text="props.Hebergement[index].place"></h3>
      </div>
      <ParagrapheCommunVue :paragraphe="props.Hebergement[index].descForfait" />
      <div class="infos-sup">
        <ParagrapheCommunSlot>
          <p v-text="'Prix: ' + props.Hebergement[index].prix"></p>
        </ParagrapheCommunSlot>
        <ParagrapheCommunSlot>
          <p v-text="'Valide: ' + props.Hebergement[index].valide"></p>
        </ParagrapheCommunSlot>
      </div>
      <BoutonCommun><RouterLink :to="`/forfait-specifique/${props.Hebergement[index].urlTitreForfait}/${props.Hebergement[index].id}`"></RouterLink>En savoir plus</BoutonCommun>
    </div>
    <div class="bloc-droit">
      <img :src="props.Hebergement[index].urlImage" :alt="props.nomEntreprise">
      <FlecheSvgCommunOrange  @click="changerForfait()"/>
    </div>
    <TitreCommun class="scroll-text" :titre="props.Hebergement[index].titreForfait" />
  </div>
</template>

<style lang="scss"></style>
