<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDollarSign, faMinus, faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';

defineProps(['petGood'])
</script>

<template>
    <form class='cartForm' action='#' method='POST' id='form'>
        <img :src='petGood.image.image' alt="" class='w-3/4 pet-card-img m-1'>
        <input type="text" hidden value={{petGood.image}} name='goodsImage'>
        <p class='mx-auto px-0 md:px-8 xl:px-11 leading-8 goodsNameText'>{{ petGood.feature }}</p>
        <input type="text" hidden value={{petGood.feature}} name='goodsName'>
        <p class='text-2xl'>{{ petGood.price }}
            <FontAwesomeIcon :icon="faDollarSign"></FontAwesomeIcon>
        </p>
        <input type="text" hidden value="{{petGood.price}}" name='goodsPrice'>
        <button class="btnMinus" type='button'>
            <FontAwesomeIcon :icon="faMinus"></FontAwesomeIcon>
        </button>
        <input type="tel" value='1' id='input' pattern="[0-9]{1}" name='goodsIndex' class='w-1/3 text-center bg-transparent'>
        <button class="btnPlus" type='button'>
            <FontAwesomeIcon :icon="faPlus"></FontAwesomeIcon>
        </button>
        <button type='submit' class='w-full mx-auto my-2 px-0 py-1 submitText leading-8 btnCart'>
            <FontAwesomeIcon :icon="faCartPlus"></FontAwesomeIcon>
            <br>
            <small id='cartText'>加入購物車</small>
        </button>
    </form>
</template>