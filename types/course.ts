export type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadurl: string;
  videoId: number;
  text: string;
  sourceurl?: string;
};

export type LessonWithPath = Lesson & {
    path: string;
};

export type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[] | LessonWithPath[];
};

export type Course = {
  title: string;
  chapters: Chapter[];
};
