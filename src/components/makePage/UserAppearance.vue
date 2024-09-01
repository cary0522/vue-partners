<script setup>
defineProps(['appearanceContent'])
</script>

<template>
    <div class="d-flex px-1">
        <div class="appearanceCard rounded px-1 py-2 m-1 col-12 col-md-10 ">{{ appearanceContent }}</div>
        <div class="relateLine ms-1"></div>
    </div>

</template>