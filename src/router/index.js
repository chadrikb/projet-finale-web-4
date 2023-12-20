import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: () => import("@/views/PageAccueil.vue"),
    },
    {
      path: "/tableaudebordusager",
      name: "tableaudebordusager",
      component: () => import("@/views/PageTableauDeBordUser.vue"),
    },
    {
      path: "/modificationprofil",
      name: "modificationprofil",
      component: () => import("@/views/PageModifProfil.vue"),
    },
    {
      path: "/portraitdelaregion",
      name: "portraitdelaregion",
      component: () => import("@/views/PagePortraitRegion.vue"),
    },
    {
      path: "/MRC/:region",
      name: "MRC",
      props: true,
      component: () => import("@/views/PageMRC.vue"),
    },
    {
      path: "/connexion",
      name: "connexion",
      component: () => import("@/views/PageConnexion.vue"),
    },
    {
      path: "/forfait-accueil",
      name: "forfait-accueil",
      props: true,
      component: () => import("@/views/PageAccueilForfait.vue"),
    },
    {
      path: "/forfait-categorie/:titre",
      name: "forfait-categorie",
      props: true,
      component: () => import("@/views/PageCategorieForfait.vue"),
    },
    {
      path: "/forfait-specifique/:titre/:num",
      name: "forfait-specifique",
      props: true,
      component: () => import("@/views/PageForfaitSpecifique.vue"),
    },
    {
      path: "/agroalimentaire",
      name: "agroalimentaire",
      component: () =>
        import("@/views/PageAccueilCategorieAgroalimentaire.vue"),
    },
    {
      path: "/agriculture",
      name: "agriculture",
      component: () => import("@/views/PageAccueilCategorieAgriculture.vue"),
    },
    {
      path: "/restauration",
      name: "restauration",
      component: () => import("@/views/PageAccueilCategorieRestauration.vue"),
    },
    {
      path: "/hebergement",
      name: "hebergement",
      component: () => import("@/views/PageAccueilCategorieHebergement.vue"),
    },
    {
      path: "/activites",
      name: "activites",
      props: true,
      component: () => import("@/views/PageAccueilCategorieActivites.vue"),
    },
    {
      path: "/sous-categories/:id",
      name: "sous-categories",
      props: true,
      component: () => import("@/views/PageSousCategories.vue"),
    },
    {
      path: "/ficheSous-categorie/:id",
      name: "fichesous-categorie",
      props: true,
      component: () => import("@/views/PageFicheSousCategorie.vue"),
    },
  ],
});

export default router;
