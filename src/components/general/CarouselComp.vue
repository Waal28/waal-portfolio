<template>
  <div class="relative w-fit mx-auto overflow-hidden">
    <!-- Slides -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0"
      >
        <img :src="slide" class="w-full h-fit rounded-lg" />
      </div>
    </div>

    <!-- Prev Button -->
    <template v-if="slides.length > 1">
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white sm:p-2 p-1 rounded-full"
      >
        ❮
      </button>

      <!-- Next Button -->
      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white sm:p-2 p-1 rounded-full"
      >
        ❯
      </button>
      <!-- Dots -->
      <div
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
      >
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="h-2 w-2 rounded-full cursor-pointer"
          :class="currentIndex === index ? 'bg-white' : 'bg-gray-500'"
          @click="goToSlide(index)"
        >
        </span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

// Menerima slides dari props
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
const currentIndex = ref(0);
// let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.slides.length) % props.slides.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// onMounted(() => {
//   interval = setInterval(nextSlide, 3000); // Auto-slide tiap 3 detik
// });

// onUnmounted(() => {
//   clearInterval(interval);
// });
</script>
