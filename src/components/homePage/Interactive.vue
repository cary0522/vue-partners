<script setup>
import Title from './Title.vue';
import OptionBehaviors from '../OptionBehaviors.vue';
import { reactive } from 'vue';
import { faHandHoldingHeart, faHandHoldingDollar, faThumbsUp, faUtensils, faDroplet, faShower, faGamepad, faPersonWalking, faToilet } from '@fortawesome/free-solid-svg-icons';
const optionList = reactive([
    {
        title: '關心',
        class: faHandHoldingHeart
    },
    {
        title: '零用錢',
        class: faHandHoldingDollar
    },
    {
        title: '稱讚',
        class: faThumbsUp
    },
    {
        title: '餵食',
        class: faUtensils
    },
    {
        title: '喝水',
        class: faDroplet
    },
    {
        title: '洗澡',
        class: faShower
    },
    {
        title: '玩耍',
        class: faGamepad
    },
    {
        title: '散步',
        class: faPersonWalking
    },
    {
        title: '廁所',
        class: faToilet
    },
])
</script>

<template>
    <div id="interactive">
        <Title :title='"互動選項"' :titleContent="'Interactive with me'"></Title>
        <div class="homepage-part3 w-full text-center my-12">
            <div class="p-4">
                <div class="w-full flex justify-center flex-wrap p-0">
                    <OptionBehaviors v-for="option in optionList" :optionName='option.title'
                        :optionClass='option.class' />
                </div>
            </div>
        </div>
    </div>
</template>