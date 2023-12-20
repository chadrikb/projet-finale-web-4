<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour afficher les forfaits favoris
******************************-->
<script setup>
import Titre from '@/components/ComposantsCommuns/Titre/TitreCommun.vue';
import Paragraphe from '@/components/ComposantsCommuns/Paragraphe/ParagrapheCommun.vue';
import CoeurLike from '../../ComposantsCommuns/CoeurLike/CoeurLike.vue';
import BoutonCommun from '../../ComposantsCommuns/Bouton/BoutonCommun.vue';
import PointDeCarte from '../../ComposantsCommuns/PointDeCarte/PointDeCarte.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';

const props = defineProps({
    titre: {
        type: String,
        required: true,
        default: "/// titre default ///"
    },
    typeCategorie: {
        type: String,
        required: true,
        default: "/// type categorie default ///"
    },
    nomActivite: {
        type: String,
        required: true,
        default: "/// nom activite default ///"
    },
    urlNomActivite: {
        type: String,
        required: true,
        default: "/// url nom activite default ///"
    },
    descForfait: {
        type: String,
        required: true,
        default: "/// decription forfait default ///"
    },
    prix: {
        type: String,
        required: true,
        default: "/// prix default ///"
    },
    valide: {
        type: String,
        required: true,
        default: "/// valide default ///"
    },
    url: {
        type: String,
        required: true,
        default: "/// url default ///"
    },
    urlTitre: {
        type: String,
        required: true,
        default: "/// url titre default ///"
    },
    img:{
        type: String,
        required: true,
        default: "/// img default ///"
    }
});

const titre = ref(null);
const prix = ref(null);
const date = ref(null);
onMounted(() => {
    window.addEventListener("scroll", onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, true);
});
function onScroll() {
    const vignettes = titre.value.offsetTop;
    const divPrix = prix.value.offsetTop;
    const divDate = prix.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > vignettes) {
        anime({
            targets: titre.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
    if (scrollPosition > divPrix) {
        anime({
            targets: prix.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
    if (scrollPosition > divDate) {
        anime({
            targets: date.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}
// console.log(props.typeCategorie);
</script>

<template>
    <div class="forfait-fav">
        <div class="entete-forfait" ref="titre">
            <PointDeCarte />
            <Titre class="titre-entete-forfait-fav" :titre="props.titre" />
        </div>
        <Paragraphe class="forfait-categorie" :paragraphe="props.typeCategorie" />
        <Paragraphe class="forfait-endroit" :paragraphe="props.nomActivite" />
        <div class="forfait-img">
            <img :src="props.img" :alt="props.nomActivite">
            <CoeurLike />
        </div>
        <Paragraphe class="desc-forfait" :paragraphe="props.descForfait" />
        <div class="prix">
            <p class="prix" ref="prix">Prix :</p>
            <Paragraphe class="prix-forfait" :paragraphe="props.prix" />
        </div>
        <div class="date">
            <p class="date" ref="date">Valide : </p>
            <Paragraphe class="date-forfait" :paragraphe="props.valide" />
        </div>
        <BoutonCommun>
            <RouterLink
                :to="{ name: 'forfait-specifique', params: { titre: props.urlTitre, num: props.url, affichage: props.urlNomActivite } }">
                Réserver
            </RouterLink>
        </BoutonCommun>
    </div>
</template>

<style lang="scss">
.entete-forfait {
    opacity: 0;
}

p.prix {
    opacity: 0;
}

p.date {
    opacity: 0;
}
</style>