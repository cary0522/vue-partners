<script setup>
import axios from 'axios';
import Input from '../Input.vue';
import Button from '../Button.vue';
const userData = defineModel()

const memberAccountClick = () => {
    axios.post('http://localhost:3000/member/modifyData',{
        data:userData.value
    }).then(res=>{
        alert(res.data.message)
    })
    console.log('click')
}
</script>
<template>
    <div id="divMemberAccount">
        <Input v-for="(value, key) in userData" :input-id="key" :label-content="value.title" :input-type="'text'"
            v-model="value.value" :disable="value.disable"></Input>
        <Button :btn-content="'修改個人資訊'" :onClickFunction='memberAccountClick'></Button>
    </div>
</template>