<script setup>
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    value: Boolean,
    modelValue: Boolean,
    name: String,
    label: String,
});

const emit = defineEmits(["update:modelValue"]);

const isSelected = computed(() => props.modelValue === props.value);

function selectOption() {
    emit("update:modelValue", props.value);
}
</script>

<template>
    <label :class="{ 'bg-gray-200': isSelected }" class="flex items-center cursor-pointer p-2 rounded-md" @click="selectOption">
        <input
            type="radio"
            :value="value"
            :name="name"
            :checked="isSelected"
            class="hidden"
        />
        <span class="w-4 h-4 border-2 border-gray-700 rounded-full mr-2 flex items-center justify-center">
        <span v-if="isSelected" class="w-2 h-2 bg-gray-700 rounded-full"></span>
        </span>
        <span class="label">{{ label }}</span>
    </label>
  </template>