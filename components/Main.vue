<script setup>
import { useTransactions } from "../composables/useTransactions";
import { useCategories } from "../composables/useCategories";
import { useBalance } from "../composables/useBalance";

const { balance } = useBalance();

const {
  transactions,
  descriptionInput,
  sumInput,
  selectCategory,
  typeTransaction,
  addTransaction,
  removeTransaction,
} = useTransactions();
const { allCategories, categoryInput, addCategory } = useCategories();

console.log(balance.value);

const radioOptions = [
  { value: true, label: "Доход" },
  { value: false, label: "Расход" },
];
</script>
<template>
  <section class="flex flex-col items-center gap-8 bg-white p-4 rounded-lg">
    <div class="grid grid-cols-3 gap-5">
      <div class="px-4 py-2 border rounded-xl">
        <h1 class="text-2xl font-bold">Баланс</h1>
        <h1 class="text-2xl font-bold">{{ balance }}Р</h1>
      </div>
      <div class="px-4 py-2 border rounded-xl">
        <h1 class="text-2xl text-green-600 font-bold">Доходы</h1>
        <h1 class="text-2xl font-bold">0Р</h1>
      </div>
      <div class="px-4 py-2 border rounded-xl">
        <h1 class="text-2xl text-red-600 font-bold">Расходы</h1>
        <h1 class="text-2xl font-bold">0Р</h1>
      </div>
    </div>

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
    <TransactionsTable
      :transactions="transactions"
      :removeTransaction="removeTransaction"
    />
  </section>
</template>
