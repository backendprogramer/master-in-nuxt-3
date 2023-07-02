<template>
    <div :class="[sectionClass, 'section', 'p-24', 'flex', 'flex-col', 'items-center']">
        <div class="w-full max-w-4xl">
            <h2 v-if="title" class="text-4xl font-bold pb-8 text-center">
                {{ title }}
            </h2>
            <div v-bind="$attrs">
                  <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string;
    backgroundColor?: string;
    foregroundColor?: string;
}>();

const sectionClass = computed(() => `bg-${props.backgroundColor ?? 'white'} text-${props.foregroundColor ?? 'black'}`);
</script>

<script lang="ts">
// Don't inherit the attributes from the parent component
// since we only put them on the slot
export default {

}
</script>