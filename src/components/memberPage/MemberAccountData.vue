<script setup>
import axios from 'axios';
import Input from '../Input.vue';
import Button from '../Button.vue';
import { useRouter } from 'vue-router';
import { useMemberStore } from '@/store/useMemberStore';
const memberStore = useMemberStore();

const router = useRouter();

const memberAccountClick = () => {
    axios.post('http://localhost:3000/member/modifyData',{
        data:memberStore.userData
    }).then(res=>{
        alert(res.data.message)
    }).then(()=>{
        router.push('/Member')
    })
}
</script>
<template>
    <div id="divMemberAccount">
        <Input v-for="(value, key) in memberStore.userData" :input-id="key" :label-content="value.title" :input-type="'text'"
            v-model="value.value" :disable="value.disable"></Input>
        <Button :btn-content="'修改個人資訊'" :onClickFunction='memberAccountClick'></Button>
    </div>
</template>