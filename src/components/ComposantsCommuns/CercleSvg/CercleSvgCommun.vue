<script setup>
    import { onMounted, onUnmounted, ref, onUpdated } from 'vue';
    const props = defineProps({
    rayon: {
        type: Number,
        required: true,
        default: 200
        },
    circleSmall: {
        type: Number,
        required: true,
        default: 44
        },
    circleMedium: {
        type: Number,
        required: true,
        default: 79
        },
    circleLarge: {
        type: Number,
        required: true,
        default: 115
        },
    circleXLarge: {
        type: Number,
        required: true,
        default: 150
        },

    });

    const largeur = ref(null);
    const circle = ref(null);
    const svg = ref(null);
    
    function changer(largeur){
        circle.value.setAttribute('r', largeur);
        circle.value.setAttribute('cx', largeur);
        circle.value.setAttribute('cy', largeur);
        svg.value.setAttribute('width', largeur*2);
        svg.value.setAttribute('height', largeur*2);
    }
    
    function HandleResize() {
        largeur.value = window.innerWidth;
        if(largeur.value >= 576 && largeur.value < 768){
            changer(props.circleSmall);
            console.log(props.circleSmall);
        }
        else if(largeur.value >= 768 && largeur.value < 992){
            changer(props.circleMedium);
        }
        else if(largeur.value >= 992 && largeur.value < 1200){
            changer(props.circleLarge);
        }
        else if(largeur.value >= 1200){
            changer(props.circleXLarge);
        }
    }
    onMounted(() => {
        window.addEventListener('resize', HandleResize);
        HandleResize();
    })
    onUnmounted(() => {
        window.removeEventListener('resize', HandleResize);
    })
    onUpdated(() => {
        HandleResize();
    })
</script>

<template>
        <svg  class="cercleSvgCommun" ref="svg"
              :width="props.rayon*2"  :height="props.rayon*2" >
            <circle ref="circle" :cx="props.rayon" :cy="props.rayon" :r="props.rayon"  fill="var(--marine)" :fill-opacity=".95"/>
        </svg>
</template>

<style lang="scss"></style>