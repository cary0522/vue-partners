<script setup>
const props = defineProps(['loadingShowFunction'])

import axios from 'axios';
import { reactive } from 'vue';
import UserAppearance from './UserAppearance.vue';
import UserTraits from './UserTraits.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const data = reactive({
    traitList: [],
    traitLeft: 0,
    traitRight: 1,
    appearanceList: [],
    appearanceLeft: 0,
    appearanceRight: 1,
    traitUser: ['', '', '', ''],
    appearanceUser: ['', '', '', ''],
    clickTime: 0,
    partnerName: '小王'
})

const clickTimeCount = () => {
    data.clickTime++
}

function clickAppearance(e) {
    if (data.clickTime < 4) {
        data.appearanceUser[data.clickTime] = e.target.value
        clickTimeCount()
        data.appearanceLeft += 2
        data.appearanceRight += 2
        footStyle()
    } else if (data.clickTime >= 4 && data.clickTime <= 7) {
        data.traitUser[data.clickTime - 4] = e.target.value
        clickTimeCount()
        data.traitLeft += 2
        data.traitRight += 2
        footStyle()
    }
    console.log('appearance:', data.appearanceUser, 'trait:', data.traitUser)
}

const makeDone = () => {
    props.loadingShowFunction()
    setTimeout(() => {
        window.open('/partners', '_self')
    }, 2800)
    axios.post('http://localhost:3000/data/userOptions', {
        "partnerName": data.partnerName,
        "appearanceOne": data.appearanceUser[0],
        "appearanceTwo": data.appearanceUser[1],
        "appearanceThree": data.appearanceUser[2],
        "appearanceFour": data.appearanceUser[3],
        "traitOne": data.traitUser[0],
        "traitTwo": data.traitUser[1],
        "traitThree": data.traitUser[2],
        "traitFour": data.traitUser[3]
    }).then(response => {
        console.log(response)
    })

}


const footStyle = () => {
    console.log(data.clickTime)
}

axios.get('http://localhost:3000/data/trait').then((res) => {
    res.data.forEach(element => {
        data.traitList.push(element.trait)
    });
    return (data.traitList)
})
axios.get('http://localhost:3000/data/appearance').then((res) => {
    res.data.forEach(element => {
        data.appearanceList.push(element.appearance)
    });
    return (data.appearanceList)
})

</script>

<template>
    <div class="option-content w-4/4 md:w-full lg:w-2/3 p-6">
        <div class="w-full" id="make-container">
            <h1 id="makePart" class="m-0 md:mx-auto" v-if="(data.clickTime < 4)">選擇寵物外表</h1>
            <h1 id="makePart" class="m-0 md:mx-auto" v-else-if="(data.clickTime >= 4 && data.clickTime <= 7)">選擇寵物特質
            </h1>
            <h1 id="makePart" class="m-0 md:mx-auto" v-else>請為寵物命名</h1>
            <div class="w-full my-2 mx-auto py-6 px-2 self-center md:flex md:justify-between" id="make-content"
                v-if="data.clickTime < 4">
                <div class='w-full md:w-5/12'>
                    <input type="radio" id="appearance-left" name='option' class="w-1/2 radioOption"
                        :value="data.appearanceList[data.appearanceLeft]" v-on:click="clickAppearance">
                    <label for='appearance-left' id='appearance-left' class='radioLabel'>{{
                        data.appearanceList[data.appearanceLeft] }}</label>
                </div>
                <p class='w-full md:w-1/6 orContent'>或是</p>
                <div class='w-full md:w-5/12'>
                    <input type="radio" id="appearance-right" name='option' class="w-1/2 radioOption"
                        :value="data.appearanceList[data.appearanceRight]" v-on:click="clickAppearance">
                    <label for='appearance-right' id='appearance-right' class='radioLabel'>{{
                        data.appearanceList[data.appearanceRight] }}</label>
                </div>
            </div>
            <div class="w-full my-2 mx-auto py-6 px-2 self-center md:flex md:justify-between" id="make-content"
                v-else-if="(data.clickTime >= 4 && data.clickTime <= 7)">
                <div class='w-full md:w-5/12'>
                    <input type="radio" id="trait-left" name='option' class="w-1/2 radioOption"
                        :value="data.traitList[data.traitLeft]" v-on:click="clickAppearance">
                    <label for='trait-left' id='trait-left' class='radioLabel'>{{
                        data.traitList[data.traitLeft] }}</label>
                </div>
                <p class='w-full md:w-1/6 orContent'>或是</p>
                <div class='w-full md:w-5/12'>
                    <input type="radio" id="trait-right" name='option' class="w-1/2 radioOption"
                        :value="data.traitList[data.traitRight]" v-on:click="clickAppearance">
                    <label for='trait-right' id='trait-right' class='radioLabel'>{{
                        data.traitList[data.traitRight] }}</label>
                </div>
            </div>
            <div class="w-full my-2 mx-auto py-6 px-2 self-center xl:flex xl:justify-between" id="make-content"
                v-else-if="data.clickTime == 8">
                <div class="w-full xl:w-2/3 my-4 mx-auto">
                    <div id="divInput" class="w-full flex flex-nowrap">
                        <span class="ml-0 w-1/3 h-full text-base md:text-2xl">輸入名稱</span>
                        <input type="text" class="h-full w-2/3 ml-0 text-base md:text-2xl" id='name-text' required v-model="data.partnerName">
                    </div>
                </div>
                <div class='w-full xl:w-1/3 my-4 mx-auto'>
                    <button type="button" class="button" id='make-done' v-on:click="makeDone">
                        <a class='no-underline text-base md:text-2xl'>製作完成</a>
                    </button>
                </div>
            </div>

        </div>
        <div class="w-full my-4 md:my-12 mx-auto py-6 px-2 justify-center flex">
            <div class="w-2/5 mr-4">
                <div>
                    <UserAppearance v-for="(appearance, n) in data.appearanceUser" :appearanceContent="appearance"
                        :class="n <= data.clickTime - 1 ? 'checkedAppearance' : ''">
                    </UserAppearance>
                </div>
            </div>
            <div class="w-1/5 self-center" id="blindImg">
                <img src="/nobackgroundIMG/0000.nobg.png" alt="" class="w-full">
            </div>
            <div class="w-2/5 mr-4">
                <UserTraits v-for="(trait, n) in data.traitUser" :traitContent='trait'
                    :class="(n <= data.clickTime - 5) ? 'checkedTrait' : ''"></UserTraits>
            </div>
        </div>
        <div class="absolute flex" id="footprintDiv">
            <div class="footprintItem" v-for="n in 8">
                <FontAwesomeIcon :icon="faPaw" class="footDivI"
                    :style="(n <= data.clickTime) ? { 'color': '#ec7b7d' } : ''">
                </FontAwesomeIcon>
            </div>
        </div>
    </div>

</template>