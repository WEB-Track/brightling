<script setup>
import { ref, onUnmounted, TransitionGroup } from 'vue';
import sourceData from '@/assets/guests.json'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
 import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'
 import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
 import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
 import {faPause} from '@fortawesome/free-solid-svg-icons'
 
const guests = sourceData.guests

// Carousel Control Variables
const currentSliderIndex = ref(0);
let intervalId;
const isTimerPaused = ref(false);
const nextSlide = () => {
    currentSliderIndex.value = (currentSliderIndex.value + 1) % guests.length;
    isTimerPaused ? '' : startSlider()
};
const prevSlide = () => {
    currentSliderIndex.value = (currentSliderIndex.value - 1 + guests.length) % guests.length;
    isTimerPaused ? '' : startSlider()
};
const startSlider = () => {
    intervalId = setInterval(() => {
        nextSlide();
    }, 3000);
};
const playSlider = () => {
    isTimerPaused.value = false;
    startSlider();
}
const stopSlider = () => {
    clearInterval(intervalId);
    isTimerPaused.value = true;
}

startSlider();
onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<template>

    <div class="carousel flex">
        <div class="flex mx-auto justify-center relative w-full h-[85vh] m-auto">
            <template v-for="(guest, index) in guests" :key="index">
                <TransitionGroup name="fade" class="flex" v-if="index === currentSliderIndex">
                    <div class="carousel-image_wrap">
                        <img :src="'/src/assets/images/'+guest.image" :alt="guest.alt" class="w-full h-full absolute" 
                        />
                    </div>
                    <div class="h-full relative text-amber-100">
                        <h3 class="text-2xl bg-amber-950 bg-opacity-10 sm:text-3xl font-bold pt-8 px-3 text-center">
                        What Our Guests Say
                        </h3>
                        <p class="text-center bg-amber-950 bg-opacity-10 pt-5 px-5">
                        {{ guest.comments }}
                        </p>
                        <h6 class="pt-2 pb-2 bg-amber-950 bg-opacity-10 text-base sm:text-xl font-bold sm:font-semibold text-center">
                        {{ guest.name }}
                        </h6>
                    </div>
                </TransitionGroup>
            </template>

            <!-- next and previous buttons -->
            <FontAwesomeIcon :icon="faCaretRight" class="fas absolute rounded-[50%] bg-amber-950 bg-opacity-15 top-[40%] right-0 text-4xl p-1 m-2 cursor-pointer text-white z-50"
                    @click="nextSlide"/>
            <FontAwesomeIcon :icon=" faCaretLeft" class="fas absolute rounded-[50%] bg-amber-950 bg-opacity-15 top-[40%] left-0 p-1 text-4xl m-2 cursor-pointer text-white z-50"
                    @click="prevSlide"/>

                <!-- play or pause buttons -->
            <FontAwesomeIcon :icon="faCirclePlay" class="fa-solid absolute rounded-[50%] bg-amber-950 bg-opacity-15 bottom-3 text-3xl p-2 m-2 cursor-pointer text-gray-200 z-50"
                    @click="playSlider" v-if="isTimerPaused"/>
            <FontAwesomeIcon :icon="faPause" class="fa-solid absolute rounded-[50%] bg-amber-950 bg-opacity-15 bottom-3 text-3xl  p-2 m-2 cursor-pointer shadow-2xl text-gray-200 z-50"
                @click="stopSlider" v-else="isTimerPaused"/>
        </div>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s, transform 2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(0);
}
</style>