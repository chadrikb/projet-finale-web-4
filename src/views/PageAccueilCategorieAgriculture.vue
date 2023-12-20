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
const imagesrandom = ["/src/assets/img/petit/acericole/acericole3-petit.jpg", "/src/assets/img/petit/acericulteur/erable3-petit.jpg", "/src/assets/img/petit/acericulteur/erable-petit.jpg",
    "/src/assets/img/petit/maraicher/maraicher-petit.jpg", "/src/assets/img/petit/maraicher/maraicher3-petit.jpg", "/src/assets/img/petit/maraicher/maraicher4-petit.jpg",
    "/src/assets/img/petit/laitier/laitier-petit.jpg", "/src/assets/img/petit/laitier/laitier2-petit.jpg", "/src/assets/img/petit/laitier/laitier3-petit.jpg",
    "/src/assets/img/petit/elevage/elevage-petit.jpg", "/src/assets/img/petit/elevage/elevage3-petit.jpg", "/src/assets/img/petit/elevage/elevage4-petit.jpg",
    "/src/assets/img/petit/bio/bio-petit.jpg", "/src/assets/img/petit/bio/bio3-petit.jpg", "/src/assets/img/petit/bio/bio4-petit.jpg",
    "/src/assets/img/petit/apiculteur/apiculteur2-petit.jpg", "/src/assets/img/petit/apiculteur/apiculteur3-petit.jpg", "/src/assets/img/petit/apiculteur/apiculteur4-petit.jpg",
    "/src/assets/img/petit/vin-cidre/vin-cidre13-petit.jpg", "/src/assets/img/petit/pomiculteurs/pomme2-petit.jpg", "/src/assets/img/petit/pomiculteurs/pomme3-petit.jpg",
    "/src/assets/img/petit/serriculteur/serre-petit.jpg", "/src/assets/img/petit/serriculteur/serre3-petit.jpg", "/src/assets/img/petit/serriculteur/serre4-petit.jpg"];

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
    data.objSousCat = obj.Agriculture.sousCategories
    // const response = await axios.get(`http://localhost:8000/api/categorie/list`);
    // dataAxios.categories = response.data.Agriculture;
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
        <div class="agriculture">
            <header class="agriculture" ref="contenuElement">
                <div class="rectangle-noir"></div>
                <div class="rectangle-pale">
                    <TitreCommun :titre="obj.Agriculture.name" />
                    <LayoutImages :urlnth1="imagesrandom[tableau[0]]" :urlnth2="imagesrandom[tableau[1]]"
                        :urlnth3="imagesrandom[tableau[2]]" :urlnth4="imagesrandom[tableau[3]]"
                        :urlnth5="imagesrandom[tableau[4]]" :urlnth6="imagesrandom[tableau[5]]"
                        :urlnth7="imagesrandom[tableau[6]]" />
                    <img :ref="position" :src="imagesrandom[position]" alt="Placeholder">
                </div>
            </header>
            <div class="elevator-pitch">
                <ParagrapheCommunSlot>
                    <p>L'agriculture en région est une composante essentielle de notre économie et de notre société. Les
                        vastes
                        champs cultivés, les fermes pittoresques et les prairies verdoyantes sont le cœur de nos paysages
                        ruraux. Les agriculteurs locaux cultivent avec passion une variété de produits, des céréales aux
                        légumes
                        frais, en passant par les produits laitiers et la viande de qualité.</p>
                </ParagrapheCommunSlot>
            </div>
            <CoucheInspirationCategorie :Evenement="data.objForfait" />
            <TitreCommun titre="La région vous propose..." />
            <div class="wrapper-lien-sous-categorie">
                <ImageCliquable v-for="categorie in obj.Agriculture.sousCategories" :key="categorie.id"
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
            <FooterCommun/>
        </div>
    </div>
</template>

<style lang="scss">
header.agriculture {
    opacity: 0;
}
</style>