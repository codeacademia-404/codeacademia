export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1', title: 'Top 10 Programming Languages to Learn in 2026', slug: 'top-programming-languages-2026',
    excerpt: 'Explore the most in-demand programming languages that will shape the tech industry in 2026.',
    content: `The tech landscape continues to evolve rapidly. Here are the top 10 programming languages you should consider learning in 2026:\n\n## 1. Python\nPython remains the king of versatility. With its dominance in AI, machine learning, data science, and web development, Python is a must-learn language.\n\n## 2. JavaScript/TypeScript\nThe web isn't going anywhere. JavaScript powers the interactive web, and TypeScript adds the type safety needed for large-scale applications.\n\n## 3. Rust\nRust continues to gain traction for systems programming. Its memory safety guarantees without garbage collection make it ideal for performance-critical applications.\n\n## 4. Go\nGoogle's Go language excels in cloud infrastructure, microservices, and DevOps tooling.\n\n## 5. Kotlin\nThe preferred language for Android development, Kotlin also works great for server-side and multiplatform development.\n\n## 6. Swift\nApple's Swift is essential for iOS/macOS development and continues to evolve.\n\n## 7. Java\nJava remains dominant in enterprise and Android development with billions of devices running Java code.\n\n## 8. C++\nFor game development, systems programming, and high-performance computing, C++ is irreplaceable.\n\n## 9. SQL\nEvery developer needs database skills. SQL is the universal language for data management.\n\n## 10. Dart\nWith Flutter's growing popularity, Dart is becoming essential for cross-platform mobile development.`,
    author: 'Sasidharan M', date: '2025-12-01', readTime: 8, category: 'Career Guidance',
    tags: ['programming', 'career', '2026', 'languages'], featured: true,
  },
  {
    id: '2', title: 'Understanding AI: A Beginner\'s Guide to Machine Learning', slug: 'beginners-guide-machine-learning',
    excerpt: 'Demystifying artificial intelligence and machine learning for complete beginners.',
    content: `Artificial Intelligence (AI) and Machine Learning (ML) are transforming every industry. This guide breaks down the fundamentals.\n\n## What is AI?\nAI is the simulation of human intelligence by machines. It encompasses everything from simple rule-based systems to complex neural networks.\n\n## What is Machine Learning?\nML is a subset of AI where systems learn from data instead of being explicitly programmed.\n\n## Types of ML\n- **Supervised Learning**: Learning from labeled examples\n- **Unsupervised Learning**: Finding patterns in unlabeled data\n- **Reinforcement Learning**: Learning through trial and error\n\n## Getting Started\n1. Learn Python\n2. Study mathematics (linear algebra, calculus, statistics)\n3. Take an ML course\n4. Practice with datasets from Kaggle\n5. Build projects`,
    author: 'Sasidharan M', date: '2025-11-20', readTime: 10, category: 'AI Updates',
    tags: ['ai', 'machine-learning', 'beginner', 'guide'], featured: true,
  },
  {
    id: '3', title: 'Building Your First React Application: Step-by-Step', slug: 'first-react-app',
    excerpt: 'A comprehensive walkthrough for building your first React app from scratch.',
    content: `React is the most popular JavaScript library for building user interfaces. Let's build a complete app step by step.\n\n## Prerequisites\n- Node.js installed\n- Basic JavaScript knowledge\n- A code editor (VS Code recommended)\n\n## Step 1: Create the Project\n\`\`\`bash\nnpx create-vite@latest my-app -- --template react-ts\ncd my-app\nnpm install\n\`\`\`\n\n## Step 2: Understanding Components\nReact apps are built using components — reusable pieces of UI.\n\n## Step 3: Managing State\nUse useState for local state and useContext for global state.\n\n## Step 4: Add Routing\nInstall react-router-dom for navigation between pages.`,
    author: 'Sasidharan M', date: '2025-11-15', readTime: 12, category: 'Tutorials',
    tags: ['react', 'javascript', 'frontend', 'tutorial'], featured: false,
  },
  {
    id: '4', title: 'Web Development Roadmap 2026: From Zero to Full-Stack', slug: 'web-dev-roadmap-2026',
    excerpt: 'Complete learning path from HTML basics to full-stack web development mastery.',
    content: `Planning your web development journey? Here's a structured roadmap.\n\n## Phase 1: Fundamentals (Months 1-2)\n- HTML5 & Semantic Markup\n- CSS3, Flexbox, Grid\n- JavaScript ES6+\n\n## Phase 2: Frontend Framework (Months 3-4)\n- React.js or Vue.js\n- TypeScript\n- State Management\n\n## Phase 3: Backend (Months 5-6)\n- Node.js + Express\n- Databases (PostgreSQL, MongoDB)\n- REST APIs\n\n## Phase 4: Advanced (Months 7-8)\n- Authentication & Security\n- DevOps basics (Docker, CI/CD)\n- Cloud deployment (AWS, Vercel)`,
    author: 'Sasidharan M', date: '2025-11-10', readTime: 7, category: 'Career Guidance',
    tags: ['web-development', 'roadmap', 'career', 'fullstack'], featured: false,
  },
  {
    id: '5', title: 'The Rise of AI-Powered Code Assistants', slug: 'ai-code-assistants',
    excerpt: 'How AI coding tools are changing the way developers write code.',
    content: `AI-powered coding assistants have evolved dramatically. Let's explore the landscape.\n\n## The Current State\nTools like GitHub Copilot, Cursor, and Claude have become essential parts of the modern developer's toolkit.\n\n## Benefits\n- Faster code generation\n- Reduced boilerplate\n- Learning new languages/frameworks\n- Bug detection and fixing\n\n## Best Practices\n1. Use AI as a pair programmer, not a replacement\n2. Always review generated code\n3. Understand the code before shipping\n4. Use AI for learning and exploration`,
    author: 'Sasidharan M', date: '2025-11-05', readTime: 6, category: 'AI Updates',
    tags: ['ai', 'coding', 'tools', 'productivity'], featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getBlogCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}
