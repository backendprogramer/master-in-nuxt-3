import { CourseMeta } from "~/types/course";

export default async () => useFetchWithCache<CourseMeta>('/api/course/meta');


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
