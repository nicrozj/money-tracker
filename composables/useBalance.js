import { ref, onMounted } from 'vue';
import { useStorage } from './useStorage';

export function useBalance() {
  const balance = ref(0);
  const { setItem, getItem } = useStorage();

  balance.value = parseInt(getItem("balance")) || 0;

  function updateBalance(amount) {
    balance.value += amount;
    setItem('balance', balance.value);
  }

  return {
    balance,
    updateBalance,
  };
}
