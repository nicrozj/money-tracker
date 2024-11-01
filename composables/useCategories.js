import { ref } from 'vue';
import { useStorage } from './useStorage';

const { getItem, setItem } = useStorage();
const allCategories = ref(JSON.parse(getItem('categories') || "[]"));
const categoryInput = ref('');

export function useCategories() {
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
