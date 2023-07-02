<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
    <div class="fixed inset-0 bg-black bg-opacity-50"></div>
    <div class="relative bg-white rounded-lg w-[500px]">
      <div class="absolute top-1 right-2 text-2xl w-7 h-7 text-slate-600 hover:text-slate-400 flex items-center justify-center cursor-pointer" @click="$emit('close')">
        &#10005;
      </div>
      <slot />
    </div>
  </div>
</template>


<script setup lang="ts">
const previousOverflow = ref("");
onMounted(() => {
  // Lock the scrollbar by removing overflow if we have any
  previousOverflow.value = document.body.style.overflow;
  document.body.style.overflow = "hidden";
});

onBeforeUnmount(() => {
  // Restore the overflow and position
  document.body.style.overflow = previousOverflow.value;
});
</script>
