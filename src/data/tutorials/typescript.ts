import type { Tutorial } from './index';

export const typescriptTutorials: Tutorial[] = [
  {
    id: 'ts-basics', title: 'TypeScript Essentials', slug: 'essentials',
    category: 'TypeScript', categorySlug: 'typescript',
    description: 'Learn TypeScript — types, interfaces, generics, and advanced patterns.',
    difficulty: 'Intermediate', duration: '50 min', tags: ['typescript', 'javascript', 'types'],
    author: 'Sasidharan M', lastUpdated: '2025-12-01',
    chapters: [{
      id: 'ch1', title: 'TypeScript Basics',
      lessons: [
        { id: 'l1', title: 'Introduction to TypeScript', slug: 'introduction',
          content: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types, interfaces, and other features that make large-scale JavaScript development more manageable.`,
          codeExamples: [{ language: 'typescript', title: 'TypeScript Types', code: `// Basic types\nlet name: string = "CodeAcademia";\nlet age: number = 25;\nlet isActive: boolean = true;\nlet tags: string[] = ["react", "typescript"];\n\n// Interface\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  role?: string;  // Optional\n  readonly createdAt: Date;  // Read-only\n}\n\n// Function with types\nfunction greet(user: User): string {\n  return \`Hello, \${user.name}!\`;\n}\n\n// Generic function\nfunction firstElement<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst num = firstElement([1, 2, 3]);      // number\nconst str = firstElement(["a", "b"]);     // string\n\n// Union & Intersection types\ntype Status = "active" | "inactive" | "pending";\ntype ID = string | number;\n\n// Type narrowing\nfunction processId(id: ID) {\n  if (typeof id === "string") {\n    console.log(id.toUpperCase());\n  } else {\n    console.log(id.toFixed(2));\n  }\n}` }],
          tips: ['Use `interface` for object shapes and `type` for unions, intersections, and complex types.', 'Enable `strict` mode in tsconfig for maximum type safety.'],
          interviewQuestions: [{ question: 'What are the benefits of TypeScript over JavaScript?', answer: 'Static typing catches errors at compile time, better IDE support with autocompletion and refactoring, interfaces and generics for better code architecture, easier maintenance of large codebases, and gradual adoption (valid JS is valid TS).' }],
        },
        { id: 'l2', title: 'Advanced TypeScript', slug: 'advanced',
          content: `Advanced TypeScript features like generics, utility types, and conditional types enable powerful type-safe patterns.`,
          codeExamples: [{ language: 'typescript', title: 'Advanced Types', code: `// Utility types\ninterface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Pick<Todo, "title" | "completed">;\ntype TodoUpdate = Partial<Todo>;\ntype ReadonlyTodo = Readonly<Todo>;\ntype TodoKeys = keyof Todo;  // "title" | "description" | "completed"\n\n// Mapped types\ntype Optional<T> = {\n  [K in keyof T]?: T[K];\n};\n\n// Conditional types\ntype IsString<T> = T extends string ? "yes" : "no";\ntype A = IsString<string>;  // "yes"\ntype B = IsString<number>;  // "no"\n\n// Template literal types\ntype EventName = \`on\${"Click" | "Hover" | "Focus"}\`;\n// "onClick" | "onHover" | "onFocus"\n\n// Discriminated unions\ntype Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "rectangle"; width: number; height: number };\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case "circle": return Math.PI * shape.radius ** 2;\n    case "rectangle": return shape.width * shape.height;\n  }\n}` }],
        },
      ],
    }],
  },
];
