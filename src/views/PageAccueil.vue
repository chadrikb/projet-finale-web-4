<!--*********************************
    Nom: Chadrik Bertrand
    Matricule: 2037079
    Desciption: page accueil du site
    -------------------------------
    Nom: Claudia Coté Gariepy
    Matricule: 1474731
 ******************************-->
<script setup>
import { onBeforeMount, ref, reactive, onMounted, onUnmounted } from 'vue';
import forfaits from '@/assets/database/forfaits.json';
// import axios from 'axios';
// import { RouterLink } from 'vue-router';
import HeaderSite from '../components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import ParagrapheCommunSlot from '../components/ComposantsCommuns/Paragraphe/ParagrapheCommunSlot.vue';
import CarreSvgCommun from '../components/ComposantsCommuns/CarreSvg/CarreSvgCommun.vue';
import PointilleSvgCommun from '../components/ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
import CercleSvgCommun from '../components/ComposantsCommuns/CercleSvg/CercleSvgCommun.vue';
import LayoutImages from '../components/Headers/LayoutImages.vue';
import CoucheInspirationAccueil from '../components/CoucheInspiration/CoucheInspirationAccueil/CoucheInspirationAccueil.vue';
import CoucheInfolettreVue from '../components/ComposantsCommuns/CoucheInfolettre/CoucheInfolettre.vue';
import CoucheRemplissage from '../components/ComposantsCommuns/CoucheRemplissage/CoucheRemplissage.vue';
import CoucheHebergements from '../components/CoucheHebergements/CoucheHebergements.vue';
import CouchePartenairesVue from '../components/ComposantsCommuns/CouchePartenaires/CouchePartenaires.vue';
import CoucheCalendrierVue from '../components/CoucheCalendrier/CoucheCalendrier.vue';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';
import anime from 'animejs';

const data = reactive({
    objForfait: {},
    objForfaitFamille: {}
})

