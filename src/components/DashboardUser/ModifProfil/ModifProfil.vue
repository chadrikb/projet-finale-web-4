<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la modification du profil
******************************-->
<script setup>
import HeaderPageDashboard from '../HeaderPageDashboard/HeaderPageDashboard.vue';
import TitreCommun from '../../ComposantsCommuns/Titre/TitreCommun.vue';
import ChampInputTextVue from '../../ComposantsCommuns/ChampInput/ChampInputText.vue';
import FooterCommun from '../../ComposantsCommuns/Footer/FooterCommun.vue';
</script>

<template>
    <div class="main">
        <HeaderPageDashboard />
        <form id="modif-profil">
            <div class="modif-nom">
                <TitreCommun :titre="'Nom'" />
                <ChampInputTextVue>Nom</ChampInputTextVue>
            </div>
            <div class="modif-courriel">
                <TitreCommun :titre="'Adresse courriel'" />
                <ChampInputTextVue>Adresse courriel</ChampInputTextVue>
            </div>
            <div class="modif-adresse">
                <TitreCommun :titre="'Adresse complète'" />
                <ChampInputTextVue>Adresse complète</ChampInputTextVue>
            </div>
            <div class="modif-tel">
                <TitreCommun :titre="'Numéro de téléphone'" />
                <ChampInputTextVue>Numéro de téléphone</ChampInputTextVue>
            </div>
            <button type="submit" value="Se connecter" id="submit"> Modifier </button>
        </form>
        <FooterCommun/>
    </div>
</template>

<style lang="scss"></style>
