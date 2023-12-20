<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la navigation principale mobile
******************************-->
<script setup>
import menuBurger from './MenuBurger/MenuBurger.vue';
import NavigationSecondaire from './NavigationSecondaire/NavigationSecondaire.vue';

import { ref, reactive } from 'vue';

const valeur = ref('');

const menu = reactive({
    isActive: false

})

const data = reactive({
    titre: {
        bold: 'Agrotourisme',
        regular: 'Laurentides'
    },
    forfaits: {
        escapadeGourmande: {
            name: 'Escapade gourmande',
            url: 'EscapadeGourmande'
        },
        decouverte: {
            name: 'Découverte',
            url: 'Decouverte'
        },
        famille: {
            name: 'Famille',
            url: 'Famille'
        },
        detente: {
            name: 'Détente',
            url: 'Detente'
        },
    },
    liste: {
        agriculture: {
            nom: 'Agriculture',
            sousMenu: {
                apiculteur: 'Apiculteurs',
                fermesMaraicheres: 'Fermes maraîchères',
                fermesLaitieres: 'Fermes laitières',
                fermesDelevage: 'Fermes d\'élevage',
                fermesCertifiesBio: 'Fermes certifiées Bio',
                pomiculteurs: 'Pomiculteurs',
                acericulteurs: 'Acericulteurs',
                serriculteurs: 'Serriculteurs',
            }
        },
        agroalimentaire: {
            nom: 'Agroalimentaire',
            sousMenu: {
                fromageries: 'Fromageries',
                boulangeries: 'Boulangeries',
                boucheries: 'Boucheries',
                microbrasseries: 'Microbrasseries',
                vignobles: 'Vignobles',
                cidreries: 'Cidreries',
                degustationSurPlace: 'Dégustation sur place',
                produitsAcericoles: 'Produits acéricoles',
                epiceriesFines: 'Épiceries fines',
                metsPrepares: 'Mets préparés',
            }
        },
        restauration: {
            nom: 'Restauration',
            sousMenu: {
                bistros: 'Bistros',
                restaurantsGastronomiques: 'Restaurants gastronomiques',
                cabanesASucres: 'Cabanes à sucre',
                casseCroutes: 'Casse-croûtes',
            }
        },
        activites: {
            nom: 'Activités',
            sousMenu: {
                visitesGuidees: 'Visites guidées',
                centreDinterpretation: 'Centres d\'interprétation',
                musees: 'Musées',
                autocueillette: 'Autocueillette',
                foiresAgricoles: 'Foires agricoles',
                airesAPiquenique: 'Aires à pique-nique',
                marchesPublics: 'Marchés publics',
                activitesRecreatives: 'Activités récréatives',
            }
        },
        hebergement: {
            nom: 'Hébergement',
            sousMenu: {
                centresDeVillegature: 'Centres de villégiature',
                bedAndBreakfast: 'Bed & breakfast',
                camping: 'Camping',
                chalets: 'Chalets',
                pourvoiries: 'Pourvoiries',
                hotels: 'Hôtels',
            }
        }
    }
});
function toggleMenu() {
    menu.isActive = !menu.isActive;
    valeur.value = '';
    console.log("toggle ///////////////////")
}
//
</script>

<template>
    <nav class="nav-principale">
        <menuBurger @click="toggleMenu()" :class="menu.isActive ? 'menuOuvert' : 'menuFerme'" />
        <div class="liste-nav">
            <ul v-for="(element, index) in data.liste" :key="element.nom" @click="valeur = 'active' + index.toString()">
                <NavigationSecondaire :class="valeur == 'active' + index.toString() ? 'active' : 'closed'" :liste="element"
                    :index="index" />
            </ul>
            <ul>
                <li :class="valeur == 'active' ? 'active' : 'closed'" @click="valeur = 'active'">
                    Forfaits
                    <RouterLink to="/forfait-accueil">
                        <ul v-for="(element) in data.forfaits" :key="element.name">
                            <RouterLink :to="'/forfait-categorie/' + element.url">{{ element.name }}</RouterLink>
                        </ul>
                    </RouterLink>
                </li>
            </ul>
            <ul>
                <li>
                    <RouterLink to="/tableaudebordusager">Compte</RouterLink>
                </li>
            </ul>
            <ul>
                <li>
                    <RouterLink to="/portraitdelaregion"> Portrait de la région</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss"></style>