<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import MemberOption from './MemberOption.vue';
import MemberOptionView from './MemberOptionView.vue';
import { useMemberStore } from '@/store/useMemberStore';
const memberStore = useMemberStore();


// 取得會員資料
axios.post('http://localhost:3000/member/userData', {
    'token': memberStore.token
}).then(res => {
    memberStore.userData.account.value = res.data.account
    memberStore.userData.birth.value = res.data.birth ? res.data.birth : ''
    memberStore.userData.createAt.value = res.data.createAt.substring(0, 10)
    memberStore.userData.location.value = res.data.location ? res.data.location : ''
    memberStore.userData.phone.value = res.data.phone ? res.data.phone : ''
    memberStore.userData.userName.value = res.data.userName ? res.data.userName : ''
    // 取得圖片格式
    const photoType = res.data.photoType
    memberStore.photoData.photo = res.data.photo ? `data:image/${photoType};base64,` + res.data.photo : ''
    memberStore.photoData.photoType = res.data.photoType ? res.data.photoType : ''
})

// 左邊按鈕控制右邊顯示內容
function clickOption(index) {
    for (let i = 0; i < 5; i++) {
        if (i == index) {
            options[i].turnOn = true;
        } else {
            options[i].turnOn = false;
        }
    }
}

const options = reactive([
    {
        'title': '會員照片',
        'fun': () => {
            clickOption(0)
        },
        'value': 'photo',
        'turnOn': false,
    },
    {
        'title': '訂單資訊',
        'fun': () => {
            clickOption(1)
        },
        'value': 'order',
        'turnOn': false,
    },
    {
        'title': '付款資訊',
        'fun': () => {
            clickOption(2)
        },
        'value': 'payment',
        'turnOn': false,
    },
    {
        'title': '會員資料',
        'fun': () => {
            clickOption(3)
        },
        'value': 'accountData',
        'turnOn': true,
    },
    {
        'title': '修改密碼',
        'fun': () => {
            clickOption(4)
        },
        'value': 'password',
        'turnOn': false
    },
])
</script>

<template>
    <h4>
        login done
    </h4>
    <div id="divMember" class="h-full">
        <MemberOption v-model="options" class="w-1/6"></MemberOption>
        <MemberOptionView v-model:options="options" class="w-2/3"></MemberOptionView>
    </div>
</template>