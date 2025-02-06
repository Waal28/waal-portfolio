<template>
  <Transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div
        class="bg-[url('/paper_bg.jpg')] bg-repeat bg-contain rounded-2xl shadow-lg w-full sm:max-w-[80vw] max-w-[90vw] sm:p-10 p-4"
      >
        <div
          class="flex justify-between items-center border-b border-gray-500 sm:pb-3 pb-2"
        >
          <h2
            class="sm:text-4xl text-xs font-semibold font-sancreek tracking-wide"
          >
            {{ title }}
          </h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-800 font-sans sm:text-3xl text-xl"
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
