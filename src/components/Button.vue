<script setup>
defineProps(['btnContent','onClickFunction'])
</script>
<template>
    <div>
        <button class="button" @click='onClickFunction'>{{btnContent}}</button>
    </div>
</template>