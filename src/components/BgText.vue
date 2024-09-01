<script setup>
defineProps(['textContent'])
</script>

<template>
  <div class='bgText' :id='textContent'>{{textContent}}</div>
</template>