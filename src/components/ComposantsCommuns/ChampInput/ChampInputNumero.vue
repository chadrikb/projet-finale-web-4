<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour afficher le champ de telephone
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
            <!-- [ input pour le numero ] -->
        <input required="" type="tel" class="input" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" :id="props.id">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>
                    <!-- [ slot pour le contenu du label ] -->
            <slot></slot>
        </label>
    </div>
</template>

<style lang="scss"></style>
