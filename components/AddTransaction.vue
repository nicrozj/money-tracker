<script setup>
import { useTransactions } from "../composables/useTransactions";
import { useCategories } from "../composables/useCategories";

const radioOptions = [
  { value: true, label: "Доход" },
  { value: false, label: "Расход" },
];

const { 
    sumInput,
    selectCategory,
    typeTransaction, 
    addTransaction,
    descriptionInput,
} = useTransactions();

const { allCategories } = useCategories();

</script>

<template>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <UTextInput
          autocomplete="off"
          type="number"
          v-model="sumInput"
          placeholder="Сумма"
        />
        <select
          v-model="selectCategory"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        >
          <option disabled selected>Категория</option>
          <option v-for="category in allCategories" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      <UTextInput
        autocomplete="off"
        type="text"
        v-model="descriptionInput"
        placeholder="Описание"
      />
      <div class="flex justify-center">
        <URadioGroup
          :options="radioOptions"
          class="gap-4"
          name="radioGroup"
          v-model="typeTransaction"
        />
      </div>
      <button
        type="button"
        @click="addTransaction"
        class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mb-2"
      >
        Добавить транзакцию
      </button>
    </div>
</template>