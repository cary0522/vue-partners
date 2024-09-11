<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBatteryFull, faSignal, faWifi } from '@fortawesome/free-solid-svg-icons';

</script>

<template>
    <div class="flex justify-between mt-2">
        <div class="iphoneTitle w-1/2 mx-1 my-2">
            <p>AI partners</p>
        </div>
        <div class="phoneIcon w-1/2 mx-1 my-2 flex justify-end">
            <FontAwesomeIcon :icon="faWifi" class="icon mx-2" />
            <FontAwesomeIcon :icon="faSignal" class="icon mx-2" />
            <FontAwesomeIcon :icon="faBatteryFull" class="icon mx-2" />
        </div>
    </div>
</template>