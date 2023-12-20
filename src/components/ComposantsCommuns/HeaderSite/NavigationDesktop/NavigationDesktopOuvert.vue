<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la navigation desktop ouvert
******************************-->
<script setup>
import MenuPrincipale from "./MenuPrincipale/MenuPrincipale.vue";
import { RouterLink } from "vue-router";
import VignetteDashboard from "./VignetteDashboard/VignetteDashboard.vue";
import MenuSecondaire from "./MenuSecondaire/MenuSecondaire.vue";
import { reactive } from "vue";
import obj from '@/assets/database/obj-categorie-list.json'
import anime from "animejs";
// import axios from 'axios';

// const MenuPrinc = reactive({
//   categorie: [],

// });

// onBeforeMount(async () => {

//   const response = await axios.get("http://localhost:8000/api/categorie/list")
//   MenuPrinc.categorie = response.data;
//   console.log(MenuPrinc.categorie);
// });


const data = reactive({
  titre: {
    bold: "Agrotourisme",
    regular: "Laurentides",
  },
  forfaits: {
    escapadeGourmande: "Escapade gourmande",
    decouverte: "Découverte",
    detente: "Détente",
    famille: "Famille",
  },
  liste: {
    agriculture: {
      nom: "Agriculture",
      url: "agriculture",
      sousMenu: {
        apiculteur: "Apiculteurs",
        fermesMaraicheres: "Fermes maraîchères",
        fermesLaitieres: "Fermes laitières",
        fermesDelevage: "Fermes d'élevage",
        fermesCertifiesBio: "Fermes certifiées Bio",
        pomiculteurs: "Pomiculteurs",
        acericulteurs: "Acericulteurs",
        serriculteurs: "Serriculteurs",
      },
    },
    agroalimentaire: {
      nom: "Agroalimentaire",
      url: "agroalimentaire",
      sousMenu: {
        fromageries: "Fromageries",
        boulangeries: "Boulangeries",
        boucheries: "Boucheries",
        microbrasseries: "Microbrasseries",
        vignobles: "Vignobles",
        cidreries: "Cidreries",
        degustationSurPlace: "Dégustation sur place",
        produitsAcericoles: "Produits acéricoles",
        epiceriesFines: "Épiceries fines",
        metsPrepares: "Mets préparés",
      },
    },
    restauration: {
      nom: "Restauration",
      url: "restauration",
      sousMenu: {
        bistros: "Bistros",
        restaurantsGastronomiques: "Restaurants gastronomiques",
        cabanesASucres: "Cabanes à sucre",
        casseCroutes: "Casse-croûtes",
      },
    },
    activites: {
      nom: "Activités",
      url: "activites",
      sousMenu: {
        visitesGuidees: "Visites guidées",
        centreDinterpretation: "Centres d'interprétation",
        musees: "Musées",
        autocueillette: "Autocueillette",
        foiresAgricoles: "Foires agricoles",
        airesAPiquenique: "Aires à pique-nique",
        marchesPublics: "Marchés publics",
        activitesRecreatives: "Activités récréatives",
      },
    },
    hebergement: {
      nom: "Hébergement",
      url: "hebergement",
      sousMenu: {
        centresDeVillegature: "Centres de villégiature",
        bedAndBreakfast: "Bed & breakfast",
        camping: "Camping",
        chalets: "Chalets",
        pourvoiries: "Pourvoiries",
        hotels: "Hôtels",
      },
    },
  },
});

const index = reactive({
  value: "",
});


function changerMenu(nom) {
  index.value = nom.toString();
  console.log(nom);
}

</script>

<template>
  <div class="nav-desktop-ouvert">
              <!-- [ parent de la navigation ] -->
    <div class="parent animate__animated animate__fadeInDown animate__delay-0s">
              <!-- [ div 1 donc navigation principale ] -->
      <div class="div1 animate__animated animate__fadeInDown animate__delay-1s">
        <MenuPrincipale :navPrinc="obj" @changerMenu="changerMenu($event)" props="/" />
      </div>
              <!-- [ div 2 donc navigation secondaire ] -->
      <div class="div2 animate__animated animate__fadeInDown animate__delay-1s">
        <MenuSecondaire :navSec="obj" :indexActif="index.value" />
      </div>
              <!-- [ div 3 donc dashboardUser] -->
      <div class="div3 animate__animated animate__fadeInBottomRight animate__delay-1s">
        <RouterLink to="/tableaudebordusager">
          <VignetteDashboard><img src="@/assets/img/svg/profil.svg" alt="" /></VignetteDashboard>
        </RouterLink>
      </div>
              <!-- [ div 4 donc rien] -->
      <div class="div4 animate__animated animate__fadeInTopRight animate__delay-1s">

      </div>
              <!-- [ div 5 donc forfait] -->
      <div class="div5 animate__animated animate__fadeInUp animate__delay-1s">
        <RouterLink to="/forfait-accueil">Forfaits</RouterLink>
      </div>
              <!-- [ div 5 donc portrait de la région] -->
      <RouterLink to="/portraitdelaregion" class="div6 animate__animated animate__fadeInLeft animate__delay-1s">
        <div class="svg">
          <img class="map" src="@/assets/img/svg/map_dessous.svg" alt="" />
          <img class="pointeur" src="@/assets/img/svg/map_pointeur.svg" alt="" />
        </div>
        <p>Portrait de la région</p>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.cls-1 {
  fill: none;
  stroke: #1d1d1b;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;
}

.div1 {
  --animate-delay: 0.5s;
}

.div2 {
  --animate-delay: 0.7s;
}

.div3 {
  --animate-delay: 1s;
}

.div4 {
  --animate-delay: 1s;
}

.div5 {
  --animate-delay: 1.2s;
}

.div6 {
  --animate-delay: 1.3s;
}
</style>
