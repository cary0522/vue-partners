<script setup>
import Button from '@/components/Button.vue';
import UnLogin from '@/components/memberPage/UnLogin.vue';
import MemberLogin from '@/components/memberPage/MemberLogin.vue';
// import { useCookies } from 'vue3-cookies';
// const { cookies } = useCookies();
// const cookiesToken = cookies.get('token')
import { useMemberStore } from '@/store/useMemberStore';
const memberStore = useMemberStore();
import '../components/memberPage/memberPage.scss'
</script>

<template>
  <div class="memberPage">
    <div v-if="memberStore.token">
      <h2>登入顯示</h2>
      <MemberLogin></MemberLogin>
    </div>
    <div v-else>
      <h2>未登入顯示</h2>
      <UnLogin></UnLogin>
    </div>
  </div>
</template>