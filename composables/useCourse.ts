import { CourseOutline } from "~/server/api/course/meta.get";

export default async () => useFetchWithCache<CourseOutline>('/api/course/meta');


// {
//   const chapters: Chapter[] = courseData.chapters.map(
//     (chapter: Chapter) => {
//       const lessons: LessonWithPath[] = chapter.lessons.map(
//         (lesson: Lesson) => ({
//           ...lesson,
//           path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
//         })
//       );
//       return {
//         ...chapter,
//         lessons,
//       }
//     }
//   );
//   return {
//     ...courseData,
//     chapters,
//   }
// };
