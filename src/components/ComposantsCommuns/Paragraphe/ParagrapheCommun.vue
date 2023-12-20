<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';
const props = defineProps({
    paragraphe: {
        type: String,
        required: true,
        default: "// Place holder : Paragraphes //"
    }
});
const contenuElement = ref(null);
onMounted(() => {
    window.addEventListener("scroll", onScroll, true);
    onScroll();
})
onUnmounted(() => {
    window.removeEventListener("scroll", onScroll, true);
});
function onScroll() {
    const vignettes = contenuElement.value.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > vignettes) {
        anime({
            targets: contenuElement.value,
            duration: 500,
            opacity: 1,
            easing: 'linear'
        })
    }
}
</script>

<template>
    <div>
        <p class="paragrapheCommun" v-text="props.paragraphe" ref="contenuElement"></p>
    </div>
</template>

<style lang="scss">
.paragrapheCommun {
    opacity: 0;
}
</style>

