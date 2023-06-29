<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="font-bold text-3xl">
        <span class="font-semibold">
          <span class="font-bold">{{ course.title }}</span>
        </span>
      </h1>
      <user-card />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3 class="mb-4 font-bold">Chapters</h3>
        <div
          class="flex flex-col mb-4 space-y-1"
          v-for="(chapter, index) in course.chapters"
          :key="chapter.slug"
        >
          <h4 class="flex justify-between items-center">
            {{ chapter.title }}
            <span
              v-if="percentageCompleted && user"
              class="text-emerald-500 text-sm"
            >
              {{ percentageCompleted.chapters[index] }}%
            </span>
          </h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
        <div v-if="percentageCompleted && user" class="mt-8 text-sm font-semibold text-gray-500 flex justify-between">
          Course completion:
          <span>
            {{ percentageCompleted.course }}%
          </span>
        </div>
      </div>
      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              oh no, somethimg broke!
              <code>{{ error }}</code>
            </p>
            <p class="mt-2">
              <button
                class="hover:cursor-pointer bg-gray-500 text-white font-bold px-2 py-1 rounded-md"
                @click="resetError(error)"
              >
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCourseProgress } from "~/stores/courseProgress";
import { storeToRefs } from "pinia";
const user = useSupabaseUser();
const course = await useCourse();
const firstLesson = await useFirstLesson();

// Get chapter completion percentages
const { percentageCompleted } = storeToRefs(useCourseProgress());

const resetError = async (error) => {
  await navigateTo(firstLesson.path);
  error.value = null;
};
</script>
