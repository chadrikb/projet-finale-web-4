<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour afficher la carte non interactive
******************************-->

<script setup>
import { useRoute } from 'vue-router';
import TitreCommun from '../ComposantsCommuns/Titre/TitreCommun.vue';
import { reactive, ref, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';

const carte = ref(null);
onMounted(() => {
    window.addEventListener("scroll", onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, true);
});
function onScroll() {
    const divCarte = carte.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > divCarte) {
        anime({
            targets: carte.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}

const route = useRoute();

const data = reactive({
    Argenteuil: "Argenteuil",
    RiviereDuNord: "Rivière du Nord",
    Laurentides: "Laurentides",
    PaysDenHaut: "Pays-d'en-Haut",
    DeuxMontagnes: "Deux-Montagnes",
    Mirabel: "Mirabel",
})
console.log(data[route.params.region]);
</script>

<template>
    <div class="carte-static" ref="carte">
        <!-- [ image de la région ] -->
        <div class="wrapper-carte">
            <img v-show="route.params.region == 'Argenteuil'" src="@/assets/img/svg/MRC_Argenteuil.svg" alt="">
            <img v-show="route.params.region == 'RiviereDuNord'" src="@/assets/img/svg/MRC-Deux-Montagnes.svg" alt="">
            <img v-show="route.params.region == 'Laurentides'" src="@/assets/img/svg/MRC-Laurentides.svg" alt="">
            <img v-show="route.params.region == 'PaysDenHaut'" src="@/assets/img/svg/MRC-paysDenHaut.svg" alt="">
            <img v-show="route.params.region == 'DeuxMontagnes'" src="@/assets/img/svg/MRC-RiviereDuNord.svg" alt="">
            <img v-show="route.params.region == 'Mirabel'" src="@/assets/img/svg/Mirabel.svg" alt="">
        </div>
        <div class="region">
            <!-- [ titre de la région ] -->
            <TitreCommun :titre="data[route.params.region]" />
        </div>
    </div>
</template>

<style lang="scss">
.carte-static {
    opacity: 0;
}
</style>
