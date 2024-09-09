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
    <div class="plan plan-one rounded my-3 p-2 mx-auto col-10">
      <h3 class="my-1">解鎖夥伴</h3>
      <div class="row flex-wrap justify-content-center" id="petGoodList">
        <div v-for="petGood in good.data" class='pet-card position-relative col-6 col-lg-3 my-2'>
          <PetGood :petGood="petGood"></PetGood>
        </div>
      </div>
      <div id="linkArea" class="d-flex justify-content-evenly m-3">
        <a href="" id="prev" class="text-decoration-none">Prev</a>
        <a href="" class="pageLink text-decoration-none" id="pageOne">1</a>
        <a href="" class="pageLink text-decoration-none" id="pageTwo">2</a>
        <a href="" class="pageLink text-decoration-none" id="pageThree">3</a>
        <a href="" class="pageLink text-decoration-none" id="pageFour">4</a>
        <a href="" id="next" class="text-decoration-none">Next</a>
      </div>
    </div>
  </div>
</template>