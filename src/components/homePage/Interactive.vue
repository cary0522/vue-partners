<script setup>
import Title from './Title.vue';
import OptionBehaviors from './OptionBehaviors.vue';
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
        <div className="homepage-part3 container-fluid text-center my-5">
            <div className="p-3">
                <div className="container-fluid d-flex justify-content-center flex-wrap p-0">
                    <OptionBehaviors v-for="option in optionList" :optionName='option.title'
                        :optionClass='option.class' />
                </div>
            </div>
        </div>
    </div>
</template>