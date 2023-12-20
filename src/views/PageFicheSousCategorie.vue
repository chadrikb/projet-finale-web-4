<script setup>
import { useRoute } from 'vue-router';
import { onBeforeMount, reactive } from 'vue';
import obj from "@/assets/database/obj-categorie-list.json";
import FicheSousCategorie from '../components/FicheSous-Categorie/FicheSous-Categorie.vue';
import HeaderSite from '../components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';
// const props = defineProps({
//         objSousCategories: {
//         type: Object,
//         required: true,
//     }
// });

onBeforeMount(() => {
    const route = useRoute();
    const test = route.params.id;
    for (let key in obj) {
        const sousCategories = obj[key].sousCategories;

        for (let i = 0; i < sousCategories.length; i++) {
            const currentSousCategorie = sousCategories[i];
            for (let cle in currentSousCategorie.entreprises) {
                if (currentSousCategorie.entreprises[cle].pathname == test) {
                    data.objJason = currentSousCategorie.entreprises[cle];
                }
            }
        }
    }
    console.log(data.objJason);
})

const data = reactive({
    objJason: []
});
</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="main">
            <FicheSousCategorie :objSousCategories="data.objJason" />
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss"></style>