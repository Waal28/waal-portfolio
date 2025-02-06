<template>
  <header
    class="bg-[url('/paper_bg.jpg')] bg-cover bg-repeat sm:px-6 sm:py-0 px-6 sticky top-0 z-50"
  >
    <div
      class="container mx-auto sm:grid flex justify-between grid-cols-3 items-center sm:py-5 py-3"
    >
      <!-- Logo -->
      <section>
        <span class="font-lancelot sm:text-xl text-xs"
          >Pekanbaru, Indonesia</span
        >
      </section>
      <section class="flex justify-center">
        <a href="/" class="flex flex-col items-center">
          <span
            class="sm:text-5xl text-[4vw] font-mysteryQuest sm:font-extrabold -mb-1 font-medium"
            >Waal Portfolio</span
          >
        </a>
      </section>
      <section class="sm:block hidden ml-auto">
        <!-- Desktop Navigation -->
        <nav class="hidden md:block font-lancelot text-xl">
          <ul class="flex space-x-8">
            <template v-for="menu in menus" :key="menu.name">
              <li v-if="!menu.menus">
                <a :href="menu.href" class="">{{ menu.name }}</a>
              </li>
              <li v-else class="group relative">
                <a :href="menu.href" class="">{{ menu.name }}</a>
                <!-- Dropdown Menu -->
                <ul
                  class="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 rounded-md w-48 transition-all duration-300"
                >
                  <li v-for="subMenu in menu.menus" :key="subMenu.name">
                    <a
                      :href="subMenu.href"
                      class="block px-4 py-2 hover:bg-gray-100"
                      >{{ subMenu.name }}</a
                    >
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </nav>
      </section>
    </div>
    <LineHorizontal
      class="absolute top-[100%] w-[98%] transform sm:translate-x-[-0.5%] translate-x-[-4.6%]"
    />
  </header>
</template>

<script setup>
import { menus } from '../utils/constant';
import LineHorizontal from './general/LineHorizontal.vue';
</script>

<style></style>
