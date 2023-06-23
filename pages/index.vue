<template>
    <NuxtLink class="underline font-semibold" :to="firstLesson.path">
        Go to first lesson
    </NuxtLink>
</template>
<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>