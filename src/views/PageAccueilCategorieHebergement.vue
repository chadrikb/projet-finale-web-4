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
//     categories: []
// });

const position = ref(null);
const tableau = [];
const imagesrandom = ["/src/assets/img/petit/bedandbreakfast/bedandbreakfast2-petit.jpg", "/src/assets/img/petit/bedandbreakfast/bedandbreakfast2-petit.jpg", "/src/assets/img/petit/bedandbreakfast/bedandbreakfast3-petit.jpg",
    "/src/assets/img/petit/hotel/hotel-petit.jpg", "/src/assets/img/petit/hotel/hotel2-petit.jpg", "/src/assets/img/petit/hotel/hotel3-petit.jpg",
    "/src/assets/img/petit/spa/spa2-petit.jpg", "/src/assets/img/petit/spa/spa3-petit.jpg", "/src/assets/img/petit/spa/spa4-petit.jpg",
    "/src/assets/img/petit/villegiature/villegiature-petit.jpg", "/src/assets/img/petit/villegiature/villegiature3-petit.jpg", "/src/assets/img/petit/villegiature/villegiature4-petit.jpg", "/src/assets/img/petit/villegiature/villegiature5-petit.jpg",
    "/src/assets/img/petit/chalets/chalet-petit.jpg", "/src/assets/img/petit/chalets/chalet3-petit.jpg", "/src/assets/img/petit/chalets/chalet4-petit.jpg",
];

function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const data = reactive({
    objSousCat: {},
    objForfait: {}
})

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
    data.objSousCat = obj.Hebergement.sousCategories
    // const response = await axios.get(`http://localhost:8000/api/categorie/list`);
    // dataAxios.categories = response.data.Hébergement;
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

data.objForfait = forfaits.Detente.Forfait

</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="hebergement">
            <header class="hebergement" ref="contenuElement">
                <div class="rectangle-noir"></div>
                <div class="rectangle-pale">
                    <TitreCommun :titre="obj.Hebergement.name" />
                    <LayoutImages :urlnth1="imagesrandom[tableau[0]]" :urlnth2="imagesrandom[tableau[1]]"
                        :urlnth3="imagesrandom[tableau[2]]" :urlnth4="imagesrandom[tableau[3]]"
                        :urlnth5="imagesrandom[tableau[4]]" :urlnth6="imagesrandom[tableau[5]]"
                        :urlnth7="imagesrandom[tableau[6]]" />
                    <img :ref="position" :src="imagesrandom[position]" alt="Placeholder">
                </div>
            </header>
            <div class="elevator-pitch">
                <ParagrapheCommunSlot>
                    <p>Les hébergements en région offrent un havre de paix loin de l'agitation urbaine. Des charmantes
                        auberges aux gîtes pittoresques et aux cottages nichés au cœur de la nature, ils offrent un cadre
                        chaleureux et authentique pour se ressourcer et découvrir la beauté de la région.</p>
                </ParagrapheCommunSlot>
            </div>
            <CoucheInspirationCategorie :Evenement="data.objForfait" />
            <TitreCommun titre="La région vous propose..." />
            <div class="wrapper-lien-sous-categorie">
                <ImageCliquable v-for="categorie in obj.Hebergement.sousCategories" :key="categorie.id"
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
header.hebergement {
    opacity: 0;
}
</style>