<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la Navigation mobile
******************************-->
<script setup>
import LogoSite from './LogoSite/LogoSite.vue';
import navigationPrinc from './navigationPrinc/navigationPrinc.vue';
</script>

<template>
    <div class="header-site-mobile">
        <RouterLink to="/">
            <LogoSite />
        </RouterLink>
        <navigationPrinc />
    </div>
</template>

<style lang="scss"></style>