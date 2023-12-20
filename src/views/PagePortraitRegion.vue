<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Page pour les MRCs
******************************-->
<script setup>
import HeaderSite from '@/components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import TitreCommun from '@/components/ComposantsCommuns/Titre/TitreCommun.vue';
import ParagrapheCommunSlot from '@/components/ComposantsCommuns/Paragraphe/ParagrapheCommunSlot.vue';
import PointilleSvgCommun from '@/components/ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
import VignettePortraitRegion from '../components/ComposantsCommuns/PortraitDeLaRegion/VignettePortraitRegion/VignettePortraitRegion.vue';
import CarteInteractive from '../components/ComposantsCommuns/PortraitDeLaRegion/CarteInteractive/CarteInteractive.vue';
import { reactive, onBeforeMount } from 'vue';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';

const data = reactive({
    titre: 'Portrait de la région',
    rayon: 100,
})

onBeforeMount(() => { window.scrollTo({ top: 0 }) })

</script>

<template>
    <div class="interface">
        <HeaderSite />

        <div class="main">
            <div class="entete">
                <TitreCommun :titre="data.titre" />
                <ParagrapheCommunSlot>
                    La région des Laurentides, située au nord de Montréal, est une
                    destination populaire pour les amateurs d'agrotourisme. Avec
                    ses terres agricoles riches et ses fermes familiales, les visiteurs
                    peuvent découvrir une variété de produits alimentaires locaux
                    tout en profitant du cadre naturel de la région.
                </ParagrapheCommunSlot>
                <PointilleSvgCommun />
            </div>
            <VignettePortraitRegion class="vignette-1" :img1="'/src/assets/img/moyen/cueillette/cueillette-moyen.jpg'"
                :img2="'/src/assets/img/moyen/cueillette/cueillette4-moyen.jpg'">
                <template #texte-1>La région des Laurentides est particulièrement
                    connue pour ses cultures de pommes, de
                    fraises, de bleuets et de framboises. Les fermes
                    locales offrent des visites guidées et des
                    dégustations de produits frais, ainsi que la
                    possibilité de cueillir vos propres fruits et
                    légumes en fonction de la saison. </template>
                <template #texte-2>Fruits et légumes </template>
                <template #texte-3>En été, les marchés fermiers sont l'endroit idéal
                    pour acheter des produits frais, y compris des
                    fruits, des légumes, de la viande et des
                    produits laitiers.</template>
                <template #texte-4>été</template>
            </VignettePortraitRegion>
            <!-- ------------------------------------------------------------------- -->
            <VignettePortraitRegion class="vignette-2" :img1="'/src/assets/img/moyen/vin-cidre/vin-cidre2-moyen.jpg'"
                :img2="'/src/assets/img/moyen/vin-cidre/vin-cidre8-moyen.jpg'">
                <template #texte-1>Les cidreries
                    locales proposent également des dégustations de cidre et des visites guidées, offrant une expérience
                    unique
                    pour les amateurs de boissons artisanales.</template>
                <template #texte-2>Vignobles</template>
                <template #texte-3>Les Laurentides offrent également une variété de vins locaux produits dans les vignobles
                    de
                    la région. Les vignobles
                    proposent des dégustations de vins, des
                    visites guidées et des événements
                    saisonniers pour les visiteurs. </template>
                <template #texte-4>Cidreries</template>
            </VignettePortraitRegion>
            <!-- ------------------------------------------------------------------- -->
            <VignettePortraitRegion class="vignette-3" :img1="'/src/assets/img/moyen/activite/activite-moyen.jpg'"
                :img2="'/src/assets/img/moyen/activite/activite4-moyen.jpg'">
                <template #texte-1>Les sentiers de randonnée
                    offrent des vues spectaculaires sur la région, tandis
                    que les rivières et les lacs sont parfaits pour la
                    pratique du canoë et du kayak. Les routes
                    pittoresques de la région sont idéales pour les
                    balades à vélo, offrant une vue imprenable sur les
                    paysages locaux.</template>
                <template #texte-2>Randonnées</template>
                <template #texte-3>
                    En plus de la nourriture et des boissons, les
                    Laurentides offrent une variété d'activités de plein
                    air pour les visiteurs qui souhaitent explorer la
                    nature de la région. </template>
                <template #texte-4>Plein air</template>
            </VignettePortraitRegion>
            <!-- ------------------------------------------------------------------ -->
            <VignettePortraitRegion class="vignette-4" :img1="'/src/assets/img/moyen/picnic/picnic-moyen.jpg'"
                :img2="'/src/assets/img/moyen/acericulteurs/erable3-moyen.jpg'">
                <template #texte-1>Les érablières locales ouvrent également leurs portes pour la saison des sucres, offrant
                    des
                    dégustations de sirop d'érable et des visites guidées de leurs installations de production. Les fermes
                    locales proposent également des activités amusantes pour les enfants, comme des labyrinthes de maïs et
                    des
                    promenades en charrette.</template>
                <template #texte-2>Automne</template>
                <template #texte-3>L'automne est une saison particulièrement populaire pour l'agrotourisme dans les
                    Laurentides.
                    Les visiteurs viennent de partout pour admirer les couleurs de l'automne et pour participer à la
                    cueillette
                    de pommes et de citrouilles. </template>
                <template #texte-4>Érablière</template>
            </VignettePortraitRegion>
            <!-- ------------------------------------------------------------------- -->
            <VignettePortraitRegion class="vignette-1" :img1="'/src/assets/img/moyen/chalet/chalet3-moyen.jpg'"
                :img2="'/src/assets/img/moyen/chalet/chalet2-moyen.jpg'">
                <template #texte-1>En hiver, les Laurentides offrent également des activités agricoles. Les fermes locales
                    proposent des activités telles que la fabrication
                    de fromage, la traite des vaches et la production de sirop d'érable. </template>
                <template #texte-2>Ski</template>
                <template #texte-3>Les visiteurs peuvent également profiter de la saison de ski dans les Laurentides et
                    explorer
                    les restaurants locaux, qui proposent des menus mettant en vedette des produits locaux et de
                    saison.</template>
                <template #texte-4>Hiver</template>
            </VignettePortraitRegion>
            <!-- ------------------------------------------------------------------- -->
            <VignettePortraitRegion class="vignette-3" :img1="'/src/assets/img/moyen/degustation/degustation7-moyen.jpg'"
                :img2="'/src/assets/img/moyen/degustation/degustation6-moyen.jpg'">
                <template #texte-1>Le Festival des couleurs de Mont-Tremblant est l'un des événements les plus populaires de
                    la
                    région, offrant des activités pour toute la famille, y compris des dégustations de produits locaux et
                    des
                    spectacles de musique.</template>
                <template #texte-2>Évènements</template>
                <template #texte-3>En plus de l'agrotourisme, les Laurentides sont également connues pour leurs nombreux
                    festivals et événements, qui célèbrent la nourriture, la culture et la nature de la région. </template>
                <template #texte-4>Festivals</template>
            </VignettePortraitRegion>
            <CarteInteractive />
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss"></style>