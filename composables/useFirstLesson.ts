type Lesson = {
    title: string;
    slug: string;
    number: number;
    downloadurl: string;
    videoId: number;
    text: string;
    sourceurl?: string;
    path: string;
  };
  
export const useFirstLesson = (): Lesson =>{
    const { chapters } = useCourse();
    return chapters[0].lessons[0];
 }