<script setup>
import { reactive, watch } from 'vue';
import Input from '../Input.vue';
import { faL } from '@fortawesome/free-solid-svg-icons';
const userData = defineModel()
const passwordList = reactive({
    oldPassword: '',
    oldPasswordMessage: false,
    newPassword: '',
    newPasswordMessage: false,
    newPasswordVerify: '',
    newPasswordVerifyMessage: false
})

watch(() => passwordList.oldPassword, (oldPassword) => {
    if (oldPassword) {
        if (userData.password == oldPassword) {
            passwordList.oldPasswordMessage = false
        } else {
            passwordList.oldPasswordMessage = true
        }
    }
})
watch(() => passwordList.newPassword, (newPassword) => {
    if (newPassword) {
        if (passwordList.oldPassword == newPassword) {
            passwordList.newPasswordMessage = true
        } else {
            passwordList.newPasswordMessage = false
        }
    }
})
watch(() => passwordList.newPasswordVerify, (newPasswordVerify) => {
    if (newPasswordVerify) {
        if (passwordList.newPassword !== newPasswordVerify) {
            passwordList.newPasswordVerifyMessage = true
        } else {
            passwordList.newPasswordVerifyMessage = false
        }
    }
})
</script>
<template>
    <div id="divMemberPassword">
        <h4>password</h4>

        <Input :input-type="'password'" :inputId="'oldPassword'" :label-content="'舊密碼：'" :placeHolder="'請輸入舊密碼'"
            v-model="passwordList.oldPassword"></Input>
        <p v-if="passwordList.oldPasswordMessage">請輸入正確的密碼</p>
        <Input :input-type="'password'" :inputId="'newPassword'" :label-content="'新密碼：'" :placeHolder="'請輸入新密碼'"
            v-model="passwordList.newPassword"></Input>
        <p v-if="passwordList.newPasswordMessage">新密碼不得與舊密碼相同</p>
        <Input :input-type="'password'" :inputId="'newPasswordVerify'" :label-content="'新密碼：'" :placeHolder="'請再次輸入新密碼'"
            v-model="passwordList.newPasswordVerify"></Input>
        <p v-if="passwordList.newPasswordVerifyMessage">請輸入正確的新密碼</p>
    </div>
</template>