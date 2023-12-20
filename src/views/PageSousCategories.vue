<script setup>
import { useRoute } from 'vue-router';
import { onBeforeMount, reactive } from 'vue';
import SousCategories from '../components/SousCategories/SousCategories.vue';
import obj from "@/assets/database/obj-categorie-list.json";
// import axios from 'axios';

onBeforeMount(() => {
    window.scrollTo({ top: 0 })
    const route = useRoute();
    const test = route.params.id;
    for (let key in obj) {
        for (let cle in obj[key].sousCategories) {
            if (obj[key].sousCategories[cle].pathname == test) {
                data.objJason = obj[key].sousCategories[cle];
            }
            // console.log(obj[key].sousCategories[cle]);
        }
    }
    console.log(data.objJason);
})

const data = reactive({
    objJason: []
});
// const dataAxios = reactive({
//     id: null,
//     sousCategories: []
// });
// onBeforeMount( async () => {
//     window.scrollTo({top:0})
//     const response = await axios.get(`http://localhost:8000/api/categorie`);
//     dataAxios.sousCategories = response.data;
// });

// const props = defineProps({
//     id: Number,
//     index: {
//         type: Number,
//         required: true,
//         default: 0
//     }
// });

</script>

<template>
    <div class="wrapper-sous-categories">
        <SousCategories :objSousCategories="data.objJason" />

    </div>
</template>

<style lang="scss"></style>