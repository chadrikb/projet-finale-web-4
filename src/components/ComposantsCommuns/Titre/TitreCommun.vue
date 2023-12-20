<script setup>
    const props = defineProps({
        titre: {
            type: null,
            required: true,
            default: "// Place holder : Titre //"
        }  
    });
</script>

<template>
    <div>
        <h1 class="titreCommun" v-text="props.titre"></h1>
    </div>
</template>

<style lang="scss"></style>

