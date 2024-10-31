import { ref, onMounted } from 'vue';

export function useMoneyTracker() {
    const balance = ref(0);
    const transactions = ref(JSON.parse(getItem('transactions') || "[]"));
    const allCategories = ref(JSON.parse(getItem('categories') || "[]"));
    const descriptionInput = ref('');
    const sumInput = ref('');
    const categoryInput = ref('');
    const selectCategory = ref('');
    const typeTransaction = ref(true);

    function addTransaction() {
        typeTransaction.value ? balance.value += parseInt(sumInput.value) : balance.value -= parseInt(sumInput.value);
        transactions.value.push({ 
            title: descriptionInput.value, 
            sum: sumInput.value, 
            category: selectCategory.value,
            type: typeTransaction.value, 
            time: getTime(), 
            date: getDate()
        });

        setItem('transactions', JSON.stringify(transactions.value));
        setItem('balance', balance.value);
        descriptionInput.value = '';
        sumInput.value = '';
    }

    onMounted(() => {
        balance.value = parseInt(localStorage.getItem("balance")) || 0;
    });

    function getTime() {
        const date = new Date();
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    }

    function getDate() {
        const date = new Date();
        return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${(date.getFullYear()).toString().padStart(2, '0')}`;
    }
 
    function removeTransaction(id) {
        if (transactions.value[id].type) {
            balance.value += parseInt(transactions.value[id].sum);
        }
        else {
            balance.value -= parseInt(transactions.value[id].sum);
        }
        transactions.value.splice(id, 1);
        setItem('balance', balance.value);
        setItem('transactions', JSON.stringify(transactions.value));
    }

    function addCategory() {
        allCategories.value.push(categoryInput.value);
        categoryInput.value = '';
        setItem('categories', JSON.stringify(allCategories.value));
    }

    function setItem(key, value) {
        if (process.client) {
            localStorage.setItem(key, value);
        }
    }

    function getItem(key) {
        if (process.client) {
            return localStorage.getItem(key);
        }
        return undefined;
    }

    return {
        
    }
}