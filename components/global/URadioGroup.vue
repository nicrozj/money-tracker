<script setup>
const props = defineProps({
    options: Array,
    modelValue: [Boolean, String],
    name: String,
    class: String
});

const emit = defineEmits(["update:modelValue"]);

function updateValue(value) {
    emit("update:modelValue", value);
}
</script>

<template>
    <div class="flex">
        <URadio
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :label="option.label"
            :name="name"
            :modelValue="modelValue"
            @update:modelValue="updateValue"
        />
    </div>
</template>