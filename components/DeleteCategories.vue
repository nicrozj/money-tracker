<script setup>
  import { useCategories } from '../composables/useCategories';

  const { categoryDeleteInput, deleteCategory, allCategories } = useCategories();
</script>

<template>
  <div>
    <h1>Удалить категорию</h1>
    <div class="flex items-center gap-2">
      <select
        v-model="categoryDeleteInput"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      >
        <option disabled selected>Категория</option>
        <option v-for="category in allCategories" :value="category">
          {{ category }}
        </option>
      </select>
      <button
        type="button"
        @click="deleteCategory(categoryDeleteInput)"
        class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3 py-2 flex items-center justify-center"
      >
        -
      </button>
    </div>
  </div>
</template>