<template>
  <div
    class="lg:-mt-[11%] -mt-[11%] relative z-10 overflow-hidden"
    id="my-projects"
    style="scroll-margin-top: -60px"
  >
    <img
      src="/paper_flower.png"
      alt="..."
      class="w-full transform lg:scale-100 lg:translate-x-0 scale-[120%] translate-x-[-2%] lg:translate-y-0 translate-y-[7%]"
      @load="mainStore.onImageLoad"
    />
    <img
      src="/paper_flower1.png"
      alt="..."
      class="lg:hidden block w-full transform lg:scale-100 lg:translate-x-0 scale-[120%] translate-x-[-2%] lg:translate-y-0 translate-y-[-5%]"
      @load="mainStore.onImageLoad"
    />
    <div
      class="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 absolute lg:top-[20%] lg:left-[20%] lg:right-[18%] lg:bottom-[18%] top-[11%] left-[10%] right-[12%] bottom-[8%] z-10"
    >
      <Transition name="print">
        <section
          v-if="show"
          class="lg:border-r-2 border-black lg:m-4 md:m-0 m-0 lg:mb-4 md:mb-4 mb-1 lg:pb-0 md:pb-1 pb-1 flex lg:flex-row md:flex-col flex-col items-center lg:justify-start md:justify-center justify-center"
        >
          <span class="font-sancreek lg:text-7xl md:text-[5vw] text-[5vw] md:mb-2"
            >My Projects</span
          >
          <LineHorizontal
            class="lg:hidden md:block block w-full transform scale-90 md:-mb-[5%] -mb-[10%]"
          />
        </section>
      </Transition>
      <Transition name="print">
        <section
          v-if="show"
          class="lg:col-span-2 grid grid-cols-1 lg:gap-6 md:gap-3 gap-3 lg:m-4 md:m-2 m-2 max-h-full overflow-y-auto"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.name"
            class="flex lg:border-b-2 border-b border-black"
          >
            <div class="w-fit h-fit lg:mr-4 mr-2 bg-black flex items-center justify-center">
              <span
                class="lg:w-12 md:w-7 w-5 lg:text-5xl md:text-[3.5vw] text-[5vw] lg:py-2 md:py-1 py-1 text-center font-sancreek font-bold text-transparent bg-clip-text bg-[url('/paper_bg_v2.jpg')] bg-repeat bg-cover"
                >{{ index + 1 }}</span
              >
            </div>
            <div class="mb-4">
              <p class="font-sancreek lg:text-2xl md:text-[3.5vw] text-[3.5vw] lg:mb-3 mb-1">
                {{ project.name }}
              </p>
              <div class="flex flex-wrap lg:gap-2 gap-1 lg:mb-3 mb-2">
                <span
                  v-for="(stack, index) in project.stack"
                  :key="index"
                  class="font-lancelot lg:text-base md:text-[2.7vw] text-[2.7vw] bg-black text-white lg:px-2 lg:py-1 px-1 py-0"
                  >{{ stack }}</span
                >
              </div>
              <img
                :src="project.image[0]"
                :alt="project.name"
                @click="openModal(project)"
                class="lg:max-w-64 md:w-full w-full lg:border-2 border border-black lg:float-left float-none lg:mr-4 mr-2 lg:my-0 md:my-2 my-2 cursor-pointer transform filter grayscale hover:grayscale-0 duration-300 hover:scale-105"
              />
              <p
                class="font-lancelot lg:text-lg md:text-[2.7vw] text-[3vw] text-justify lg:tracking-widest tracking-tighter lg:opacity-100 md:leading-[4vw]"
              >
                {{ project.desc }}
              </p>
            </div>
          </div>
        </section>
      </Transition>
    </div>
  </div>
  <ModalDialog v-model="isOpen" v-if="selectedProject" :title="selectedProject.name">
    <CarouselComp :slides="selectedProject.image" />
  </ModalDialog>
</template>
<script setup>
import { watch, ref } from 'vue';
import { projects } from '../utils/constant';
import ModalDialog from './general/ModalDialog.vue';
import CarouselComp from './general/CarouselComp.vue';
import LineHorizontal from './general/LineHorizontal.vue';
import { useMainStore } from '../store/main';
const mainStore = useMainStore();

const isOpen = ref(false);
const selectedProject = ref(null);
const show = ref(false);

function openModal(project) {
  selectedProject.value = project;
  isOpen.value = true;
}

watch(
  () => mainStore.isLoading,
  async (newIsLoading, oldIsLoading) => {
    if (newIsLoading === false) {
      setTimeout(() => {
        show.value = true;
      }, 1000);
    }
  }
);
</script>
<style scoped>
/* Animasi masuk */
.print-enter-active {
  transition:
    height 1s ease-out,
    opacity 0.3s ease-out;
  overflow: hidden;
}
.print-enter-from {
  height: 0;
  opacity: 0;
}
.print-enter-to {
  height: 100%;
  opacity: 1;
}

/* Animasi keluar */
.print-leave-active {
  transition:
    height 0.5s ease-in,
    opacity 0.5s ease-in;
  overflow: hidden;
}
.print-leave-from {
  height: 100%;
  opacity: 1;
}
.print-leave-to {
  height: 0;
  opacity: 0;
}
</style>
