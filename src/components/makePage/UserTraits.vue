<script setup>

defineProps(['traitContent'])
</script>

<template>
    <div class="d-flex px-1">
        <div class="relateLine me-1"></div>
        <div class="traitCard rounded px-1 py-2 m-1 col-12 col-md-10 ">{{ traitContent }}</div>
    </div>

</template>