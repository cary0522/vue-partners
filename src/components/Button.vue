<script setup>
defineProps(['btnContent', 'onClickFunction'])
</script>
<template>
    <div class="divBtn">
        <button type="button" class="button" @click='onClickFunction'>{{ btnContent }}</button>
    </div>
</template>