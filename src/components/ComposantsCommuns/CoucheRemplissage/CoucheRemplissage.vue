<script setup>
import PointilleSvgCommunVue from '../PointilleSvg/PointilleSvgCommun.vue';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

const slides = [
    {
        id: 1,
        image: "/src/assets/img/xlarge/bleuts-xlarge.jpg"
    },
    {
        id: 2,
        image: "/src/assets/img/xlarge/asperge-xlarge.jpg"
    },
    {
        id: 3,
        image: "/src/assets/img/xlarge/ble-xlarge.jpg"
    },
    {
        id: 4,
        image: "/src/assets/img/xlarge/citrouille-xlarge.jpg"
    },

]
</script>

<template>
    <div class="remplissage">
        <div class="decoration">
            <PointilleSvgCommunVue />
        </div>
        <vueper-slides autoplay>
            <vueper-slide v-for="slide in slides" :key="slide.id" :image="slide.image"/>
        </vueper-slides>
    </div>
</template>

<style lang="scss"></style>