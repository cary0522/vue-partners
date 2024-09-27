<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faUser, faCartShopping, faRankingStar, faPaw, faFlaskVial, faBars } from '@fortawesome/free-solid-svg-icons'
import { useMemberStore } from '@/store/useMemberStore';
import { ref } from 'vue';
const memberStore = useMemberStore();

const router = useRouter()

const barsShow = ref(false)

function logOut() {
  localStorage.removeItem('member')
  memberStore.$reset();
  router.push('/Member')
}

</script>

<template>
  <header class="hidden md:block">
    <div class="nav">
      <RouterLink to="/">
        <FontAwesomeIcon :icon="faHouse"></FontAwesomeIcon>Home
      </RouterLink>
      <RouterLink to="/make">
        <FontAwesomeIcon :icon="faFlaskVial"></FontAwesomeIcon>Make
      </RouterLink>
      <RouterLink to="/Partners">
        <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>Partners
      </RouterLink>
      <RouterLink to="/Premium">
        <FontAwesomeIcon :icon="faRankingStar"></FontAwesomeIcon>Premium
      </RouterLink>
      <RouterLink to="/Cart">
        <FontAwesomeIcon :icon="faCartShopping"></FontAwesomeIcon>Cart
      </RouterLink>
      <RouterLink to="/Member">
        <div v-if="memberStore.token" id="userName">
          <div class="flex content-center">
            <img :src="memberStore.photoData.photo" alt="" class="border rounded-full">
            <button @click="logOut">登出</button>
          </div>
          <p>Hi {{ memberStore.userData.userName.value }}</p>
        </div>
        <a v-else>
          <FontAwesomeIcon :icon="faUser"></FontAwesomeIcon>
          Member
        </a>
      </RouterLink>
    </div>
  </header>
  <header class="block md:hidden">
    <div class="nav">
      <div class="w-1/6">
        <FontAwesomeIcon :icon="faBars" v-on:click="barsShow = !barsShow"></FontAwesomeIcon>
      </div>
      <div class="w-1/3 h-full flex items-center">
        <RouterLink to="/">
          <img src="/logo-AIpartner.png" alt="" class="w-full">
        </RouterLink>
      </div>
      <div class="w-1/3 ml-auto mr-0">
        <RouterLink to="/Member">
          <div v-if="memberStore.token" id="userName">
            <div class="flex content-center">
              <img :src="memberStore.photoData.photo" alt="" class="border rounded-full">
              <button @click="logOut">登出</button>
            </div>
            <p>Hi {{ memberStore.userData.userName.value }}</p>
          </div>
          <a v-else>
            <FontAwesomeIcon :icon="faUser"></FontAwesomeIcon>
            Member
          </a>
        </RouterLink>
      </div>
    </div>
    <div v-if="barsShow" class="absolute h-full z-50 flex flex-col py-8 barNav">
      <RouterLink to="/">
        <FontAwesomeIcon :icon="faHouse"></FontAwesomeIcon>Home
      </RouterLink>
      <RouterLink to="/make">
        <FontAwesomeIcon :icon="faFlaskVial"></FontAwesomeIcon>Make
      </RouterLink>
      <RouterLink to="/Partners">
        <FontAwesomeIcon :icon="faPaw"></FontAwesomeIcon>Partners
      </RouterLink>
      <RouterLink to="/Premium">
        <FontAwesomeIcon :icon="faRankingStar"></FontAwesomeIcon>Premium
      </RouterLink>
      <RouterLink to="/Cart">
        <FontAwesomeIcon :icon="faCartShopping"></FontAwesomeIcon>Cart
      </RouterLink>
    </div>

  </header>

  <RouterView />
</template>

<style scoped>
@keyframes iconHover {
  0% {
    transform: translate(0px, 0px) scale(1);
  }

  25% {
    transform: translate(2px, -2px) scale(1.1);
  }

  50% {
    transform: translate(0px, -2px) scale(1.2);
  }

  75% {
    transform: translate(-2px, 0px) scale(1.1);
  }

  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

svg {
  cursor: pointer;
  transition: all .5s;

  &:hover {
    animation: iconHover .8s linear;
  }
}

.nav {
  min-width: 375px;
  height: 100px;
  margin: 0 0 10px 0;
  padding: 5px 0 0 0;
  background-image: linear-gradient(270deg,
      rgba(230, 217, 114, 0.6),
      rgba(136, 215, 255, 0.6));
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1000;



  a {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    color: white;
    transition: all .5s;

    &:hover {
      animation: iconHover .8s linear;
    }

    img {
      max-width: 50px;
      object-fit: contain;
    }

    svg {
      width: 100%;
    }

    @media screen and (max-width:1000px) {
      font-size: 1.5rem;
    }
  }

  #userName {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    p {
      width: 100%;
      margin: 0 5px;
      text-align: center;
    }

    button {
      max-width: 50px;
      padding: 10px;
      margin: 0 5px;
      font-size: .8rem;
      border: none;
      border-radius: 50%;
      background-color: antiquewhite;
    }
  }

  @media screen and (max-width:768px) {
    justify-content: space-between;
    padding: 10px;
    margin: 0;

    svg {
      color: white;
      font-size: 2rem;
    }
  }

}

.barNav {
  background-image: linear-gradient(0deg,
      rgba(230, 217, 114, 0.8),
      rgba(136, 215, 255, 0.8));
  width: 180px;

  a {
    display: block;
    width: 100%;
    font-size: 1.5rem;
    color: white;
    margin: 2rem;
    transition: all .5s;

    &:hover {
      animation: iconHover .8s linear;
    }

    svg {
      margin: 0 5px 0 0;
    }
  }
}
</style>
