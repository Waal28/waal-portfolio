import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';

export const useMainStore = defineStore('loading', () => {
  const state = reactive({
    totalImages: 5, // Jumlah gambar yang perlu dimuat
    loadedImages: 0, // Gambar yang sudah dimuat
  });

  const isLoading = computed(() => state.loadedImages < state.totalImages);

  const onImageLoad = () => {
    state.loadedImages += 1;
  };

  return { state, isLoading, onImageLoad };
});
