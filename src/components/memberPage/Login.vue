<script setup>
import { reactive } from 'vue';
import Input from '../Input.vue';
import Button from '../Button.vue';
import VueRecaptcha from 'vue3-recaptcha2';
import axios from 'axios';
import { useCookies } from 'vue3-cookies';

const user = reactive({
    account: null,
    password: null,
    googleToken: ''
})

const vueRecaptchaV2 = reactive({
    sitekey: '6LdRjSAqAAAAAD2gHHS7x-V31XSDTx01FC3pzsRK',
    recaptchaVerified: (response_token) => {
        user.googleToken = response_token
        // 連接後端API，給後端進行認證
    },
    recaptchaExpired: () => {
        // 驗證過期後進行的動作
        console.log('驗證過期');
    },
    recaptchaFailed: () => {
        // 驗證失敗進行的動作
        console.log('驗證失敗');
    },
})

const {cookies} = useCookies();
const cookiesToken = cookies.get('token')

const loginFunction = async (e) => {
    if (!user.googleToken) {
        alert('請完成驗證')
    } else {
        try {
            await axios.post('http://localhost:3000/member/login', {
                account: user.account.toString(),
                password: user.password.toString(),
                'g-recaptcha-response': user.googleToken
            }).then((res) => {
                alert(res.data.message)
                cookies.set('token',res.data.token)
            })
        } catch (err) {
            console.log(err)
        }
    }
}

</script>

<template>
    <div class="col-10 border p-5 d-flex flex-column align-items-center">
        <Input :input-type="'mail'" :inputId="'account'" :label-content="'帳號：'" :placeHolder="'請輸入帳號'"
            v-model="user.account"></Input>
        <Input :input-type="'password'" :inputId="'password'" :label-content="'密碼：'" :placeHolder="'請輸入密碼'"
            v-model="user.password"></Input>
        <VueRecaptcha :sitekey="vueRecaptchaV2.sitekey" size="normal" hl="en" @verify="vueRecaptchaV2.recaptchaVerified"
            @expire="vueRecaptchaV2.recaptchaExpired" @fail="vueRecaptchaV2.recaptchaVerified"></VueRecaptcha>
        <Button :btn-type="'button'" :btn-content="'登入'" :onClickFunction="loginFunction"></Button>
    </div>
</template>