<template>
    <Section class="space-y-12 flex flex-col items-center">
        <h1 class="text-7xl font-black text-blue-500 m-0 p-0">
            {{ course.title }}
        </h1>
        <img :src="screenshots[2]"
        class="w-full rounded-lg shadow-lg border-2 border-slate-200" />
        <div class="text-2xl font-medium">
            Learn how to use TypeScript in your vue projects to supercharge your IDE's error detection and
            autocompletion, as well as provide type safe code that's easier to reason about and refactor.
        </div>
        <button class="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 w-[300px] rounded-md font-bold"
        @click="() => (showPayment = !showPayment)">
            Buy Now
        </button>
    </Section>
    <Section :backgroundColor="'blue-500'" :foregroundColor="'white'" title="What You'll Learn">
        <ul class="text-2xl font-medium space-y-6">
            <li v-for="outcome in learningOutcomes" :key="outcome" class="relative">
             <Badge />
             {{ outcome }}
            </li>
        </ul>
    </Section>
    <Section title="Screenshots">
        <div class="flex flex-row flex-wrap reletive my-12">
            <img v-for="image in screenshots" :key="image" :src="image"
             class="w-1/2 rounded-xl border-4 border-slate-200 even:" />
        </div>
    </Section>
    <Section :backgroundColor="'blue-500'" :foregroundColor="'white'" title="Course Outline">
        <!-- Get course outline from course meta data -->
        <ul class="text-2xl font-medium space-y-16">
            <li v-for="(chapter, index) in course.chapters" :key="chapter.slug" class="relative">
                <Badge>
                    {{ index + 1 }}
                </Badge>
                {{ chapter.title }}
                <ul class="mt-4 space-y-2">
                    <li v-for="lesson in chapter.lessons" :key="`${chapter.slug}-${lesson.slug}`"
                    class="left-8 relative flex items-center space-y-2">
                        <Badge color="bg-blue-400">
                            {{ lesson.number }}
                        </Badge>
                        <span class="text-xl opacity-80">{{ lesson.title }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </Section>
    <LazyPayment v-if="showPayment" @close="showPayment = false" />
</template>

<script setup lang="ts">
import screen1 from '~/assets/images/screen1.png';

// const config = useRuntimeConfig();
// console.log(config.stripeSecret);
// console.log(config.public.stripeKey);

const course = await useCourse();
const learningOutcomes = [
    'Hands-On Experience with the Benefits of TypeScript',
    'How to make the most out nof your IDE',
    'How to use Typescript with the Composition API',
    'How to use Typescript with the Options API',
    'How to type reactive data, refs, props, custom events, eventhandlers,'
];
const screenshots = [
    screen1,
    screen1,
    screen1,
    screen1,
    screen1,
];

definePageMeta({
    layout: false,
});

const showPayment = ref(false);
</script>