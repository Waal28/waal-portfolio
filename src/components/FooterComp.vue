<template>
  <div
    class="bg-[url('/paper_bg.jpg')] bg-cover bg-repeat lg:p-6 md:px-6 md:py-4 px-6 py-2 relative"
  >
    <main class="container mx-auto grid grid-cols-2">
      <section class="flex items-center">
        <span class="font-lancelot lg:text-xl md:text-[2.7vw] text-[3.5vw]"
          >&copy; Waal Portfolio, 2025</span
        >
      </section>
      <section class="flex items-center justify-end">
        <a
          v-for="(social, index) in socials"
          :key="social.name"
          :href="social.href"
          :class="`font-emilysCandy lg:text-2xl md:text-[2.7vw] text-[3.5vw] text-center lg:px-6 px-2 ${index === 1 ? 'border-x-2 border-black' : ''}`"
          >{{ social.name }}</a
        >
      </section>
    </main>
    <LineHorizontal
      class="absolute top-0 w-[98%] transform lg:translate-x-[-0.5%] md:translate-x-[-2%] translate-x-[-4.5%]"
    />
  </div>
</template>
<script setup>
import { socials } from '../utils/constant';
import LineHorizontal from './general/LineHorizontal.vue';
</script>
<style lang=""></style>
