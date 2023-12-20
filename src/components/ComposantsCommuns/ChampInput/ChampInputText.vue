<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour afficher les champs de texte
******************************-->
<script setup>
const props = defineProps({
    id: {
        type: String,
        required: false,
        default: ''
    },
})
</script>

<template>
    <div class="group">
        <!-- [ input pour le texte ] -->
        <input required="" type="text" class="input" :id="props.id">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>
            <!-- [ input pour le texte ] -->
            <slot></slot>
        </label>
    </div>
</template>

<style lang="scss"></style>
