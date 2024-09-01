<script setup>
import { faBatteryFull, faSignal, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
          <div id="phone" class="col-12 col-md-6">
                        <div
                class="container col-12 col-md-10 col-xl-8 d-flex justify-content-center mx-auto my-2 align-self-center">
                <div class="iphone bg-white w-100 position-relative">
                    <div>
                        <div class="iphoneTitle">
                            <p>AI partners</p>
                        </div>
                        <div class="phoneIcon">
                            <FontAwesomeIcon :icon="faWifi" class="icon"/>
                            <FontAwesomeIcon :icon="faSignal" class="icon"/>
                            <FontAwesomeIcon :icon="faBatteryFull" class="icon" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between py-3 my-2">
                        <div class="iphone-pic ms-2">
                            <img src="/partners_photo/0011.jpg" alt="" class="rounded-circle flex-shrink-0"/>
                        </div>
                        <div class="me-auto position-relative textContainer">
                            <p class="partner-text textOne darkText">嗨！我是您的AI寵物！</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between py-3 my-2">
                        <div class="iphone-pic my-auto ms-2">
                            <img src="/partners_photo/0011.jpg" alt="" class="rounded-circle flex-shrink-0"/>
                        </div>
                        <div class="text-start me-auto position-relative textContainer">
                            <p class="partner-text textTwo darkText">請問您喜歡哪種寵物？</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between py-3 my-2">
                        <div class="ms-auto iphone-text position-relative">
                            <p class="user-text textThree darkText">我喜歡 ...</p>
                        </div>
                        <div class="iphone-pic me-2">
                            <img src="https://picsum.photos/id/64/40/40" alt="" class="rounded-circle"/>
                        </div>
                    </div>
                    <div class="px-2 w-100 d-flex position-absolute enter-content">
                        <div class="bg-secondary-subtle m-1 w-100 rounded text-start ps-2 py-1 text-secondary">Aa</div>
                        <i class="fa-solid fa-paper-plane ms-auto my-auto"></i>
                    </div>
                </div>
            </div>
        </div>
</template>