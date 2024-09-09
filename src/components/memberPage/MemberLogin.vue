<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import MemberOption from './MemberOption.vue';
import MemberOptionView from './MemberOptionView.vue';

const { cookies } = useCookies();
const token = cookies.get('token')

const userData = reactive({
    account:{'title':'帳號',value:'',disable:true},
    userName:{'title':'會員名稱',value:'',disable:false},
    birth:{'title':'生日',value:'',disable:false},
    location:{'title':'聯絡地址',value:'',disable:false},
    phone:{'title':'聯絡電話',value:'',disable:false},
    createAt:{'title':'創建日期',value:'',disable:true},
})
const userPhoto = reactive({
    account:'',
    photo:'',
    photoType:''
})

// 取得會員資料
axios.post('http://localhost:3000/member/userData', {
    'token': token
}).then(res => {
    userData.account.value = res.data.account
    userData.birth.value = res.data.birth?res.data.birth:''
    userData.createAt.value = res.data.createAt.substring(0,10)
    userData.location.value = res.data.location?res.data.location:''
    userData.phone.value = res.data.phone?res.data.phone:''
    userData.userName.value = res.data.userName?res.data.userName:''
    userPhoto.account = res.data.account
    // 取得圖片格式
    const photoType = res.data.photoType
    userPhoto.photo = res.data.photo?`data:image/${photoType};base64,`+res.data.photo:''
    userPhoto.photoType = res.data.photoType?res.data.photoType:''
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
    <div id="divMember">
        <MemberOption v-model="options" class="col-2"></MemberOption>
        <MemberOptionView v-model:options="options" v-model:userData="userData" v-model:userPhoto="userPhoto" class="col-8"></MemberOptionView>
    </div>
</template>