<script setup>
import { usePartnersStore } from '@/store/usePartnersStore';
import axios from 'axios';
const partnerStore = usePartnersStore();

axios.post('http://localhost:3000/partners/photo', {
    "appearanceList": partnerStore.$state.userPartner.userAppearance
}).then((res) => {
    partnerStore.$state.photoUrl = res.data
})
</script>

<template>
    <div class="grid-item grid-item1">
        <div>
            <h2 class="p-4 highlight">夥伴基本資料</h2>
        </div>
        <div class="flex justify-center p-4">
            <p class="text-xl">夥伴姓名：</p>
            <p id="partner-name" class="text-xl">{{ partnerStore.$state.userPartner.partnerName }}</p>
        </div>
        <div id="photo" class="my-2">
            <img :src=partnerStore.$state.photoUrl alt="" class="rounded-2xl">
        </div>
        <div class="w-full p-12 md:p-8 lg:p-4" id="info">
            <p class='text-xl m-0 tracking-widest'>{{ partnerStore.$state.userPartner.partnerName }}，是一位{{
                partnerStore.$state.userPartner.userAppearance[0] }}風格、
                具有{{
                    partnerStore.$state.userPartner.userAppearance[1] }}、
                {{ partnerStore.$state.userPartner.userAppearance[2] }}的{{
                    partnerStore.$state.userPartner.userAppearance[3]
                }}寵物！
                個性{{ partnerStore.$state.userPartner.userTraits[0] }}、{{ partnerStore.$state.userPartner.userTraits[1]
                }}、{{
                    partnerStore.$state.userPartner.userTraits[2] }}，而且喜愛{{
                    partnerStore.$state.userPartner.userTraits[3] }}！ </p>

        </div>
    </div>

</template>