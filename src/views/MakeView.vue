<script setup>
import '../components/makePage/makePage.scss'
import { reactive } from 'vue';
import PassView from '@/components/makePage/PassView.vue';
import MakeArea from '@/components/makePage/MakeArea.vue';


const loading = reactive({
  show: false
})

const loadingShow = () => {
  loading.show = true
}

</script>

<template>
  <div id="makePage">
    <div v-if="loading.show" id="loading" class="row">
      <PassView></PassView>
    </div>
    <div class="container-fluid d-flex justify-content-center p-3 position-relative">
      <MakeArea :loadingShowFunction="loadingShow" :loadingShow="loading.show"></MakeArea>
    </div>

  </div>
</template>