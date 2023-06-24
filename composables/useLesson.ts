import { LessonWithPath } from "~/types/course";

export default async (chapterSlug: string, lessonSlug: string) => 
    useFetchWithCache<LessonWithPath>(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`);
///////////////////////////////////////
    // const { data, error } = await useFetch(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`);
    // const { data, error } = await useAsyncData(() =>
    //     $fetch(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`)
    // );

    // if(error.value) {
    //     throw createError({
    //         ...error.value,
    //         statusMessage: `Could not fetch lesson ${lessonSlug} in chapter ${chapterSlug}`
    //     });
    // }

    // return data;