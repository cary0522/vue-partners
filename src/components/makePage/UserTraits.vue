<script setup>

defineProps(['traitContent'])
</script>

<template>
    <div class="flex px-1 divTrait">
        <div class="relateLineTrait mr-1"></div>
        <div class="traitCard rounded px-1 py-2 m-1 w-full md:w-5/6 ">{{ traitContent }}</div>
    </div>

</template>