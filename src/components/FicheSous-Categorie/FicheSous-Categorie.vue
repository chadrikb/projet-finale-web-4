<script setup>
import { onBeforeMount, reactive } from 'vue';
import PointilleSvgCommun from '../ComposantsCommuns/PointilleSvg/PointilleSvgCommun.vue';
import LocalisationSvgCommun from '../ComposantsCommuns/LocalisationSvg/LocalisationSvgCommun.vue';
import TitreCommun from '../ComposantsCommuns/Titre/TitreCommun.vue';
import ParagrapheCommun from '../ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
import BoutonCommun from '../ComposantsCommuns/Bouton/BoutonCommun.vue';

const props = defineProps({
    objSousCategories: {
        type: Object,
        required: true,
    },
    urlImage: {
        Type: String,
        required: true,
        default: "/src/assets/img/png/imgplaceholder.png"
    },
});
//  const props = defineProps ({
//     titreCategorie: {
//         Type: String,
//         required: true,
//         default: "Agroalimentaire"
//     },
//     titreSousCategorie: {
//         Type: String,
//         required: true,
//         default: "Microbrasserie"
//     },
//     nomFicheArtisans: {
//         Type: String,
//         required: true,
//         default: "L'authentique Microbrasserie"
//     },
//     descriptionArtisan: {
//         Type: String,
//         required: true,
//         default: "Aliquam sollicitudin iaculis ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vehicula ultrices mi, in pharetra neque dapibus non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ut diam maximus, sollicitudin nisl molestie, egestas ante. Nunc bibendum leo sed dapibus molestie. Ut porta euismod mauris."
//     },
//     adresse: {
//         Type: String,
//         required: true,
//         default: "168 Chem. Grande-Côte, Saint-Eustache, J1A 2B3 "
//     },
//     telephone: {
//         Type: String,
//         required: true,
//         default: "450-473-8745"
//     },
//     urlSite: {
//         Type: String,
//         required: true,
//         default: "http://www.authentiquemicrobrasserie.ca"
//     },
//     logoFiche: {
//         Type: String,
//         required: true,
//         default: "src/assets/img/png/imgplaceholder.png"
//     },
//     logocommodite: {
//         Type: String,
//         required: true,
//         default: "src/assets/img/png/imgplaceholder.png"
//     },
//  });
console.log(props.objSousCategories);
</script>

<template>
    <div class="fiche-sous-categorie">
        <div class="carre-noir"></div>
        <div class="fiche">
            <div class="infos-fiche">
                <TitreCommun :titre="props.objSousCategories.grandparent" />
                <h2 v-text="props.objSousCategories.parent"></h2>
                <h3 v-text="props.objSousCategories.name"></h3>
                <ParagrapheCommun :paragraphe="props.objSousCategories.description" />
                <div class="adresse-fiche">
                    <LocalisationSvgCommun />
                    <h4
                        v-text="props.objSousCategories.adresse + ', ' + props.objSousCategories.ville.name + ', ' + props.objSousCategories.codePostal">
                    </h4>
                </div>
                <div class="telephone-fiche">
                    <h4 v-text="props.objSousCategories.numTelephone"></h4>
                </div>
                <BoutonCommun>
                    <RouterLink :to="props.objSousCategories.siteWeb">
                    </RouterLink>Vister le site web
                </BoutonCommun>
            </div>
            <div class="images-fiche">
                <img :src="props.objSousCategories.urlLogo" alt="Placeholder">
                <img :src="props.objSousCategories.urlPhoto" alt="Placeholder">
                <PointilleSvgCommun />
                <div class="commodites">
                    <img :src="props.logocommodite" alt="commodite">
                    <img :src="props.logocommodite" alt="commodite">
                    <img :src="props.logocommodite" alt="commodite">
                    <img :src="props.logocommodite" alt="commodite">
                    <img :src="props.logocommodite" alt="commodite">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
