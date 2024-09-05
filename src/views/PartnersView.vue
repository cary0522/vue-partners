<script setup>
import '../components/partnersPage/partnersPage.scss'

import PartnerData from '@/components/partnersPage/PartnerData.vue';
import PartnersFootprint from '@/components/partnersPage/PartnersFootprint.vue';
import PartnerInteract from '@/components/partnersPage/PartnerInteract.vue';
import axios from 'axios';
import { ref } from 'vue';

const userOptions = ref(null)

axios.get('http://localhost:3000/data/userOptions').then((res)=>{
  return userOptions.value = res.data
})
</script>

<template>
  <div id="partnersPage" class="container-fluid">
    <div class="grid-container grid">
      <PartnerData :userOptions="userOptions"></PartnerData>
      <PartnerInteract :userOptions="userOptions"></PartnerInteract>
    </div>
    <PartnersFootprint></PartnersFootprint>
  </div>
</template>