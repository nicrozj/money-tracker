<script setup>
import { useTransactions } from '../composables/useTransactions';

const { transactions, removeTransaction } = useTransactions();

const balanceClasses = {
    true: 'text-green-600',
    false: 'text-red-600'
};

watch(transactions, (newTransactions) => {
    console.log('Transactions updated:', newTransactions);
  });
</script>

<template>
    <div class="relative overflow-x-auto">
        <h1 class="text-2xl text-center mb-2">История транзакций</h1>
        <table v-if="transactions.length" class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-center">
                        Описание
                    </th>
                    <th class="px-6 py-3 text-center">
                        Категория
                    </th>
                    <th class="px-6 py-3 text-center">
                        Сумма
                    </th>
                    <th class="px-6 py-3 text-center">
                        Дата
                    </th>
                    <th class="px-6 py-3 text-center">
                        Действие
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="transactions.length" v-for="(transaction, id) in transactions" class="bg-white border-b">
                    <td class="px-6 py-4 text-center">
                        {{ transaction.title }}
                    </td>
                    <td class="px-6 py-4 text-center">
                        {{ transaction.category }}
                    </td>
                    <td class="px-6 py-4 text-center" :class="balanceClasses[transaction.type]">
                        {{ transaction.type ? '+' : '-' }}{{ transaction.sum }}
                    </td>
                    <td class="px-6 py-4 text-center">
                        {{ transaction.time }} {{ transaction.date }}
                    </td>
                    <td class="flex justify-center px-6 py-4">
                        <button @click="removeTransaction(id)">
                            &#9746;
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h1 v-else>Вы не совершали транзакций</h1>
    </div>
</template>