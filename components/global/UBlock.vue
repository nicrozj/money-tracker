<script setup>
const props = defineProps(['class']);
</script>

<template>
    <div 
        class="px-4 py-2 border rounded-xl"
        :class="props.class"
    >
        <slot></slot>
    </div>
</template>