<script setup>
import { reactive } from 'vue';
const props = defineProps(['userOptions']);
const partnerData = reactive({
    partnerName: props.userOptions.partnerName,
    appearanceList: props.userOptions.appearanceList,
    traitList: props.userOptions.traitList
})
</script>

<template>
    <div class="grid-item grid-item1">
        <div>
            <h2 class="p-4 highlight">夥伴基本資料</h2>
        </div>
        <div class="flex justify-center p-4">
            <p class="text-base">夥伴姓名：</p>
            <p id="partner-name" class="text-base">{{ partnerData.partnerName }}</p>
        </div>
        <div id="photo" class="my-2"></div>
        <div class="w-full p-12 md:p-8 lg:p-4" id="info">
            <p class='text-xl m-0'>{{ partnerData.partnerName }}，是一位{{ partnerData.appearanceList['appearanceOne'] }}風格、
                具有{{
                    partnerData.appearanceList['appearanceTwo'] }}、
                {{ partnerData.appearanceList['appearanceThree'] }}的{{ partnerData.appearanceList['appearanceFour']
                }}寵物！
                個性{{ partnerData.traitList['traitOne'] }}、{{ partnerData.traitList['traitTwo'] }}、{{
                    partnerData.traitList['traitThree'] }}，而且喜愛{{
                    partnerData.traitList['traitFour'] }}！ </p>

        </div>
    </div>

</template>