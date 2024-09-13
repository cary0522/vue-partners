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
    <div v-if="loading.show" id="loading" class="flex flex-row">
      <PassView></PassView>
    </div>
    <div class="w-full flex justify-center p-4 relative">
      <MakeArea :loadingShowFunction="loadingShow" :loadingShow="loading.show"></MakeArea>
    </div>

  </div>
</template>