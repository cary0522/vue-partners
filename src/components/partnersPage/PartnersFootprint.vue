<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <div class="position-absolute partnersFootprintContainer">
        <div class="partnersFootprintItem" v-for="n in 8">
            <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
        </div>
        <!-- <div class="partnersFootprintItem">
            <i class="fa-solid fa-paw fa-3x fa-rotate-180"></i>
        </div>
        <div class="partnersFootprintItem">
            <i class="fa-solid fa-paw fa-3x fa-rotate-180"></i>
        </div>
        <div class="partnersFootprintItem">
            <i class="fa-solid fa-paw fa-3x fa-rotate-180"></i>
        </div>
        <div class="partnersFootprintItem">
            <i class="fa-solid fa-paw fa-3x fa-rotate-180"></i>
        </div>
        <div class="partnersFootprintItem">
            <i class="fa-solid fa-paw fa-3x fa-rotate-180"></i>
        </div>
        <div class="partnersFootprintItem">
            <i class="fa-solid fa-paw fa-3x fa-rotate-180"></i>
        </div>
        <div class="partnersFootprintItem">
            <i class="fa-solid fa-paw fa-3x fa-rotate-180"></i>
        </div> -->
    </div>

</template>