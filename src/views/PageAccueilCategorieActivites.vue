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
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';
import anime from 'animejs';

// const dataAxios = reactive({
//     id: null,
//     categories: []
// });

const position = ref(null);
const tableau = [];
const imagesrandom = ["/src/assets/img/petit/tour/tour2-petit.jpg", "/src/assets/img/petit/tour/tour3-petit.jpg",
    "/src/assets/img/petit/picnic/picnic-petit.jpg", "/src/assets/img/petit/picnic/picnic3-petit.jpg", "/src/assets/img/petit/picnic/picnic4-petit.jpg",
    "/src/assets/img/petit/musee/musee-petit.jpg", "/src/assets/img/petit/musee/musee2-petit.jpg", "/src/assets/img/petit/interpretation/interpretation2-petit.jpg",
    "/src/assets/img/petit/marches/marche-petit.jpg", "/src/assets/img/petit/marches/marche3-petit.jpg", "/src/assets/img/petit/marches/marche5-petit.jpg", "/src/assets/img/petit/marches/marche6-petit.jpg",
    "/src/assets/img/petit/activite/activite-petit.jpg", "/src/assets/img/petit/activite/activite2-petit.jpg", "/src/assets/img/petit/activite/activite4-petit.jpg",
    "/src/assets/img/petit/cueillette/cueillette-petit.jpg", "/src/assets/img/petit/cueillette/cueillette2-petit.jpg", "/src/assets/img/petit/cueillette/cueillette4-petit.jpg",
];

const data = reactive({
    objSousCat: {},
    objForfait: {}
})

function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
console.log(contenuElement.value);

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
    data.objSousCat = obj.Activites.sousCategories
    // const response = await axios.get(`http://localhost:8000/api/categorie/list`);
    // dataAxios.categories = response.data.Activités;
});

data.objForfait = forfaits.Decouverte.Forfait
// console.log(data.objForfait);
</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="activites">
            <header class="activites" ref="contenuElement">
                <div class="rectangle-noir"></div>
                <div class="rectangle-pale">
                    <TitreCommun :titre="obj.Activites.name" />
                    <LayoutImages :urlnth1="imagesrandom[tableau[0]]" :urlnth2="imagesrandom[tableau[1]]"
                        :urlnth3="imagesrandom[tableau[2]]" :urlnth4="imagesrandom[tableau[3]]"
                        :urlnth5="imagesrandom[tableau[4]]" :urlnth6="imagesrandom[tableau[5]]"
                        :urlnth7="imagesrandom[tableau[6]]" />
                    <img :ref="position" :src="imagesrandom[position]" alt="Placeholder">
                </div>
            </header>
            <div class="elevator-pitch">
                <ParagrapheCommunSlot>
                    <p>Les activités en région sont diverses et passionnantes. Des randonnées en pleine nature aux festivals
                        culturels animés, en passant par les marchés locaux et les activités sportives, il y en a pour tous
                        les
                        goûts. Les régions offrent une multitude d'expériences uniques à vivre.</p>
                </ParagrapheCommunSlot>
            </div>
            <CoucheInspirationCategorie :Evenement="data.objForfait" />
            <!-- <div class="wrapper-lien-sous-categorie">
            <ImageCliquable v-for="categorie in dataAxios.categories" :key="categorie.id" :nom="categorie.name" />
            </div> -->
            <TitreCommun titre="La région vous propose..." />
            <div class="wrapper-lien-sous-categorie">
                <ImageCliquable v-for="(categorie, index) in obj.Activites.sousCategories" :key="categorie.id"
                    :nom="categorie.name" :index="index" :objSousCat="data.objSousCat[index]"
                    :path="`/sous-categories/${categorie.pathname}`" :image="categorie.imagemoyen" />
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
header.activites {
    opacity: 0;
}
</style>