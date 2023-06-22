<template>
    <label class="btn text-white font-bold px-3 py-2 rounded-md" :class="{'bg-gray-600 ' : !modelValue, 'bg-green-400' : modelValue}">
        <input type="checkbox"
        :value="modelValue"
        @input="() => $emit('update:modelValue', !modelValue)"
        class="hidden" />
        {{ modelValue ? 'Completed!' : 'Mark as complete' }}
    </label>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['update:modelValue']);
</script>
<style scoped>
::selection {
    display: none;
}
</style>