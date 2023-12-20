<script setup>
import HeaderSite from '@/components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import TitreCommun from '@/components/ComposantsCommuns/Titre/TitreCommun.vue';
import ParagrapheCommun from '@/components/ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
import VignettePortraitRegion from '../components/ComposantsCommuns/PortraitDeLaRegion/VignettePortraitRegion/VignettePortraitRegion.vue';
import CarteNonInteractive from '@/components/CarteNonInteractive/CarteNonInteractive.vue';
import MRC from '@/assets/database/MRCs.json';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';

const route = useRoute();
const region = route.params.region;

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});
console.log(MRC[region]);
onBeforeMount(() => {
    window.scrollTo({ top: 0 })
    if (props.id == 'Argenteuil')
        console.log('Argenteuil');
})
console.log(region);

</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="main-MRC">
            <div class="entete">
                <TitreCommun :titre="MRC.titre" />
                <TitreCommun class="sous-titre" :titre="MRC[region].sousTitre" />
                <ParagrapheCommun :paragraphe="MRC[region].desc" />
                <TitreCommun titre="La Région est reconnue pour..." />
                <PointilleSvgCommun />
            </div>
            <VignettePortraitRegion v-for="(element) in MRC[region].caracteristique" :key="element.titre"
                :class="'vignette-' + element.class" :img1="element.photo1" :img2="element.photo2">
                <template #texte-1>{{ element.desc1 }}</template>
                <template #texte-2>{{ element.titre }}</template>
                <template #texte-3>{{ element.desc2 }}</template>
            </VignettePortraitRegion>
            <CarteNonInteractive />
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss"></style>