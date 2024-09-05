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
    partnerName:'小王'
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
        "partnerName":data.partnerName,
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
    <div class="option-content col-9 col-md-12 col-lg-8 p-3">
        <div class="container-fluid col-12" id="make-container">
            <h1 id="makePart" class="m-0 mx-md-auto" v-if="(data.clickTime < 4)">選擇寵物外表</h1>
            <h1 id="makePart" class="m-0 mx-md-auto" v-else-if="(data.clickTime >= 4 && data.clickTime <= 7)">選擇寵物特質
            </h1>
            <h1 id="makePart" class="m-0 mx-md-auto" v-else>請為寵物命名</h1>
            <div class="col-12 my-2 mx-auto py-4 px-2 align-self-center d-md-flex justify-content-md-between"
                id="make-content" v-if="data.clickTime < 4">
                <div class='col-12 col-md-5'>
                    <input type="radio" id="appearance-left" name='option' class="col-6 radioOption"
                        :value="data.appearanceList[data.appearanceLeft]" v-on:click="clickAppearance">
                    <label for='appearance-left' id='appearance-left' class='radioLabel'>{{
                        data.appearanceList[data.appearanceLeft] }}</label>
                </div>
                <p class='col-12 col-md-2 orContent'>或是</p>
                <div class='col-12 col-md-5'>
                    <input type="radio" id="appearance-right" name='option' class="col-6 radioOption"
                        :value="data.appearanceList[data.appearanceRight]" v-on:click="clickAppearance">
                    <label for='appearance-right' id='appearance-right' class='radioLabel'>{{
                        data.appearanceList[data.appearanceRight] }}</label>
                </div>
            </div>
            <div class="col-12 my-2 mx-auto py-4 px-2 align-self-center d-md-flex justify-content-md-between"
                id="make-content" v-else-if="(data.clickTime >= 4 && data.clickTime <= 7)">
                <div class='col-12 col-md-5'>
                    <input type="radio" id="trait-left" name='option' class="col-6 radioOption"
                        :value="data.traitList[data.traitLeft]" v-on:click="clickAppearance">
                    <label for='trait-left' id='trait-left' class='radioLabel'>{{
                        data.traitList[data.traitLeft] }}</label>
                </div>
                <p class='col-12 col-md-2 orContent'>或是</p>
                <div class='col-12 col-md-5'>
                    <input type="radio" id="trait-right" name='option' class="col-6 radioOption"
                        :value="data.traitList[data.traitRight]" v-on:click="clickAppearance">
                    <label for='trait-right' id='trait-right' class='radioLabel'>{{
                        data.traitList[data.traitRight] }}</label>
                </div>
            </div>
            <div class="col-12 my-2 mx-auto py-4 px-2 align-self-center d-md-flex justify-content-md-between"
                id="make-content" v-else-if="data.clickTime == 8">
                <div class="input-group my-3 mx-auto flex-nowrap ms-1">
                    <span class="input-group-text inputGroup-sizing-lg">輸入名稱</span>
                    <input type="text" class="form-control" id='name-text' required v-model="data.partnerName">
                </div>
                <div class='col-10 col-md-3 my-3 mx-auto'>
                    <button type="button" class="btn" id='make-done' v-on:click="makeDone">
                        <a class='text-decoration-none'>製作完成</a>
                    </button>
                </div>
            </div>

        </div>
        <div class="col-12 my-3 my-md-5 mx-auto py-3 px-2 justify-content-center d-flex">
            <div class="col-6 me-3">
                <UserAppearance v-for="appearance in data.appearanceUser" :appearanceContent="appearance">
                </UserAppearance>
            </div>
            <div class="col-2 align-self-center" id="blindImg">
                <img src="/nobackgroundIMG/0000.nobg.png" alt="" class="w-100">
            </div>
            <div class="col-6 me-3">
                <UserTraits v-for="trait in data.traitUser" :traitContent='trait'></UserTraits>
            </div>
        </div>
        <div class="position-absolute d-flex" id="footprintDiv">
            <div class="footprintItem" v-for="n in 8">
                <FontAwesomeIcon :icon="faPaw" class="footDivI"></FontAwesomeIcon>
            </div>
        </div>
    </div>

</template>