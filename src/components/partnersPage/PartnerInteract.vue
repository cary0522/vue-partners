<script setup>
const props = defineProps(['userOptions']);
import PhoneTitle from '../PhoneTitle.vue'
import OptionBehaviors from '../OptionBehaviors.vue';
import { reactive } from 'vue';
import { faHandHoldingHeart, faHandHoldingDollar, faThumbsUp, faUtensils, faDroplet, faShower, faGamepad, faPersonWalking, faToilet } from '@fortawesome/free-solid-svg-icons';
const optionList = reactive([
    {
        title: '關心',
        class: faHandHoldingHeart,
        id: 'love-card'
    },
    {
        title: '零用錢',
        class: faHandHoldingDollar,
        id: 'money-card'
    },
    {
        title: '稱讚',
        class: faThumbsUp,
        id: 'command-card'
    },
    {
        title: '餵食',
        class: faUtensils,
        id: 'eating-card'
    },
    {
        title: '喝水',
        class: faDroplet,
        id: 'water-card'
    },
    {
        title: '洗澡',
        class: faShower,
        id: 'wash-card'
    },
    {
        title: '玩耍',
        class: faGamepad,
        id: 'play-card'
    },
    {
        title: '散步',
        class: faPersonWalking,
        id: 'hand-out-card'
    },
    {
        title: '廁所',
        class: faToilet,
        id: 'toilet-card'
    },
])
</script>

<template>
    <div class="flex-lg-column grid-item grid-item2 text-start">
        <div class="col-12">
            <h2 class="p-3 highlight">
                來跟你的夥伴互動吧！
            </h2>
            <div class="container col-12 col-md-8 col-lg-10 mx-auto my-4">
                <div class="partnersIphone bg-white w-100 position-relative">
                    <div class="d-flex justify-content-between px-3 py-2">
                        <PhoneTitle></PhoneTitle>
                    </div>
                    <div class="container-fluid text-start fs-3 lightText" id="interactive-partner-name"></div>
                    <div class="py-3 my-2" id="interactive-partner-feedback">
                        <div class="d-flex justify-content-start">
                            <div class="iphone-pic ms-2" id="interactive-partner-photo"></div>
                            <div class="position-relative">
                                <p class="partner-text">Hi</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-10 mx-auto d-flex flex-nowrap" id="interactive">
                        <OptionBehaviors v-for="option in optionList" :optionId="option.id" :optionName='option.title'
                            :optionClass='option.class'></OptionBehaviors>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>