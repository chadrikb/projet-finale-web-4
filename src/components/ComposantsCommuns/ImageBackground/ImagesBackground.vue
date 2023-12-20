<script setup>
    import { onBeforeMount, ref } from 'vue';
    const props = defineProps ({
        url: {
            type: String,
            required: true,
            default: "./src/assets/img/png/imgplaceholder.png"
        }
    });
    const position = ref(null);
    const imagesrandom = ["/src/assets/img/petit/tour/tour2-petit.jpg", "/src/assets/img/petit/tour/tour3-petit.jpg",
    "/src/assets/img/petit/picnic/picnic-petit.jpg", "/src/assets/img/petit/picnic/picnic3-petit.jpg", "/src/assets/img/petit/picnic/picnic4-petit.jpg",
    "/src/assets/img/petit/musee/musee-petit.jpg", "/src/assets/img/petit/musee/musee2-petit.jpg", "/src/assets/img/petit/interpretation/interpretation2-petit.jpg",
    "/src/assets/img/petit/marches/marche-petit.jpg", "/src/assets/img/petit/marches/marche3-petit.jpg", "/src/assets/img/petit/marches/marche5-petit.jpg", "/src/assets/img/petit/marches/marche6-petit.jpg",
    "/src/assets/img/petit/activite/activite-petit.jpg", "/src/assets/img/petit/activite/activite2-petit.jpg", "/src/assets/img/petit/activite/activite4-petit.jpg",
    "/src/assets/img/petit/cueillette/cueillette-petit.jpg", "/src/assets/img/petit/cueillette/cueillette2-petit.jpg", "/src/assets/img/petit/cueillette/cueillette4-petit.jpg","/src/assets/img/petit/acericole/acericole3-petit.jpg", "/src/assets/img/petit/acericulteur/erable3-petit.jpg", "/src/assets/img/petit/acericulteur/erable-petit.jpg",
    "/src/assets/img/petit/maraicher/maraicher-petit.jpg", "/src/assets/img/petit/maraicher/maraicher3-petit.jpg", "/src/assets/img/petit/maraicher/maraicher4-petit.jpg",
    "/src/assets/img/petit/laitier/laitier-petit.jpg", "/src/assets/img/petit/laitier/laitier2-petit.jpg", "/src/assets/img/petit/laitier/laitier3-petit.jpg",
    "/src/assets/img/petit/elevage/elevage-petit.jpg", "/src/assets/img/petit/elevage/elevage3-petit.jpg", "/src/assets/img/petit/elevage/elevage4-petit.jpg",
    "/src/assets/img/petit/bio/bio-petit.jpg", "/src/assets/img/petit/bio/bio3-petit.jpg", "/src/assets/img/petit/bio/bio4-petit.jpg",
    "/src/assets/img/petit/apiculteur/apiculteur2-petit.jpg", "/src/assets/img/petit/apiculteur/apiculteur3-petit.jpg", "/src/assets/img/petit/apiculteur/apiculteur4-petit.jpg",
    "/src/assets/img/petit/vin-cidre/vin-cidre13-petit.jpg", "/src/assets/img/petit/pomiculteurs/pomme2-petit.jpg", "/src/assets/img/petit/pomiculteurs/pomme3-petit.jpg",
    "/src/assets/img/petit/serriculteur/serre-petit.jpg", "/src/assets/img/petit/serriculteur/serre3-petit.jpg", "/src/assets/img/petit/serriculteur/serre4-petit.jpg","/src/assets/img/petit/acericole/acericole2-petit.jpg", "/src/assets/img/petit/acericole/acericole3-petit.jpg", "/src/assets/img/petit/acericole/acericole4-petit.jpg", "/src/assets/img/petit/acericole/acericole5-petit.jpg", "/src/assets/img/petit/acericole/acericole6-petit.jpg",
    "/src/assets/img/petit/boucherie/boucherie2-petit.jpg", "/src/assets/img/petit/boucherie/boucherie3-petit.jpg", "/src/assets/img/petit/boucherie/boucherie4-petit.jpg", "/src/assets/img/petit/boucherie/boucherie5-petit.jpg", "/src/assets/img/petit/boucherie/boucherie6-petit.jpg", "/src/assets/img/petit/boucherie/boucherie7-petit.jpg",
    "/src/assets/img/petit/boulangerie/boulangerie-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie3-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie4-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie5-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie6-petit.jpg", "/src/assets/img/petit/boulangerie/boulangerie7-petit.jpg", 
    "/src/assets/img/petit/degustation/degustation-petit.jpg", "/src/assets/img/petit/degustation/degustation3-petit.jpg","/src/assets/img/petit/degustation/degustation4-petit.jpg", "/src/assets/img/petit/degustation/degustation5-petit.jpg","/src/assets/img/petit/degustation/degustation6-petit.jpg", "/src/assets/img/petit/degustation/degustation6-petit.jpg", 
    "/src/assets/img/petit/epicerie/epicerie-petit.jpg", "/src/assets/img/petit/epicerie/epicerie2-petit.jpg", "/src/assets/img/petit/epicerie/epicerie3-petit.jpg", "/src/assets/img/petit/epicerie/epicerie4-petit.jpg", "/src/assets/img/petit/epicerie/epicerie5-petit.jpg", "/src/assets/img/petit/epicerie/epicerie7-petit.jpg", 
    "/src/assets/img/petit/fromagerie/fromage-petit.jpg", "/src/assets/img/petit/fromagerie/fromage2-petit.jpg", "/src/assets/img/petit/fromagerie/fromage3-petit.jpg", "/src/assets/img/petit/fromagerie/fromage4-petit.jpg", "/src/assets/img/petit/fromagerie/fromage5-petit.jpg", "/src/assets/img/petit/fromagerie/fromage6-petit.jpg",
    "/src/assets/img/petit/metsprepares/metsprepare-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare2-petit.jpg","/src/assets/img/petit/metsprepares/metsprepare3-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare4-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare6-petit.jpg", "/src/assets/img/petit/metsprepares/metsprepare7-petit.jpg",
    "/src/assets/img/petit/microbrasserie/microbrasserie-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie2-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie3-petit.jpg","/src/assets/img/petit/microbrasserie/microbrasserie4-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie5-petit.jpg", "/src/assets/img/petit/microbrasserie/microbrasserie7-petit.jpg",
    "/src/assets/img/petit/vin-cidre/vin-cidre-petit.jpg","/src/assets/img/petit/vin-cidre/vin-cidre2-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre4-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre5-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre6-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre8-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre9-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre10-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre11-petit.jpg", "/src/assets/img/petit/vin-cidre/vin-cidre12-petit.jpg",
    "/src/assets/img/petit/bedandbreakfast/bedandbreakfast2-petit.jpg", "/src/assets/img/petit/bedandbreakfast/bedandbreakfast2-petit.jpg","/src/assets/img/petit/bedandbreakfast/bedandbreakfast3-petit.jpg",
    "/src/assets/img/petit/hotel/hotel-petit.jpg", "/src/assets/img/petit/hotel/hotel2-petit.jpg", "/src/assets/img/petit/hotel/hotel3-petit.jpg",
    "/src/assets/img/petit/spa/spa2-petit.jpg", "/src/assets/img/petit/spa/spa3-petit.jpg", "/src/assets/img/petit/spa/spa4-petit.jpg",
    "/src/assets/img/petit/villegiature/villegiature-petit.jpg", "/src/assets/img/petit/villegiature/villegiature3-petit.jpg", "/src/assets/img/petit/villegiature/villegiature4-petit.jpg", "/src/assets/img/petit/villegiature/villegiature5-petit.jpg",
    "/src/assets/img/petit/bistro/bistro-petit.jpg", "/src/assets/img/petit/bistro/bistro2-petit.jpg", "/src/assets/img/petit/bistro/bistro3-petit.jpg", "/src/assets/img/petit/bistro/bistro5-petit.jpg", "/src/assets/img/petit/bistro/bistro6-petit.jpg",
    "/src/assets/img/petit/gastronomie/gastronomie2-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie3-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie3-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie4-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie5-petit.jpg", "/src/assets/img/petit/gastronomie/gastronomie6-petit.jpg",
    "/src/assets/img/petit/cassecroute/cassecroute-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute3-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute4-petit.jpg", "/src/assets/img/petit/cassecroute/cassecroute5-petit.jpg"
];

function GetRandomInt(max) {
    return Math.floor(Math.random() * max);
}

onBeforeMount(() => {
    position.value = GetRandomInt(imagesrandom.length);
});

</script>

<template>
    <div class="commun-imageBackground">
        <img :src="imagesrandom[position]" alt="Placeholder">
    </div>
</template>

<style lang="scss"></style>