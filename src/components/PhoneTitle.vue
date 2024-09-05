<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBatteryFull, faSignal, faWifi } from '@fortawesome/free-solid-svg-icons';

</script>

<template>
        <div class="iphoneTitle">
            <p>AI partners</p>
        </div>
        <div class="phoneIcon">
            <FontAwesomeIcon :icon="faWifi" class="icon" />
            <FontAwesomeIcon :icon="faSignal" class="icon" />
            <FontAwesomeIcon :icon="faBatteryFull" class="icon" />
        </div>
</template>