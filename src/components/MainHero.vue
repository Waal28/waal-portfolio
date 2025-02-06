<template>
  <div class="container mx-auto relative" id="introduction" style="scroll-margin-top: 90px">
    <img
      src="../assets/images/lion_vintage.png"
      alt="..."
      class="w-full"
      @load="mainStore.onImageLoad"
    />
    <div
      v-if="displayedText[0]"
      class="absolute lg:top-[5%] lg:left-[18%] top-[3%] left-[18%] w-fit h-fit bg-black flex items-center justify-center lg:px-5 lg:py-2 px-2 py-1"
    >
      <h1
        class="lg:text-8xl md:text-[4vw] text-[4vw] font-emilysCandy font-bold text-transparent bg-clip-text bg-[url('/paper_bg.jpg')] bg-repeat bg-cover"
      >
        {{ displayedText[0] }}
      </h1>
    </div>
    <div
      v-if="displayedText[1]"
      class="absolute lg:top-[18%] lg:left-[60%] md:top-[6%] md:left-[49%] top-[6%] left-[49%] lg:w-[20%] md:w-fit md:h-fit w-fit h-fit bg-black flex items-center justify-center lg:px-5 lg:py-2 px-2 py-1"
    >
      <h1
        class="lg:text-8xl md:text-[4vw] text-[4vw] font-emilysCandy font-bold text-transparent bg-clip-text bg-[url('/paper_bg.jpg')] bg-repeat bg-cover"
      >
        {{ displayedText[1] }}
      </h1>
    </div>
    <div
      class="absolute lg:top-[60%] lg:left-[60%] md:top-[20%] md:left-[60%] top-[20%] left-[60%] lg:w-[30%] md:w-[30%] w-[30%]"
    >
      <div class="w-fit h-fit bg-black float-left mr-2 lg:px-3 px-1 py-0">
        <span
          v-if="displayedText[2]"
          class="lg:text-8xl md:text-[4vw] text-[4vw] font-emilysCandy font-bold text-transparent bg-clip-text bg-[url('/paper_bg.jpg')] bg-repeat bg-cover"
          >A</span
        >
      </div>
      <p
        class="text-justify lg:text-xl/10 md:text-[2.7vw] text-[3vw] font-lancelot lg:tracking-widest md:tracking-tighter tracking-tighter"
      >
        {{ displayedText[2] }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useMainStore } from '../store/main';

const mainStore = useMainStore();

const fullText = [
  'WELCOME',
  "I'm Wal Husna Faizul",
  'Passionate Full Stack Developer with a strong enthusiasm for building innovative web solutions. I enjoy tackling complex challenges in both frontend and backend development while continuously honing my skills to stay ahead in the ever-evolving tech landscape.',
]; // Teks penuh
const displayedText = ref(['', '', '']); // Teks yang sedang ditampilkan
const currentIndex = ref([0, 0, 0]); // Indeks karakter saat ini

function startTypewriter(typingSpeed, idx) {
  const interval = setInterval(() => {
    const currentText = fullText[idx];
    if (currentIndex.value[idx] < currentText.length) {
      displayedText.value[idx] += currentText[currentIndex.value[idx]];
      currentIndex.value[idx]++;
    } else {
      clearInterval(interval); // Hentikan animasi setelah selesai
    }
  }, typingSpeed);
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

watch(mainStore.isLoading, async (newIsLoading, oldIsLoading) => {
  if (newIsLoading === false) {
    startTypewriter(100, 0);
    await delay(700);
    startTypewriter(50, 1);
    await delay(1000);
    startTypewriter(20, 2);
  }
});
</script>

<style scoped></style>
