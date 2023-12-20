<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour afficher les champs de mot de passe
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
        <!-- [ input pour le mot de passse ] -->
        <input required="" type="password" class="input" :id="props.id">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>
            <!-- [ slot pour le contenu du label ] -->
            <slot></slot>
        </label>
    </div>
</template>

<style lang="scss"></style>
