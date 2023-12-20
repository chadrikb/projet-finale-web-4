<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
const props = defineProps({
    nom: {
        type: String,
        required: true,
        default: "//Nom sous-catégories//"
    },
    path: {
        type: String,
        required: true,
        default: "//sous-categories"
    },
    image: {
        type: String,
        required: true,
        default: "src/assets/img/png/imgplaceholder.png"
    },
    objSousCat: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
        default: 0
    },
});

console.log(props.objSousCat);
    // console.log(props.objSousCat.Activites.sousCategories[props.index].name);
    // console.log(props.index);
</script>

<template>
    <div class="lien-sous-categorie">
        <div class="nom-lien">
            <h2> {{ props.nom }}</h2>
        </div>
        <div class="lien">
            <RouterLink :to="props.path" :test1="props.objSousCat"> <img :src="props.image" :alt="props.nom" > </RouterLink>
        </div>
    </div>
</template>

<style lang="scss"></style>
