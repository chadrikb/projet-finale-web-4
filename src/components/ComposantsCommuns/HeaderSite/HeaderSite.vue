<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la gestion du header du site
******************************-->
<script setup>
import NavigationMobile from "./NavigationMobile/NavigationMobile.vue";
import NavigationDesktopFerme from "./NavigationDesktop/NavigationDesktopFerme.vue";
import NavigationDesktopOuvert from "./NavigationDesktop/NavigationDesktopOuvert.vue";
import MenuBurger from "./NavigationMobile/navigationPrinc/MenuBurger/MenuBurger.vue";
import { reactive } from "vue";

const menu = reactive({
  isActive: false,
});

function toggleMenu() {
  menu.isActive = !menu.isActive;
  console.log(menu.isActive);
  console.log("//////////////////////////");
}
</script>

<template>
  <div class="header-site">
    <MenuBurger
      @click="toggleMenu"
      :class="menu.isActive ? 'nav-ouvert' : 'nav-ferme'"
    />
    <NavigationDesktopOuvert
      :class="menu.isActive ? 'desktop-Ouvert' : 'desktopFerme'"
    />
    <NavigationDesktopFerme />
    <NavigationMobile />
  </div>
</template>

<style lang="scss"></style>
