<script setup>
import { reactive } from 'vue';
import Login from './Login.vue';
import Register from './Register.vue';
import Button from '../Button.vue';
const type = reactive({
    login: true,
    register: false
})

const loginType = () => {
    type.login = true
    type.register = false
}
const registerType = () => {
    type.login = false
    type.register = true
}
</script>

<template>
    <div class="w-full flex justify-center">
        <Button :btnContent="'登入'" :onClickFunction="loginType"></Button>
        <Button :btnContent="'註冊'" :onClickFunction="registerType"></Button>
    </div>
    <div class="w-5/6 p-5 flex flex-col items-center">
        <Login v-if="type.login"></Login>
        <Register v-if="type.register"></Register>
    </div>
</template>