<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import Input from '../Input.vue';
import Button from '../Button.vue';
const register = reactive({
    account: '',
    password: ''
})

const registerFunction = async () => {
    if (!register.account || !register.password) {
        alert('請輸入帳號密碼')
    }
    try {
        await axios.post("http://localhost:3000/member/register", {
            registerAccount: register.account.toString(),
            registerPassword: register.password.toString(),
        }).then((response) => {
            alert(response.data.message)
        })
    } catch (err) {
        console.log(err)
    }
}
</script>

<template>
    <h3>register</h3>
    <div class="col-10 border p-5 d-flex flex-column align-items-center">
        <Input :input-id="'account'" :input-type="'text'" :label-content="'帳號：'" :place-holder="'請輸入註冊帳號'"
            v-model="register.account"></Input>
        <Input :input-id="'password'" :input-type="'password'" :label-content="'密碼：'" :place-holder="'請輸入註冊密碼'"
            v-model="register.password"></Input>
        <Button :btn-type="'button'" :btn-content="'註冊'" :onClickFunction="registerFunction"></Button>
    </div>
</template>