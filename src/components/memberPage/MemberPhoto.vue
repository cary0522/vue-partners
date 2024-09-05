<script setup>
import axios from 'axios';
import Button from '../Button.vue';
let userPhoto = defineModel()

const photoUpload = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/member/uploadPhoto', {
        data: userPhoto.value
    }).then(res => {
        alert(res.data.message)
    })
    console.log('upload ok')
}
function previewFiles(e) {
    let updatePhoto = e.target.files[0]
    const reader = new FileReader();
    reader.onload = function (e) {
        return userPhoto.value.photo = e.target.result
    };
    reader.readAsDataURL(updatePhoto);
}
</script>
<template>
    <div id="divMemberPhoto">
        <img :src="userPhoto.photo" alt="" />
        <form action="" method="">
            <input type="file" accept="image/gif, image/jpeg, image/png" id="memberPhoto" name="memberPhoto"
                placeholder="請上傳您的照片" @change="previewFiles" />
            <input type="submit" value='確認更改' @click="photoUpload" />
        </form>
    </div>
</template>