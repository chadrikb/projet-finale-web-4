<!--*********************************
    Nom: Claudia Coté Gariepy
    Matricule: 1474731
 ******************************-->
<script setup>
import { onBeforeMount, ref, reactive, onMounted, onUnmounted } from 'vue';
// import axios from 'axios';
import obj from "@/assets/database/obj-categorie-list.json";
import forfaits from '@/assets/database/forfaits.json';
import TitreCommun from '../components/ComposantsCommuns/Titre/TitreCommun.vue';
import LayoutImages from '../components/Headers/LayoutImages.vue';
import CoucheInspirationCategorie from '../components/CoucheInspiration/CoucheInspirationCategorie/CoucheInspirationCategorie.vue';
import CoucheInfolettre from '../components/ComposantsCommuns/CoucheInfolettre/CoucheInfolettre.vue';
import CouchePartenaires from '../components/ComposantsCommuns/CouchePartenaires/CouchePartenaires.vue';
import PointilleSvgCommun from '../components/ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
import ImageCliquable from '../components/ComposantsCommuns/ImageCliquable/ImageCliquable.vue';
import ParagrapheCommunSlot from '../components/ComposantsCommuns/Paragraphe/ParagrapheCommunSlot.vue';
import HeaderSite from '../components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import anime from 'animejs';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';

// const dataAxios = reactive({
//     id: null,
//     categories: [],
// });

const position = ref(null);
const tableau = [];
const imagesrandom = ["/src/assets/img/petit/acericulteur/erable-petit.jpg", "/src/assets/img/petit/acericulteur/erable2-petit.jpg", "/src/assets/img/petit/acericole/acericole3-petit.jpg", "/src/assets/img/petit/acericole/acericole7-petit.jpg",
    "/src/assets/img/petit/bistro/bistro-petit.jpg", "/src/assets/img/petit/bistro/bistro2-petit.jpg", "/src/assets/img/petit/bistro/bistro3-petit.jpg", "/src/assets/img/petit/bistro/bistro5-petit.jpg", "/src/assets/img/petit/bistro/bistro6-petit.jpg",
    "/src/assets/img/petit/gastronomie/gastronomie2-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie3-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie3-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie4-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie5-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie6-petit.jpg",
    "/src/assets/img/petit/cassecroute/cassecroute-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute3-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute4-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute5-petit.jpg"];

const data = reactive({
    objSousCat: {},
    objForfait: {}
})

function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}

onBeforeMount(async () => {
    window.scrollTo({ top: 0 })
    position.value = GetRandomInt(imagesrandom.length);
    for (let i = 0; i < 7; i++) {
        position.value = GetRandomInt(imagesrandom.length);
        if (tableau.includes(position.value)) {
            i--;
            position.value = GetRandomInt(imagesrandom.length);
        }
        else {
            tableau.push(position.value);
        }
    }
    data.objSousCat = obj.Restauration.sousCategories
    // const response = await axios.get(`http://localhost:8000/api/categorie/list`);
    // dataAxios.categories = response.data.Restauration;
});

const contenuElement = ref(null);
onMounted(() => {
    window.addEventListener('scroll', onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll, true);
})

function onScroll() {
    const elementPosition = contenuElement.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > elementPosition) {
        anime({
            targets: contenuElement.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}

data.objForfait = forfaits.EscapadeGourmande.Forfait

</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="restauration">
            <header class="restauration" ref="contenuElement">
                <div class="rectangle-noir"></div>
                <div class="rectangle-pale">
                    <TitreCommun :titre="obj.Restauration.name" />
                    <LayoutImages :urlnth1="imagesrandom[tableau[0]]" :urlnth2="imagesrandom[tableau[1]]"
                        :urlnth3="imagesrandom[tableau[2]]" :urlnth4="imagesrandom[tableau[3]]"
                        :urlnth5="imagesrandom[tableau[4]]" :urlnth6="imagesrandom[tableau[5]]"
                        :urlnth7="imagesrandom[tableau[6]]" />
                    <img :ref="position" :src="imagesrandom[position]" alt="Placeholder">
                </div>
            </header>
            <div class="elevator-pitch">
                <ParagrapheCommunSlot>
                    <p>La restauration en région offre une délicieuse variété de saveurs locales. Des produits frais de la
                        ferme aux plats cuisinés avec amour, les restaurants régionaux captivent les papilles avec leur
                        cuisine authentique, mettant en valeur l'identité culinaire unique de chaque endroit.</p>
                </ParagrapheCommunSlot>
            </div>
            <CoucheInspirationCategorie :Evenement="data.objForfait" />
            <TitreCommun titre="La région vous propose..." />
            <div class="wrapper-lien-sous-categorie">
                <ImageCliquable v-for="categorie in obj.Restauration.sousCategories" :key="categorie.id"
                    :nom="categorie.name" :path="`/sous-categories/${categorie.pathname}`" :image="categorie.imagemoyen" />
            </div>
            <div class="pointille-absolut">
                <PointilleSvgCommun />
                <PointilleSvgCommun />
                <PointilleSvgCommun />
                <PointilleSvgCommun />
                <PointilleSvgCommun />
            </div>
            <CoucheInfolettre />
            <CouchePartenaires />
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss">
header.restauration {
    opacity: 0;
}
</style>