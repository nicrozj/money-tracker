import { ref } from 'vue';
import { useStorage } from './useStorage';

const { getItem, setItem } = useStorage();
const allCategories = ref(JSON.parse(getItem('categories') || "[]"));
const categoryAddInput = ref('');
const categoryDeleteInput = ref('');

export function useCategories() {
  function addCategory() {
    allCategories.value.push(categoryAddInput.value);
    categoryAddInput.value = '';
    setItem('categories', JSON.stringify(allCategories.value));
  }

  function deleteCategory(category) {
    allCategories.value = allCategories.value.filter(item => item != category);
    categoryDeleteInput.value = '';
    setItem('categories', JSON.stringify(allCategories.value));
  }

  return {
    allCategories,
    categoryAddInput,
    categoryDeleteInput,
    deleteCategory,
    addCategory,
  };
}
