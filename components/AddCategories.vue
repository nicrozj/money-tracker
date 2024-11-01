<script setup>
  import { useCategories } from '../composables/useCategories';

  const { categoryInput, addCategory } = useCategories();
</script>

<template>
  <div>
    <h1>Добавить категорию</h1>
    <div class="flex items-center gap-2">
      <UTextInput
        autocomplete="off"
        v-model="categoryInput"
        placeholder="Категория"
        type="text"
      />
      <button
        type="button"
        @click="addCategory"
        class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3 py-2 flex items-center justify-center"
      >
        +
      </button>
    </div>
  </div>
</template>