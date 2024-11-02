<script setup>
const { allCategories, deleteCategory } = useCategories();
</script>

<template>
  <table
    v-if="allCategories.length"
    class="w-full text-sm text-left text-gray-500"
  >
    <thead class="text-xs text-gray-700 bg-gray-50">
      <tr>
        <td class="px-6 py-4 text-center">Id</td>
        <th class="px-6 py-3 text-center">Категория</th>
        <th class="px-6 py-3 text-center">Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(category, id) in allCategories" class="bg-white border-b">
        <td class="px-6 py-4 text-center">
          {{ id + 1 }}
        </td>
        <td class="px-6 py-4 text-center">
          {{ category }}
        </td>
        <td class="flex justify-center px-6 py-4">
          <button @click="deleteCategory(id)">&#9746;</button>
        </td>
      </tr>
    </tbody>
  </table>
  <h1 v-else>У вас пока нет категорий</h1>
</template>
