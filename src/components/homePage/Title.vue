<script setup>
defineProps(['title','titleContent'])
</script>

<template>
    <div class="divTitle">
        <h1>{{ title }}</h1>
        <p>{{ titleContent }}</p>
    </div>
</template>