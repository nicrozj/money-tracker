<script setup>
    const balance = ref(0);
    const transactions = ref(JSON.parse(getItem('transactions') || "[]"));
    const allCategories = ref(JSON.parse(getItem('categories') || "[]"));
    const descriptionInput = ref('');
    const sumInput = ref('');
    const categoryInput = ref('');
    const selectCategory = ref('');
    const typeTransaction = ref(true);

    const radioOptions = [
        {value: true, label: 'Доход'},
        {value: false, label: 'Расход'}
    ]
    
    onMounted(() => {
        balance.value = parseInt(localStorage.getItem("balance")) || 0;
    });

    function addTransaction() {
        console.log(typeof typeTransaction.value)
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

</script>
<template>
    <section class='flex flex-col items-center gap-8 bg-white p-4 rounded-lg'>
        <div class="grid grid-cols-3 gap-5">
            <div class="px-4 py-2 border rounded-xl">
                <h1 class="text-2xl font-bold">Баланс</h1>
                <h1 class="text-2xl font-bold">{{ balance  }}Р</h1>
            </div>
            <div class="px-4 py-2 border rounded-xl">
                <h1 class="text-2xl text-green-600 font-bold">Доходы</h1>
                <h1 class="text-2xl font-bold">0Р</h1>
            </div>
            <div class="px-4 py-2 border rounded-xl">
                <h1 class="text-2xl text-red-600 font-bold">Расходы</h1>
                <h1 class="text-2xl font-bold">0Р</h1>
            </div>
        </div>


        <div class="flex flex-col gap-2">
            <div class="flex gap-2">
                <UTextInput 
                    autocomplete="off"
                    type="number"
                    v-model="sumInput"
                    placeholder="Сумма"/>
                <select v-model="selectCategory"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                    <option disabled selected>Категория</option>
                    <option v-for="category in allCategories" :value="category">{{ category }}</option>
                </select>
            </div>
            <UTextInput 
                autocomplete="off"
                type="text"
                v-model="descriptionInput"
                placeholder="Описание" />
            <div class="flex justify-center">
                <URadioGroup 
                    :options="radioOptions"
                    class="gap-4"
                    name="radioGroup"
                    v-model="typeTransaction"
                />
            </div>
            <button 
                type="button" 
                @click="addTransaction"
                class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mb-2">
                Добавить транзакцию
            </button>
        </div>

        <div>
            <h1>Добавить категорию</h1>
            <div class="flex items-center gap-2">
                <UTextInput
                    autocomplete="off"
                    v-model="categoryInput"
                    placeholder="Категория"
                    type="text"/>
                <button 
                    type="button" 
                    @click="addCategory"
                    class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-3 py-2 flex items-center justify-center">
                    +
                </button>
            </div>
            
        </div>
        <TransactionsTable 
            :transactions="transactions"
            :removeTransaction="removeTransaction"
        />
    </section>
</template>
