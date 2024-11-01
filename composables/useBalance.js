import { ref, onMounted, computed } from 'vue';
import { useTransactions } from './useTransactions';

export function useBalance() {
  const { transactions } = useTransactions();

  const balance = computed(() => {
    return transactions.value.reduce((acc, t) => {
      return t.type ? acc + t.sum : acc - t.sum;
    }, 0);
  });

  const income = computed(() => {
    return transactions.value.filter(t => t.type).reduce((sum, t) => sum + t.sum, 0);
  });

  const expenses = computed(() => {
    return transactions.value.filter(t => !t.type).reduce((sum, t) => sum + t.sum, 0);
  });

  return {
    balance,
    income,
    expenses,
  };
}
