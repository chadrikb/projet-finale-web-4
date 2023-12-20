<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour le menu principale de la navigation desktop
******************************-->
<script setup>
import { getCurrentInstance, ref } from 'vue';

const instance = getCurrentInstance();

const props = defineProps({
    navPrinc: {
        type: Object,
        required: true,
    },

})

const index = ref('');
function changerMenu(nom) {
    index.value = nom;
    instance.emit("changerMenu", index.value);
    console.log(nom);
}
defineEmits(["changerMenu"]);
</script>

<template>
    <div class="background"></div>
    <div class="menu-princ">
        <!-- [ lien vers les pages de catégories ] -->
        <RouterLink :to="'/' + element.pathname" @mouseover="changerMenu(key)" v-for="(element, key) in props.navPrinc"
            :key="key">
            <p v-text="element.name"></p>
        </RouterLink>
    </div>
</template>

<style lang="scss"></style>
