import { LessonPath } from "~/types/course";

export default async () => {
    const course = await useCourse();
    const firstLesson: LessonPath = course.value.chapters[0].lessons[0];
    firstLesson.path = `/course/chapter/${course.value.chapters[0].slug}/lesson/${course.value.chapters[0].lessons[0].slug}`
    return firstLesson;
}