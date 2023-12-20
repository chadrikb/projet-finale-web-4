<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="footer">
        <RouterLink to="/">
            <div class="logo-footer">
                <img src="/src/assets/img/svg/Logo_2.svg" alt="Logo">
            </div>
        </RouterLink>
        <div class="liens-sous-menu">
            <div class="routerLink">
                <RouterLink to="/hebergement">Hébergement</RouterLink>
            </div>
            <div class="routerLink">
                <RouterLink to="/activites">Activités</RouterLink>
            </div>
            <div class="routerLink">
                <RouterLink to="/restauration">Restauration</RouterLink>
            </div>
            <div class="routerLink">
                <RouterLink to="/agriculture">Agriculture</RouterLink>
            </div>
            <div class="routerLink">
                <RouterLink to="/agroalimentaire">Agroalimentaire</RouterLink>
            </div>
            <div class="routerLink">
                <RouterLink to="/forfait-accueil">Forfaits</RouterLink>
            </div>
            <div class="routerLink">
                <RouterLink to="/portraitdelaregion">Portrait de la région</RouterLink>
            </div>
            <div class="routerLink">
                <RouterLink to="/tableaudebordusager">Compte</RouterLink>
            </div>
        </div>
        <div class="footer-autres">
            <p> Nos réseaux sociaux </p>
            <div class="hyperliens-medias">
                <div class="hyperlien">
                    <RouterLink to="www.facebook.com"> <img src="/src/assets/img/png/imgplaceholder.png"> </RouterLink>
                </div>
                <div class="hyperlien">
                    <a href="https://www.instagram.com/"><img src="/src/assets/img/png/imgplaceholder.png"
                            alt="Instagram"></a>
                </div>
                <div class="hyperlien">
                    <a href="https://www.youtube.com/"><img src="/src/assets/img/png/imgplaceholder.png" alt="Youtube"></a>
                </div>
                <div class="hyperlien">
                    <a href="https://www.twitter.com/"><img src="/src/assets/img/png/imgplaceholder.png" alt="Twitter"></a>
                </div>
            </div>
            <div class="recherche-avance">
            </div>
        </div>
    </footer>
</template>

<style lang="scss"></style>
