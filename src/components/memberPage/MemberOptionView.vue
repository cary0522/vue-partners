<script setup>
import Button from '../Button.vue';
import Input from '../Input.vue';
import MemberAccountData from './MemberAccountData.vue';
import MemberPayment from './MemberPayment.vue';
import MemberOrder from './MemberOrder.vue';
import MemberPhoto from './MemberPhoto.vue';
import MemberPassword from './MemberPassword.vue';

const options = defineModel('options');
const userData = defineModel('userData')
const userPhoto = defineModel('userPhoto')
</script>

<template>
    <div class="mx-auto w-5/6 h-full">
        <MemberPhoto v-if="options[0].turnOn" v-model="userPhoto"></MemberPhoto>
        <MemberOrder v-else-if="options[1].turnOn"></MemberOrder>
        <MemberPayment v-else-if="options[2].turnOn"></MemberPayment>
        <MemberAccountData v-else-if="options[3].turnOn" v-model="userData"></MemberAccountData>
        <MemberPassword v-else-if="options[4].turnOn" v-model="userData"></MemberPassword>
    </div>
</template>