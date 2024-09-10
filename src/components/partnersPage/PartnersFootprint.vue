<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <div class="absolute partnersFootprintContainer">
        <div class="partnersFootprintItem" v-for="n in 8">
            <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
        </div>
    </div>

</template>