const position = ref(null);
const decouvrez = ref(null);
const experience = ref(null);
const complementaire = ref(null);
const tableau = [];
const imagesrandom = ["/src/assets/img/petit/tour/tour2-petit.jpg", "/src/assets/img/petit/tour/tour3-petit.jpg",
    "/src/assets/img/petit/picnic/picnic-petit.jpg", "/src/assets/img/petit/picnic/picnic3-petit.jpg", "/src/assets/img/petit/picnic/picnic4-petit.jpg",
    "/src/assets/img/petit/musee/musee-petit.jpg", "/src/assets/img/petit/musee/musee2-petit.jpg", "/src/assets/img/petit/interpretation/interpretation2-petit.jpg",
    "/src/assets/img/petit/marches/marche-petit.jpg", "/src/assets/img/petit/marches/marche3-petit.jpg", "/src/assets/img/petit/marches/marche5-petit.jpg", "/src/assets/img/petit/marches/marche6-petit.jpg",
    "/src/assets/img/petit/activite/activite-petit.jpg", "/src/assets/img/petit/activite/activite2-petit.jpg", "/src/assets/img/petit/activite/activite4-petit.jpg",
    "/src/assets/img/petit/cueillette/cueillette-petit.jpg", "/src/assets/img/petit/cueillette/cueillette2-petit.jpg", "/src/assets/img/petit/cueillette/cueillette4-petit.jpg", "/src/assets/img/petit/acericole/acericole3-petit.jpg", "/src/assets/img/petit/acericulteur/erable3-petit.jpg", "/src/assets/img/petit/acericulteur/erable-petit.jpg",
    "/src/assets/img/petit/maraicher/maraicher-petit.jpg", "/src/assets/img/petit/maraicher/maraicher3-petit.jpg", "/src/assets/img/petit/maraicher/maraicher4-petit.jpg",
    "/src/assets/img/petit/laitier/laitier-petit.jpg", "/src/assets/img/petit/laitier/laitier2-petit.jpg", "/src/assets/img/petit/laitier/laitier3-petit.jpg",
    "/src/assets/img/petit/elevage/elevage-petit.jpg", "/src/assets/img/petit/elevage/elevage3-petit.jpg", "/src/assets/img/petit/elevage/elevage4-petit.jpg",
    "/src/assets/img/petit/bio/bio-petit.jpg", "/src/assets/img/petit/bio/bio3-petit.jpg", "/src/assets/img/petit/bio/bio4-petit.jpg",
    "/src/assets/img/petit/apiculteur/apiculteur2-petit.jpg", "/src/assets/img/petit/apiculteur/apiculteur3-petit.jpg", "/src/assets/img/petit/apiculteur/apiculteur4-petit.jpg",
    "/src/assets/img/petit/vin-cidre/vin-cidre13-petit.jpg", "/src/assets/img/petit/pomiculteurs/pomme2-petit.jpg", "/src/assets/img/petit/pomiculteurs/pomme3-petit.jpg",
    "/src/assets/img/petit/serriculteur/serre-petit.jpg", "/src/assets/img/petit/serriculteur/serre3-petit.jpg", "/src/assets/img/petit/serriculteur/serre4-petit.jpg", "/src/assets/img/petit/acericole/acericole2-petit.jpg", "/src/assets/img/petit/acericole/acericole3-petit.jpg", "/src/assets/img/petit/acericole/acericole4-petit.jpg", "/src/assets/img/petit/acericole/acericole5-petit.jpg", "/src/assets/img/petit/acericole/acericole6-petit.jpg",
    "/src/assets/img/petit/boucherie/boucherie2-petit.jpg", "/src/assets/img/petit/boucherie/boucherie3-petit.jpg", "/src/assets/img/petit/boucherie/boucherie4-petit.jpg", "/src/assets/img/petit/boucherie/boucherie5-petit.jpg", "/src/assets/img/petit/boucherie/boucherie6-petit.jpg", "/src/assets/img/petit/boucherie/boucherie7-petit.jpg",
    "/src/assets/img/petit/boulangerie/boulangerie-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie3-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie4-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie5-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie6-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie7-petit.jpg",
    "/src/assets/img/petit/degustation/degustation-petit.jpg", "/src/assets/img/petit/degustation/degustation3-petit.jpg", "/src/assets/img/petit/degustation/degustation4-petit.jpg", "/src/assets/img/petit/degustation/degustation5-petit.jpg", "/src/assets/img/petit/degustation/degustation6-petit.jpg", "/src/assets/img/petit/degustation/degustation6-petit.jpg",
    "/src/assets/img/petit/epicerie/epicerie-petit.jpg", "/src/assets/img/petit/epicerie/epicerie2-petit.jpg", "/src/assets/img/petit/epicerie/epicerie3-petit.jpg", "/src/assets/img/petit/epicerie/epicerie4-petit.jpg", "/src/assets/img/petit/epicerie/epicerie5-petit.jpg", "/src/assets/img/petit/epicerie/epicerie7-petit.jpg",
    "/src/assets/img/petit/fromagerie/fromage-petit.jpg", "/src/assets/img/petit/fromagerie/fromage2-petit.jpg", "/src/assets/img/petit/fromagerie/fromage3-petit.jpg", "/src/assets/img/petit/fromagerie/fromage4-petit.jpg", "/src/assets/img/petit/fromagerie/fromage5-petit.jpg", "/src/assets/img/petit/fromagerie/fromage6-petit.jpg",
    "/src/assets/img/petit/metsprepares/metsprepare-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare2-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare3-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare4-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare6-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare7-petit.jpg",
    "/src/assets/img/petit/microbrasserie/microbrasserie-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie2-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie3-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie4-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie5-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie7-petit.jpg",
    "/src/assets/img/petit/vin-cidre/vin-cidre-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre2-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre4-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre5-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre6-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre8-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre9-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre10-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre11-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre12-petit.jpg",
    "/src/assets/img/petit/bedandbreakfast/bedandbreakfast2-petit.jpg", "/src/assets/img/petit/bedandbreakfast/bedandbreakfast2-petit.jpg", "/src/assets/img/petit/bedandbreakfast/bedandbreakfast3-petit.jpg",
    "/src/assets/img/petit/hotel/hotel-petit.jpg", "/src/assets/img/petit/hotel/hotel2-petit.jpg", "/src/assets/img/petit/hotel/hotel3-petit.jpg",
    "/src/assets/img/petit/spa/spa2-petit.jpg", "/src/assets/img/petit/spa/spa3-petit.jpg", "/src/assets/img/petit/spa/spa4-petit.jpg",
    "/src/assets/img/petit/villegiature/villegiature-petit.jpg", "/src/assets/img/petit/villegiature/villegiature3-petit.jpg", "/src/assets/img/petit/villegiature/villegiature4-petit.jpg", "/src/assets/img/petit/villegiature/villegiature5-petit.jpg",
    "/src/assets/img/petit/bistro/bistro-petit.jpg", "/src/assets/img/petit/bistro/bistro2-petit.jpg", "/src/assets/img/petit/bistro/bistro3-petit.jpg", "/src/assets/img/petit/bistro/bistro5-petit.jpg", "/src/assets/img/petit/bistro/bistro6-petit.jpg",
    "/src/assets/img/petit/gastronomie/gastronomie2-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie3-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie3-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie4-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie5-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie6-petit.jpg",
    "/src/assets/img/petit/cassecroute/cassecroute-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute3-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute4-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute5-petit.jpg"
];

