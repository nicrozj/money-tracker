<script setup>
    defineProps(['title', 'type', 'placeholder', 'class', 'autocomplete'])
    const model = defineModel();
</script>

<template>
    <label v-if="title" for="description" class="block text-sm font-medium text-gray-900">{{ title }}</label>
    <input 
        :autocomplete="autocomplete"
        :type="type" 
        :class="class"
        id="description" 
        v-model="model"
        :placeholder="placeholder"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2" 
        required />
</template>