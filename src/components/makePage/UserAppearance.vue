<script setup>
defineProps(['appearanceContent'])
</script>

<template>
    <div class="flex px-1 divAppearance">
        <div class="appearanceCard rounded px-1 py-2 m-1 w-full md:w-5/6 ">{{ appearanceContent }}</div>
        <div class="relateLine ms-1"></div>
    </div>

</template>