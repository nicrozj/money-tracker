import { ref } from 'vue';
import { useStorage } from './useStorage';

export function useCategories() {
  const { getItem, setItem } = useStorage();
  const allCategories = ref(JSON.parse(getItem('categories') || "[]"));
  const categoryInput = ref('');

  function addCategory() {
    allCategories.value.push(categoryInput.value);
    categoryInput.value = '';
    setItem('categories', JSON.stringify(allCategories.value));
  }

  return {
    allCategories,
    categoryInput,
    addCategory,
  };
}
