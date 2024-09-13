<script setup>
import MemberAccountData from './MemberAccountData.vue';
import MemberPayment from './MemberPayment.vue';
import MemberOrder from './MemberOrder.vue';
import MemberPhoto from './MemberPhoto.vue';
import MemberPassword from './MemberPassword.vue';

const options = defineModel('options');
// const userData = defineModel('userData')
// const userPhoto = defineModel('userPhoto')
</script>

<template>
    <div class="mx-auto 2xl:ml-0 w-5/6 h-full divOptionViews">
        <MemberPhoto v-if="options[0].turnOn"></MemberPhoto>
        <MemberOrder v-else-if="options[1].turnOn"></MemberOrder>
        <MemberPayment v-else-if="options[2].turnOn"></MemberPayment>
        <MemberAccountData v-else-if="options[3].turnOn"></MemberAccountData>
        <MemberPassword v-else-if="options[4].turnOn"></MemberPassword>
    </div>
</template>