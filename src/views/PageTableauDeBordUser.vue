<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Page le tableau de bord de l'utilisateur
******************************-->
<script setup>
import DashboardUser from '@/components/DashboardUser/DashboardUser.vue';
import HeaderSite from '@/components/ComposantsCommuns/HeaderSite/HeaderSite.vue';
import { onBeforeMount } from 'vue';
import FooterCommun from '../components/ComposantsCommuns/Footer/FooterCommun.vue';

onBeforeMount(() => { window.scrollTo({ top: 0 }) })

</script>

<template>
    <div class="interface">
        <HeaderSite />
        <div class="main">
            <DashboardUser />
            <FooterCommun />
        </div>
    </div>
</template>

<style lang="scss"></style>