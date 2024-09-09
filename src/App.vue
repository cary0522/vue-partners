<script setup>
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useCookies } from 'vue3-cookies';
import axios from 'axios';
const { cookies } = useCookies()
const cookieToken = cookies.get('token')

const photoData = reactive({
  photo: '',
  userName: ''
})

axios.post('http://localhost:3000/member/userData', {
  'token': cookieToken
}).then((res) => {
  const photoType = res.data.photoType
  photoData.photo=res.data.photo?`data:image/${photoType};base64,`+res.data.photo:''
  photoData.userName=res.data.userName?res.data.userName:''
})

function logOut(){
  cookies.set('token','')
  window.location='/Member'
}
</script>

<template>
  <header>
    <div class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/make">Make</RouterLink>
      <RouterLink to="/Partners">Partners</RouterLink>
      <RouterLink to="/Premium">Premium</RouterLink>
      <RouterLink to="/Cart">Cart</RouterLink>
      <RouterLink to="/Member">
        <div v-if="cookieToken" id="userName">
          <img :src="photoData.photo" alt="">
          <p>Hi {{ photoData.userName }}</p>
          <button @click="logOut">登出</button>
        </div>
        <div v-else>
          Member
        </div>
      </RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.nav {
  width: 100%;
  min-width: 375px;
  margin: 0 0 10px 0;
  background-image: linear-gradient(270deg,
      rgba(230, 217, 114, 0.6),
      rgba(136, 215, 255, 0.6));
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 1000;

  a {
    font-size: 2rem;
    text-decoration: none;
    color: white;
  }

  #userName {
    display: flex;
    align-items: center;

    img {
      max-width: 50px;
    }

    p {
      margin: 0 5px;
    }
    button{
      max-width: 50px;
      padding: 10px;
      font-size: .8rem;
      border: none;
      border-radius: 50%;
      background-color: antiquewhite;
    }
  }

}
</style>
