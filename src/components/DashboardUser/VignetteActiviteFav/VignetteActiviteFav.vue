<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour les vignettes des activités favorites
******************************-->
<script setup>
import CoeurLike from '@/components/ComposantsCommuns/CoeurLike/CoeurLike.vue';
import Titre from '@/components/ComposantsCommuns/Titre/TitreCommun.vue';


const props = defineProps({
    objSousCategorie: {
        type: Object,
    }
});
console.log(props.objSousCategorie);
</script>

<template>
    <div class="vignette-fav">
        <img :src="props.objSousCategorie.imagemoyen" alt="">
        <div class="info-vignette">
            <CoeurLike />
            <Titre :titre="props.objSousCategorie.name" />
        </div>

    </div>
</template>

<style lang="scss"></style>