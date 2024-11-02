import { ref, onMounted, computed } from 'vue';
import { useTransactions } from './useTransactions';
import { useDateTime } from './useDateTime';

export function useBalance() {
  const { transactions } = useTransactions();
  const { getDaysFromMs } = useDateTime();

  let incomes = {};

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

  const incomesPerWeek = computed(() => {
    let lastTransactions = transactions.value.filter(transaction => {
      return getDaysFromMs(new Date() - new Date(transaction.date)) <= 7;
    });

    console.log(lastTransactions);
    if (lastTransactions.length) {
      return lastTransactions.reduce((sum, transaction) => sum + transaction.sum, 0);
    }
    return 0;
  });

  const incomesPerMonth = computed(() => {
    let lastTransactions = transactions.value.filter(transaction => {
      return getDaysFromMs(new Date() - new Date(transaction.date)) <= 30;
    });

    console.log(lastTransactions);
    if (lastTransactions.length) {
      return lastTransactions.reduce((sum, transaction) => sum + transaction.sum, 0);
    }
    return 0;
  });

  const incomesPerYear = computed(() => {
    let lastTransactions = transactions.value.filter(transaction => {
      return getDaysFromMs(new Date() - new Date(transaction.date)) <= 365;
    });

    console.log(lastTransactions);
    if (lastTransactions.length) {
      return lastTransactions.reduce((sum, transaction) => sum + transaction.sum, 0);
    }
    return 0;
  });

  incomes['allIncome'] = income;
  incomes['incomesPerWeek'] = incomesPerWeek;
  incomes['incomesPerMonth'] = incomesPerMonth;
  incomes['incomesPerYear'] = incomesPerYear;

  return {
    balance,
    incomes,
    incomesPerYear,
    expenses,
  };
}
