<script setup>
import PhoneTitle from '../PhoneTitle.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <div id="phone" class="w-full md:w-1/2">
        <div class="w-full md:w-5/6 xl:w-2/3 flex justify-center mx-auto my-2 self-center">
            <div class="iphone bg-white w-full relative">
                <PhoneTitle></PhoneTitle>
                <div class="flex justify-between py-4 my-2">
                    <div class="iphone-pic ml-2">
                        <img src="/partners_photo/0011.jpg" alt="" class="rounded-full flex-shrink-0" />
                    </div>
                    <div class="mr-auto relative textContainer">
                        <p class="partner-text textOne">嗨！我是您的AI寵物！</p>
                    </div>
                </div>
                <div class="flex justify-between py-4 my-2">
                    <div class="iphone-pic my-auto ml-2">
                        <img src="/partners_photo/0011.jpg" alt="" class="rounded-full flex-shrink-0" />
                    </div>
                    <div class="text-start mr-auto relative textContainer">
                        <p class="partner-text textTwo">請問您喜歡哪種寵物？</p>
                    </div>
                </div>
                <div class="flex justify-between py-4 my-2">
                    <div class="ml-auto iphone-text relative">
                        <p class="user-text textThree">我喜歡 ...</p>
                    </div>
                    <div class="iphone-pic mr-2">
                        <img src="https://picsum.photos/id/64/40/40" alt="" class="rounded-full" />
                    </div>
                </div>
                <div class="px-2 w-11/12 flex absolute mx-3 enter-content box-border">
                    <div class="bg-secondary-subtle m-1 w-full rounded text-start pl-2 py-1 text-secondary">Aa</div>
                    <FontAwesomeIcon :icon="faPaperPlane" class="ml-auto mr-2 my-auto"></FontAwesomeIcon>
                </div>
            </div>
        </div>
    </div>
</template>