<script setup>
import FooterComp from './components/FooterComp.vue';
import MainHero from './components/MainHero.vue';
import MySkills from './components/MySkills.vue';
import NavbarComp from './components/NavbarComp.vue';
import ProjectList from './components/ProjectList.vue';
import GlobalLoader from './components/GlobalLoader.vue';
import { useMainStore } from './store/main';

const mainStore = useMainStore();
</script>

<template>
  <div
    class="bg-[url('/paper_bg.jpg')] bg-repeat bg-contain sm:min-h-auto min-h-screen relative"
  >
    <NavbarComp />
    <MainHero />
    <ProjectList />
    <MySkills />
    <FooterComp />
    <div
      :class="{ flex: mainStore.isLoading, hidden: !mainStore.isLoading }"
      class="bg-[url('/paper_bg.jpg')] bg-repeat bg-contain h-screen fixed top-0 left-0 right-0 bottom-0 z-50 items-center justify-center"
    >
      <GlobalLoader />
    </div>
  </div>
</template>

<style scoped></style>
