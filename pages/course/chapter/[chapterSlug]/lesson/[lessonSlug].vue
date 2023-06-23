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
      :model-value="isLessonComplete"
      @update:model-value="toggleComplate"
    />
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

// if(route.params.lessonSlug === 'l-typescript-in-vue-components') {
//     console.log(route.params.paramthatdoesnotexistwhoops.capitalizeIsNotMethode());
// }

definePageMeta({
  middleware: [
    function ({ params }, from) {
      const course = useCourse();

      const chapter = course.chapters.find(
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
    'auth'
  ],
});

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`;
});
useHead({
  title,
});

// const progress = useState('progress', () => {
//     return [];
// })
const progress = useLocalStorage("progress", []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }

  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplate = () => {
  // throw createError('could not update')
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value;
};
</script>
