import { Lesson } from "~/types/course";

export const useFirstLesson = (): Lesson =>{
    const { chapters } = useCourse();
    return chapters[0].lessons[0];
 }