<script setup>
import { reactive, watch } from 'vue';
// import { useCookies } from 'vue3-cookies';
import axios from 'axios';
import Input from '../Input.vue';
import Button from '../Button.vue';
import { useRouter } from 'vue-router';


const router = useRouter();
// const { cookies } = useCookies()
// const token = cookies.get('token')

import { useMemberStore } from '@/store/useMemberStore';
const memberStore = useMemberStore();
const passwordList = reactive({
    oldPassword: '',
    oldPasswordMessage: true,
    newPassword: '',
    newPasswordMessage: false,
    newPasswordVerify: '',
    newPasswordVerifyMessage: false
})

watch(() => passwordList.oldPassword, (oldPassword) => {
    if (oldPassword) {
        passwordList.oldPasswordMessage = false
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

const modifyPassword = () => {
    if (passwordList.oldPasswordMessage) {
        alert('請輸入舊密碼')
    } else if (!passwordList.newPassword || !passwordList.newPasswordVerify) {
        alert('請輸入新密碼')
    } else if (passwordList.newPasswordMessage) {
        alert('新密碼不得與舊密碼相同')
    } else if (passwordList.newPasswordVerifyMessage) {
        alert('請輸入正確的新密碼')
    } else if (!passwordList.oldPasswordMessage && !passwordList.newPasswordMessage && !passwordList.newPasswordVerifyMessage) {
        axios.post('http://localhost:3000/member/modifyPassword', {
            'token': memberStore.token,
            'oldPassword': passwordList.oldPassword,
            'newPassword': passwordList.newPassword
        }).then((res) => {
            alert(res.data.message)
            if (res.data.message == '密碼正確') {
                router.push('/Member')
            }
        })
    }

}

</script>
<template>
    <div id="divMemberPassword">
        <Input :input-type="'password'" :inputId="'oldPassword'" :label-content="'舊密碼：'" :placeHolder="'請輸入目前的密碼'"
            v-model="passwordList.oldPassword"></Input>
        <p v-if="passwordList.oldPasswordMessage">請輸入舊密碼</p>
        <Input :input-type="'password'" :inputId="'newPassword'" :label-content="'新密碼：'" :placeHolder="'請輸入新密碼'"
            v-model="passwordList.newPassword"></Input>
        <p v-if="passwordList.newPasswordMessage">新密碼不得與舊密碼相同</p>
        <Input :input-type="'password'" :inputId="'newPasswordVerify'" :label-content="'新密碼：'" :placeHolder="'請再次輸入新密碼'"
            v-model="passwordList.newPasswordVerify"></Input>
        <p v-if="passwordList.newPasswordVerifyMessage">請輸入正確的新密碼</p>
        <Button :btn-content="'確認更改密碼'" :onClickFunction="modifyPassword"></Button>
    </div>
</template>