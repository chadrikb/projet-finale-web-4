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
const imagesrandom = ["/src/assets/img/petit/acericole/acericole2-petit.jpg", "/src/assets/img/petit/acericole/acericole3-petit.jpg", "/src/assets/img/petit/acericole/acericole4-petit.jpg", "/src/assets/img/petit/acericole/acericole5-petit.jpg", "/src/assets/img/petit/acericole/acericole6-petit.jpg",
    "/src/assets/img/petit/boucherie/boucherie2-petit.jpg", "/src/assets/img/petit/boucherie/boucherie3-petit.jpg", "/src/assets/img/petit/boucherie/boucherie4-petit.jpg", "/src/assets/img/petit/boucherie/boucherie5-petit.jpg", "/src/assets/img/petit/boucherie/boucherie6-petit.jpg", "/src/assets/img/petit/boucherie/boucherie7-petit.jpg",
    "/src/assets/img/petit/boulangerie/boulangerie-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie3-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie4-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie5-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie6-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie7-petit.jpg",
    "/src/assets/img/petit/degustation/degustation-petit.jpg", "/src/assets/img/petit/degustation/degustation3-petit.jpg", "/src/assets/img/petit/degustation/degustation4-petit.jpg", "/src/assets/img/petit/degustation/degustation5-petit.jpg", "/src/assets/img/petit/degustation/degustation6-petit.jpg", "/src/assets/img/petit/degustation/degustation6-petit.jpg",
    "/src/assets/img/petit/epicerie/epicerie-petit.jpg", "/src/assets/img/petit/epicerie/epicerie2-petit.jpg", "/src/assets/img/petit/epicerie/epicerie3-petit.jpg", "/src/assets/img/petit/epicerie/epicerie4-petit.jpg", "/src/assets/img/petit/epicerie/epicerie5-petit.jpg", "/src/assets/img/petit/epicerie/epicerie7-petit.jpg",
    "/src/assets/img/petit/fromagerie/fromage-petit.jpg", "/src/assets/img/petit/fromagerie/fromage2-petit.jpg", "/src/assets/img/petit/fromagerie/fromage3-petit.jpg", "/src/assets/img/petit/fromagerie/fromage4-petit.jpg", "/src/assets/img/petit/fromagerie/fromage5-petit.jpg", "/src/assets/img/petit/fromagerie/fromage6-petit.jpg",
    "/src/assets/img/petit/metsprepares/metsprepare-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare2-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare3-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare4-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare6-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare7-petit.jpg",
    "/src/assets/img/petit/microbrasserie/microbrasserie-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie2-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie3-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie4-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie5-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie7-petit.jpg",
    "/src/assets/img/petit/vin-cidre/vin-cidre-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre2-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre4-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre5-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre6-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre8-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre9-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre10-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre11-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre12-petit.jpg"];

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
    data.objSousCat = obj.Agroalimentaire.sousCategories
    // const response = await axios.get(`http://localhost:8000/api/categorie/list`);
    // dataAxios.categories = response.data.Agroalimentaire;
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
        <div class="agroalimentaire">
            <header class="agroalimentaire" ref="contenuElement">
                <div class="rectangle-noir"></div>
                <div class="rectangle-pale">
                    <TitreCommun :titre="obj.Agroalimentaire.name" />
                    <LayoutImages :urlnth1="imagesrandom[tableau[0]]" :urlnth2="imagesrandom[tableau[1]]"
                        :urlnth3="imagesrandom[tableau[2]]" :urlnth4="imagesrandom[tableau[3]]"
                        :urlnth5="imagesrandom[tableau[4]]" :urlnth6="imagesrandom[tableau[5]]"
                        :urlnth7="imagesrandom[tableau[6]]" />
                    <img :ref="position" :src="imagesrandom[position]" alt="Placeholder">
                </div>
            </header>
            <div class="elevator-pitch">
                <ParagrapheCommunSlot>
                    <p>De chez nous à chez vous. Que se soit de la tartinade, des produits laitiers, des viandes, des
                        cidres, du
                        fromage, des pâtisseries en passant par des spiritueux, faite la connaissance de nos produits locaux
                        et
                        encouragez nos producteurs qui connaissent à merveille leur coin de pays.</p>
                </ParagrapheCommunSlot>
            </div>
            <CoucheInspirationCategorie :Evenement="data.objForfait" />
            <TitreCommun titre="La région vous propose..." />
            <div class="wrapper-lien-sous-categorie">
                <ImageCliquable v-for="categorie in obj.Agroalimentaire.sousCategories" :key="categorie.id"
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
header.agroalimentaire {
    opacity: 0;
}
</style>