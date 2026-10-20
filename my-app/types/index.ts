// types/index.ts

export interface Lesson {
  id: string; // e.g. "04"
  slug: string; // "lesson-04"
  title: string;
  summary: string;
  durationMinutes: number;
  readTime: string; // "6 min read"
  codeAvailable: boolean;
  nextJsVersion: string; // "Updated for Next.js 15+"
  singleSegmentCode?: string;
  catchAllCode?: string;
  codeSnippet?: string;
  keyTakeaway?: string;
  checklistItems?: string[];
}

export interface Module {
  id: number; // 1, 2, 3, 4
  title: string;
  lessonsCount: number;
  durationMinutes: number;
  completedLessons?: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string; // "nextjs-app-router-fundamentals"
  title: string;
  category: "Frontend" | "Backend" | "Architecture" | "Fundamentals" | "Language" | "Database";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  instructorRole: string;
  instructorInitials: string;
  description: string;
  lessonsCount: number;
  estimatedHours: number;
  openAccess: boolean;
  versionTag: string; // "v14.2 / stable"
  modules: Module[];
}

export interface TopicModule {
  moduleNumber: string; // "Module 01"
  title: string;
  lessonsCount: number;
  difficulty: string;
  instructor: string;
  instructorRole: string;
  instructorInitials: string;
  slug: string; // "/courses/nextjs-app-router-fundamentals"
}
