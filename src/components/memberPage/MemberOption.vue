<script setup>
import Button from '../Button.vue';
const modelValue = defineModel();

</script>

<template>
    <div id="divMemberOption">
        <Button v-for="option in modelValue" :btn-content="option.title" :onClickFunction="option.fun" :key="option.value"></Button>
    </div>
</template>