<script setup>
import axios from 'axios';
import { computed, reactive } from 'vue';
import PetGood from '@/components/premiumPage/PetGood.vue';
import '../components/premiumPage/premiumPage.scss'

const goodsData = reactive({
  goods: [],
  perPageGoods: 4,
  currentPage: 1
})

// 取得所有商品資料
axios.get('http://localhost:3000/premium').then((res) => {
  goodsData.goods = res.data
  return (goodsData.goods)
})

// 計算分頁所需資料
const totalPage = computed(() => {
  return goodsData.goods.length / goodsData.perPageGoods
})
console.log('totalPage:', totalPage.value)
const startNum = computed(() => {
  return (goodsData.currentPage - 1) * goodsData.perPageGoods
})
const endNum = computed(() => {
  return startNum.value + goodsData.perPageGoods
})

const setPage = function (page) {
  if (page <= 0 || page > 4) {
    return
  }
  return goodsData.currentPage = page
}

</script>

<template>
  <div id="premiumPage">
    <div class="plan plan-one rounded my-4 p-2 mx-auto w-5/6">
      <h3 class="w-full my-1 text-2xl">解鎖夥伴</h3>
      <div class="w-full flex flex-wrap justify-center" id="petGoodList">
        <div v-for="petGood in goodsData.goods.slice(startNum, endNum)" class='pet-card relative w-1/2 lg:w-1/5 m-2'>
          <PetGood :petGood="petGood"></PetGood>
        </div>
      </div>
      <div id="linkArea" class="flex justify-evenly m-4">
        <a href="" id="prev" class="no-underline" v-on:click.prevent="setPage(goodsData.currentPage - 1)">Prev</a>
        <a href="" class="pageLink no-underline" v-for="n in 4" v-on:click.prevent="setPage(n)">{{ n }}</a>
        <a href="" id="next" class="no-underline" v-on:click.prevent="setPage(goodsData.currentPage + 1)">Next</a>
      </div>
    </div>
  </div>
</template>