<script setup>
import { useBalance } from '../composables/useBalance';

const { balance, incomes, expenses } = useBalance();

</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <div class="px-4 py-2 border rounded-xl">
      <h1 class="text-2xl font-bold">Баланс</h1>
      <h1 class="text-2xl font-bold">{{ balance }}₽</h1>
    </div>

    <div class="px-4 py-2 border rounded-xl">
      <h1 class="text-2xl text-green-600 font-bold">Доходы</h1>
      <h1 class="text-2xl font-bold">{{ incomes.allIncome }}₽</h1>
    </div>

    <div class="px-4 py-2 border rounded-xl">
      <h1 class="text-2xl text-red-600 font-bold">Расходы</h1>
      <h1 class="text-2xl font-bold">{{ expenses }}₽</h1>
    </div>
  </div>
</template>