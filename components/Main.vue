<script setup>
const { incomes } = useBalance();
</script>

<template>
  <section class="grid grid-cols-4 gap-4 mx-auto bg-white p-4 rounded-lg">
    <div class="col-start-1 col-span-1 flex flex-col gap-4">
      <UBlock>
        <UHeading>Доход за неделю: </UHeading>
        <UHeading>{{ incomes.incomesPerWeek }}₽</UHeading>
      </UBlock>
      <div class="px-4 py-2 border rounded-xl">
        <h1 class="text-2xl font-bold">Доход за месяц: </h1>
        <h1 class="text-2xl font-bold">{{ incomes.incomesPerMonth }}₽</h1>
      </div>
      <div class="px-4 py-2 border rounded-xl">
        <h1 class="text-2xl font-bold">Доход за год: </h1>
        <h1 class="text-2xl font-bold">{{ incomes.incomesPerYear }}₽</h1>
      </div>
    </div>


    <div class="col-start-2 col-span-2 flex flex-col gap-4 justify-center items-center">
      <BalanceInfo />
      <div class="flex gap-4">
        <AddTransaction />
        <div class="col-end-4 col-span-1">
          
        </div>
      </div> 
    </div>

    <div class="col-span-1">
      <UBlock class="flex flex-col gap-2">
        <UHeading>Категории </UHeading>
        <AddCategories />
        <CategoriesTable/>
      </UBlock>
    </div>

    <div class="row-start-2 col-start-2 col-span-2 mt-32 text-center">
      <TransactionsTable/>
    </div>

  </section>
</template>
