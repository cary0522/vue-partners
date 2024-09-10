<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import PetGood from '@/components/premiumPage/PetGood.vue';
import '../components/premiumPage/premiumPage.scss'

const good = reactive({
  data: null
})

axios.get('http://localhost:3000/premium').then((res) => {
  good.data = res.data
  console.log('ok')
  // console.log(good.data)
  return (good.data)
})

</script>

<template>
  <div id="premiumPage">
    <div class="plan plan-one rounded my-4 p-2 mx-auto w-5/6">
      <h3 class="w-full my-1 text-2xl">解鎖夥伴</h3>
      <div class="w-full flex flex-wrap justify-center" id="petGoodList">
        <div v-for="petGood in good.data" class='pet-card relative w-1/2 lg:w-1/5 m-2'>
          <PetGood :petGood="petGood"></PetGood>
        </div>
      </div>
      <div id="linkArea" class="flex justify-evenly m-4">
        <a href="" id="prev" class="no-underline">Prev</a>
        <a href="" class="pageLink no-underline" id="pageOne">1</a>
        <a href="" class="pageLink no-underline" id="pageTwo">2</a>
        <a href="" class="pageLink no-underline" id="pageThree">3</a>
        <a href="" class="pageLink no-underline" id="pageFour">4</a>
        <a href="" id="next" class="no-underline">Next</a>
      </div>
    </div>
  </div>
</template>