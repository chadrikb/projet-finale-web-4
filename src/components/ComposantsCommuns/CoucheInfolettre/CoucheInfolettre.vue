<script setup>
    import CercleSvgCommun from "../CercleSvg/CercleSvgCommun.vue";
    import PointilleSvgCommun from "../PointilleSvg/PointilleSvgCommun.vue";
    import TitreCommun from "../Titre/TitreCommun.vue";

</script>

<template>
    <div class="infolettre">
        <div class="titre-infolettre">
            <TitreCommun :titre ="'Info'" />
            <TitreCommun :titre ="'lettre'"/>
        </div>
        <div class="bande">
            <div class="input-email">
                <p>Abonnez-vous à notre infolettre</p>
                <input type="email">
                <input type="submit" value="M'inscrire">
            </div>
        </div>
        <div class="cercles">
            <CercleSvgCommun :circleSmall="150" :circleMedium="150" :circleLarge="150" :circleXLarge="150"/>
            <CercleSvgCommun :circleSmall="80" :circleMedium="90" :circleLarge="90" :circleXLarge="90" />
        </div>
        <PointilleSvgCommun />
        <PointilleSvgCommun />
        <PointilleSvgCommun />
    </div>
</template>

<style lang="scss"></style>