<template>
  <div>
    <p class="mt-0 uppercase font-bold Mtext-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.sourceurl"
        class="font-normal text-md text-gray-500"
        :to="lesson.sourceurl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.downloadurl"
        class="font-normal text-md text-gray-500"
        :to="lesson.downloadurl"
      >
        Download Video
      </NuxtLink>
    </div>
    <video-player v-if="lesson.videoId" :videoId="lesson.videoId" />
    <p class="mb-4">{{ lesson.text }}</p>
    <lesson-complate-button
      v-if="user"
      :model-value="isCompleted"
      @update:model-value="toggleComplete"
    />
  </div>
</template>

<script setup>
import { useCourseProgress } from "~/stores/courseProgress";
const course = await useCourse();
const user = useSupabaseUser();
const route = useRoute();
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);
const store = useCourseProgress();
const { initialize, toggleComplete } = store;

initialize();

definePageMeta({
  middleware: [
    async function ({ params }, from) {
      const course = await useCourse();

      const chapter = course.value.chapters.find(
        (chapter) => chapter.slug === params.chapterSlug
      );

      if (!chapter) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          })
        );
      }

      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );

      if (!lesson) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found",
          })
        );
      }
    },
    "auth",
  ],
});

// Check if the current lesson is completed
const isCompleted = computed(() => {
  return store.progress?.[chapterSlug]?.[lessonSlug] || 0;
});

const chapter = computed(() => {
  return course.value.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const title = computed(() => {
  return `${lesson.value.title} - ${course.value.title}`;
});
useHead({
  title,
});
</script>
