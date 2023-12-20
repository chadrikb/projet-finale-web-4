<!--*********************************
 Nom: Chadrik Bertrand
 Matricule: 2037079
 Description: Composante pour la carte interactive
******************************-->
<script setup>
import anime from 'animejs';
import { ref, onMounted, onUnmounted } from 'vue';

const carte = ref(null);
onMounted(() => {
    window.addEventListener("scroll", onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, true);
});
function onScroll() {
    const divCarte = carte.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > divCarte) {
        anime({
            targets: carte.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}

const Carte = function (points) {
    anime({
        targets: '.cls-1',
        points:
            [
                { value: points },
            ],
        easing: 'easeOutQuad',
        duration: 1000,
        loop: false,
    });
};
</script>

<template>
    <div class="interactive" ref="carte">
        <div class="selection">
            <RouterLink :to="{ name: 'MRC', params: { region: 'Argenteuil' } }">
                <p id="Argenteuil"
                    @mouseover="Carte('56.2 6.35 20.75 1.13 18.08 17.02 1.2 81.61 20.16 88.72 25.2 83.69 32.9 84.28 32.01 89.61 40.6 90.5 52.45 97.61 56.6 94.95 62.53 95.84 64.01 102.06 75.86 102.65 83.27 110.65 81.79 115.1 82.97 117.76 102.83 121.02 103.71 111.84 96.31 110.65 98.2 108.31 102.53 102.65 104.6 90.5 96.31 89.02 98.38 78.95 102.23 78.65 98.68 68.87 106.2 68 109.94 65.02 114.38 38.95 126.83 41.91 125.94 33.61 97.79 20.58 91.57 27.69 70.83 25.02 66.14 49.35 50.97 46.65 56.2 6.35')">
                    Argenteuil</p>
            </RouterLink>

            <RouterLink :to="{ name: 'MRC', params: { region: 'RiviereDuNord' } }">
                <p id="RiviereDuNord"
                    @mouseover="Carte('39.91 1.47 25.39 16.75 27.02 20.08 24.85 23.69 27.46 26.75 23.91 28.9 26.87 30.38 22.17 34.49 24 36.08 21.83 38.97 23.02 40.16 16.5 47.86 20.65 49.64 21.54 57.94 9.09 54.97 4.65 81.05 1.09 83.71 1.98 88.75 7.33 83.79 23.31 79.57 24.8 75.42 30.42 71.27 27.76 66.82 31.02 65.05 32.5 67.42 39.3 67.58 44.81 67.82 47.35 64.19 51.04 59.31 55.07 62.25 66.57 52.01 66.57 48.75 71.02 49.34 75.76 45.79 50.28 19.71 52.05 14.97 39.91 1.47')">
                    Rivière du Nord</p>
            </RouterLink>

            <RouterLink :to="{ name: 'MRC', params: { region: 'Laurentides' } }">
                <p id="Laurentides"
                    @mouseover="Carte('121.03 39.61 145.47 66.27 160.14 51.16 186.36 79.16 164.58 106.72 171.25 114.27 150.36 136.5 143.69 130.27 144.14 122.27 120.58 116.5 117.32 137.98 112.86 141.38 66.8 134.72 66.8 128.94 57.92 128.5 57.03 135.61 49.03 135.61 49.03 129.83 43.69 128.94 43.25 117.83 38.36 116.94 38.36 105.38 24.58 104.05 24.14 94.72 1.92 94.72 1.03 61.38 14.36 61.38 13.47 39.16 88.58 36.05 89.03 32.94 83.69 27.16 111.25 1.38 134.36 24.05 121.03 39.61')">
                    Laurentides</p>
            </RouterLink>

            <RouterLink :to="{ name: 'MRC', params: { region: 'PaysDenHaut' } }">
                <p id="Pays-d'en-haut"
                    @mouseover="Carte('20.97 70.9 16.23 95.19 1.11 92.53 6.34 52.1 14.74 53.41 19.19 49.86 22.45 28.38 46 34.15 45.56 42.15 52.23 48.38 73.11 26.15 66.45 18.6 80.17 1.43 90 9.86 94.74 5.71 102.74 13.12 95.34 22.9 99.19 27.04 80.82 46.6 82.6 49.86 79.93 53.71 83.19 56.67 79.34 58.75 82.3 60.23 77.56 64.38 79.34 65.86 77.26 68.82 78.45 70.01 71.93 77.71 47.93 66.45 41.71 73.56 20.97 70.9')">
                    Pays-d'en-haut</p>

            </RouterLink>
            <RouterLink :to="{ name: 'MRC', params: { region: 'DeuxMontagnes' } }">
                <p id="Deux-Montagnes"
                    @mouseover="Carte('67.01 4.95 72.64 2.28 80.05 7.32 85.68 7.91 81.23 13.54 77.38 14.72 77.38 24.21 64.94 33.69 64.94 42.87 60.49 48.21 40.35 48.8 28.2 41.69 8.35 36.06 9.23 26.87 1.83 25.69 8.05 17.69 9.83 18.28 15.46 12.65 28.49 22.43 24.88 27.01 29.98 29.83 34.72 24.21 37.38 28.43 40.05 25.69 37.68 20.95 50.42 11.76 54.86 13.24 56.64 5.83 61.68 5.24 62.57 1.69 67.01 4.95')">
                    Deux-montagnes</p>

            </RouterLink>
            <RouterLink :to="{ name: 'MRC', params: { region: 'Mirabel' } }">
                <p id="Mirabel"
                    @mouseover="Carte('54.82 10.03 61.04 1.44 77.33 14.47 64 26.33 72.59 34.03 72 36.99 63.41 37.58 62.52 40.55 72 45.58 66.37 48.25 61.93 44.99 61.04 48.55 56 49.14 54.22 56.55 49.78 55.07 37.04 64.25 39.41 68.99 36.74 71.66 34.08 67.51 29.33 73.14 24 70.47 27.85 65.73 14.52 56.25 9.19 61.58 7.41 60.99 9.48 48.84 1.19 47.36 3.26 37.29 7.11 36.99 3.56 27.21 11.26 26.03 12.15 31.07 17.48 26.03 33.48 21.88 34.96 17.73 40.89 13.58 37.93 9.14 41.19 7.36 42.67 9.73 54.82 10.03')">
                    Mirabel</p>

            </RouterLink>
        </div>
        <div class="svg">
            <svg id="Layer_2" data-name="Layer 2" viewBox="-20 -50 150 150">
                <g id="Layer_1-2" data-name="Layer 1">
                    <polygon class="cls-1"
                        points="121.03 39.61 145.47 66.27 160.14 51.16 186.36 79.16 164.58 106.72 171.25 114.27 150.36 136.5 143.69 130.27 144.14 122.27 120.58 116.5 117.32 137.98 112.86 141.38 66.8 134.72 66.8 128.94 57.92 128.5 57.03 135.61 49.03 135.61 49.03 129.83 43.69 128.94 43.25 117.83 38.36 116.94 38.36 105.38 24.58 104.05 24.14 94.72 1.92 94.72 1.03 61.38 14.36 61.38 13.47 39.16 88.58 36.05 89.03 32.94 83.69 27.16 111.25 1.38 134.36 24.05 121.03 39.61" />
                </g>
            </svg>
        </div>
    </div>
</template>

<style lang="scss">
.cls-1 {
    fill: none;
    stroke: #000;
    stroke-miterlimit: 10;
    stroke-width: 2px;
}

.interactive {
    opacity: 0;
}
</style>