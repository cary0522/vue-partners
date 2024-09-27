<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
defineProps(['optionName', 'optionClass','optionId','clickFun'])
</script>

<template>
    <div class="py-4 w-1/3 options-behaviors" v-on:click="clickFun">
        <FontAwesomeIcon :icon="optionClass" class="fa-2x" :id="optionId"></FontAwesomeIcon>
        <div class="card-text mt-2">{{ optionName }}</div>
    </div>

</template>