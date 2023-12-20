<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la vignette des forfaits
******************************-->
<script setup>
import TitreCommun from '../ComposantsCommuns/Titre/TitreCommun.vue';
import PointilleSvgCommun from '../ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
import ParagrapheCommun from '../ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
import BoutonCommun from '../ComposantsCommuns/Bouton/BoutonCommun.vue';
import ImageBackground from '@/components/ComposantsCommuns/ImageBackground/ImagesBackground.vue';
import FlecheSvg from '../ComposantsCommuns/FlecheSvg/FlecheSvgCommun.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';

const props = defineProps({
    Evenement: {
        type: Object,
        required: true,
    },
});
const contenuElement = ref(null);
onMounted(() => {
    window.addEventListener("scroll", onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, true);
});
function onScroll() {
    const vignettes = contenuElement.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > vignettes) {
        anime({
            targets: contenuElement.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}
const index = ref(0);
function changerForfait() {
    index.value += 1;
    console.log(index.value);
    if (index.value >= props.Evenement.Forfait.length) {
        index.value = 0;
    }
}
console.log(props.Evenement);

const truncatedContent = computed(() => {
    const words = props.Evenement.Forfait[index.value].descForfait.split(' ');
    let truncated = "";
    for (let i = 0; i < 30 && i < words.length; i++) {
        truncated += words[i] + " ";
    }
    if (words.length > 30) {
        truncated += "...";
    }
    return truncated;
})

</script>

<template>
    <div class="vignette-forfait" ref="contenuElement">
        <div class="entete-forfait">
            <TitreCommun :titre="props.Evenement.titre" class="type-forfait" />
            <PointilleSvgCommun />
            <ParagrapheCommun class="desc-type-forfait" :paragraphe="props.Evenement.descType" />
            <ImageBackground url="src/assets/img/png/imgplaceholder.png" />
            <div class="carre-numero">
                <h4 v-text="props.Evenement.Forfait[index].id"></h4>
                <h4 v-text="props.Evenement.Forfait.length"></h4>
            </div>
        </div>
        <div class="forfait-contenu">
            <ParagrapheCommun class="emplacement-forfait" :paragraphe="props.Evenement.Forfait[index].place" />
            <ParagrapheCommun class="location" :paragraphe="props.Evenement.Forfait[index].location" />
            <ParagrapheCommun class="nom-forfait" :paragraphe="props.Evenement.Forfait[index].titreForfait" />
            <ParagrapheCommun class="desc-forfait" :paragraphe="truncatedContent" />
            <FlecheSvg @click="changerForfait()" />
            <BoutonCommun>
                <RouterLink :to="{ name: 'forfait-categorie', params: { titre: props.Evenement.url } }">En savoir plus
                </RouterLink>
            </BoutonCommun>
        </div>
    </div>
</template>

<style lang="scss">
.vignette-forfait {
    opacity: 0;
}
</style>