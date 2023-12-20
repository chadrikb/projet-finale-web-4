<script setup>
import { onBeforeMount, reactive } from 'vue';
import TitreCommun from '../ComposantsCommuns/Titre/TitreCommun.vue';
import ImageCliquable from '../ComposantsCommuns/ImageCliquable/ImageCliquable.vue';
import CoucheInfolettre from '../ComposantsCommuns/CoucheInfolettre/CoucheInfolettre.vue';
import CoucheInspirationCategorie from '../CoucheInspiration/CoucheInspirationCategorie/CoucheInspirationCategorie.vue';
import CouchePartenaires from '../ComposantsCommuns/CouchePartenaires/CouchePartenaires.vue';
import HeaderSite from '../ComposantsCommuns/HeaderSite/HeaderSite.vue';
import forfait from '@/assets/database/forfaits.json';
import FooterCommun from '../ComposantsCommuns/Footer/FooterCommun.vue';


const props = defineProps({
  objSousCategories: {
    type: Object,
    required: true,
  }
});

console.log(props.objSousCategories.imagemoyen);
</script>

<template>
  <div class="interface">
    <HeaderSite />
    <div class="main">
      <header class="sous-categorie">
        <div class="carre-noir"></div>
        <div class="rectangle-pale">
          <TitreCommun :titre="props.objSousCategories.parent" />
          <TitreCommun :titre="props.objSousCategories.name" />
          <img :src="props.objSousCategories.imagemoyen" alt="Placeholder">
        </div>
      </header>
      <CoucheInspirationCategorie :Evenement="forfait.Decouverte.Forfait" />
      <div class="wrapper-sous-sous-categorie">
        <ImageCliquable v-for="entreprise in objSousCategories.entreprises"
          :path="`/ficheSous-categorie/${entreprise.pathname}`" :key="entreprise.id" :nom="entreprise.name"
          :image="entreprise.urlLogo" />
      </div>
      <CoucheInfolettre />
      <CouchePartenaires />
      <FooterCommun />
    </div>
  </div>
</template>

<style lang="scss"></style>
