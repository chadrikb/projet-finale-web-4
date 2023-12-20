<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la navigation du dashboard
******************************-->
<script setup>
import { getCurrentInstance, ref } from 'vue';

const instance = getCurrentInstance();

const props = defineProps({
    nav: Object,
})

const valeur = ref('');

function changerActif(name) {
    valeur.value = name;
    console.log(name);
    instance.emit('changer-menu');
}

defineEmits(['changer-menu']);
defineExpose({ valeur });

</script>

<template>
    <div class="nav-dashboard">
        <ul>
            <li v-for="(titre, index) in props.nav" @click="changerActif(titre.nom)" :key="index"><span>{{ titre.nom}}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="scss"></style>