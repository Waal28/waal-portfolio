<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div
        class="bg-[url('/paper_bg_v2.jpg')] bg-repeat bg-contain rounded-2xl shadow-lg w-full lg:max-w-[80vw] max-w-[90vw] lg:p-10 p-4"
      >
        <div class="flex justify-between items-center border-b border-gray-500 lg:pb-3 pb-2">
          <h2 class="font-sancreek lg:text-2xl md:text-[3.5vw] text-[3.5vw] tracking-wide">
            {{ title }}
          </h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-800 font-sans lg:text-3xl text-xl"
          >
            &times;
          </button>
        </div>
        <div class="mt-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits, watch } from 'vue';

const { modelValue, title } = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
  emit('update:modelValue', false);
  document.body.style.overflow = 'auto'; // Mengembalikan scroll saat modal ditutup
};

watch(
  () => modelValue,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'; // Mencegah scroll saat modal terbuka
    } else {
      document.body.style.overflow = 'auto';
    }
  }
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
