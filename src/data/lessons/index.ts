export interface ContentBlock {
  type:
    | "concept"
    | "exercise"
    | "checkpoint"
    | "example"
    | "callout"
    | "connection"
    | "quote"
    | "video"
    | "external-link"
    | "info-callout";
  title?: string;
  text?: string;
  items?: string[];
  wrong?: string;
  right?: string;
  calloutType?: "tip" | "warning" | "info";
  author?: string;
  url?: string;
  label?: string;
}

export interface LessonContent {
  id: string;
  blocks: ContentBlock[];
}

import module1Lessons from "./module1";
import module2Lessons from "./module2";
import module3Lessons from "./module3";
import module4Lessons from "./module4";
import module5Lessons from "./module5";
import module6Lessons from "./module6";
import module7Lessons from "./module7";
import module8Lessons from "./module8";
import module9Lessons from "./module9";
import module10Lessons from "./module10";
import module11Lessons from "./module11";

export const allModules: LessonContent[][] = [
  module1Lessons,
  module2Lessons,
  module3Lessons,
  module4Lessons,
  module5Lessons,
  module6Lessons,
  module7Lessons,
  module8Lessons,
  module9Lessons,
  module10Lessons,
  module11Lessons,
];

export function getLessonContent(lessonId: string): LessonContent | null {
  for (const moduleLessons of allModules) {
    const found = moduleLessons.find((l) => l.id === lessonId);
    if (found) return found;
  }
  return null;
}
