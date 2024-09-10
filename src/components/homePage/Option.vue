<script setup>
import Button from '../Button.vue';
defineProps(['optionImg', 'optionList'])
</script>

<template>
  <div class="w-1/2 option">
    <img :src='optionImg' alt="" />
    <div class="divBtn">
      <Button v-for="option in optionList" :btnContent="option" :key="option"></Button>
    </div>
  </div>
</template>