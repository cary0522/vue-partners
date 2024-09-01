<script setup>


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <div id="loading-content" class="mx-auto row align-self-center">
        <div class="loading-foot my-5 darkText d-flex justify-content-center">
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
            <div class="loadingFootprint">
                <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>
            </div>
        </div>
        <h1 class="loading-text my-5 darkText">請稍候，正在努力製作您的專屬寵物</h1>
    </div>

</template>