function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const spanGras = ref ({});
const contenuElementAccueil = ref(null);
const contenuElement = ref(null);
const contenuElementInspiration = ref(null);
onMounted(() => {
    window.addEventListener("scroll", onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, true);
});

function onScroll() {
    const elementPosition = contenuElement.value.offsetTop;
    const elementPositionAccueil = contenuElementAccueil.value.offsetTop;
    const elementPositionInspiration = contenuElementInspiration.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > elementPosition) {
        anime({
            targets: contenuElement.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
    if (scrollPosition > elementPositionAccueil) {
        anime({
            targets: contenuElementAccueil.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
    if (scrollPosition > elementPositionInspiration) {
        anime({
            targets: contenuElementInspiration.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}
onBeforeMount(async () => {
    window.scrollTo({ top: 0 })
    decouvrez.value = GetRandomInt(imagesrandom.length);
    experience.value = GetRandomInt(imagesrandom.length);
    complementaire.value = GetRandomInt(imagesrandom.length);
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
});

data.objForfaitFamille = forfaits.Famille.Forfait
data.objForfait = forfaits.Detente.Forfait
// console.log(data.objForfait);
 
</script>
<template>
    <div class="interface">
        <HeaderSite />
        <div class="main">
            <RouterLink class="connexion" to="/connexion">Connexion</RouterLink>
            <header class="accueil" ref="contenuElementAccueil">
                <div class="absolut">
                    <CercleSvgCommun :circleSmall="42" :circleMedium="69" :circleLarge="80" :circleXLarge="115" />
                    <CercleSvgCommun :circleSmall="48" :circleMedium="90" :circleLarge="100" :circleXLarge="100" />
                    <CercleSvgCommun :circleSmall="100" :circleMedium="140" :circleLarge="200" :circleXLarge="200" />
                    <CercleSvgCommun :circleSmall="42" :circleMedium="69" :circleLarge="90" :circleXLarge="115" />
                    <PointilleSvgCommun />
                    <PointilleSvgCommun />
                    <PointilleSvgCommun />
                    <CarreSvgCommun />
                    <CarreSvgCommun />
                </div>
                <div class="entete">
                    <LayoutImages :urlnth1="imagesrandom[tableau[0]]" :urlnth2="imagesrandom[tableau[1]]"
                        :urlnth3="imagesrandom[tableau[2]]" :urlnth4="imagesrandom[tableau[3]]"
                        :urlnth5="imagesrandom[tableau[4]]" :urlnth6="imagesrandom[tableau[5]]"
                        :urlnth7="imagesrandom[tableau[6]]" />
                    <div class="slogan">
                        <h1>Les La<span class="contraste">urenti</span>des,</h1>
                        <h1>un <span class="contraste">territoir</span>e</h1>
                        <h1>GOU<span class="contraste">RMAN</span>D</h1>
                        <h1>!</h1>
                    </div>
                    <ParagrapheCommunSlot class="animate__animated animate__fadeInLeft animate__delay-1.5s">
                        <p>Bienvenue dans <span  ref="spanGras">les Laurentides</span>, une région du Québec qui est <span
                            ref="spanGras">un</span> véritable <span ref="spanGras">paradis</span> pour les gourmets ! Les
                            Laurentides offrent une expérience <span ref="spanGras">culinaire</span> unique en son genre <span
                            ref="spanGras">grâce</span> à sa scène gastronomique florissante, <span ref="spanGras">ses
                                produits</span> locaux de qualité supérieure et ses restaurants <span ref="spanGras">de
                                renom</span>. Que vous <span ref="spanGras">soyez</span> un passionné de cuisine ou simplement
                            un amoureux des bonnes choses, vous êtes <span ref="spanGras">sûr de trouver votre bonheur</span>
                            ici.</p>
                    </ParagrapheCommunSlot>
                </div>
            </header>
            <div class="sous-fold" ref="contenuElement">
                <div class="decouvrez">
                    <img :ref="decouvrez" :src="imagesrandom[decouvrez]" alt="Placeholder">
                    <ParagrapheCommunSlot class="animate__animated animate__fadeInLeft animate__delay-2.5s">
                        <p><span ref="spanGras">Découvrez</span> des produits locaux de première qualité tels que des fromages
                            artisanaux, des légumes biologiques, des viandes succulentes et du sirop d'érable de première
                            qualité. Les marchés fermiers locaux sont le lieu idéal pour découvrir <span ref="spanGras">ces
                                produits</span> et les savourer dans les restaurants de la région. Vous pourrez également
                            participer à des événements gastronomiques qui mettent en avant les produits locaux et les chefs
                            locaux. Profitez de la chance de rencontrer des producteurs passionnés et de déguster les
                            produits les plus <span ref="spanGras">frais</span> que vous n'ayez jamais goûtés.</p>
                    </ParagrapheCommunSlot>
                </div>
                <div class="experience">
                    <img :ref="experience" :src="imagesrandom[experience]" alt="Placeholder">
                    <ParagrapheCommunSlot class="animate__animated animate__fadeInLeft animate__delay-3.5s">
                        <p>Les Laurentides offrent également <span ref="spanGras">une expérience</span> culinaire unique grâce
                            à ses auberges et ses gîtes. Offrant des vues <span ref="spanGras">spectaculaires</span> sur les
                            montagnes et les lacs environnants, les auberges de la région proposent des menus traditionnels
                            de la région et utilisent des ingrédients locaux pour créer des plats savoureux et originaux.
                            Les gîtes offrent quant à eux des petits-déjeuners copieux et délicieux, souvent composés de
                            produits locaux et de confitures maison. Tout cela <span ref="spanGras">dans une ambiance
                                chaleureuse</span> et conviviale.</p>
                    </ParagrapheCommunSlot>
                </div>
                <img :ref="complementaire" :src="imagesrandom[complementaire]" alt="Placeholder">
            </div>
            <div class="test" ref="contenuElementInspiration">
                <CoucheInspirationAccueil :Famille="data.objForfaitFamille" />
                <CoucheCalendrierVue />
                <CoucheInfolettreVue />
                <CoucheRemplissage />
                <CoucheHebergements :Hebergement="data.objForfait" />
                <CouchePartenairesVue />
                <FooterCommun />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.accueil {
    opacity: 0;
}

.sous-fold {
    opacity: 0;
}

.test {
    opacity: 0;
}

</style>