<script setup>
import Banner from '@/components/homePage/Banner.vue';
import CustomizedOption from '@/components/homePage/CustomizedOption.vue';
import Interactive from '@/components/homePage/Interactive.vue';
import Button from '@/components/Button.vue';
import '../components/homePage/homePage.scss'
let btnStart = ()=>{
  window.open('/make','_self')
}
</script>

<template>
  <div id="homePage">
    <Banner></Banner>
    <CustomizedOption></CustomizedOption>
    <Interactive></Interactive>
    <div class="w-full flex flex-row justify-center">
      <Button :btnContent="'開始製作專屬寵物'" :onClickFunction='btnStart' class="no-underline p-3 btnStart fs-3"></Button>
    </div>
  </div>
</template>

