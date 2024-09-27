<script setup>
import axios from 'axios';
import PhoneTitle from '../PhoneTitle.vue'
import OptionBehaviors from '../OptionBehaviors.vue';
import { reactive, ref } from 'vue';
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

import { usePartnersStore } from '@/store/usePartnersStore';
const partnerStore = usePartnersStore();

// 回應列表
const partnerContent = ref(['Hi!', ])
const feedbackList = ref([])
axios.post('http://localhost:3000/partners/traitFeedback', {
    'traitList': partnerStore.$state.userPartner.userTraits
}).then((res) => {
    for (let i = 0; i < 4; i++) {
        feedbackList.value.push(res.data[i]['feedback'])
    }
})
const clickInteract = () => {
    let i = Math.floor(Math.random()*4)
    partnerContent.value.push(feedbackList.value[i])
}

</script>

<template>
    <div class="lg:flex-col grid-item grid-item2 text-start">
        <div class="w-full">
            <h2 class="p-4">
                來跟你的夥伴互動吧！
            </h2>
            <div class="w-full lg:w-5/6 mx-auto my-6">
                <div class="partnersIphone bg-white w-full relative">
                    <div class="flex justify-between px-4 py-2">
                        <PhoneTitle></PhoneTitle>
                    </div>
                    <div class="w-full text-start text-2xl" id="interactive-partner-name"></div>
                    <div class="py-4 my-2" id="interactive-partner-feedback">
                        <div class="flex justify-start my-2" v-for="item in partnerContent">
                            <div class="iphone-pic ms-2 me-0" id="interactive-partner-photo">
                                <img :src=partnerStore.$state.photoUrl alt="" class="rounded-full">
                            </div>
                            <div class="relative text-left ms-4 flex items-center">
                                <p class="partner-text text-blue-500 ms-0">{{ item }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 mx-auto flex flex-wrap justify-between absolute bottom-0" id="interactive">
                        <OptionBehaviors v-for="option in optionList" :optionId="option.id" :optionName='option.title'
                            :optionClass='option.class' :clickFun="clickInteract"></OptionBehaviors>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>