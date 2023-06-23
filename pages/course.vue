<template>
  <div>
    <div class="prose mb-12 justify-center">
      <h1>
        <span class="font-semibold">
          <span class="font-bold text-3xl">{{title}}</span>
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
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4 class="font-semibold">{{ chapter.title }}</h4>
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
const { chapters, title } = useCourse();

const resetError = async (error) => {
  await navigateTo(
    "/course/chapter/l-chapter-1/lesson/l-introduction-to-typescript-with-yvue-js-3"
  );
  error.value = null;
};
</script>
