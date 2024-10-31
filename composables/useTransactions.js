import { ref, onMounted } from 'vue';
import { useBalance } from './useBalance';
import { useStorage } from './useStorage';
import { useDateTime } from './useDateTime';

export function useTransactions() {
  const { balance, updateBalance } = useBalance();
  const { getItem, setItem } = useStorage();
  const { getDate, getTime } = useDateTime();

  const transactions = ref(JSON.parse(getItem('transactions') || "[]"));
  const descriptionInput = ref('');
  const sumInput = ref('');
  const selectCategory = ref('');
  const typeTransaction = ref(true);

  function addTransaction() {
    const amount = parseInt(sumInput.value);
    updateBalance(typeTransaction.value ? amount : -amount);
    console.log(balance.value)
    transactions.value.push({
      title: descriptionInput.value,
      sum: amount,
      category: selectCategory.value,
      type: typeTransaction.value,
      time: getTime(),
      date: getDate(),
    });
    setItem('transactions', JSON.stringify(transactions.value));
    descriptionInput.value = '';
    sumInput.value = '';
  }

  function removeTransaction(id) {
    const amount = parseInt(transactions.value[id].sum);
    updateBalance(transactions.value[id].type ? -amount : amount);
    transactions.value.splice(id, 1);
    setItem('transactions', JSON.stringify(transactions.value));
  }

  onMounted(() => {
    balance.value = parseInt(getItem("balance")) || 0;
  });

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
