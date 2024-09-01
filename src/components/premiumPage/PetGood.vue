<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDollarSign, faMinus, faPlus, faCartPlus } from '@fortawesome/free-solid-svg-icons';

defineProps(['petGood'])
</script>

<template>
    <form class='cartForm' action='#' method='POST' id='form'>
        <img :src='petGood.image.image' alt="" class='w-75 pet-card-img m-1'>
        <input type="text" hidden value={{petGood.image}} name='goodsImage'>
        <p class='text-wrap mx-auto goodsNameText'>{{ petGood.feature }}</p>
        <input type="text" hidden value={{petGood.feature}} name='goodsName'>
        <p class='fs-5'>{{ petGood.price }}
            <FontAwesomeIcon :icon="faDollarSign"></FontAwesomeIcon>
        </p>
        <input type="text" hidden value="{{petGood.price}}" name='goodsPrice'>
        <button class="btn btnMinus" type='button'>
            <FontAwesomeIcon :icon="faMinus"></FontAwesomeIcon>
        </button>
        <input type="tel" value='1' id='input' pattern="[0-9]{1}" name='goodsIndex' class='col-4 text-center'>
        <button class="btn btnPlus" type='button'>
            <FontAwesomeIcon :icon="faPlus"></FontAwesomeIcon>
        </button>
        <button type='submit' class='btn btn-outline-secondary col-6 mx-auto my-2 px-0 py-1 submitText'>
            <FontAwesomeIcon :icon="faCartPlus"></FontAwesomeIcon>
            <br>
            <small id='cartText'>加入購物車</small>
        </button>
    </form>
</template>