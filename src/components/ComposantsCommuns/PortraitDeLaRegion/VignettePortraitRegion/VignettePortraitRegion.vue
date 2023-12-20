<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour une vignette dynamique de la région
******************************-->
<script setup>
import CercleSvgCommun from '@/components/ComposantsCommuns/CercleSvg/CercleSvgCommun.vue';
import PointilleSvgCommun from '@/components/ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
import ParagrapheCommunSlot from '@/components/ComposantsCommuns/Paragraphe/ParagrapheCommunSlot.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';

const vignette = ref(null);
onMounted(() => {
    window.addEventListener("scroll", onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, true);
});
function onScroll() {
    const divvignette = vignette.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > divvignette) {
        anime({
            targets: vignette.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}

const props = defineProps({
    img1: {
        type: String,
        required: true,
        default: "/src/assets/img/moyen/cueillette/cueillette-moyen.jpg"
    },
    img2: {
        type: String,
        required: true,
        default: "/src/assets/img/moyen/cueillette/cueillette4-moyen.jpg"
    },

})

</script>

<template>
    <div class="vignette-portrait-region" ref="vignette">
        <div class="space1">
            <img :src="props.img1" alt="">
            <PointilleSvgCommun />
        </div>
        <div class="space2">
            <ParagrapheCommunSlot>
                <slot name="texte-1"></slot>
            </ParagrapheCommunSlot>
            <CercleSvgCommun />
        </div>
        <div class="space3">
            <ParagrapheCommunSlot>
                <slot name="texte-2"></slot>
            </ParagrapheCommunSlot>
        </div>
        <div class="space4">
            <ParagrapheCommunSlot>
                <slot name="texte-3"></slot>
            </ParagrapheCommunSlot>
        </div>
        <div class="space5"><img :src="props.img2" alt=""></div>
        <div class="space6">
            <ParagrapheCommunSlot>
                <slot name="texte-4"></slot>
            </ParagrapheCommunSlot>
        </div>
    </div>
</template>

<style lang="scss">
.vignette-portrait-region {
    opacity: 0;
}
</style>
