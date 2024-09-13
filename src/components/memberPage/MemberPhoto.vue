<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useMemberStore } from '@/store/useMemberStore';
const memberStore = useMemberStore();
// let userPhoto = defineModel()

const router = useRouter();

// 上傳圖片
const photoUpload = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/member/uploadPhoto', {
        data: [memberStore.userData.account.value, memberStore.photoData]
    }).then(res => {
        alert(res.data.message)
    }).then(() => {
        router.push('/Member')
    })
}

// 預覽圖片
function previewFiles(e) {
    let updatePhoto = e.target.files[0]
    const reader = new FileReader();
    reader.onload = function (e) {
        memberStore.photoData.photo = e.target.result
        memberStore.photoData.photoType = updatePhoto.type
    };
    reader.readAsDataURL(updatePhoto);
}
</script>
<template>
    <div id="divMemberPhoto">
        <img :src="memberStore.photoData.photo" alt="" />
        <form action="" method="">
            <input type="file" accept="image/gif, image/jpeg, image/png" id="memberPhoto" name="memberPhoto"
                placeholder="請上傳您的照片" @change="previewFiles" />
            <input type="submit" value='確認更改' @click="photoUpload" />
        </form>
    </div>
</template>