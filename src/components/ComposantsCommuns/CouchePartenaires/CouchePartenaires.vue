<script setup>
    import TitreCommun from '../Titre/TitreCommun.vue';
    import PointilleSvgCommun from '../PointilleSvg/PointilleSvgCommun.vue';
</script>

<template>
    <div class="couche-partenaires">
        <div class="entetePartenaires">
            <TitreCommun :titre ="'Nos partenaires'"/>
            <PointilleSvgCommun />
        </div>
        <div class="logos-partenaires">
            <img src="/src/assets/img/png/SAQ_Logo.png" alt="SAQ">
            <img src="/src/assets/img/png/HYDROQUEBEC_Logo.png" alt="Hydro-Quebec">
            <img src="/src/assets/img/png/DESJARDINS_Logo.png" alt="Desjardins">
            <img src="/src/assets/img/png/ECONOMIE_Logo.png" alt="Développement économique, Innovation et Exportation Québec">
            <img src="/src/assets/img/png/EMPLOIQUEBEC_Logo.png" alt="Emploi Québec">
            <img src="/src/assets/img/png/CLD_Logo.jpg" alt="Les CLD">
        </div>
    </div>
</template>

<style lang="scss"></style>