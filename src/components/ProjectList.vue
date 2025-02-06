<template>
  <div
    class="sm:-mt-[11%] -mt-[11%] relative z-10 overflow-hidden"
    id="my-projects"
    style="scroll-margin-top: -60px"
  >
    <img
      src="/paper_flower.png"
      alt="..."
      class="w-full transform sm:scale-100 sm:translate-x-0 scale-[120%] translate-x-[-2%] sm:translate-y-0 translate-y-[7%]"
      @load="mainStore.onImageLoad"
    />
    <img
      src="/paper_flower1.png"
      alt="..."
      class="sm:hidden block w-full transform sm:scale-100 sm:translate-x-0 scale-[120%] translate-x-[-2%] sm:translate-y-0 translate-y-[-5%]"
      @load="mainStore.onImageLoad"
    />
    <div
      class="grid sm:grid-cols-3 grid-cols-1 absolute sm:top-[20%] sm:left-[20%] sm:right-[18%] sm:bottom-[18%] top-[11%] left-[10%] right-[12%] bottom-[8%] z-10"
    >
      <Transition name="print">
        <section
          v-if="show"
          class="sm:border-r-2 border-black sm:m-4 sm:mb-4 m-0 mb-1 sm:pb-0 pb-1 flex sm:flex-row flex-col items-center sm:justify-start justify-center"
        >
          <span class="font-sancreek sm:text-7xl text-[5vw]">My Projects</span>
          <LineHorizontal
            class="sm:hidden block w-full transform scale-90 -mb-[10%]"
          />
        </section>
      </Transition>
      <Transition name="print">
        <section
          v-if="show"
          class="sm:col-span-2 grid grid-cols-1 sm:gap-6 gap-3 sm:m-4 m-2 max-h-full overflow-y-auto"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.name"
            class="flex sm:border-b-2 border-b border-black"
          >
            <div
              class="w-fit h-fit sm:mr-4 mr-2 bg-black flex items-center justify-center"
            >
              <span
                class="sm:w-12 w-5 sm:text-5xl text-[5vw] sm:py-2 py-1 text-center font-sancreek font-bold text-transparent bg-clip-text bg-[url('/paper_bg.jpg')] bg-repeat bg-cover"
                >{{ index + 1 }}</span
              >
            </div>
            <div class="mb-4">
              <p class="font-sancreek sm:text-2xl text-[3.5vw] sm:mb-3 mb-1">
                {{ project.name }}
              </p>
              <div class="flex flex-wrap sm:gap-2 gap-1 sm:mb-3 mb-2">
                <span
                  v-for="(stack, index) in project.stack"
                  :key="index"
                  class="font-lancelot sm:text-base text-[2.7vw] bg-black text-white sm:px-2 sm:py-1 px-1 py-0"
                  >{{ stack }}</span
                >
              </div>
              <img
                :src="project.image[0]"
                :alt="project.name"
                @click="openModal(project)"
                class="sm:w-56 w-full sm:border-2 border border-black sm:float-left float-none sm:mr-4 mr-2 sm:my-0 my-2 cursor-pointer transform filter grayscale hover:grayscale-0 duration-300 hover:scale-105"
              />
              <p
                class="font-lancelot sm:text-lg text-[3vw] text-justify sm:tracking-widest tracking-tighter sm:opacity-100"
              >
                {{ project.desc }}
              </p>
            </div>
          </div>
        </section>
      </Transition>
    </div>
  </div>
  <ModalDialog
    v-model="isOpen"
    v-if="selectedProject"
    :title="selectedProject.name"
  >
    <CarouselComp :slides="selectedProject.image" />
  </ModalDialog>
</template>
<script setup>
import { onMounted, ref } from 'vue';
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

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 1000);
});
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
