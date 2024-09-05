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
            <h2 class="p-3 highlight">夥伴基本資料</h2>
        </div>
        <div class="d-flex justify-content-center p-3 lightText">
            <p class="fs-4">夥伴姓名：</p>
            <p id="partner-name" class="fs-4">{{ partnerData.partnerName }}</p>
        </div>
        <div id="photo" class="my-2"></div>
        <div class="col-lg-12 p-3 lh-lg lightText" id="info">
            <p class='fs-5 m-0'>{{ partnerData.partnerName }}，是一位{{ partnerData.appearanceList['appearanceOne'] }}風格、
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