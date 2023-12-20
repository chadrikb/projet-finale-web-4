<script setup>
import { ref, onBeforeMount, onMounted} from 'vue';
    const props = defineProps ({
        urlPlaceHolder: {
            type: String,
            required: true,
            default: "./src/assets/img/png/imgplaceholder.png"
        },
        urlnth1: {
            type: String,
            required: true,
            default: "/src/assets/img/petit/acericole/acericole2-petit.jpg"
        },
        urlnth2: {
            type: String,
            required: true,
            default: "/src/assets/img/petit/acericole/acericole2-petit.jpg"
        },
        urlnth3: {
            type: String,
            required: true,
            default: "/src/assets/img/petit/acericole/acericole2-petit.jpg"
        },
        urlnth4: {
            type: String,
            required: true,
            default: "/src/assets/img/petit/acericole/acericole2-petit.jpg"
        },
        urlnth5: {
            type: String,
            required: true,
            default: "/src/assets/img/petit/acericole/acericole2-petit.jpg"
        },
        urlnth6: {
            type: String,
            required: true,
            default: "/src/assets/img/petit/acericole/acericole2-petit.jpg"
        },
        urlnth7: {
            type: String,
            required: true,
            default: "/src/assets/img/petit/acericole/acericole2-petit.jpg"
        },
    });
    const urlChange = ref(null);
    const urlChange2 = ref(null);
    const urlChange3 = ref(null);
    const urlChange4 = ref(null);
    const urlChange5 = ref(null);
    const urlChange6 = ref(null);
    const urlChange7 = ref(null);
    const target1 = ref(null);
    const target2 = ref(null);
    const target3 = ref(null);
    const target4 = ref(null);
    const target5 = ref(null);
    const target6 = ref(null);
    const target7 = ref(null);

    function Changer(){
        urlChange.value = props.urlnth1;
        urlChange2.value = props.urlnth2;
        urlChange3.value = props.urlnth3;
        urlChange4.value = props.urlnth4;
        urlChange5.value = props.urlnth5;
        urlChange6.value = props.urlnth6;
        urlChange7.value = props.urlnth7;
        target1.value.setAttribute("src", urlChange.value);
        target2.value.setAttribute("src", urlChange2.value);
        target3.value.setAttribute("src", urlChange3.value);
        target4.value.setAttribute("src", urlChange4.value);
        target5.value.setAttribute("src", urlChange5.value);
        target6.value.setAttribute("src", urlChange6.value);
        target7.value.setAttribute("src", urlChange7.value);
    }
    function HandleChangements(){
        Changer(props.urlnth1);
        Changer(props.urlnth2);
        Changer(props.urlnth3);
        Changer(props.urlnth4);
        Changer(props.urlnth5);
        Changer(props.urlnth6);
        Changer(props.urlnth7);
    }
    onMounted(() => {
        HandleChangements();
        target1.value = document.querySelector(".wrapper-grille-images img:nth-child(1)");
        target2.value = document.querySelector(".wrapper-grille-images img:nth-child(2)");
        target3.value = document.querySelector(".wrapper-grille-images img:nth-child(3)");
        target4.value = document.querySelector(".wrapper-grille-images img:nth-child(4)");
        target5.value = document.querySelector(".wrapper-grille-images img:nth-child(5)");
        target6.value = document.querySelector(".wrapper-grille-images img:nth-child(6)");
        target7.value = document.querySelector(".wrapper-grille-images img:nth-child(7)");
    });
</script>

<template>
    <div class="wrapper-grille-images">
        <img ref="target1" :src="props.urlPlaceHolder" alt="Placeholder">
        <img ref="target2" :src="props.urlPlaceHolder" alt="Placeholder">
        <img ref="target3" :src="props.urlPlaceHolder" alt="Placeholder">
        <img ref="target4" :src="props.urlPlaceHolder" alt="Placeholder">
        <img ref="target5" :src="props.urlPlaceHolder" alt="Placeholder">
        <img ref="target6" :src="props.urlPlaceHolder" alt="Placeholder">
        <img ref="target7" :src="props.urlPlaceHolder" alt="Placeholder">
    </div>
</template>

<style lang="scss"></style>

