<script setup>
import Button from '../Button.vue';
defineProps(['optionImg', 'optionList'])
</script>

<template>
  <div class="col-6 option">
    <img :src='optionImg' alt="" />
    <div class="divBtn">
      <Button v-for="option in optionList" :btnContent="option" :key="option"></Button>
    </div>
  </div>
</template>