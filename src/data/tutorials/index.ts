// ============================================================
// CodeAcademia — Tutorial Type Definitions & Index
// ============================================================

export interface TutorialChapter {
  id: string;
  title: string;
  lessons: TutorialLesson[];
}

export interface TutorialLesson {
  id: string;
  title: string;
  slug: string;
  content: string;
  codeExamples: CodeExample[];
  tips?: string[];
  notes?: string[];
  warnings?: string[];
  interviewQuestions?: InterviewQuestion[];
}

export interface CodeExample {
  language: string;
  title: string;
  code: string;
  output?: string;
}

export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface Tutorial {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  chapters: TutorialChapter[];
  tags: string[];
  author: string;
  lastUpdated: string;
}

// Import all tutorial data
import { pythonTutorials } from './python';
import { javascriptTutorials } from './javascript';
import { javaTutorials } from './java';
import { reactTutorials } from './react';
import { htmlTutorials } from './html';
import { cssTutorials } from './css';
import { cppTutorials } from './cpp';
import { nodejsTutorials } from './nodejs';
import { mysqlTutorials } from './mysql';
import { mongodbTutorials } from './mongodb';
import { mlTutorials } from './machine-learning';
import { typescriptTutorials } from './typescript';

export const tutorialsByCategory: Record<string, Tutorial[]> = {
  python: pythonTutorials,
  javascript: javascriptTutorials,
  java: javaTutorials,
  react: reactTutorials,
  html: htmlTutorials,
  css: cssTutorials,
  cpp: cppTutorials,
  nodejs: nodejsTutorials,
  mysql: mysqlTutorials,
  mongodb: mongodbTutorials,
  'machine-learning': mlTutorials,
  typescript: typescriptTutorials,
};

export function getAllTutorials(): Tutorial[] {
  return Object.values(tutorialsByCategory).flat();
}

export function getTutorialsByCategory(categorySlug: string): Tutorial[] {
  return tutorialsByCategory[categorySlug] ?? [];
}

export function getTutorialBySlug(categorySlug: string, tutorialSlug: string): Tutorial | undefined {
  return tutorialsByCategory[categorySlug]?.find((t) => t.slug === tutorialSlug);
}

export function getLessonBySlug(
  tutorial: Tutorial,
  lessonSlug: string
): { chapter: TutorialChapter; lesson: TutorialLesson; chapterIndex: number; lessonIndex: number } | undefined {
  for (let ci = 0; ci < tutorial.chapters.length; ci++) {
    const chapter = tutorial.chapters[ci];
    for (let li = 0; li < chapter.lessons.length; li++) {
      if (chapter.lessons[li].slug === lessonSlug) {
        return { chapter, lesson: chapter.lessons[li], chapterIndex: ci, lessonIndex: li };
      }
    }
  }
  return undefined;
}

export function getAdjacentLessons(tutorial: Tutorial, lessonSlug: string) {
  const allLessons = tutorial.chapters.flatMap((ch) => ch.lessons);
  const currentIndex = allLessons.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}
