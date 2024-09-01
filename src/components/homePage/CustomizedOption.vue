<script setup>
import Title from './Title.vue';
import BgText from '../BgText.vue';
import Option from './Option.vue';
import { reactive } from 'vue';

const customizedContent = reactive({
    appearance: {
        title: '外表選項',
        titleContent: 'Customize Appearances',
        optionImg: '/nobackgroundIMG/0011.nobg.png',
        optionList: ['毛絨可愛', '現代機械', '大眼睛', '小眼睛', '大耳朵', '小耳朵', '身強體壯', '瘦小可愛']
    },
    trait: {
        title: '特質選項',
        titleContent: 'Customize Traits',
        optionImg: '/nobackgroundIMG/1011.nobg.png',
        optionList: ['活潑', '安靜', '感性', '理性', '謹慎', '挑戰', '戶外活動', '居家生活']
    }
})
</script>

<template>
    <div id="customizedOption">
        <Title :title="'客製化選項'" :titleContent="'Customize Options'"></Title>
        <div v-for='item in customizedContent' class="divOptions">
            <div>
                <Title :title="item.title" :titleContent="item.titleContent"></Title>
                <Option :optionImg="item.optionImg" :optionList="item.optionList"></Option>
            </div>
        </div>
        <BgText :textContent="'APPEARANCES'"></BgText>
        <BgText :textContent="'TRAITS'"></BgText>
    </div>
</template>