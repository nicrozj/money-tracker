import { ref } from 'vue';
import { useStorage } from './useStorage';
import { useDateTime } from './useDateTime';

const { getItem, setItem } = useStorage();


const transactions = ref(JSON.parse(getItem('transactions') || "[]"));
const descriptionInput = ref('');
const sumInput = ref('');
const selectCategory = ref('');
const typeTransaction = ref(true);

export function useTransactions() {
  const { getDate, getTime } = useDateTime();

  function addTransaction() {
    const amount = parseInt(sumInput.value);
    transactions.value.push({
      title: descriptionInput.value,
      sum: amount,
      category: selectCategory.value,
      type: typeTransaction.value,
      date: new Date(),
    });
    setItem('transactions', JSON.stringify(transactions.value));
    descriptionInput.value = '';
    sumInput.value = '';

    console.log(transactions.value);
  }

  function removeTransaction(id) {
    const amount = parseInt(transactions.value[id].sum);
    transactions.value.splice(id, 1);
    setItem('transactions', JSON.stringify(transactions.value));
  }

  return {
    transactions,
    descriptionInput,
    sumInput,
    selectCategory,
    typeTransaction,
    addTransaction,
    removeTransaction,
  };
}
