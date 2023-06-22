<template>
  <iframe 
    width="460"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Viedo player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
    allowfullscreen
    ></iframe>
</template>
<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  }
});
</script>

<style scoped></style>
