<template>
  <main
    class="container mx-auto lg:-mt-[5%] -mt-[3%] p-[5.5%]"
    id="my-skills"
    style="scroll-margin-top: -30px"
  >
    <div class="relative">
      <img
        src="../assets/images/list_skill_bg.png"
        alt="..."
        class="w-full"
        @load="mainStore.onImageLoad"
      />
      <span class="font-sancreek text-[5vw] absolute top-[6.6%] left-[8%] opacity-70"
        >My Skills</span
      >
      <div v-for="skill in skills" :key="skill.name" :class="skill.class">
        <img :src="skill.image" :alt="skill.name" class="w-full h-full opacity-70" />
      </div>
    </div>
  </main>
</template>
<script setup>
import { skills } from '../utils/constant';
import { useMainStore } from '../store/main';
const mainStore = useMainStore();
</script>
<style lang=""></style>
