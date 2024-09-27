<script setup>
import '../components/partnersPage/partnersPage.scss'

import PartnerData from '@/components/partnersPage/PartnerData.vue';
import PartnersFootprint from '@/components/partnersPage/PartnersFootprint.vue';
import PartnerInteract from '@/components/partnersPage/PartnerInteract.vue';


</script>

<template>
  <div id="partnersPage" class="container-fluid">
    <div class="grid-container grid">
      <PartnerData></PartnerData>
      <PartnerInteract></PartnerInteract>
    </div>
    <PartnersFootprint></PartnersFootprint>
  </div>
</template>